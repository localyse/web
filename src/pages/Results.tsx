import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import { Geolocalization } from "../components/Geolocalization";
import { Logo } from "../components/Logo";

type Data = {
	id: string
	geo: {
		latitude: number
		longitude: number
		__typename: string
	}
	tips: {
		html: string
		__typename: string
	}
	assets: {
		id: string
		url: string
	}[]
}

const GET_DATA_QUERY = gql`
query ($lockey: ID!) {
	data(where: {id: $lockey}) {
		id
		geo {
			latitude
			longitude
			__typename
		}
		tips {
			html
			__typename
		}
		assets {
			id
		}
	}
}
`

export function Results() {
	const { lockey } = useParams<{ lockey: string }>()
	
  const { data, loading, error } = useQuery<{  data: Data  }>( GET_DATA_QUERY, { variables: { lockey }});

	


  console.log(data?.data.id)

	return loading ?
	<>
		<h1>carregando</h1>
	</> :
	<>
		<Logo className="logo-sm" />
		<Geolocalization latitude={data?.data.geo.latitude} longitude={data?.data.geo.longitude} />
		<div className="actions">
			<div className="actions-group">
				<button className="btn primary">Photos</button>
				<button className="btn primary">Tips</button>
			</div>
			<button className="btn secondary">I found!</button>
		</div>
	</>
}