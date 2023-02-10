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
	const guessNum = 0
	const word = 'hello'
	const guess = 'world'

	const guess1 = () => {
		return rowArr.map((e) => (
			<Card
				key={e}
				style={{
					width: 50,
					height: 50,
					margin: 10,
					color: 'white',
					backgroundColor:
						word[e] === guess[e]
							? 'green'
							: word.includes(guess[e])
							? 'yellow'
							: 'black',
				}}
			>
				<Typography
					variant='h5'
					component='h2'
				>
					{guess[e]}
				</Typography>
			</Card>
		))
	}

	return (
		<>
			<Grid
				key={0}
				container
			>
				{guess1()}
			</Grid>
		</>
	)
}

export default NewHomePage
