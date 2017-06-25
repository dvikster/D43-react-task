import React, { Component, PropTypes } from 'react'
import TodoListItem from './TodoListItem'


export default class TodoList extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired
    }



    renderFooter(taskCount) {
        const {todos } = this.props;


        const activeCount = todos.length - taskCount;
        const taskItem = activeCount === 1 ? ' task' : ' tasks';


        if (todos.length) {
            return (
              <span className="todo-count">
                  <strong>{(activeCount>0)? [activeCount, taskItem] : "All task completed"}</strong>  for today
              </span>
            )
        }
        else{
            return (
                <span className="todo-count">
                    <strong>Please, create task</strong>  for today
                </span>
            )
        }
    }

    render() {
        const { todos, actions, timerActive, timerTodo  } = this.props
        const taskCount = todos.reduce((count, todo) =>  todo.completed ? count + 1 : count, 0)


        return (
            <div className="todolist">

                <div className="todolist-wrapper">

                    {todos.map(todo =>
                        <TodoListItem  key={todo.id} todo={todo} {...actions} timerActive={timerActive} timerTodo={timerTodo}/>

                    )}
                </div>

                    {this.renderFooter(taskCount)}


            </div>
        )
    }
}

