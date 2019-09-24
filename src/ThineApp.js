import React, {Component} from 'react'
import Todos from './Tewdew'
import AddTodo from './AddTodo';


class ThineApp extends Component {
    state = {
        todos: [
            {id:1, content: "grill chicken"},
            {id:2, content: "fry red meat"},
            {id:3, content: "drink red wine"}
        ]
    }

    deleteAll = () => {
        this.setState({ todos: [] });
    }

    deleteTodo = (id) =>{
        const delItem = this.state.todos.filter(item => {
            return (
                item.id !== id
            )
        })
            this.setState({
                todos: delItem
            })
        
    }

   

    addItem = (theNewItem) => {
        theNewItem.id = Math.random() 
        let newItem = [...this.state.todos, theNewItem]
        this.setState({
            todos: newItem
        })
    }

    render(){
        return(
            <div className="container"><h3>My app</h3>
            <button onClick={this.deleteAll}>Delete</button>
            <Todos myTodo={this.state.todos} deleteItem={this.deleteTodo}/>
            <AddTodo newTodo={this.addItem} />
            </div>

        )
    }
}
export default ThineApp