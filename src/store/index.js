import { applyMiddleware, createStore } from "../../node_modules/redux"
import reducers from "./reducers"
import thunk from 'redux-thunk'

const logger = store => next => action => {

    console.log(`Dispatching ${action.type}`)
    console.log(action.payload)

    let result = next(action)

    console.log(store.getState())

    return result
}

export default (initialState) => {

    return applyMiddleware(thunk, logger)(createStore)(reducers, initialState)
}