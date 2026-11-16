import React, { useState } from 'react'

export default function StateTodo() {
    const [maxId, setMaxId] = useState(1);
    // 文字列として空欄をstate変数に代入
    const [title, setTitle] = useState('');
    // 配列として、空の配列をstate変数に代入
    const [todo, setTodo] = useState([]);
    // ソート用。昇順か降順かを真偽値で管理(降順であればtrue)
    const [desc, setDesc] = useState(true);


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

    const handleRemove = (e) => {
        setTodo(todo.filter(item =>
            item.id !== Number(e.target.dataset.id)
        ))
    }

    const handleSort = () => {
        const sorted = [...todo];
        sorted.sort((m, n) => {
            if (desc) {
                return n.created.getTime() - m.created.getTime();
            } else {
                return m.created.getTime() - n.created.getTime();
            }
        })

        // desc値を反転
        setDesc(d => !d);

        // ソート済みのリストを再セット
        setTodo(sorted);
    }

    return (
        <div>
            <label>
                やること：
                <input type="text" name="title" value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleClick}>追加</button>
            {/* desc値に応じてキャプションを変更 */}
            <button type="button" onClick={handleSort}>ソート ({desc ? '↑' : '↓'})</button>
            <hr />
            <ul>
                {todo.map(item => (
                    <li key={item.id}
                        className={item.isDone ? 'done' : ''}
                    >
                        {item.title}
                        <button type="button" onClick={handleDone} data-id={item.id}>済</button>
                        <button type="button" onClick={handleRemove} data-id={item.id}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
