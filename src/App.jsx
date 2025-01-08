import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Companies from './Pages/Companies'
import Intro from './Pages/Intro'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<Intro />
			<Companies />
		</>
	)
}

export default App
