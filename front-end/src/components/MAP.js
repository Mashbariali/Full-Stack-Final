// import { GoogleMap, useLoadScript } from '@react-google-maps/api';
// const libraries = ["places"]
// export default function Map() {
// // Loads the map using API KEY
// const { isLoaded } = useLoadScript({
//     googleMapsApiKey: AIzaSyAvLE0X-ybeWR3GqK5ZdGudhGUp9YojC4s,
//     libraries
// });
// // This returns while map is being loaded
// if (!isLoaded) return <div>Loading...</div>
// return (
//     <GoogleMap 
//         zoom={9}
//         center={{lat: -74, lng: 40.7}} 
//         mapContainerClassName='map-container'
//     ></GoogleMap>
//     )
// }