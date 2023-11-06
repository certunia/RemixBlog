import { Outlet } from "@remix-run/react";
import stylesheet from "~/styles/tailwind.css";
import Layout from "~/components/Layout";
import Document from "~/components/Document";


export const links = () => [
    { rel: "stylesheet", href: stylesheet },
];

export default function App() {
    return (
        <Document>
            <Layout>
                <Outlet />
            </Layout>
        </Document>
    );
}
