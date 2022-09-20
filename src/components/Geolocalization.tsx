import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

type Props = {
	latitude?: number
	longitude?: number
}

export function Geolocalization({latitude = -23.403563, longitude = -51.991066}: Props) {

	const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD2lcDC9y82ieO5_DgWYQ2Zey4ouzpX_9M"
  })

	const center = {
		lat: latitude,
		lng: longitude
	};

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={
				{
					width: '100%',
					flex: '1',
					marginTop: '1.5rem', 
					borderRadius: '0.5rem', 
					border: '1px solid #393155'
				}
			}
			center={center}
			zoom={20}
		>
		</GoogleMap>
	) : <></>
}