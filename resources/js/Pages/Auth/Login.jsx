import { Inertia } from "@inertiajs/inertia";
import React from "react";
import "../../../css/login.css";

function Login() {
    const [data, setData] = React.useState({
        email: "",
        password: "",
    });
    const handleUpdateData = (e) => {
        setData((source) => ({ ...source, [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/login", data);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-3">
                        Login do Usuário
                    </h2>
                    <div className="card my-2">
                        <form
                            className="card-body cardbody-color p-lg-5"
                            onSubmit={handleSubmit}
                        >
                            <div className="text-center">
                                <img
                                    src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                    width="200px"
                                    alt="profile"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    aria-describedby="emailHelp"
                                    placeholder="E-mail"
                                    value={data.email}
                                    onChange={handleUpdateData}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    placeholder="password"
                                    value={data.password}
                                    onChange={handleUpdateData}
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-color px-5 mb-5 w-100"
                                >
                                    Login
                                </button>
                            </div>
                            <div
                                id="emailHelp"
                                className="form-text text-center mb-1 text-dark"
                            ></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
