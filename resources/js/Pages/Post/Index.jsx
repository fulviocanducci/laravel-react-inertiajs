import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Container from "../Container";

export default function Index(props) {
    const posts = props.posts.data;
    return (
        <Container headerTitle="Posts" {...props}>
            <div className="p-8 overflow-auto relative">
                <table className="w-full whitespace-nowrap md:table-fixed table-auto">
                    <thead>
                        <tr>
                            <th className="w-1/4">Código</th>
                            <th className="w-3/4">Titulo</th>
                            <th className="w-1/4">...</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(posts === null || posts.length == 0) && (
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
                                            className="px-6 py-2 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:no-underline hover:text-blue-300"
                                        >
                                            <i class="fas fa-heart"></i> Alterar
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}
