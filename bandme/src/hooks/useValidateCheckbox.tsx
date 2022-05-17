/* eslint-disable prettier/prettier */
import { useState } from 'react';

export const useValidateCheckbox = () => {

    const [checkboxSelected, setcheckboxSelected] = useState({
        search: false,
        advertising: false,
      });

      const setEnableCheckbox = (isSelected: boolean, checkboxType: string) => {
        //console.log('que checkbox seleccionaste? : ' + JSON.stringify(checkboxSelected));
        console.log('que checkbox type seleccionaste? : ' + checkboxType);
        console.log('que valor tiene el checkbox seleccionado? : ' + isSelected);
        switch (checkboxType) {
            case 'search': {
                setcheckboxSelected({
                    search: isSelected,
                    advertising: false,
                });
                break;
            }
            case 'advertising': {
                setcheckboxSelected({
                    search: false,
                    advertising: isSelected,
                });
                break;
            }
            default: {
                setcheckboxSelected({
                    search: false,
                    advertising: false,
                });
                break;
            }
        }
    };

    const checkboxValidate = (): Boolean => {
        if (checkboxSelected.advertising || checkboxSelected.search) {
            return true;
        } else {
            return false;
        }
    };

  return {
    setEnableCheckbox,
    checkboxSelected,
    checkboxValidate,
  };
};
