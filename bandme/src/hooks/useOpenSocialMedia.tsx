/* eslint-disable handle-callback-err */
import AppLink from 'react-native-app-link';


export const useOpenSocialMedia = () => {

    const openSocialMedia = (url: string, socialMediaName: string) => {


        let packageName = '';
        switch (socialMediaName) {
            case 'spotify':
                packageName = 'com.spotify.music';
                break;
            case 'youtube':
                packageName = 'google.android.youtube';
                break;
            case 'instagram':
                packageName = 'com.instagram.android';
                break;
            default:
                break;
        }

        AppLink.maybeOpenURL(url, { appName:socialMediaName, appStoreId: 0, appStoreLocale: 'arg', playStoreId: packageName})
         .then(() => {
            // do stuff
            console.log('open app with profile link');
            })
            .catch((err) => {
            // handle error
            console.log('Error al intentar abrir social media: ' + err);
            });



        /* AppLink.openInStore({ appName: socialMediaName, appStoreId: 0, appStoreLocale: 'arg', playStoreId: packageName }).then(() => {
                // do stuff
                console.log('open the store');
              })
            .catch((err) => {
                // handle error
                console.log('Error al intentar abrir social media/openInStore: ' + err);
            }); */
    };

return {
    openSocialMedia,
  };
};
