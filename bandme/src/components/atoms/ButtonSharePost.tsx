/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

export const ButtonSharePost = () => {
  return (
    <TouchableOpacity>
        <Image
            source={ require('../../assets/share_24.png') }
        />
    </TouchableOpacity>
  )
}
