/* eslint-disable prettier/prettier */
import { useState } from 'react';

export const useValidateCheckbox = () => {

    const [checkboxSelected, setcheckboxSelected] = useState({
        search: false,
        advertising: false,
      });

      const setEnableCheckbox = (isSelected: boolean, checkboxType: string) => {
        console.log('que checkbox seleccionaste? : ' + JSON.stringify(checkboxSelected));
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

  return {
    setEnableCheckbox,
    checkboxSelected,
  };
};
