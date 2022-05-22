import { useState } from 'react';
import { PublicationDetail } from '../interfaces/PublicationDetail';

export const useGetEditFieldsPublication = () => {

    const [fieldsPublication, setFieldsPublication] = useState({
        title: '',
        calle: '',
        altura: '',
        cp: '',
        description: '',
        date: '',
        time: '',
        checkboxType: '',
    });

    /* const setFieldsEditPublication = (name: string, value: string) => {
        console.log('********campo editado para guardar: ' + 'name: ' + name.toLowerCase() + ' - valor: ' + value);
        setFieldsPublication({...fieldsPublication, [name.toLowerCase()]: value});
        console.log('******-datos para la publicacion editada: ' + JSON.stringify(fieldsPublication));
    }; */

    const setFieldsEditPublication = (input: any, details?: PublicationDetail) => {
        console.log('==========================');
        console.log('***VALOR DEL INPUT***: ' + JSON.stringify(input));
        console.log('---------');
        console.log('***VALOR DE DETAILS***:' + JSON.stringify(details));
        console.log('==========================');
        if (input.Title == '' && input.Calle == '' &&  input.Altura == '' &&  input.CP == '' &&  input.Description == '') {
            //el valor final es igual details
        } else {
            if (input.Title != ''){
                setFieldsPublication({...fieldsPublication ,['title']: input.Title});
            }
            if (input.Calle != ''){
                setFieldsPublication({...fieldsPublication ,['calle']: input.Title});
            }
            if (input.Altura != ''){
                setFieldsPublication({...fieldsPublication ,['altura']: input.Title});
            }
            if (input.CP != ''){
                setFieldsPublication({...fieldsPublication ,['cp']: input.Title});
            }
            if (input.Description != ''){
                setFieldsPublication({...fieldsPublication ,['description']: input.Title});
            }
        }
    };

    /*
    let arr = Object.keys(obj).filter(el=> obj[el]===true);
console.log(arr);
    */


return {
    setFieldsEditPublication,
    fieldsPublication,
  };
};
