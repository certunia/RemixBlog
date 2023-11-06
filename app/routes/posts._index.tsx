import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Title from "~/components/Title";
import Button from "~/components/Button";

export const loader = ():Array<Object> => {
    return [
        { id: 1, title: "First post", body: "This is the first post"},
        { id: 2, title: "Second post", body: "This is the second post" },
        { id: 3, title: "Third post", body: "This is the third post" },
    ];
}

export const meta: MetaFunction = () => {
    return [
        { title: "Posts about my cat" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function _index() {
    const data:Array<Object> = useLoaderData();

    return (
        <>
            <Title text='Look at my cat !'>
                <Button to='/posts/new' text='New post'/>
            </Title>
            <ul className='max-w-screen-sm'>
                {data.map((post: any) => (
                    <li key={post.id}>
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}
