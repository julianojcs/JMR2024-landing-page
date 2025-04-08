"use client";
// import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import { eventData } from '../../../data/constants';
import styles from './SpeakersForm.module.css';
import { validateCPF, formatPhone, formatCPF, formatName } from '@/utils';
import { states } from '../../../data/states';
import StateSelect from '../../../components/StateSelect'
import Multselector from '@/components/Multselector';
import LoadingSpinnerInput from '@/components/LoadingSpinnerInput';
import LoadingOverlay from '@/components/LoadingOverlay';
import Notification from '@/components/Notification';
import ModalPhotoPreview from '@/components/ModalPhotoPreview';
import NotificationBanner from '@/components/NotificationBanner';
import Header from '@/components/Header';
import SocialMedias from '@/components/SocialMedias';
import { MapIcon, CalendarIcon } from '@/components/icons'
import '@/styles/react-select.css'

// const DynamicImage = dynamic(() => import('../../../components/DynamicImage'));

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB em bytes
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

const SpeakersForm = ({ params }) => {
  const { year } = params;
  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  const data = eventData[year];
  // const logoSrc = `/logo_jornada/jmr${2025}_roxo.png`;
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

  const [isLoading, setIsLoading] = useState(true);
  const [previewModal, setPreviewModal] = useState({
    isOpen: false,
    confirmed: false
  });
  const [tempPhoto, setTempPhoto] = useState(null);
  const photoInputRef = useRef(null);
  const [consentGiven, setConsentGiven] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'error',
    position: 'top'
  })

  const props = {
    year,
    MapIcon,
    CalendarIcon
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Formatação específica para cada campo
    switch (name) {
      case 'phone':
        formattedValue = formatPhone(value);

        // Limpar erro quando o usuário começar a digitar
        if (errors.phone) {
          setErrors(prev => ({
            ...prev,
            [name]: null
          }));
        }
        break;

      case 'cpf':
        formattedValue = formatCPF(value);

        // Limpar erro quando o usuário começar a digitar
        if (errors.cpf) {
          setErrors(prev => ({
            ...prev,
            [name]: null
          }));
        }

        // Validação do CPF em tempo real quando chega ao comprimento completo
        if (formattedValue.length === 14) {
          if (!validateCPF(formattedValue)) {
            setErrors(prev => ({ ...prev, cpf: 'CPF inválido' }));
          }
        }
        break;

      default:
    // Para outros campos, mantenha o comportamento original
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
        return; // Saia da função para evitar a atualização duplicada abaixo
    }

    // Atualizar o formData com o valor formatado
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validação do nome completo
    if (!formData.full_name?.trim()) {
      newErrors.name = 'O nome completo é obrigatório';
    } else {
      const nameParts = formData.full_name
        .trim()
        .split(' ')
        .filter(part => part.length > 0);

      // Conta quantas partes do nome têm mais de 2 caracteres
      const validNameParts = nameParts.filter(part => part.length > 2);

      if (nameParts.length < 2) {
        newErrors.name = 'Informe nome e sobrenome';
      } else if (validNameParts.length < 2) {
        newErrors.name = 'O nome deve conter pelo menos duas partes com mais de 2 caracteres';
      }
    }

    // Validação do nome para crachá
    if (!formData.badge_name?.trim()) {
      newErrors.badge_name = 'O nome para crachá é obrigatório';
    }

    // Validação do email
    if (!formData.email?.trim()) {
      newErrors.email = 'O e-mail é obrigatório';
    } else {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Email inválido. Use um endereço de email válido';
      }
    }

    // Validação do telefone
    if (!formData.phone?.trim()) {
      newErrors.phone = 'O telefone é obrigatório';
    } else {
      const phonePattern = /^\(\d{2}\)\d{5}-\d{4}$/;
      if (!phonePattern.test(formData.phone)) {
        newErrors.phone = 'Telefone inválido. Use o formato (99)99999-9999';
      }
    }

    // Validação do CPF
    if (!formData.cpf?.trim()) {
      newErrors.cpf = 'O CPF é obrigatório';
    } else if (!validateCPF(formData.cpf)) {
      newErrors.cpf = 'CPF inválido';
    }

    // Validação da cidade
    if (!formData.city?.trim()) {
      newErrors.city = 'A cidade é obrigatória';
    }

    // Validação do estado
    if (!formData.state?.trim()) {
      newErrors.state = 'O estado é obrigatório';
    }

    // Validação das categorias
    if (!formData.categories?.length) {
      newErrors.categories = 'Selecione pelo menos uma categoria';
    }

    // Validação das palestras
    if (!formData.lectures?.length) {
      newErrors.lectures = 'Selecione pelo menos uma palestra';
    }

    // Validação da curriculum
    if (!formData.curriculum?.trim()) {
      newErrors.curriculum = 'O currículo é obrigatório';
    }

    // Validação do consentimento
    if (!consentGiven) {
      newErrors.consent = 'É necessário aceitar os termos de uso de imagem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    // Clear preview if no file was selected (user cancelled)
    if (!file) {
      setPhotoPreview(null);
      setTempPhoto(null);
      setFormData(prev => ({
        ...prev,
        photo_path: null
      }));
      return;
    }

    // Validar tipo de arquivo
    if (!ALLOWED_TYPES.includes(file.type)) {
      setErrors(prev => ({
        ...prev,
        photo_path: 'Formato de arquivo inválido. Use apenas PNG, JPEG ou JPG.'
      }));
      e.target.value = ''; // Limpa o input
      return;
    }

    // Validar tamanho
    if (file.size > MAX_FILE_SIZE) {
      setErrors(prev => ({
        ...prev,
        photo_path: 'A imagem deve ter no máximo 3MB.'
      }));
      e.target.value = ''; // Limpa o input
      return;
    }

    const extension = file.name.split('.').pop();
    const newFileName = `${formData.cpf.replace(/\D/g, '') || 'temp'}.${extension}`;
    const newFile = new File([file], newFileName, { type: file.type });

    // Criar URL para preview da imagem
    const previewURL = URL.createObjectURL(file);
    setPhotoPreview(previewURL);

    // Não atualizar formData.photo_path ainda - aguardar confirmação
    setPreviewModal({
      isOpen: true,
      confirmed: false
    });

    // Armazenar temporariamente o arquivo
    setTempPhoto({
      file: newFile,
      url: previewURL
    });

    // Limpar erro da foto se existir
    if (errors.photo_path) {
      setErrors(prev => ({
        ...prev,
        photo_path: null
      }));
    }
  };

  const handleConfirmPhoto = () => {
    setFormData(prev => ({
      ...prev,
      photo_path: tempPhoto.file
    }));
    setPreviewModal(prev => ({
      ...prev,
      confirmed: true,
      isOpen: false
    }));
  };

  const handleCancelPhoto = () => {
    setPhotoPreview(null);
    setTempPhoto(null);
    setPreviewModal({
      isOpen: false,
      confirmed: false
    });
    if (photoInputRef.current) {
      photoInputRef.current.value = '';
    }
  };

  // Adicione esta função para comprimir a imagem
  const compressImage = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob((blob) => {
            const newFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
            resolve(newFile);
          }, 'image/jpeg', 0.7); // Qualidade 0.7 (70%)
        };
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      setNotification({
        show: true,
        message: 'Existem campos obrigatórios que precisam ser preenchidos',
        type: 'error',
        position: 'top'
      });
      // Scroll to top smoothly
      // window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const formDataToSend = new FormData();
    // Add all text fields
    const textFields = [
      'full_name', 'badge_name', 'email', 'phone',
      'cpf', 'city', 'state', 'curriculum'
    ]

    textFields.forEach(field => {
      // Format name to capitalize first letter of each word
      if (field === 'full_name' || field === 'badge_name' || field === 'city') {
        formDataToSend.append(field, formatName(formData[field]));
      } else {
        formDataToSend.append(
          field,
          field === "cpf" ? formData.cpf.replace(/\D/g, '') : formData[field]
        )
      }
    })

    // Add arrays as JSON strings
    formDataToSend.append('categories', JSON.stringify(formData.categories))
    formDataToSend.append('lectures', JSON.stringify(formData.lectures))

    // Comprima a foto se existir
    if (formData.photo_path) {
      const compressedPhoto = await compressImage(formData.photo_path);
      formDataToSend.append('photo_path', compressedPhoto);
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
        throw new Error(
          `HTTP error! status: ${response.status},
          message: ${JSON.stringify(error.message)}`);
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
    if (photoInputRef.current) {
      photoInputRef.current.value = '';
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

  // Add effect to auto-close notification when errors are resolved
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setNotification(prev => ({ ...prev, show: false }));
    }
  }, [errors]);

  return (
    <>
      <Header props={props}>
        <SocialMedias url={data.social.instagram} />
      </Header>
      <div className={styles.formContainer}>
        {notification.show && (
          <NotificationBanner
            message={notification.message}
            type={notification.type}
            position={notification.position}
            onClose={() => setNotification(prev => ({ ...prev, show: false }))}
            // autoClose={5000}
          />
        )}
        {isSubmitting && <LoadingOverlay />}
        <Notification
          isOpen={modalState.isOpen}
          type={modalState.type}
          message={modalState.message}
          onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        />
        <h2 className={styles.title}>{data.speakersForm.title}</h2>
        <p className={styles.description}>{data.speakersForm.description}</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="full_name">Nome completo<span className={styles.required}>*</span></label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              maxLength={150}
              value={formData.full_name}
              onChange={handleChange}
              className={styles.formControl}
              disabled={isSubmitting}
              // pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}(\s[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,})+$"
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="badge_name">Nome para crachá (até 25 caracteres)
            <span className={styles.required}>*</span></label>
            <input
              type="text"
              id="badge_name"
              name="badge_name"
              maxLength={25}
              value={formData.badge_name}
              onChange={handleChange}
              className={styles.formControl}
              disabled={isSubmitting}
            />
            {errors.badge_name && <span className={styles.errorMessage}>{errors.badge_name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail<span className={styles.required}>*</span></label>
            <input
              // type="email"
              id="email"
              name="email"
              maxLength={150}
              value={formData.email}
              onChange={handleChange}
              className={styles.formControl}
              disabled={isSubmitting}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          {/* Input para telefone */}
          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefone<span className={styles.required}>*</span></label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.formControl}
              disabled={isSubmitting}
            />
            {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
          </div>

          {/* Input para CPF */}
          <div className={styles.formGroup}>
            <label htmlFor="cpf">CPF<span className={styles.required}>*</span></label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              maxLength={14}
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
              className={`${styles.formControl} ${errors.city ? styles.errorInput : ''}`}
              disabled={isSubmitting}
            />
            {errors.city && <span className={styles.errorMessage}>{errors.city}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="state" id="state-label">Estado<span className={styles.required}>*</span></label>
            <StateSelect
              value={states.find(s => s.value === formData.state)}
              onChange={handleChange}
              states={states}
            />
            {errors.state && <span className={styles.errorMessage}>{errors.state}</span>}
          </div>

          <div className={styles.formGroup}>
          <label htmlFor="categories">Categoria(s)<span className={styles.required}>*</span></label>
          {isLoading ? (
            <div>
              <LoadingSpinnerInput />
            </div>
            ) : (
              <>
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
                    // Limpar erro quando selecionar
                    if (errors.categories) {
                      setErrors(prev => ({ ...prev, categories: null }));
                    }
                  }}
                  isCreatable={true}
                  className={errors.categories ? styles.errorInput : ''}
                  closeMenuOnSelect={false}
                />
                {errors.categories && <span className={styles.errorMessage}>{errors.categories}</span>}
              </>
            )}
          </div>

          <div className={styles.formGroup}>
          <label htmlFor="lectures">Palestra(s) - (para emissão do certificado)<span className={styles.required}>*</span></label>
            {isLoading ? (
              <LoadingSpinnerInput />
            ) : (
              <>
                <Multselector
                  instanceId="lectures-select"
                  options={lectures}
                  value={formData.lectures}
                  defaultValue={formData.lectures}
                  placeholder='Selecione ou crie uma nova palestra...'
                  CreateLabelText='nova palestra'
                  onChange={(selectedOptions) => {
                    setFormData(prev => ({
                      ...prev,
                      lectures: selectedOptions
                    }));
                    // Limpar erro quando selecionar
                    if (errors.lectures) {
                      setErrors(prev => ({ ...prev, lectures: null }));
                    }
                  }}
                  isCreatable={true}
                  className={errors.lectures ? styles.errorInput : ''}
                  closeMenuOnSelect={false}
                  onCreateOption={(newLecture) => {
                    console.log('New lecture created:', newLecture);
                  }}
                />
                {errors.lectures && <span className={styles.errorMessage}>{errors.lectures}</span>}
              </>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="curriculum">Mini currículo (até 300 caracteres) - resumo para ser apresentado antes da sua palestra<span className={styles.required}>*</span></label>
            <textarea
              id="curriculum"
              name="curriculum"
              maxLength={300}
              value={formData.curriculum}
              onChange={handleChange}
              className={styles.formControl}
              disabled={isSubmitting}
            />
            {errors.curriculum && <span className={styles.errorMessage}>{errors.curriculum}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="photo_path">Foto  (JPEG ou PNG) - meio corpo, com fundo neutro para ser usada no site e divulgações do evento</label>
            <input
              type="file"
              id="photo_path"
              name="photo_path"
              accept=".jpg,.jpeg,.png"
              onChange={handlePhotoChange}
              className={styles.formControl}
              disabled={isSubmitting}
              ref={photoInputRef}
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

          <div className={styles.formGroup}>
            <div className={styles.consentWrapper}>
              <label className={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={consentGiven}
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  className={styles.consentCheckbox}
                  disabled={isSubmitting}
                />
                <span className={styles.toggleSlider}></span>
              </label>
              <label htmlFor="consent" className={styles.consentLabel}>
                Autorizo o uso da minha imagem e dados em todos os meios de divulgação do evento
                <span className={styles.required}>*</span>
              </label>
            </div>
            {errors.consent && <span className={styles.errorMessage}>{errors.consent}</span>}
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

        {/* Preview Modal */}
        <ModalPhotoPreview
          isOpen={previewModal.isOpen}
          onClose={handleCancelPhoto}
          onConfirm={handleConfirmPhoto}
          photoPreview={photoPreview}
          speakerName={formData.full_name}
        />
      </div>
    </>
  );
};

export default SpeakersForm;