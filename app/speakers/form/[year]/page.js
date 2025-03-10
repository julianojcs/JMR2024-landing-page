"use client";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { eventData } from '../../../data/constants';
import styles from './SpeakersForm.module.css';
import { validateCPF, formatPhone } from '@/utils';
import { states } from '../../../data/states';
import StateSelect from '../../../components/StateSelect'
import Multselector from '@/app/components/Multselector';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import LoadingSpinnerInput from '@/app/components/LoadingSpinnerInput';
import LoadingOverlay from '@/app/components/LoadingOverlay';
import Modal from '@/app/components/Modal';
import '@/app/styles/react-select.css';

const DynamicImage = dynamic(() => import('../../../components/DynamicImage'));

const SpeakersForm = ({ params }) => {
  const { year } = params;
  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  const data = eventData[year];
  const logoSrc = `/logo_jornada/jmr${2025}_roxo.png`;
  const [lectures, setLectures] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'success',
    message: ''
  });

  const [formData, setFormData] = useState({
    full_name: '',
    badge_name: '',
    email: '',
    phone: '',
    cpf: '',
    city: '',
    state: '',
    categories: [],
    curriculum: '',
    lectures: [],
    photo_path: null
  });

  const [localValues, setLocalValues] = useState({
    full_name: '',
    badge_name: '',
    email: '',
    phone: '',
    cpf: '',
    city: '',
    state: '',
    categories: [],
    curriculum: '',
    lectures: [],
    photo_path: null
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formattedPhone = formatPhone(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

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
    setIsSubmitting(true);
    let hasErrors = false;
    const newErrors = {};

    if (!validateForm()) return

    if (!formData.categories.length === 0) {
      newErrors.categories = 'Selecione uma Categoria';
      hasErrors = true;
    } else {
      newErrors.categories = null;
    }

    if (!formData.lectures.length === 0) {
      newErrors.lectures = 'Selecione uma Palestra';
      hasErrors = true;
    } else {
      newErrors.lectures = null;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    if (!validateForm()) {
      return;
    }

    // Add all text fields
    const textFields = [
      'full_name', 'badge_name', 'email', 'phone',
      'cpf', 'city', 'state', 'curriculum'
    ]

    const formDataToSend = new FormData()
    textFields.forEach(field => {
      formDataToSend.append(field, formData[field])
    })

    // Add arrays as JSON strings
    formDataToSend.append('categories', JSON.stringify(formData.categories))
    formDataToSend.append('lectures', JSON.stringify(formData.lectures))

    console.log('Form data:', formData);
    console.log('Form data to send:', formDataToSend);

    // Add photo if exists
    if (formData.photo_path) {
      formDataToSend.append('photo_path', formData.photo_path)
    }

    try {
      const response = await fetch(`/api/speakers/form/${year}`, {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setModalState({
          isOpen: true,
          type: 'success',
          // message: 'Cadastro realizado com sucesso! Você receberá um e-mail de confirmação.'
          message: 'Cadastro realizado com sucesso!'
        });
        clearForm(); // Clear form on successful submission
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Erro ao enviar formulário')
      }
    } catch (error) {
      setModalState({
        isOpen: true,
        type: 'error',
        message: `${error.message}`
      });
    } finally {
      setIsSubmitting(false);
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
    // Reset form data
    setFormData({
      full_name: '',
      badge_name: '',
      email: '',
      phone: '',
      cpf: '',
      city: '',
      state: '',
      categories: [],
      curriculum: '',
      lectures: [],
      photo_path: null
    });

    // Clear UI elements
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lecturesResponse, categoriesResponse] = await Promise.all([
          fetch('/api/lectures'),
          fetch('/api/categories')
        ]);

        const lecturesData = await lecturesResponse.json();
        const categoriesData = await categoriesResponse.json();

        const formattedLectures = lecturesData.map(lecture => ({
          value: lecture.id,
          label: lecture.name,
          isFixed: lecture.is_fixed
        }));

        const formattedCategories = categoriesData.map(category => ({
          value: category.id,
          label: category.name,
          isFixed: category.is_fixed
        }));

        setLectures(formattedLectures);
        setCategories(formattedCategories);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('formData: ', formData);
  }, [formData]);

  return (
    <div className={styles.formContainer}>
      {isSubmitting && <LoadingOverlay />}
      <Modal
        isOpen={modalState.isOpen}
        type={modalState.type}
        message={modalState.message}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
      />
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
            onChange={handleChange}
            className={styles.formControl}
            disabled={isSubmitting}
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
            onChange={handleChange}
            className={styles.formControl}
            disabled={isSubmitting}
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
            onChange={handleChange}
            className={styles.formControl}
            disabled={isSubmitting}
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
            onChange={handleChange}
            className={styles.formControl}
            disabled={isSubmitting}
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
            onChange={handleChange}
            className={styles.formControl}
            disabled={isSubmitting}
          />
          {errors.cpf && <span className={styles.errorMessage}>{errors.cpf}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="city">Cidade<span className={styles.required}>*</span></label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={styles.formControl}
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="state" id="state-label">Estado<span className={styles.required}>*</span></label>
          <StateSelect
            value={states.find(s => s.value === formData.state)}
            onChange={handleChange}
            states={states}
          />
        </div>

        <div className={styles.formGroup}>
        <label htmlFor="categories">Categoria<span className={styles.required}>*</span></label>
        {isLoading ? (
          <div>
            <LoadingSpinnerInput />
          </div>
          ) : (
            <Multselector
              instanceId="categories-select"
              options={categories}
              value={formData.categories}
              defaultValue={formData.categories}
              placeholder='Selecione ou crie uma nova categoria...'
              CreateLabelText='nova categoria'
              onChange={(selectedOptions) => {
                setFormData(prev => ({
                  ...prev,
                  categories: selectedOptions
                }));
              }}
              isCreatable={true}  // Habilita a criação de novas opções
              onCreateOption={(newLecture) => {
                console.log('New lecture created:', newLecture);
              }}
            />
          )}
        </div>

        <div className={styles.formGroup}>
        <label htmlFor="lectures">Nome da palestra (para emissão do certificado)<span className={styles.required}>*</span></label>
          {isLoading ? (
            <LoadingSpinnerInput />
          ) : (
            <Multselector
              instanceId="lectures-select"
              options={lectures}
              value={formData.lectures}
              defaultValue={formData.lectures}
              placeholder='Selecione palestras ou digite para buscar ou criar...'
              CreateLabelText='nova palestra'
              onChange={(selectedOptions) => {
                setFormData(prev => ({
                  ...prev,
                  lectures: selectedOptions
                }));
              }}
              isCreatable={true}
              onCreateOption={(newLecture) => {
                console.log('New lecture created:', newLecture);
              }}
            />
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="curriculum">Mini currículo (até 300 caracteres) - resumo para ser apresentado antes da sua palestra<span className={styles.required}>*</span></label>
          <textarea
            id="curriculum"
            name="curriculum"
            maxLength={300}
            required
            value={formData.curriculum}
            onChange={handleChange}
            className={styles.formControl}
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            Enviar
          </button>
          <button
            type="button"
            onClick={clearForm}
            className={styles.clearButton}
            disabled={isSubmitting}
          >
            Limpar Formulário
          </button>
        </div>
      </form>
    </div>
  );
};

export default SpeakersForm;