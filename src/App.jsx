import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import About from './Pages/About'
import Companies from './Pages/Companies'
import Cube from './Pages/Cube'
import Intro from './Pages/Intro'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<Intro />
			<Companies />
			<Cube />
			<About />
		</>
	)
}

export default App
