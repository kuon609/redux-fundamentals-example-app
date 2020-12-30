// import { createStore, compose } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware'

const composedEnhancer = composeWithDevTools(
  applyMiddleware(print1, print2, print3)
)

// import {
//   includeMeaningOfLife,
//   sayHiOnDispatch,
// } from './exampleAddons/enhancers'

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString),
//   }
// }

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const store = createStore(rootReducer, composedEnhancer)

export default store
