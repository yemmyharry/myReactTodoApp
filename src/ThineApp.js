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

   deleteAllTodo = () => {
       this.setState({
           todos: []
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
            <div className="container"><h3>My Todo app</h3>
            <Todos myTodo={this.state.todos} deleteItem={this.deleteTodo} deleteAllTodo={this.deleteAllTodo}/>
            <button onClick={this.deleteAllTodo}>Delete All</button>
            <AddTodo newTodo={this.addItem} />
            
            </div>

        )
    }
}
export default ThineApp