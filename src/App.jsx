import './App.css'
import NewHomePage from './pages/NewHomePage'
import { Provider } from 'react-redux'
import { store } from './shared/store'

function App() {
	return (
		<Provider store={store}>
			<NewHomePage />
		</Provider>
	)
}

export default App
