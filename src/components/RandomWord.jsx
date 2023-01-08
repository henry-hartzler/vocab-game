import { useSelector } from 'react-redux'

const RandomWord = () => {
	const wordsArray = useSelector((state) => state.words.wordsArray)
	const randomIndex = Math.floor(Math.random() * wordsArray.length)

	return <h1>{randomIndex}</h1>
}

export default RandomWord
