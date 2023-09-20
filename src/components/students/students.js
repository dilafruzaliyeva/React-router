import { Link } from "react-router-dom";
// import { useEffect} from 'react'
import React from "react";
class Students extends React.Component {
  state = {
    user: [],
  };

  componentDidMount() {
    fetch(" http://localhost:4000/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ user: data });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Students</h1>
        <div className="button1">
          <Link to="/">
            <button type="button" className="btn btn-primary">
              Back
            </button>
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {this.state.user.map((users) => (
              <tr key={users.id}>
                <th scope="row"></th>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.address}</td>
                <td>{users.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Students;
