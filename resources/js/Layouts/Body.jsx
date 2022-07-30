import { Link } from "@inertiajs/inertia-react";
import React from "react";

function Body(props) {
    console.log(props);
    return (
        <div className="container-fluid">
            <div className="row">
                <nav
                    id="sidebarMenu"
                    className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
                >
                    <div className="position-sticky pt-3 sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link
                                    className={
                                        route().current("dashboard")
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                    aria-current="page"
                                    href={route("dashboard")}
                                >
                                    <span
                                        data-feather="home"
                                        className="align-text-bottom"
                                    ></span>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={
                                        route().current("posts")
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                    href={route("posts.index")}
                                >
                                    <span
                                        data-feather="file"
                                        className="align-text-bottom"
                                    ></span>
                                    Posts {route().current()}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div>{props.children}</div>
                </main>
            </div>
        </div>
    );
}

export { Body };
