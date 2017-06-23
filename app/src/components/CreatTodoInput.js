import React, { Component, PropTypes}  from 'react';
import classnames from 'classnames'

export default class CreatTodoInput extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
        newTodo: PropTypes.bool
    }

    state = {
        text: this.props.text || ''
    }

    todoSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
            if (this.props.newTodo) {
                this.setState({ text: '' })
            }
        }
    }

    taskCheckboxChange = e => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
        <input className={
            classnames({
                'task-input': this.props.newTodo
            })}
               type="text"
               placeholder={this.props.placeholder}
               autoFocus="true"
               value={this.state.text}
               onChange={this.taskCheckboxChange}
               onKeyDown={this.todoSubmit} />
        )
    }
}

