import React from "react";
import { Link } from "react-router-dom";
import {
  useState
} from "react/cjs/react.development";
import { useHistory } from "react-router-dom";
import "../index.css";
import img from "./../Images/img1.PNG";

const Form = () => {
  const history = useHistory();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    location: "",
    admin: "",
    creat: "",
  });

  const { name, email, location, admin, creat } = formValues;

  const submit = name && email && location && admin && creat ? true : false;
  if (submit) {
    history.push("/Table");
  } else {
    // alert("Please fill all the inputs");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    alert("please enter values");
  }, []);

  return (
    <div className="container">
      <div className="row">
        <form className="form col">
          <div className="form-group">
            <label for="exampleName">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
              className="form-control"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              className="form-control"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) =>
                setFormValues({ ...formValues, location: e.target.value })
              }
              className="form-control"
              placeholder="Enter Your Location"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Admin:</label>
            <input
              type="text"
              value={admin}
              onChange={(e) =>
                setFormValues({ ...formValues, admin: e.target.value })
              }
              className="form-control"
              placeholder="Enter Tick Or Cross"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Created:</label>
            <input
              type="text"
              value={creat}
              onChange={(e) =>
                setFormValues({ ...formValues, creat: e.target.value })
              }
              className="form-control"
              placeholder="Enter the Date"
            />
          </div>
          <div>
            <label>Image:</label>
            <input type="file" className="form-control" />
            <img alt="img" className="form-img" type="image" src={img} />
          </div>
          <Link to="/Table" className="btn btn-success" onClick={handleSubmit}>
            Update
          </Link>
          <button type="submit" className="btn btn-danger">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
