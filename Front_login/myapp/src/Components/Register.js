import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [about, setAbout] = useState("");
    const navigate=useNavigate();

    async function save(event) {
        console.log(event);

        event.preventDefault();

        try {

            await axios.post("http://localhost:9090/api/v1/user/save",

                {
                    name: name,
                    email: email,
                    password: password,
                    about: about
                }
            );

            alert("User is Valid");

            localStorage.setItem('user',JSON.stringify({name,email,about}));

            navigate('/');

        } catch (error) {

            console.log(error);

            alert("User is Invalid");

        }
    }




    return (
        <div>

            <div className="card mt-4 text-center" style={{ marginLeft: '25%', marginRight: '25%', height: '65vh', border: 'solid', backgroundColor: 'pink' }}>

                <h3>Student Registration</h3><hr></hr>


                <form>

                    <div className="form-group mt-4">

                        <label>Enter Name</label>

                        <input type="text" id="name" className="form-control" placeholder="Enter Name"

                            value={name}
                            onChange={(event) => {
                                console.log(event);

                                setName(event.target.value);
                            }}


                        ></input>



                    </div>

                    <div className="form-group mt-4">

                        <label>Enter Email</label>

                        <input type="text" id="email" className="form-control" placeholder="Enter Email"

                            value={email}
                            onChange={(event) => {
                                console.log(event);

                                setEmail(event.target.value);
                            }}



                        ></input>



                    </div>


                    <div className="form-group mt-4">

                        <label>Enter Password</label>

                        <input type="text" id="password" className="form-control" placeholder="Enter Password"

                            value={password}
                            onChange={(event) => {
                                console.log(event);

                                setPassword(event.target.value);
                            }}



                        ></input>



                    </div>

                    <div className="form-group mt-4">

                        <label>Enter About</label>

                        <input type="text" id="about" className="form-control" placeholder="Enter About"

                            value={about}
                            onChange={(event) => {
                                console.log(event);

                                setAbout(event.target.value);
                            }}



                        ></input>



                    </div>


                </form>

                <div className="Button mt-4 text-center">

                    <button type="submit" className="btn btn-success" onClick={save}>Register</button>


                </div>


            </div>


        </div>
    )
}

export default Register