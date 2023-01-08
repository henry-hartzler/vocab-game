import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import TextField from '@material-ui/core/TextField'

export default function HomePage() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				<form
					noValidate
					autoComplete='off'
				>
					<TextField
						id='outlined-basic'
						label='Outlined'
						variant='outlined'
					/>
					<Button
						variant='contained'
						color='primary'
						endIcon={<Icon>send</Icon>}
					>
						Send
					</Button>
				</form>
			</Container>
		</React.Fragment>
	)
}
