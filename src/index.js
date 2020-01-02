import React from "react";
import ReactDom from "react-dom"
import "./styles.css";



class App extends React.Component {
    constructor(){
        super();

        this.state = {
            todo: "",
            todos: []
        };
    }
    componentDidMount(){
        fetch("http://localhost:5000/todos")
        .then(response => response.json())
        .then(data => {
            this.setState({
                todos: data
            })
        })
    }


    addTodo = e => {
        e.preventDefault();
        console.log("form submitted")
    }

    handleChange = e => {
        this.setState({
            todo: e.target.value
        })
    }

    render(){
        console.log(this.state.todos)
        return (
            <div className="app">
                <h1>ToDo List</h1>
                <form className="add-todo" onSubmit={this.addTodo}>
                    <input
                    type="text"
                    placeholder="Add Todo"
                    value={this.state.todo}
                    onChange={this.handleChange}
                    value={this.state.todo}
                    />
                    <button>
                        add
                    </button>
                </form>
            </div>
        )
    }
}

const rootElement = document.getElementById("root")
ReactDom.render(<App />, rootElement);