import React, {useState} from 'react';
const SearchBar = ({onClick}) => {
    const [userName, setUserName] = useState('')

    return (
        <div className="search-bar">
            <input name="userName" value={userName} onChange={(event) => setUserName(event.target.value)} />
            <input type="button" value="Search" onClick={() => onClick(userName)} />
        </div>
    )
};
export default SearchBar;