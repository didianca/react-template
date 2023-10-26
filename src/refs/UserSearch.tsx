import {useState, useRef, useEffect} from "react";
const users = [
    {name: 'Didi', age: 26},
    {name: 'Didi', age: 14},
    {name: 'Jake', age: 33}
]

const UserSearch: React.FunctionComponent = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined> ()

    useEffect(() => {
        inputRef.current?.focus()
    }, []);

    const onClick = () => {
        const foundUser = users.find ((user) => (user.name ===name))
        setUser(foundUser)
    }

    return <div>
        User Search
        <input ref={inputRef} value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={onClick}>Search</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
}

export default UserSearch;