"use client";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { eventData } from '../../../data/constants';
import styles from './SpeakersForm.module.css';
import { validateCPF, formatPhone } from '@/utils';
import { states } from '../../../data/states';
import StateSelect from '../../../components/StateSelect'

const metadata = {
  title:
    'Formulário de inscrição de palestrantes / convidados da XI JORNADA MINEIRA DE RADIOLOGIA | JMR 2025',
  description:
    'JMR 2025 acontecerá nos dias 27 e 28 de junho de 2025, na AMMG - Associação Médica de Minas Gerais, em Belo Horizonte - MG',
  openGraph: {
    title: 'JMR 2025 - Formulário de inscrição de palestrantes / convidados',
    description: 'XI Jornada Mineira de Radiologia e Congresso de Imaginologia da Mulher.',
    type: 'website',
    url: 'https://jornada.srmg.org.br/speakers/form/2025',
    images: [
      {
        url: 'https://jornada.srmg.com.br/jmr2025.png',
        width: 1200,
        height: 630,
        alt: 'JMR 2025 - Formulário de inscrição'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JMR 2025 - Formulário de inscrição',
    description: 'Formulário de inscrição de palestrantes / convidados da XI JORNADA MINEIRA DE RADIOLOGIA | JMR 2025',
    image: 'https://jornada.srmg.com.br/jmr2025.png'
  }
}

export async function generateMetadata() {
  return metadata
}

const DynamicImage = dynamic(() => import('../../../components/DynamicImage'));

const SpeakersForm = ({ params }) => {
  const { year } = params;
  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  const data = eventData[year];
  const logoSrc = `/logo_jornada/jmr${2025}_roxo.png`;

  const [formData, setFormData] = useState({
    full_name: '',
    badge_name: '',
    email: '',
    phone: '',
    cpf: '',
    city: '',
    state: '',
    category: 'Palestrante',
    other_category: '',
    curriculum: '',
    lecture_name: '',
    photo_path: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formattedPhone = formatPhone(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
    } else if (name === 'category') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        // Clear other_category if switching to a different category
        other_category: value === 'other' ? prev.other_category : ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpar erro quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }

    // Validação do CPF em tempo real
    if (name === 'cpf' && value.length === 11) {
      if (!validateCPF(value)) {
        setErrors(prev => ({
          ...prev,
          cpf: 'CPF inválido'
        }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateCPF(formData.cpf)) {
      newErrors.cpf = 'CPF inválido';
    }

    if (!formData.photo_path) {
      newErrors.photo_path = 'A foto é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const extension = file.name.split('.').pop();
      const newFileName = `${formData.cpf || 'temp'}.${extension}`;
      const newFile = new File([file], newFileName, { type: file.type });

      // Criar URL para preview da imagem
      const previewURL = URL.createObjectURL(file);
      setPhotoPreview(previewURL);

      setFormData(prev => ({
        ...prev,
        photo_path: newFile
      }));

      // Limpar erro da foto se existir
      if (errors.photo) {
        setErrors(prev => ({
          ...prev,
          photo_path: null
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = {};

    // Validate required fields
    if (!formData.category) {
      newErrors.category = 'Categoria é obrigatória';
      hasErrors = true;
    }

    // Validate other_category when 'other' is selected
    if (formData.category === 'other' && !formData.other_category?.trim()) {
      newErrors.other_category = 'Por favor, especifique a categoria';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    if (!validateForm()) {
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'photo_path') {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(`/api/speakers/form/${year}`, {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        alert('Dados enviados com sucesso!');
        clearForm(); // Clear form on successful submission
      } else {
        throw new Error('Erro ao enviar dados');
      }
    } catch (error) {
      alert('Erro ao enviar dados: ' + error.message);
    }
  };

  const clearPhoto = () => {
    setPhotoPreview(null);
    setFormData(prev => ({
      ...prev,
      photo_path: null
    }));
    const photoInput = document.getElementById('photo_path');
    if (photoInput) {
      photoInput.value = '';
    }
  };

  const clearForm = () => {
    setFormData({
      full_name: '',
      badge_name: '',
      email: '',
      phone: '',
      cpf: '',
      city: '',
      state: '',
      category: 'Palestrante',
      other_category: '',
      curriculum: '',
      lecture_name: '',
      photo_path: null
    });
    setPhotoPreview(null);
    setErrors({});
    const photoInput = document.getElementById('photo_path');
    if (photoInput) {
      photoInput.value = '';
    }
  };

  useEffect(() => {
    return () => {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }
    };
  }, [photoPreview]);

  return (
    <div className={styles.formContainer}>
      <div className={styles.logoContainer}>
        <DynamicImage
          src={logoSrc}
          alt={data.title}
          className={styles.logo}
          width={600}
          height={400}
          priority
          onError={(e) => {
            e.target.src = `/logo_jornada/jmr${year}.png`;
          }}
        />
      </div>
      <h1 className={styles.title}>{data.speakersForm.title}</h1>
      <p className={styles.description}>{data.speakersForm.description}</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="full_name">Nome completo<span className={styles.required}>*</span></label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            maxLength={150}
            required
            value={formData.full_name}
            onChange={handleInputChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="badge_name">Nome para crachá (até 25 caracteres)
          <span className={styles.required}>*</span></label>
          <input
            type="text"
            id="badge_name"
            name="badge_name"
            maxLength={25}
            required
            value={formData.badge_name}
            onChange={handleInputChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail<span className={styles.required}>*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={150}
            required
            value={formData.email}
            onChange={handleInputChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Telefone - (99)99999-9999<span className={styles.required}>*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            // pattern="\(\d{2}\)\d{5}-\d{4}"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cpf">CPF (somente números)<span className={styles.required}>*</span></label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            pattern="\d{11}"
            maxLength={11}
            required
            value={formData.cpf}
            onChange={handleInputChange}
            className={styles.formControl}
          />
          {errors.cpf && <span className={styles.errorMessage}>{errors.cpf}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="state" id="state-label">Estado</label>
          <StateSelect
            value={states.find(s => s.value === formData.state)}
            onChange={handleInputChange}
            states={states}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Categoria<span className={styles.required}>*</span></label>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="category"
                value="Debatedor"
                checked={formData.category === 'Debatedor'}
                onChange={handleInputChange}
                required
              />
              Debatedor
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Moderador"
                checked={formData.category === 'Moderador'}
                onChange={handleInputChange}
              />
              Moderador
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Palestrante"
                checked={formData.category === 'Palestrante'}
                onChange={handleInputChange}
              />
              Palestrante
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="other"
                checked={formData.category === 'other'}
                onChange={handleInputChange}
              />
              Outro
            </label>
            {formData.category === 'other' && (
              <input
                type="text"
                name="other_category"
                value={formData.other_category}
                onChange={handleInputChange}
                className={styles.formControl}
                placeholder="Especifique"
                required={formData.category === 'other'}
              />
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="curriculum">Mini currículo (até 500 caracteres) - resumo para ser apresentado antes da sua palestra<span className={styles.required}>*</span></label>
          <textarea
            id="curriculum"
            name="curriculum"
            maxLength={500}
            required
            value={formData.curriculum}
            onChange={handleInputChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lecture_name">Nome da palestra (para emissão do certificado)</label>
          <input
            type="text"
            id="lecture_Name"
            name="lecture_name"
            value={formData.lecture_name}
            onChange={handleInputChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="photo_path">Foto  (JPEG ou PNG) - meio corpo, com fundo neutro para ser usada no site e divulgações do evento<span className={styles.required}>*</span></label>
          <input
            type="file"
            id="photo_path"
            name="photo_path"
            accept="image/*"
            required
            onChange={handlePhotoChange}
            className={styles.formControl}
          />
          {errors.photo_path && <span className={styles.errorMessage}>{errors.photo_path}</span>}

          {photoPreview && (
            <div className={styles.photoPreviewContainer}>
              <img
                src={photoPreview}
                alt="Preview"
                className={styles.photoPreview}
              />
            </div>
          )}
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
          <button
            type="button"
            onClick={clearForm}
            className={styles.clearButton}
          >
            Limpar Formulário
          </button>
        </div>
      </form>
    </div>
  );
};

export default SpeakersForm;