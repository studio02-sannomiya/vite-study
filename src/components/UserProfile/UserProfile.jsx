import { use } from "react"
import UserContext from "../../context/UserContext";

export default function UserProfile() {

    const { name, email } = use(UserContext);

    return (
        <div>
            <p>名前：{name}</p>
            <p>メール：{email}</p>
        </div>
    )
}
