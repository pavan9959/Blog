import React from "react"
import { Link,Route} from "react-router-dom"
import { useEffect ,useState} from "react"
import axios from "axios"

const Showcomment=(props)=>{
    const [comments,setcomments]=useState([])
    const [person,setperson]=useState({})
    const [name1,setname]=useState({})
    const {id}=props.match.params 

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                const result=response.data 
                setname(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[]) 

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response)=>{
                const result=response.data 
                setperson(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[]) 

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response)=>{
                const result=response.data
                setcomments(result)
            })
    },[])
    

    return <div>
                <h2>USER NAME:{name1.name}</h2>
                <h2>TITLE:{person.title}</h2>
                <h2>BODY</h2><br/>
                <p>{person.body}</p>
                <h3>COMMENTS</h3>
                 <ul>
                    {comments.map((ele)=>{
                        return <li key={ele.id}>{ele.body}</li>
                    })}
                </ul>
                <p><Link to={`/User/${id}`} >more posts of author:{person.name}</Link></p>
           </div>
}

export default Showcomment
