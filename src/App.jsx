import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import About from './Pages/About'
import Companies from './Pages/Companies'
import Cube from './Pages/Cube'
import Intro from './Pages/Intro'
import Reviews from './Pages/Reviews'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='space-y-10'>
			<Header />
			<Intro />
			<Companies />
			<Cube />
			<About />
			<Reviews />
		</div>
	)
}

export default App
