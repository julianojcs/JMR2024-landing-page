"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { eventData } from '../../data/constants';
import styles from './SpeakersForm.module.css';
import { validateCPF } from '@/utils';
import { formatPhone } from '@/utils';
import { states } from '../../data/states';
import StateSelect from '../../components/StateSelect'

const DynamicImage = dynamic(() => import('../../components/DynamicImage'));

const SpeakersForm = () => {
  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  const data = eventData[2000];
  const logoSrc = `/logo_jornada/jmr${2025}_roxo.png`;

  const [formData, setFormData] = useState({
    fullName: '',
    badgeName: '',
    email: '',
    phone: '',
    cpf: '',
    city: '',
    state: '',
    category: 'speaker',
    otherCategory: '',
    curriculum: '',
    lectureName: '',
    photo: null
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
        // Clear otherCategory if switching to a different category
        otherCategory: value === 'other' ? prev.otherCategory : ''
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

    if (!formData.photo) {
      newErrors.photo = 'A foto é obrigatória';
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
        photo: newFile
      }));

      // Limpar erro da foto se existir
      if (errors.photo) {
        setErrors(prev => ({
          ...prev,
          photo: null
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

    // Validate otherCategory when 'other' is selected
    if (formData.category === 'other' && !formData.otherCategory?.trim()) {
      newErrors.otherCategory = 'Por favor, especifique a categoria';
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
      if (key === 'photo') {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('/api/form/speakers', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        alert('Dados enviados com sucesso!');
        // Limpar formulário ou redirecionar
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
      photo: null
    }));
    const photoInput = document.getElementById('photo');
    if (photoInput) {
      photoInput.value = '';
    }
  };

  const clearForm = () => {
    setFormData({
      fullName: '',
      badgeName: '',
      email: '',
      phone: '',
      cpf: '',
      city: '',
      state: '',
      category: 'speaker',
      otherCategory: '',
      curriculum: '',
      lectureName: '',
      photo: null
    });
    setPhotoPreview(null);
    setErrors({});
    const photoInput = document.getElementById('photo');
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
            e.target.src = '/logo_jornada/jmr2025.png';
          }}
        />
      </div>
      <h1 className={styles.title}>{data.speakersForm.title}</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Nome completo<span className={styles.required}>*</span></label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            maxLength={150}
            required
            value={formData.fullName}
            onChange={handleInputChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="badgeName">Nome para crachá (até 25 caracteres)
          <span className={styles.required}>*</span></label>
          <input
            type="text"
            id="badgeName"
            name="badgeName"
            maxLength={25}
            required
            value={formData.badgeName}
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
          <label htmlFor="state">Estado</label>
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
                value="committee"
                checked={formData.category === 'committee'}
                onChange={handleInputChange}
                required
              />
              Comissão Organizadora
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="moderator"
                checked={formData.category === 'moderator'}
                onChange={handleInputChange}
              />
              Moderador(a)
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="speaker"
                checked={formData.category === 'speaker'}
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
                name="otherCategory"
                value={formData.otherCategory}
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
          <label htmlFor="lectureName">Nome da palestra (para emissão do certificado)</label>
          <input
            type="text"
            id="lectureName"
            name="lectureName"
            value={formData.lectureName}
            onChange={handleInputChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="photo">Foto  (JPEG ou PNG) - meio corpo, com fundo neutro para ser usada no site e divulgações do evento<span className={styles.required}>*</span></label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            required
            onChange={handlePhotoChange}
            className={styles.formControl}
          />
          {errors.photo && <span className={styles.errorMessage}>{errors.photo}</span>}

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