import React, { Component, PropTypes} from 'react';
import classnames from 'classnames'

let interval;

export default class TodoListItem extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        completeTodo: PropTypes.func.isRequired
    }
    taskCompleteClick = () => {
        this.props.completeTodo(this.props.todo.id);
        this.props.stopTimer(this.props.todo.id);
        clearInterval(interval);
    }
    deleteClick = () =>  {
        this.props.deleteTodo(this.props.todo.id);
    }



    componentWillUnmount() {
        clearInterval(interval);
    }

    handleStartClick = (checked) => {
        this.props.startTimer(this.props.todo.id);
        interval = setInterval(() => {
            this.props.updateTimer(this.props.todo.id);
        }, 1000);
    }


    handleStopClick = () => {
        this.props.stopTimer(this.props.todo.id);
        clearInterval(interval);
    }



    formatSeconds = (seconds) => {
        let hours = Math.floor(seconds / 3600);
        //seconds = seconds % 3600;

        let minutes = Math.floor(seconds / 60);
        //seconds = seconds % 60;

        return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    render(){
        const { todo, timerActive, timerTodo } = this.props
        return (
                <div>


            <div className={ 'todolist-task ' + classnames ({
                completed: todo.completed
            })}>
             {(!timerActive || timerTodo === todo.id) && (
                 <input className="checkbox"
                     type="checkbox"
                     checked={todo.completed}
                     onChange={this.taskCompleteClick}
                 />
             )}
                <span className="task" > {todo.text}</span>


                <span>Total time is {this.formatSeconds(todo.total)}</span>
            {(!timerActive || timerTodo === todo.id) && (
                <button className='timer-button'
                    disabled={timerActive && timerTodo !== todo.id}
                    onClick={timerActive ? this.handleStopClick : this.handleStartClick}
                >{timerActive ? 'Stop' : 'Start'}</button>
            )}
            {(!timerActive || timerTodo === todo.id) && (
                <a onClick={this.deleteClick} href="#" className={'close-task'}>X</a>
            )}
           </div></div>
        )
    }
}

