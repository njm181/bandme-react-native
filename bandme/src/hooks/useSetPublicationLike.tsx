/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

export const useSetPublicationLike = () => {

    const setPublicacionLike = (id: string, reaction: boolean) => {
        console.log('ID del posteo: ' + id + '| reaction: ' + reaction);
    };

  return {
      setPublicacionLike,
  };
};

