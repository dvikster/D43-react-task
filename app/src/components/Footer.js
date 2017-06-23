import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
    static propTypes = {
        clearCompleted: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired
    }
    clearCompletedButton = () =>{
        this.props.clearCompleted();
    }

    render() {
        const { todos  } = this.props
        const taskCount = todos.reduce((count, todo) =>  todo.completed ? count + 1 : count, 0)
        console.log(taskCount)

        return (

            <footer className={"todolist " + ((taskCount > 0) ? "block":"none")}>
                        <button onClick={this.clearCompletedButton}>Clear Completed</button>
                    </footer>

        )
    }
}