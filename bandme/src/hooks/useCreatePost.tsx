import { useState } from 'react';

export const useCreatePost = () => {

    //necesito obtener title, calle, altura, cp, description, fecha y hora y el valor de las checkbox para recien ahi pegarle al servicio

    const validateFields = ( title: string, calle: string, altura: string, cp: string, description: string, dateSelected: string, timeSelected: string, checkboxSelected: { search: boolean; advertising: boolean; }) => {
        console.log('campos del formulario: ' + title + ' // ' + calle + ' // ' + altura + ' // ' + cp + ' // ' + description + ' // ' + dateSelected + ' // ' + timeSelected + ' // ' + checkboxSelected.advertising + '|' + checkboxSelected.search);
        //pegarle al servicio
    };

    const [getEventDate, setEventDate] = useState('');

    const setDatePicker = (dateSelected: string) => {
      console.log('fecha seleccionada: ' + dateSelected);
      setEventDate(dateSelected);
      console.log('fecha GUARDADA: ' + getEventDate);
    };

    const [getEventTime, setEventTime] = useState('');

    const setTimePicker = (timeSelected: string) => {
      console.log('Hora seleccionada: ' + timeSelected);
      setEventTime(timeSelected);
      console.log('Hora GUARDADA: ' + getEventTime);
    };

  return {
    validateFields,
    setDatePicker,
    getEventDate,
    setTimePicker,
    getEventTime,
  };

};
