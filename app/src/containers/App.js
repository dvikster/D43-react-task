import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TopSection from '../components/TopSection'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'


import * as TodoActions from '../actions'


const App = props => (
    <div>
        <TopSection addTodo={props.actions.addTodo} />
        <TodoList {...props} />
        <Footer {...props} clearCompleted={props.actions.clearCompleted}/>
        
    </div>
)


/*Определяем метод mapStateToProps для чтения состояния*/

const mapStateToProps = state => ({
    todos: state.todos.todos,
    timerActive: state.todos.timerActive,
    timerTodo: state.todos.timerTodo,
})

/*Определяем метод mapDispatchToProps для передачи события. mapDispatchToProps отправляет действие. Это единственный способ изменить состояние.*/

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

/*Генерируем компонент путем передачи созданных функций в connect(). Результат работы функции connect - новый присоединенный компонент, который оборачивает переданный компонент.*/

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


// import SortableComponent from '../components/ListAll'


