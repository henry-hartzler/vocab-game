import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SimpleContainer from './components/SimpleContainer'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<SimpleContainer />
		</div>
	)
}

export default App
