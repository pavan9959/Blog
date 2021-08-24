import React from "react"
import { Link,Route} from "react-router-dom"
import axios from "axios"
import { useEffect,useState} from "react"


const User=(props)=>{
    const [users,setusers]=useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((reponse)=>{
            const data1=reponse.data
            setusers(data1)
        })
        },[])

    return (
        <div>
            <h2>Listing users-{users.length}</h2>
            <ul>
            {users.map((ele)=>{
                return <li key={ele.id}><Link to={`/User/${ele.id}`} >{ele.name}</Link></li>
            })}
            </ul>
        </div>
    )
}

export default User
