import { useEffect, useState } from "react"

export default function Users(){
    
//    aikhne users hoilo data gula jaikhane rakhbo tar nam setUsers hoilo data jaikahne set korbo tar nam
    const [users,setUsers] =useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setUsers(data))
    }, [])

    return(
        <div>
         <h3>Users: {users.length}</h3>   
        </div>
    )
}

/**
 * 1. declare a state to hold the data
 * 2. userEffect with call back and dependency array
 * 3. use fetch to load data
 * */ 