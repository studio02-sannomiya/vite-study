import { use } from "react";

async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
        throw new Error("ユーザー一覧の表示に失敗しました");
    }
    return res.json();
}

const usersPromise = fetchUsers();

export default function UserList() {
    const users = use(usersPromise);

    return (
        <section className="sec">
            <h3>ユーザー一覧</h3>
            <ul className="user_list">
                {users.map((user) => (
                    <li key={user.id}>
                        <span className="user_name">{user.name}</span>
                        <span className="user_email">{user.email}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
