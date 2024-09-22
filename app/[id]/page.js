"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'

const UserDetails = () => {
    const [user, setUser] = useState([]);
    const { id } = useParams();

    const getUser = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(res);
    }
    
    useEffect(() => {
    getUser();
    }, [id]);


    return (
        <div>
            {/* {user.map((e,i)=>(
                <li key={i}>{JSON.stringify(e)}</li>
            ))}
            */}
{/*             
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.phone}</li>
                 */}
                 {JSON.stringify(user)}
        </div>
    )
}

export default UserDetails