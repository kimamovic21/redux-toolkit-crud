import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserList, removeUser } from "../redux/action";
import { toast } from "react-toastify";

const UserListing = (props) => {
  useEffect(() => {
    props.loadUser() // eslint-disable-next-line
  }, []);

  const handleDelete = (code) => {
    if(window.confirm("Do you want to remove this item")) {
      props.removeUser(code);
      props.loadUser();
      toast.success('User removed successfully!');
    }
  };

  return (
    props.user.loading ? <div><h2>Loading...</h2></div> : props.user.errormessage ? <div><h2>{props.user.errormessage} </h2></div> :

    <div>
      <div>
        <Link to='/user/add'>Add User [+]</Link>
      </div>
      <div>
          <table>
            <thead>
              <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody style={{ border: '1px solid black' }}>
              {props.user.userList && props.user.userList.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.role}</td>
                    <td>
                      <Link to={`/user/edit/${item.id}`} className="btn btn-primary">Edit</Link>&nbsp;|
                      <button 
                        style={{ marginLeft: '10px'}}
                        onClick={() => handleDelete(item.id)}
                      >
                         Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(fetchUserList()),
    removeUser: (code) => dispatch(removeUser(code))
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (UserListing)