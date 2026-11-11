import { useState } from "react";
import { users } from "./data/users.js";

export default function Question05() {
    const [job, setJob] = useState("all");

    const filteredUsers = users.filter((user) => {
        return job === "all" || user.job === job;
    });

    return (
        <div className="users-panel">
            <div className="users-toolbar">
                <label htmlFor="job-select">職業</label>

                <select
                    id="job-select"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                >
                    <option value="all">すべて</option>
                    <option value="デザイナー">デザイナー</option>
                    <option value="エンジニア">エンジニア</option>
                    <option value="ディレクター">ディレクター</option>
                </select>
            </div>

            <ul className="user-list">
                {filteredUsers.map((user) => {
                    return (
                        <li className="user-item" key={user.id}>
                            <div>
                                <strong>{user.name}</strong>
                                <span className="user-job">{user.job}</span>
                            </div>

                            <span>{user.Passed ? "✅" : "❎"}</span>
                        </li>
                    );
                })}
            </ul>

            <p className="user-count">
                表示件数：{filteredUsers.length}名
            </p>
        </div>
    );
}