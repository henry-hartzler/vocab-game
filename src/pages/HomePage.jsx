import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWords } from '../features/words/wordsSlice'
import RandomWord from '../components/RandomWord'

export default function HomePage() {
	const dispatch = useDispatch()

	const [text, setText] = useState('')

	return (
		<React.Fragment>
			<CssBaseline />
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
					endIcon={<Icon>search</Icon>}
					onClick={() => dispatch(fetchWords(text))}
				>
					Search
				</Button>
			</Container>
			<Container>
				<RandomWord />
			</Container>
		</React.Fragment>
	)
}
