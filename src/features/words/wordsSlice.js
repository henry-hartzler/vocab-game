import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchWords = createAsyncThunk('words/fetchWords', async (word) => {
	const response = await axios.get(
		`https://api.datamuse.com/words?ml=${word}&rel_trg=${word}&topics=${word}`
	)
	const randomIndex = Math.floor(Math.random() * response.data.length)
	return response.data[randomIndex].word
})

const wordsSlice = createSlice({
	name: 'words',
	initialState: { isLoading: true, errMess: null, wordsArray: [] },
	reducers: {
		getNewWord: (state) => {
			const randomIndex = Math.floor(
				Math.random() * state.words.wordsArray.length
			)

			return state.words.wordsArray[randomIndex].word
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchWords.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchWords.fulfilled, (state, action) => {
				state.isLoading = false
				state.errMess = null
				state.wordsArray = action.payload
			})
			.addCase(fetchWords.rejected, (state, action) => {
				state.isLoading = false
				state.errMess = action.error ? action.error.message : 'Fetch failed'
			})
	},
})

export const wordsReducer = wordsSlice.reducer
