import React, { Component, PropTypes } from 'react'
import TodoListItem from './TodoListItem'
import List from './DragAndDrops.js'


const  colors =['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'];

export default class TodoList1 extends Component {

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


constructor(props) {
        super(props);
        this.state = {
            colors: colors
        }
    }
    

   

    render() {
        const { todos, actions, timerActive, timerTodo  } = this.props
        const taskCount = todos.reduce((count, todo) =>  todo.completed ? count + 1 : count, 0)

        // var listItems = this.state.colors.map((item, i) => {
        //    return (
        //        <div
        //            data-id={i}
        //            key={i}
        //            draggable='true'
        //            onDragEnd={this.dragEnd.bind(this)}
        //            onDragStart={this.dragStart.bind(this)}>
        //            {item}
        //           </div>
        //    )
        // });

        // var listTodos = todos.map((todo, i) => {
        //     return (
        //         <TodoListItem
        //             data-id={i}
        //             key={i}
        //             draggable='true'
        //             onDragEnd={this.dragEnd.bind(this)}
        //             onDragStart={this.dragStart.bind(this)} todo={todo} {...actions} timerActive={timerActive} timerTodo={timerTodo}/>
        //     )
        // });

        return (
            <div className="todolist">

                <div className="todolist-wrapper">

                  <List colors={this.state.colors} />
             

                {todos.map(todo =>
                 <TodoListItem   key={todo.id} todo={todo} {...actions} timerActive={timerActive} timerTodo={timerTodo}/>
                 )}
                </div>

                    {this.renderFooter(taskCount)}


            </div>
        )
    }
}

