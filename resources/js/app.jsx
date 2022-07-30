import "bootstrap/dist/css/bootstrap.min.css";
import "../css/app.css";
import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ThemeProvider } from "react-bootstrap";
import LayoutIndex from "./Layouts/Index";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        return render(
            <ThemeProvider
                breakpoints={[
                    "xxxl",
                    "xxl",
                    "xl",
                    "lg",
                    "md",
                    "sm",
                    "xs",
                    "xxs",
                ]}
                minBreakpoint="xxs"
                {...props}
            >
                {props.initialPage.component === "Auth/Login" ? (
                    <App {...props} />
                ) : (
                    <LayoutIndex {...props}>
                        <App {...props} />
                    </LayoutIndex>
                )}
            </ThemeProvider>,
            el
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });
