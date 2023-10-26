import {Component} from "react";

interface User {
    name: string;
    age: number;
}
interface UserSearchProps {
    users: User[]
}

interface UserSearchState {
    name: string;
    user: User | undefined
}

class UserSearch extends Component<UserSearchProps> {
   state: UserSearchState = {
       name: '',
       user: undefined,
   };

    onClick = () => {
        const foundUser = this.props.users.find ((user) => (user.name === this.state.name))
        this.setState({user: foundUser})
    }

   render() {
       const {name, user} = this.state
       return <div>
           User Search
           <input value={name} onChange={(event) => this.setState({name: event.target.value})} />
           <button onClick={this.onClick}>Search</button>
           <div>
               {user && user.name}
               {user && user.age}
           </div>
       </div>
   }
}

export default UserSearch