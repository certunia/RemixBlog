import { LiveReload, Link, Links, Meta, MetaFunction, Outlet } from "@remix-run/react";
import * as process from "process";
import stylesheet from "~/styles/tailwind.css";
import Layout from "~/components/Layout";

export const links = () => [
    { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => {
    const title = "Remix blog";
    const description = "A blog built with Remix";
    const keywords = "remix, react, javascript, typescript, css, html";

    return [
        { name: "keywords", content: keywords },
        { name: "title", content: title },
        { name: "description", content: description },
    ];
}

export default function App() {
    return (
        <Document>
            <Layout>
                <Outlet />
            </Layout>
        </Document>
    );
}

function Document({ children }: { children: React.ReactNode; }) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                { process.env.NODE_ENV === "development" && <LiveReload /> }
            </body>
        </html>
    );

}
