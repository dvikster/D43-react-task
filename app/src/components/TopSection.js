import React, { PropTypes, Component } from 'react'
import CreatTodoInput from './CreatTodoInput'

export default class TopSection extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    todoSave = text => {
        if (text.length !== 0) {
            this.props.addTodo(text)
        }
    }

    render() {
        return (
            <div className="todolist">
                <h1>Create your plans</h1>
                <CreatTodoInput newTodo
                               onSave={this.todoSave}
                               placeholder="What should be done?" />
            </div>
        )
    }
}
