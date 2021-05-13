import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCIyLls81zvi4LKASyxX19O5MU2YuEAmUk&callback=initMap&libraries=&v=weekly",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `300px` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 13.979957923162566, lng: 100.41786925806703 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 13.979957923162566, lng: 100.41786925806703 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)   //13.979957923162566, 100.41786925806703
class MyFancyComponent extends React.PureComponent {

  state = {
      
    isMarkerShown: false,
  }

  componentDidMount() {

    this.delayedShowMarker()
  }
 

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
        
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
export default MyFancyComponent