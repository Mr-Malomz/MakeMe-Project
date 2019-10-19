import React from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';

const SelectFile = () => {

const colourOptions = [
    { value: 'Chinenye Agungi', label: 'Chinenye Agungi', color: 'blue' },
    { value: 'Kafayat Abdulahi', label: 'Kafayat Abdulahi', color: '#0052CC'},
    { value: 'Esther John', label: 'Esther John', color: '#5243AA' },
    { value: 'Oluwakemi Adedunmola', label: 'Oluwakemi Adedunmola', color: '#FF5630'},
    { value: 'Nkechi Amadioha', label: 'Nkechi Amadioha', color: '#FF8B00' },
    { value: 'Femi Ogunlade', label: 'Femi Ogunlade', color: '#FFC400' },
    { value: 'Suliyat Adedoyin', label: 'Green', color: '#36B37E' },
    { value: 'Hadiza Abdulrahaman', label: 'Forest', color: '#00875A' },
    { value: 'Samuel Nnamdi', label: 'Slate', color: '#253858' },
    { value: 'Abass Odunkoya', label: 'Silver', color: '#666666' },
  ];


const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue={[colourOptions[0], colourOptions[1]]}
      isMulti
      options={colourOptions}
      styles={colourStyles}
    />
  )
}


export default SelectFile;