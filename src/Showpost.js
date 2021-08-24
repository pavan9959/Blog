import React, { useState } from "react"
import { Link,Route} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"

const Showpost=(props)=>{
    const [person,setperson]=useState({})
    const [posts,setposts]=useState([])
    const {id}=props.match.params

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                const result=response.data 
                setperson(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                const data1=response.data
                setposts(data1)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    return  <div>
                <h2>USER NAME:{person.name}</h2>
                <h2>POSTS WRITTEN BY THE USER</h2>
                <ul>
                    {posts.map((ele)=>{
                        return <li key={ele.id}><Link to={`/comment/${ele.userId}`} >{ele.title}</Link></li>
                    })}
                </ul>
            </div>
}

export default Showpost