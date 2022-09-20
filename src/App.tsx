import { useState } from "react"
import {
  Link
} from "react-router-dom";
import { Logo } from "./components/Logo";
import './global/index.css'

function App() {

	const [value, setValue] = useState<String>("")
	let locKey = value.length ? value : ""

  return (
		<>
			<Logo />
			<input type="text" className="search-input" placeholder="Type your localization key here" onChange={(event) => setValue(event.target.value) } autoFocus/>
			<Link to={ locKey && `/${locKey}/results` } className="btn primary">go!</Link>
		</>
  )
}

export default App
