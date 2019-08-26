import { createReducer } from 'redux-create-reducer'
import * as ActionTypes from '../actions/counterActionsTypes'

const initialState = 0
const counterReducer = createReducer(
    initialState,
    {
        [ActionTypes.INCREMENT]: (state) => {
            return state + 1
        },
        [ActionTypes.DECREMENT]: (state) => {
            return state - 1
        }
    }
)

export default counterReducer