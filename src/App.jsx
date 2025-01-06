import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Intro from './Pages/Intro'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<Intro />
		</>
	)
}

export default App
