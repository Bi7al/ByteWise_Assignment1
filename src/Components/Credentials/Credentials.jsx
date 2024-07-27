import React, { useRef } from 'react'
import { UserContext } from '../Contexts/UserContext';
import "./Credentials.css"
function Credentials() {
    const { userdata, setUserData } = React.useContext(UserContext);
    const inputRef = useRef();
    return (
        <div className="credentials">
            <label htmlFor="name"><h3>Enter Your Name</h3></label>
            <input
                type="text"
                id='name'
                name='userName'
                placeholder='Enter Your Name'
                required={true}
                ref={inputRef}
            />
            <button onClick={() => setUserData({ ...userdata, userName: inputRef.current.value })}>Staert Quiz</button>
        </div>
    )
}

export default Credentials