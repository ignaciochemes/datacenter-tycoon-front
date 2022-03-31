import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RoutesHandler } from './Routes/RoutesHandler';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    let element = useRoutes(RoutesHandler);
    return (
        <div className="App" style={{
            backgroundColor: '#f5f5f5',
        }}>
            {element}
            <ToastContainer theme="light" />
        </div>
    );
}

export default App;
