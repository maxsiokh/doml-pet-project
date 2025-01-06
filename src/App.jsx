import { useState } from 'react'
import './App.css'
import Header from './Pages/Header/Header'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<h1 className='text-3xl font-bold underline text-yellow-800'>
				Hello world!
			</h1>
		</>
	)
}

export default App
