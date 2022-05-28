/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

export const useUserSingUpEvent = () => {

    const [userSignUp, setUserSignUp] = useState<boolean>();

  const signupEvent = (idUser: string, idEvent: string): boolean => {
    //llamo al servicio y le pego con ambos id, obtengo respuesta success o failure
    const response = true;
    let result = false;
    if (response) {
        result = true;
        setUserSignUp(true);
    } else {
        result = false;
        setUserSignUp(false);
    }
    return result;
  };

    return {
    signupEvent,
    userSignUp,
  };
};
