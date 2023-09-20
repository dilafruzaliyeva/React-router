import { Link, useNavigate  } from "react-router-dom";
import { useState, useEffect } from "react";

const Listcreat = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate()

  const loadDetails = (id)=>{
      navigate("/details/" + id)
  }

  const loadEdit = (id)=>{
    navigate("/edit/"+ id)
  }

  useEffect(() => {
    fetch(" http://localhost:4000/posts")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h2>Listing json</h2>
      <div>
       <Link to='/listcreatpost'>
       <button style={{ marginTop: "30px" }} type="button" className="btn btn-success">listcreat</button>
       </Link>
        </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.title}</td>
                <td>
              <button onClick={()=>{loadEdit(item.id)}} type="button"  className="btn btn-warning">Edit</button>
              <button style={{ margin: "20px" }} type="button" className="btn btn-danger">Delete</button>
          <button onClick={()=>{loadDetails(item.id);}} type="button" className="btn btn-success"> Details</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listcreat;
