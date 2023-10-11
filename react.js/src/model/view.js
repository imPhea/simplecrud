import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
export default function View() {
    const [user, setUsers] = useState({
        firstname:'',
        lastname:'',
        gmail:'',
    });
    const {id} = useParams();
    useEffect(()=>{
        loadUser();
    }, [])
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8070/user/${id}`);
        setUsers(result.data);
        console.log(user);
    };

    return (
        <div className="col-6 mt-5 py-3 mx-auto rounded-3 shadow-sm">
            <h3 className="bg-primary text-white col-12 p-2 text-center">Viewing user id= {user.id}</h3>
            <div className="col-8 mx-auto py-4">
                <div className="mb-3">
                    <label className="form-label mx-2">First Name :</label>
                    <h4 className="text-danger">{user.firstname}</h4>
                    <label className="form-label mx-2">Last Name :</label>
                    <h4 className="text-danger">{user.lastname}</h4>
                    <label className="form-label mx-2">Email :</label>
                    <h4 className="text-danger">{user.email}</h4>
                </div>
                <Link className="btn btn-outline-primary mt-2 px-3" to="/">Cancel</Link>
            </div>
        </div>


        // <div className="container col-6 mt-5">
        //     <div class="card text-center">
        //     <div class="card-header">
        //         <h4>Viewing user id= <span className="text-danger">{user.id}</span></h4>
        //     </div>
        //     <div class="card-body">
        //         <h5 class="card-title ">Firstname: <span className="text-danger">{user.firstname}</span></h5>
        //         <h5 class="card-title  ">Lastname: <span className="text-danger">{user.lastname}</span></h5>
        //         <h5 class="card-title  ">Email: <span className="text-danger">{user.email}</span></h5>
        //     </div>
        //     <div class="card-footer text-body-secondary">
        //         <Link class="btn btn-primary px-4" to="/">Back</Link>
        //     </div>
        // </div>
        // </div>
    )
};
