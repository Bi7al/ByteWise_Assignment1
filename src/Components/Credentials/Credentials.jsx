import React, { useRef } from 'react'
import { UserContext } from '../Contexts/UserContext';
function Credentials() {
    const { userdata, setUserData } = React.useContext(UserContext);
    const inputRef = useRef();
    return (
        <div className="credentials">
            <label htmlFor="name"><h5>Enter Your Name</h5></label>
            <input
                type="text"
                id='name'
                name='userName'
                placeholder='Enter Your Name'
                required={true}
                ref={inputRef}
            />
            <button onClick={() => setUserData({ ...userdata, userName: inputRef.current.value })}>Submit</button>
        </div>
    )
}

export default Credentials