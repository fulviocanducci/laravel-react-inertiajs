import React from "react";
import { Header } from "./Header";
import { Body } from "./Body";

function Index(props) {
    return (
        <>
            <Header />
            <Body {...props}>{props.children}</Body>
        </>
    );
}

export default Index;
