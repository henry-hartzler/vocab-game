import React from 'react'
import {
	CssBaseline,
	Grid,
	Card,
	CardContent,
	Container,
	Button,
	Icon,
	OutlinedInput,
	Typography,
} from '@material-ui/core'
import { useState } from 'react'

const NewHomePage = () => {
	const rowArr = [0, 1, 2, 3, 4]
	const firstKeysRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
	const word = 'hello'
	const [guessNum, setGuessNum] = useState(0)
	const [guessOne, setGuessOne] = useState('')
	const [guessTwo, setGuessTwo] = useState('')
	const [text, setText] = useState('')

	const handleGuessOnSubmit = () => {
		switch (guessNum) {
			case 0:
				setGuessOne(text)
				setGuessNum(1)
				break
			case 1:
				setGuessTwo(text)
				setGuessNum(2)
				break
		}
	}

	const response1 = () => {
		return rowArr.map((e) => (
			<Card
				key={e}
				style={{
					width: 50,
					height: 50,
					margin: 10,
					color: 'white',
					backgroundColor:
						guessOne[e] === undefined
							? 'lightgrey'
							: word[e] === `${guessOne[e]}`
							? 'green'
							: word.includes(guessOne[e])
							? 'yellow'
							: 'black',
				}}
			>
				<Typography
					variant='h5'
					component='h2'
				>
					{guessOne[e]}
				</Typography>
			</Card>
		))
	}

	const response2 = () => {
		return rowArr.map((e) => (
			<Card
				key={e}
				style={{
					width: 50,
					height: 50,
					margin: 10,
					color: 'white',
					backgroundColor:
						guessTwo[e] === undefined
							? 'lightgrey'
							: word[e] === `${guessTwo[e]}`
							? 'green'
							: word.includes(guessTwo[e])
							? 'yellow'
							: 'black',
				}}
			>
				<Typography
					variant='h5'
					component='h2'
				>
					{guessTwo[e]}
				</Typography>
			</Card>
		))
	}

	const firstKeyboardRow = () => {
		return firstKeysRow.map((e) => (
			<Card
				key={e}
				style={{
					width: 50,
					height: 50,
					margin: 10,
					color: 'white',
					backgroundColor: 'darkgrey',
				}}
			>
				<Typography
					variant='h5'
					component='h2'
				>
					{e}
				</Typography>
			</Card>
		))
	}

	const TextBox = () => {
		return (
			<>
				<CssBaseline />
				<OutlinedInput
					placeholder='Type a word here'
					variant='outlined'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<Button
					variant='contained'
					color='primary'
					endIcon={<Icon>check</Icon>}
					onClick={() => handleGuessOnSubmit()}
				>
					Check
				</Button>
			</>
		)
	}

	return (
		<>
			<Container maxWidth='lg'>
				<OutlinedInput
					placeholder='Type a word here'
					variant='outlined'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<Button
					variant='contained'
					color='primary'
					endIcon={<Icon>check</Icon>}
					onClick={() => handleGuessOnSubmit()}
				>
					Check
				</Button>
			</Container>
			<Grid
				key={0}
				container
			>
				{response1()}
			</Grid>
			<Grid
				key={1}
				container
			>
				{response2()}
			</Grid>
			<Grid
				key={6}
				container
			>
				{firstKeyboardRow()}
			</Grid>
		</>
	)
}

export default NewHomePage
