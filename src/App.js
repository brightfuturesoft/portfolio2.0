import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Routers/Route/Route';

function App() {
  return (
    <RouterProvider router={route}/>
  );
}

export default App;
