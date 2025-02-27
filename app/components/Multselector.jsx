import { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styles from './Multselector.module.css';

const animatedComponents = makeAnimated();

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    position: 'relative',
    backgroundColor: state.isFocused ? '#f0f0f0' : provided.backgroundColor,
    cursor: 'pointer',
  }),
  control: (provided) => ({
    ...provided,
    minHeight: '38px'
  })
};

const orderOptions = (values) => {
  return values
    .filter((v) => v.isFixed)
    .concat(values.filter((v) => !v.isFixed));
};

const formatOptionLabel = ({ label }) => (
  <div
    className={styles.optionLabel}
    title={label}
  >
    {label}
  </div>
);

const Multselector = ({
  options = [],
  defaultValue = [],
  onChange,
  placeholder = "Selecione itens, ou digite para buscar ou criar...",
  isCreatable = false,
  instanceId
}) => {
  const [mounted, setMounted] = useState(false);
  const [fixedOptions, setFixedOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValue);
  const SelectComponent = isCreatable ? CreatableSelect : Select;

  const handleCreate = (inputValue) => {
    const newOption = {
      value: inputValue.toLowerCase().replace(/\W/g, '-'),
      label: inputValue,
      isFixed: false,
      isNew: true
    };

    setFixedOptions((prev) => [...prev, newOption]);
    // Update selected options with the new one
    const updatedSelection = [...selectedOptions, newOption];
    setSelectedOptions(updatedSelection);
    // Call parent's onChange with the complete array
    onChange(updatedSelection);
  };

  // Handle normal selection changes
  const handleChange = (newValue) => {
    setSelectedOptions(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setFixedOptions(orderOptions(options));
  }, [options]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Don't render anything on the server side
  }

  return (
    <SelectComponent
      key={instanceId}
      instanceId={instanceId}
      closeMenuOnSelect={false}
      components={{
        ...animatedComponents,
        IndicatorSeparator: () => null // Remove separator to avoid hydration issues
      }}
      value={selectedOptions}
      defaultValue={defaultValue}
      isMulti
      options={fixedOptions}
      onChange={handleChange}
      onCreateOption={handleCreate}
      placeholder={placeholder}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      isClearable
      formatCreateLabel={(inputValue) => `Criar nova categoria "${inputValue}"`}
      aria={{
        label: placeholder,
        live: 'polite',
        expanded: false
      }}
    />
  );
};

export default Multselector;