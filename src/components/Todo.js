import React from 'react'
import '../style/todo.css'
import '../style/extra.css'

export default class Todo extends React.Component {
    constructor (props) {
        super(props)
        
        this.colorChecked = "todoColorChecked"
        this.colorUnchecked = "todoColorUnchecked"
    }

    bindCheckBox (inputId) {
        const input = document.getElementById(inputId)
        input.checked = !input.checked
    }

    render() {
        const {todos} = this.props

        return (
            <div>
                {/* <h1 className = "textCenter">Todo List</h1> */}
                <ol className = "padLeft-5 padRight-5">
                    {todos.map( (todo) => {
                        const todoInputId = `todo_${todo.id}`
                        let checked = false
                        if (todo.completed) checked = true

                        return (
                            <li key = {todoInputId} className = "todoTemplate cursorPoint hoverZoom" onClick = {this.bindCheckBox.bind(this, todoInputId)}>
                                {todo.title}
                                <input id = {todoInputId} className = "checkBoxPosition" type="checkbox" defaultChecked = {checked} />
                            </li> 
                        )
                    } )}
                </ol>
            </div>
        );
    }
}


// export default class Todo extends React.Component {
    
//     render() {
//         const todo = this.props.todos
//         let lists = []
//         for(let i=0; i <todo.length ; i++) {
//             let checked = false
//             const todoId = `todo_${todo[i].id}`

//             if (todo[i].completed) checked = true

//             lists.push(<li>
//                         <label htmlFor = {todoId}>{todo[i].title}</label>
//                         <input id = {todoId} type = "checkbox" defaultChecked = {checked}></input>
//                     </li>)
//         }
        
//         return (
//             <ol>
//                 {lists}
//             </ol>
//         );
//     }
// }


// const Todo = (todos) => 
//     (<div>
//         {todos.map((todo, i) => {
//             <li>{todo.title}</li>
//         })}
//     </div>)


// export default Todo