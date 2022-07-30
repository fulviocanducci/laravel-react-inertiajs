import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Index(props) {
    const posts = props.posts.data;
    console.log(props);
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Post" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Titulo</th>
                                        <th>...</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(posts === null || posts.length == 0) && (
                                        <tr>
                                            <td
                                                colSpan={3}
                                                className="text-center"
                                            >
                                                Nenhum registro
                                            </td>
                                        </tr>
                                    )}
                                    {posts &&
                                        posts.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>
                                                    <Link
                                                        href={route(
                                                            "posts.edit",
                                                            [item.id]
                                                        )}
                                                        className="btn btn-primary"
                                                    >
                                                        Alterar
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
