import { useGoogleContext } from '../context/GoogleContext';

export default function useMapUtils() {
  const {
    map,
    setActiveMarkerId,
    setDirections,
    setDuration,
    setDistance,
    origin,
  } = useGoogleContext();

  function markerClick(org, id) {
    setFocus(org.position);
    setActiveMarkerId(id);
  }

  function setFocus(position) {
    map.setZoom(17);
    recenterMap(position);
  }

  function recenterMap(position) {
    console.log('🚀 ~ file: useMapUtils.js:24 ~ recenterMap ~ position:', position);
    map.setCenter(position);
  }

  function handleRoute(destination) {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    directionsService.route({
      origin,
      destination,
      travelMode: 'DRIVING',
    }, (response, status) => {
      if (status === 'OK') {
        setDirections(response);
        setDistance(response.routes[0].legs[0].distance.text);
        setDuration(response.routes[0].legs[0].duration.text);
      } else {
        console.error('Error fetching directions:', status);
      }
    });
  }

  return { markerClick, setFocus, recenterMap, handleRoute };
}
