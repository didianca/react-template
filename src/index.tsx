import AppComponent from "./components/App.component";
import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('root')!;
const root = createRoot(domNode);


root.render(<AppComponent />);

