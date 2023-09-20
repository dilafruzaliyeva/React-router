import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import './teacher.css'
const Teacher = ()=>{
      const [data, setData] = useState(null)

      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
          return res.json();
        })
        .then((response)=>{
          setData(response);
        })
        .catch((error)=>{
          console.log(error)
        })
      },[])
    return(
        <div className='container'>
            <h1>Teacher</h1>
            <div className='button1'>
            <Link to='/'><button type="button" className ="btn btn-primary" >Back</button></Link>
            </div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {data && data.map((item)=>(
   <tr key ={item.id}>
   <th scope="row">{item.id}</th>
   <td>{item.name}</td>
   <td>{item.username}</td>
   <td>{item.email}</td>
 </tr>
    ))}
  </tbody>
</table>
        </div>
    )
}

export default Teacher;