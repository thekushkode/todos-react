import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class FormList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoName: '',
        }
    }

    todoAdd = (e) => {
        e.preventDefault();
        this.props.onTodoSubmit(this.state);
        this.setState({
            todoName: '',
        })
    }

    onTodoChange = (e) => {
        let newTodo = e.target.value;
        this.setState({
            todoName: newTodo,
        })
    }

    render() {
        return (
            <Form className="m-4" onSubmit={this.todoAdd}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter To-Do" value={this.state.todoName} onChange={this.onTodoChange}/>
                </Form.Group>

                <Button className="m-2" variant="primary" type="submit">
                    Add Todo
                </Button>
            </Form>
        )
    }
}

export default FormList;