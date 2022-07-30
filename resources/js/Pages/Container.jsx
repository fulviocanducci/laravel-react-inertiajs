import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Container(props) {
    console.log(props);
    return (
        <>
            <Head title={props.headerTitle ?? "No Title"} />
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
