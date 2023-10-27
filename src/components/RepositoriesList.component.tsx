import {useState} from "react";
import {useSelector} from "../hooks/useTypedSelector.hook";
import {useActions} from "../hooks/useActions.hook";

const RepositoriesListComponent: React.FunctionComponent = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const {searchRepositories} = useActions();
    const {data, error, loading} = useSelector((state) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(searchTerm);
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading &&
            data.map((name) => <div key={name}>{name}</div>)}
    </div>
}

export default RepositoriesListComponent;