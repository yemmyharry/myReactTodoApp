import React from 'react'

const Todos = ({myTodo, deleteItem}) => {
    const todoList = myTodo.length ? (
        myTodo.map(todo => {
            return (
            <div className="container">
        <span className="collection">{todo.content}</span>
        <button className=" blue-text" onClick={()=> deleteItem(todo.id)}>Delete</button>
       


            </div>)}
            )

    ) : (<p>There are no more Todos
        </p>
    )




    return (
        <div>
            {todoList}
        </div>
    )
}

export default Todos