import React, { useEffect } from 'react'
import { act_get_user } from '../redux/actions';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ListUser() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // gọi action act_get_user khi component đc mount
    useEffect(() => {
        dispatch(act_get_user())
    }, [])
    const listUser = useSelector(state => state.users)
   
    console.log(listUser);
    let elementListUser = listUser.map((user, index) =>
        <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td type="password">{user.password}</td>
            <td>{user.fullname}</td>
            <td>
                <button>Update</button>
                <button>Delete</button>
            </td>
        </tr>
    )
    return (
        <div>
            <h2>List User</h2>
            <table border={1}>
                <thead>
                    <tr >
                        <th>STT</th>
                        <th>User id</th>
                        <th>Email</th>
                        <th >Password</th>
                        <th>Full Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elementListUser}
                </tbody>
            </table>
            <button onClick={()=>navigate("/newuser")}>Create New User</button>
        </div>
    )
}
