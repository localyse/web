import { useParams } from "react-router-dom"

export function Results() {
	const { lockey } = useParams()
	return <h1>{lockey}</h1>
}