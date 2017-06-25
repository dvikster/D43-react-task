import React, { Component, PropTypes } from 'react'
import TodoListItem1 from './TodoListItem1'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
// import { Draggable, Droppable } from 'react-drag-and-drop'

const todoArray =[1,2,3,4];

const SortableItem = SortableElement(({value}) =>  <div>{value}</div>);

const SortableList = SortableContainer(({items}) => {
    return (
    <div>
    {items.map((value, index) => (
    <SortableItem key={`item-${index}`} index={index} value={value} />
))}
</div>
);
});



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


constructor(props) {
        super(props);
        this.state = {
             items: todoArray,
        }
    }
    



        onSortEnd = ({oldIndex, newIndex}) => {

            
            this.setState({
                items: arrayMove(this.state.items, oldIndex, newIndex),
            });
        };
      


    render() {
        const { todos, actions, timerActive, timerTodo  } = this.props
        const taskCount = todos.reduce((count, todo) =>  todo.completed ? count + 1 : count, 0)


        return (
            <div className="todolist">
        

                <div className="todolist-wrapper">


                <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
                {console.log(todos)}


                    {todos.map(todo =>
                        <TodoListItem1  key={todo.id} todo={todo} {...actions} timerActive={timerActive} timerTodo={timerTodo}/>

                    )}
                </div>

                    {this.renderFooter(taskCount)}


            </div>
        )
    }
}

