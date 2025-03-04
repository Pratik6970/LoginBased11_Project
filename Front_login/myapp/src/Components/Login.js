import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    async function login(event) {
        event.preventDefault();

        try {

            await axios.post("http://localhost:9090/api/v1/user/login",


                {
                    email: email,
                    password: password
                }

            ).then((resp) => {

                console.log(resp.data.message);

                if (resp.data.message === "email not exist") {
                    console.log("Invalid email");

                    alert("Inavlid email");
                }
                else if (resp.data.message === "Login Success") {
                    console.log("Login Success");
                    alert("Login Success");

                    navigate('/home');
                }
                else {
                    alert("Invalid email and password");
                }

            });

        } catch (error) {

            console.log(error);

            alert("Email & Password is invalid")

        }
    }

    return (
        <div>

            <div className="card mt-4 text-center" style={{ marginLeft: '25%', marginRight: '25%', border: 'solid', height: '40vh' }}>

                <h3>Login Form</h3><hr></hr>

                <form>


                    <div className="form-group mt-4">

                        <label>Enter Email</label>

                        <input required="required" type="text" id="email" name="email" className="form-control" placeholder="Enter Email"

                            value={email}
                            onChange={(event) => {
                                console.log(event);

                                setEmail(event.target.value);
                            }}


                        ></input>


                    </div>

                    <div className="form-group mt-4">

                        <label>Enter Password</label>

                        <input required="required" type="text" id=" password" name="password" className="form-control" placeholder="Enter Password"

                            value={password}
                            onChange={(event) => {
                                console.log(event);

                                setPassword(event.target.value);
                            }}

                        ></input>


                    </div>


                </form>

                <div className="Button mt-4 text-center">

                    <button type="submit" className="btn btn-success" onClick={login}>Login</button>


                </div>


            </div>



        </div>
    )
}

export default Login;