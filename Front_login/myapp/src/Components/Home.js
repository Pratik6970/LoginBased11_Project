import React, { useEffect, useState } from 'react'

function Home() {

    const [name, setname] = useState(null);
    const [email, setEmail] = useState(null);

    const [about, setAbout] = useState(null);

    useEffect(() => {

        const userData = localStorage.getItem('user');

        if (userData) {
            const { name, email, about } = JSON.parse(userData);
            setname(name);
            setEmail(email);
            setAbout(about);

        }
    }, []);





    return (

        <div className="container mt-4" style={{marginLeft:'15%',marginRight:'15%',height:'30vh'}}>
        <h1 style={{ border: 'solid', backgroundColor: 'pink', color: 'black' }}>Login Success</h1>

        <table className="table table-bordered mt-4">
            
            <thead>
                <tr>
                    <th scope="col">Field</th>
                    <th scope="col">Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Name</strong></td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td><strong>Email</strong></td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td><strong>About</strong></td>
                    <td>{about}</td>
                </tr>
            </tbody>
        </table>
    </div>
);
}

export default Home