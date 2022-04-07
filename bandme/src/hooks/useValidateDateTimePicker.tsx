/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';

export const useValidateDateTimePicker = () => {


    const [datetime, setDatetime] = useState('');

    const setDatetimePicked = (datetime: string) => {
        console.log('valor datetime para setear: ' + datetime);
        setDatetime(datetime);
    };

  return {
    setDatetimePicked,
    datetime,
  };
};
