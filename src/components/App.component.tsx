import {Provider} from "react-redux";
import {store} from "../state";
import RepositoriesListComponent from './RepositoriesList.component'

const AppComponent = () => {
    return <Provider store = {store}>
        <div>
            <h1>Search For a Package</h1>
            <RepositoriesListComponent/>
        </div>
    </Provider>
}

export default AppComponent;