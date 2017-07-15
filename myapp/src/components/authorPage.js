import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Author extends React.Component
{
  constructor() {
    super();

    this.state = {
      data:
        [
          {
            "id":1,
            "name":"Foo",
            "age":"20"
          },

          {
            "id":2,
            "name":"Bar",
            "age":"30"
          },

          {
            "id":3,
            "name":"Baz",
            "age":"40"
          }
        ]
    };
  }

       render(){
         return(
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </thead>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
              <Link to="addauthor" className="btn btn-primary btn-lg">Add_Author</Link>
            </div>
         );
      }
}

Author.PropTypes={
  data:PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
       </tr>
    );
  }
}

export default Author;

