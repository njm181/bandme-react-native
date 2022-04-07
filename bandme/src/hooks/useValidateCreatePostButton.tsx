import { useState } from 'react';

export const useValidateCreatePostButton = () => {

    const [isEnableButton, setIsEnableButton] = useState({
        Title: false,
        Description: false,
        Checkbox: false,
    });

    const validateFieldsToEnableButton = (fieldValue: boolean, name: string) => {
        console.log('nombre del campo: ' + name + '// valor del campo a validar: ' + fieldValue);
        setIsEnableButton({ ...isEnableButton, [name]: fieldValue});
    };

  return {
    validateFieldsToEnableButton,
  };
}