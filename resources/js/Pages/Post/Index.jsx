import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/inertia-react";

export default function Index(props) {
    const posts = props.posts.data;
    return (
        <>
            <Head title="Posts" />
            <div className="p-8 overflow-auto relative mt-3">
                <table className="table table-sm table-bordered">
                    <thead>
                        <tr className="table-secondary">
                            <th className="">Código</th>
                            <th className="">Titulo</th>
                            <th className="">...</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(posts === null || posts.length === 0) && (
                            <tr>
                                <td colSpan={3} className="text-center">
                                    Nenhum registro
                                </td>
                            </tr>
                        )}
                        {posts &&
                            posts.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td className="text-center">
                                        <Link
                                            href={route("posts.edit", [
                                                item.id,
                                            ])}
                                            className="btn btn-primary btn-sm"
                                        >
                                            <i className="fas fa-heart"></i>{" "}
                                            Alterar
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
