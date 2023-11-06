import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Title from "~/components/Title";
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <>
            <Title text='I really like my cat, check him out!'/>
            <div className='mt-3'>
                <Button text='See posts' to='/posts'/>
            </div>
            <Outlet />
        </>
    );
}
