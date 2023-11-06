import type { MetaFunction } from "@remix-run/node";
import { Outlet, Link } from "@remix-run/react";
import Title from "~/components/Title";


export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <>
            <Title text='I really like y cat, check him out!'/>

            <Outlet />
        </>
    );
}
