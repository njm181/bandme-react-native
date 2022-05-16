import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { CreatePublicationForm } from '../../components/organisms/CreatePublicationForm'
import { RootStackParams } from '../../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'CreateEditPublicationScreen'> {}

export const CreateEditPublicationScreen = ({navigation, route}: Props) => {
  return (
    <CreatePublicationForm
      onNavigateToBack={ navigation.goBack }
      route={ route }
    />
  );
};
