import React, { useState } from 'react';
import CreateForm from './Forms';


const TodoItem = ({index, item, onComplete }) => {
    return (
        <div className='list'>
          <span style={item.completed? {textDecoration: 'line-through '}:{}}>{item.text}</span>
            <input  type="checkbox" disabled={item.completed} checked={item.completed} onChange={() => onComplete(index)} />
        </div>
    );
    }

const ToDoList = ({items, onComplete}) => {
    return (
        <div>
        {items.map((item ,key, arr) => (
            <TodoItem index={key} item={item} onComplete={onComplete} />
        ))}
        </div>
    );
    }

const ToDo = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [hideCompleted, setHideCompleted] = useState(false);

    const addTodoItems = (text) => {

        const newItems = [...items, { text, completed: false }];
        setItems(newItems);
    };

    const completeTodoItems = (index) => {
        const itemsTodo = [...items];
        itemsTodo[index].completed = true;
        setItems(itemsTodo);
    };


    return (
        <div className=''>
            
            <div>
                <CreateForm addTodo={addTodoItems} />
                <hr/>
            </div>
            <div className='card'>
                <input className="text-small" type="text" placeholder="Search..." onChange={(e)=> setSearch(e.target.value)} />&nbsp;&nbsp; |&nbsp;&nbsp;
                <input type="checkbox" onChange={(e) =>  setHideCompleted(!hideCompleted)}  />  <span><small> Hide completed</small></span>
                <hr/>
                <h5>Todo List</h5>
                <ToDoList items={items.filter(item => (!hideCompleted || !item.completed) && item.text.toUpperCase().includes(search.toUpperCase() ))} onComplete={completeTodoItems} />
            </div>
        </div>
    );
}

export default ToDo;