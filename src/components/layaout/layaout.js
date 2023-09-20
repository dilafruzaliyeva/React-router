import {Link} from 'react-router-dom'

const Layaout = ()=>{
    return(
        <div className='container'>
            <h1>WELCOME</h1>
            <div className='button'>
           <div><Link to='/teacher'><button type="button" className="btn btn-primary" >teacher</button></Link></div> 
           <div><Link to='/students'><button type="button" className="btn btn-primary">students</button></Link></div> 
           <div><Link to='/listcreat'><button type="button" className="btn btn-primary">listcreat</button></Link></div>
        </div>
        </div>
    )
}

export default Layaout
