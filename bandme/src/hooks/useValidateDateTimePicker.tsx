import { useEffect, useRef, useState } from 'react';

export const useValidateDateTimePicker = () => {

  const [getDate, setDatetime] = useState(''); //esta guardando vacio al primer render, tengo que seleccionar una segunda fecha para que comience a guardar
  //obtener primero de esta forma y luego actualizar con lo que se le setea al boton
  //y si se selecciona la fecha actual como no la esta seteando con un if setearle la datenow  
  /* useEffect(() => {
    if (getDate.length !== 0) {
      console.log('no esta vacio');
    } else {
      console.log('esta vacio');
    }
  }, [getDate]); */

  const [value, setValue] = useState('');

    const setDatetimePicked = (dateSelected: string) => {
        console.log('valor datetime para setear: ' + dateSelected);
        //getDate = dateSelected
        setValue(dateSelected);
        setValue((state) => {
          console.log(state); // "React is awesome!"
          return state;
        });
        //setDatetime(dateSelected);
        console.log('valor datetime GUARDADO: ' + value);
    };

  return {
    setDatetimePicked,
    getDate,
  };
};
