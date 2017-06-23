import React, { Component, PropTypes } from 'react'
import TodoListItem from './TodoListItem'
//import List from './DragAndDrops.js'

var placeholder = document.createElement("div");
placeholder.className = "placeholder";

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




    dragStart(e) {
        this.dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.dragged);
    }

    dragEnd(e) {
        this.dragged.style.display = 'block';
        this.dragged.parentNode.removeChild(placeholder);
        const { todos} = this.props
        // update state
        var data = todos;
        console.log(data);
        var from = Number(this.dragged.dataset.id);
        var to = Number(this.over.dataset.id);
        if(from < to) to--;
        data.splice(to, 0, data.splice(from, 1)[0]);
        this.setState({todos: todos});

    }

    dragOver(e) {
        e.preventDefault();
        this.dragged.style.display = "none";
        if(e.target.className === 'placeholder') return;
        this.over = e.target;
        e.target.parentNode.insertBefore(placeholder, e.target);
    }


    //constructor(props) {
    //    super(props);
    //    this.state = {
    //        colors: ['']
    //    }
    //}

    render() {
        const { todos, actions, timerActive, timerTodo  } = this.props
        const taskCount = todos.reduce((count, todo) =>  todo.completed ? count + 1 : count, 0)

        //var listItems = this.state.colors.map((item, i) => {
        //    return (
        //        <div
        //            data-id={i}
        //            key={i}
        //            draggable='true'
        //            onDragEnd={this.dragEnd.bind(this)}
        //            onDragStart={this.dragStart.bind(this)}>{item}
        //           </div>
        //    )
        //});

        var listTodos = todos.map((todo, i) => {
            return (
                <TodoListItem
                    data-id={i}
                    key={i}
                    draggable='true'
                    onDragEnd={this.dragEnd.bind(this)}
                    onDragStart={this.dragStart.bind(this)} todo={todo} {...actions} timerActive={timerActive} timerTodo={timerTodo}/>
            )
        });

        return (
            <div className="todolist">

                <div className="todolist-wrapper">


                    {/*<div onDragOver={this.dragOver.bind(this)}>
                     {listItems}
                     </div>*/}

                    <div onDragOver={this.dragOver.bind(this)}>
                        {listTodos}
                    </div>

                {/*{todos.map(todo =>
                 <TodoListItem  onDragOver={this.dragOver.bind(this)} key={todo.id} todo={todo} {...actions} timerActive={timerActive} timerTodo={timerTodo}/>
                 )}*/}
                </div>

                    {this.renderFooter(taskCount)}


            </div>
        )
    }
}

