import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Dashboard(){

    const token = localStorage.getItem('token');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (token){
            axios.get('http://localhost:3000/users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    setUsers(res.data);
                    console.log(res.data)
                })
                .catch(err => {
                    console.error(err.message);
                })
        }else {
            navigate('/login');
        }
    }, [token, navigate]);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={user._id}>
                        <th>{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;