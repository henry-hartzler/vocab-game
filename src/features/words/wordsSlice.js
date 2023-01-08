import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchWords = createAsyncThunk('words/fetchWords', async (word) => {
	const response = await axios.get(
		`https://api.datamuse.com/words?ml=${word}&rel_trg=${word}`
	)
	return response.data
})

const wordsSlice = createSlice({
	name: 'words',
	initialState: { isLoading: true, errMess: null, wordsArray: [] },
	reducers: {},
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
