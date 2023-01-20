import { useSelector } from 'react-redux'
import {
	Card,
	CardContent,
	Container,
	Typography,
	OutlinedInput,
	Button,
	Icon,
} from '@material-ui/core'
import { useState } from 'react'

const RandomWord = () => {
	const wordsArray = useSelector((state) => state.words.wordsArray)
	const randomIndex = Math.floor(Math.random() * wordsArray.length)
	const [text, setText] = useState('')
	const splitGuess = text.split('')

	//need to separate the selectedWord so its not in this if statement - I think thats where it's erroring

	if (wordsArray.length === 0) {
		return <h1>Not enough search results. Please try again!</h1>
	} else {
		const selectedWord = wordsArray.word.split('')
		return (
			<>
				<Container
					maxWidth='md'
					style={{ padding: 20 }}
				>
					<OutlinedInput
						placeholder='Type your guess here'
						variant='outlined'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<Button
						variant='contained'
						color='primary'
						endIcon={<Icon>check</Icon>}
						onClick={() => console.log('clicked')}
					>
						Check
					</Button>
				</Container>
				{/* {splitGuess.length === selectedWord.length ? (
					<Container>
						<h1>YAY!</h1>
					</Container>
				) : ( */}
				<Container
					style={{ display: 'flex', flexDirection: 'row', padding: 20 }}
				>
					{selectedWord.map((el) => (
						<Card
							key={selectedWord.indexOf(el)}
							style={{ width: 50, height: 50, margin: 10 }}
						>
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
				{/* )} */}
			</>
		)
	}
}

export default RandomWord
