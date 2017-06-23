import * as types from '../constants/ActionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, text });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
export const startTimer = id => ({ type: types.START_TIMER, id });
export const stopTimer = id => ({ type: types.STOP_TIMER, id })
export const updateTimer = id => ({ type: types.UPDATE_TIMER, id });
