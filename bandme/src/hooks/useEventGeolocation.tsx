import openMap, { createMapLink, createOpenLink } from 'react-native-open-maps';

export const useEventGeolocation = () => {

    const openMapEventAddress = (lat: number, long: number) => { //pasar coordenadas
        //openMap({ latitude: -34.515510, longitude: -58.513310, zoom: 40 });
        openMap({ provider: 'google', latitude: -34.59169247062613, longitude: -58.49731215428177, zoom: 20, queryPlaceId: 'Winner supermarket' });
        //createMapLink({ provider: 'google', latitude: 10.02134, longitude: -29.21322, zoom: 20, query: 'Winner'  });
        //const place = { latitude: -34.515510, longitude: -58.513310, zoom: 40 };
        //createOpenLink({ provider: 'google', latitude: -34.59169247062613, longitude: -58.49731215428177, zoom: 15});
        //createMapLink({ provider: 'google', end: 'New York City, NY' })
        //const openPlaceZoomedOut = createOpenLink({...place, zoom: 30});
    };

  return {
    openMapEventAddress,
  }
}