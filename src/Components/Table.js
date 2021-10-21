import React, { useState } from "react";
import { Modal } from "./Modal";
import img from "./../Images/img1.PNG";

const Table = () => {
    const [indexName, setIndexName] = useState("");
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [tableList, setTableList] = useState([
        {
            id: 1,
            name: "Ali",
            email: "Ali@gmail.com",
            admin: "Ali",
            location: "GB",
            created: "10:30 AM",
        },
    ]);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        location: "",
        admin: "",
        created: "",
    });
    // Object distracturing\
    const { name, email, location, admin, created } = formValues;

    const onDelet = (e, id) => {
        e.preventDefault()
        let arrDel = tableList?.filter((item) => item.id !== id);
        setTableList(arrDel);
    };
    const onSave = (e) => {
        e.preventDefault();
        setTableList([...tableList, { ...formValues, id: Math.random().toFixed(2) }]);
        setIsOpenModal(false);
        setFormValues("");
    };

    const handleEditUser = (e, id) => {
        e.preventDefault()
        setIndexName(id)
        setIsOpenModal(!isOpenModal);
        const currentUser = tableList.filter((f) => f.id === id);
        console.log(currentUser, "ASDASD")
        setFormValues(currentUser[0]);
    };
    const onUpdate = (e) => {
        e.preventDefault()
        const index = tableList.findIndex((item) => item.id === indexName);
        let newArr = [...tableList];
        newArr[index] = formValues;
        setTableList(newArr);
        setIsOpenModal(false)
    };
    return (
        <div className="container-lg">
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-8">
                            <h2>Users</h2>
                        </div>
                        <div className="col-sm-4">
                            <button
                                type="button"
                                class="btn btn-light"
                                onClick={() => {
                                    setFormValues("");
                                    setIsOpenModal(!isOpenModal);
                                }}
                            >
                                New User
                            </button>
                        </div>
                        <div className="search">
                            <label>Search</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                {/* <th><img className="table-img" src={img} alt="imge" /></th> */}
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Admin</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableList?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <img className="table-img" src={img} alt="imge" />
                                        {item.name}
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.location}</td>
                                    <td>{item.admin}</td>
                                    <td>{item.created}</td>
                                    <button
                                        className="btn btn-success"
                                        onClick={(e) => handleEditUser(e, item.id)}
                                    >
                                        <i className="fad fa-edit"></i>
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={(e) => onDelet(e, item.id)}
                                    >
                                        <i className="fad fa-trash-alt"></i>
                                    </button>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {isOpenModal && (
                <Modal
                    className="Main_class"
                    visible={isOpenModal}
                    title="Add User"
                    onSave={onSave}
                    setVisible={setIsOpenModal}
                >
                    <form className="form col">
                        <div className="form-group">
                            <label htmlFor="exampleName">Name:</label>
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
                            <label htmlFor="exampleInputEmail1">Email:</label>
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
                            <label htmlFor="exampleInputPassword1">Location:</label>
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
                            <label htmlFor="exampleInputPassword1">Admin:</label>
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
                            <label htmlFor="exampleInputPassword1">Created:</label>
                            <input
                                type="text"
                                value={created}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, created: e.target.value })
                                }
                                className="form-control"
                                placeholder="Enter the Date"
                            />
                        </div>
                        <div className="img-side">
                            <label>Image:</label>
                            <input type="file" className="form-control" />
                            <img alt="img" src={`../img/${img.code}.jpg`}></img>
                        </div>
                        <button onClick={onSave} className="btn btn-success">
                            Save
                        </button>
                        <button
                            disabled={indexName ? false : true}
                            onClick={onUpdate}
                            className="btn btn-danger"
                        >
                            Update
                        </button>
                    </form>
                </Modal>
            )}
        </div>
    );
};

export default Table;
