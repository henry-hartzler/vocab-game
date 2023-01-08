import {
	configureStore,
	getDefaultMiddleware,
	combineReducers,
} from '@reduxjs/toolkit'
import { wordsReducer } from '../features/words/wordsSlice'
import { logger } from 'redux-logger'

export const store = configureStore({
	reducer: combineReducers({
		words: wordsReducer,
	}),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
