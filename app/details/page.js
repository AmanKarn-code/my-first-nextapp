"use client"
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const details = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        let allusers = res.data;
        // console.log(users)
        setUsers(allusers);
    }
    useEffect(() => {
      getUsers();
    }, [])
    
    return (
        <div>
            <button onClick={getUsers} className='bg-zinc-500 text-white p-4 m-5 rounded text-lg'> Get all the users</button>
            <ul>
                {users.map((e) => (
                    <li >{e.username} --- <a href={`${e.id}`}>more Info</a></li>
                ))}
            </ul>
        </div>
    )
}

export default details