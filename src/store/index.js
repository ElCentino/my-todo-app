import { applyMiddleware, createStore } from "../../node_modules/redux"
import reducers from "./reducers"
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default (initialState) => {

    return applyMiddleware(thunk, logger)(createStore)(reducers, initialState)
}