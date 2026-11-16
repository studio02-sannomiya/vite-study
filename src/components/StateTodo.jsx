import React, { useState } from 'react'

export default function StateTodo() {
    const [maxId, setMaxId] = useState(1);
    // 文字列として空欄をstate変数に代入
    const [title, setTitle] = useState('');
    // 配列として、空の配列をstate変数に代入
    const [todo, setTodo] = useState([]);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleClick = () => {
        setTodo([
            ...todo,
            {
                id: maxId,
                title,
                created: new Date(),
                isDone: false,
            }
        ]);

        setMaxId(id => id + 1);
    }

    const handleDone = (e) => {
        setTodo(todo.map(item => {
            if (item.id === Number(e.target.dataset.id)) {
                return {
                    ...item,
                    isDone: true
                };
            } else {
                return item;
            }
        }))
    }

    return (
        <div>
            <label>
                やること：
                <input type="text" name="title" value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleClick}>追加</button>
            <hr />
            <ul>
                {todo.map(item => (
                    <li key={item.id}
                        className={item.isDone ? 'done' : ''}
                    >
                        {item.title}
                        <button type="button" onClick={handleDone} data-id={item.id}>済</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
