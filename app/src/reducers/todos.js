import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, CLEAR_COMPLETED, START_TIMER, STOP_TIMER, UPDATE_TIMER } from '../constants/ActionTypes'

const initialState = {
  todos: [{
    text: 'Default task',
    completed: false,
    id: 0,
    total: 0
  },],
    total: 0,
};

export default function todos(state = initialState, action = null) {
  switch (action.type) {
    case ADD_TODO: {
      const id = [...state.todos].reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      const todos = [...state.todos];
      return {...state,todos: todos.concat([{id,completed: false,text: action.text, total: 0        }])      }
    }
    case COMPLETE_TODO: {
          return {
            ...state,
            todos: [...state.todos].map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)}
      }

    case DELETE_TODO: {
        return {
            ...state,
            todos: [...state.todos].filter(todo => todo.id !== action.id)}
    }

    case CLEAR_COMPLETED: {
        return {
            ...state,
            todos: [...state.todos].filter(todo => todo.completed === false)}
    }

    case START_TIMER: {
            const todo = { ...state.todos.find(item => item.id === action.id) };
            todo.startTime = new Date();
            const todos = [...state.todos].map(item => item.id === action.id ? todo : item);
            return { ...state, timerActive: true, timerTodo: action.id, todos };
    }

    case STOP_TIMER: {
        return { ...state, timerActive: false, timerTodo: null }
    }

    case UPDATE_TIMER: {
        const todo = { ...state.todos.find(item => item.id === action.id) };
        todo.total += 1;
        const todos = [...state.todos].map(item => item.id === action.id ? todo : item);
        const total = state.total || 0;
        return { ...state, todos, total: total + 1 };
    }

    default:
      return state
  }
}
