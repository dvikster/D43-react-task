import { combineReducers } from 'redux'
import todos from './todos'

/*Соединяем все редьюсеры вместе с помощью способа combineReducers*/

const rootReducer = combineReducers({
  todos
})

export default rootReducer
