/* eslint-disable eqeqeq */
import { useState } from 'react';

export const useValidateTextInput = () => {

    const [textState, setTextState] = useState({text: '', validated: true});

    const [input, setInput] = useState({
        Title: '',
        Calle: '',
        Altura: '',
        CP: '',
        Description: '',
    });

    const handlerInputChange = (name: string, value: any) => {
        setInput({ ...input, [name]: value});
    };

    const validateTextInput = (inputText: string, name: string) => {
        console.log('valor del texto del input: ' + inputText);

        handlerInputChange(name, inputText);

        const validateLength = validateTextLength(inputText);
        setTextState({
            text: inputText,
            validated: validateLength,
        });
    };

    function validateTextLength(text: string): boolean{
        return text.length == 0 ? false : true;
    }


  return {
      validateTextInput,
      textState,
      input,
  };

};
