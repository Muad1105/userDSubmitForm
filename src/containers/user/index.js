import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {loadUser} from './redux/action'
function User() {
    const dispatch = useDispatch();
    const userData = useSelector(store => store.userReducer.data)
    
    useEffect(()=> {
        dispatch(loadUser());
        console.log("mounteddd")
    }, [])

    useEffect(()=> {
        console.log("gotchaa", userData)
    }, [userData])

    const getUsers = () => {
        return userData.map(d => {
            return <div className="p-1">{d.title}</div>
        })
    }

    return (
        <div className="App">
            User
            {getUsers()}
        </div>
    );
}

export default User;
