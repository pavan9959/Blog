import {React,useState,useEffect} from "react"
import { Link,Route} from "react-router-dom"
import axios from "axios"


const Post=(props)=>{
    const [posts,setposts]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response)=>{
                const result=response.data
                setposts(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])


    return (
            <div>
                <ul>
                    {posts.map((ele)=>{
                        return <li key={ele.id}><Link to={`/comment/${ele.userId}`} >{ele.title}</Link></li>
                    })}
                </ul>
            </div>
            )

}

export default Post
