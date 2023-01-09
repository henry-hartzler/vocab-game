import { useSelector } from 'react-redux'

const RandomWord = () => {
	const wordsArray = useSelector((state) => state.words.wordsArray)
	const randomIndex = Math.floor(Math.random() * wordsArray.length)

	if (wordsArray.length > 0) {
		return <h1>{wordsArray[randomIndex].word}</h1>
	} else {
		return <h1>Not enough search results. Please try again!</h1>
	}
}

export default RandomWord
