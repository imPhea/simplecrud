import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Navbar from "../layout/navbar";
export default function Home() {
    const [users, setUsers] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        loadUsers();
    },[])
    const loadUsers = async () => {
        const result = await axios.get('http://localhost:8070/users');
        setUsers(result.data);
    };
    const deleteUser=async (id)=>{
        await axios.delete(`http://localhost:8070/user/${id}`);
        loadUsers();
    }

    return (
        <div className="col-12">
            <Navbar/>
        <div className="col-8 mx-auto mt-2 shadow-sm">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">firstname</th>
                    <th scope="col">lastname</th>
                    <th scope="col">gmail</th>
                    <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className="btn btn-info text-white" to={`/view/${user.id}`}>View</Link>
                            <Link className="btn btn-primary mx-1" to={`/edit/${user.id}`}>Edit</Link>
                            <button className="btn btn-danger" onClick={()=>deleteUser(user.id)} >Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}