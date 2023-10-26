import UserSearch from "./refs/UserSearch";
import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('root')!;
const root = createRoot(domNode);
const App = () => {
    return <div>
        <UserSearch/>
    </div>
}

root.render(<App />);

