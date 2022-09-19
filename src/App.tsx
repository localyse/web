import { useState } from "react"
import {
  Link
} from "react-router-dom";

function App() {

	const [value, setValue] = useState<String>("")
	let locKey = value.length ? value : ""

	console.log({"cheguei": locKey})

  return (
		<>
			<span className="logo">localy<span className="orange">.se</span></span>
			<input type="text" className="search-input" placeholder="Type your localization key here" onChange={(event) => setValue(event.target.value) } autoFocus/>
			<Link to={ locKey && `/${locKey}/results` } className="btn primary">go!</Link>
		</>
  )
}

export default App
