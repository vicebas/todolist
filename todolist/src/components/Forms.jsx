import React, { useState } from 'react';

const CreateForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add a new todo"
        />&nbsp;
        <button className="button" type="submit">+</button>
        </form>
    );
    }

export default CreateForm;