import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { PublicationDetail } from '../../components/organisms/PublicationDetail';
import { usePublicationDetailNavigationOptions } from '../../hooks/usePublicationDetailNavigationOptions';
import { RootStackParams } from '../../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PublicationDetailScreen'> {}

export const PublicationDetailScreen = ({navigation}: Props) => {

  const { onPublicationDetailNavigationOptions } = usePublicationDetailNavigationOptions(navigation);

  return (
   <PublicationDetail
      onNavigate={ onPublicationDetailNavigationOptions }
   />
  );
};
