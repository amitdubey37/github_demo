import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GitHubSearchBar from "./Containers/GitHubSearchBar";
import Loader from "./Components/Loader";


function App() {
    const [userName, setUserName] = useState('')
    const handleClick = () => {

    }
    return (
        <div className="App">
            <Loader />
            <header className="App-header">
                <GitHubSearchBar />
            </header>
        </div>
    );
}

export default App;
