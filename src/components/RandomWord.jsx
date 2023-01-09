import { useSelector } from 'react-redux'
import { Card, CardContent, Container, Typography } from '@material-ui/core'

const RandomWord = () => {
	const wordsArray = useSelector((state) => state.words.wordsArray)
	const randomIndex = Math.floor(Math.random() * wordsArray.length)

	if (wordsArray.length > 0) {
		let selectedWord = wordsArray[randomIndex].word
		return (
			<Container style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>
				{selectedWord.split('').map((el) => (
					<Card style={{ width: 50, height: 50, margin: 10 }}>
						<CardContent>
							<Typography
								variant='h5'
								component='h2'
							>
								{el}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Container>
		)
	} else {
		return <h1>Not enough search results. Please try again!</h1>
	}
}

export default RandomWord
