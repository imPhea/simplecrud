import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
    let navigate = useNavigate(); // director to homepage
    const {id} = useParams();  // declare param
    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8070/user/${id}`);
        setUser(result.data);
    }
    useEffect(()=>{
        loadUser();
    },[]); // for load data to field
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: ''
    }); // set to db
    const { firstname, lastname, email } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = async (e) => {  // event click submitBtn
        e.preventDefault();
        console.log(user); // for hiding data on the URL while submitting
        await axios.put(`http://localhost:8070/user/${id}`, user); // send data across the URL
        navigate('/');
    };

    return (
        <div className="col-6 mt-5 py-3 mx-auto rounded-3 shadow-sm">
            <h3 className="bg-primary text-white col-12 p-2 text-center">Adding User</h3>
            <form onSubmit={onSubmit} className="col-8 mx-auto py-4">
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        value={firstname}
                        onChange={onInputChange}
                        placeholder="Enter your first name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        value={lastname}
                        onChange={onInputChange}
                        placeholder="Enter your last name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        placeholder="Enter your email address"
                    />
                </div>
                <Link className="btn btn-outline-danger px-3" to="/">Cancel</Link>
                <button type="submit" className="btn btn-outline-primary px-3 mx-2">Submit</button>
            </form>
        </div>
    );
};