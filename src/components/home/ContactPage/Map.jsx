// import React from 'react'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// // eslint-disable-next-line no-undef
// export class MapContainer extends Component {
//     render() {
//       return (
//         <Map google={this.props.google} zoom={14}>
   
//           <Marker onClick={this.onMarkerClick}
//                   name={'Current location'} />
   
//           <InfoWindow onClose={this.onInfoWindowClose}>
//               <div>
//                 <h1>{this.state.selectedPlace.name}</h1>
//               </div>
//           </InfoWindow>
//         </Map>
//       );
//     }
//   }
   
//   export default GoogleApiWrapper({
//     // eslint-disable-next-line no-undef
//     apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
//   })(MapContainer)

import React from 'react'

const Map = () => {
  return (
    <iframe style={{width: "100%" , height: "500px"}} src="https://maps.google.com/maps?q=NobleTec,%20No116/11,%20Kodippili%20Mawatha,%20High%20Level%20Rd,%20Pannipitiya%2010320&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
  )
}

export default Map
