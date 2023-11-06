import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Title from "~/components/Title";
import Button from "~/components/Button";

export const loader = ():Array<Object> => {
    return [
        { id: 1, title: "Look at him smoll", body: "This is the first post", img: '/cat/1.jpeg'},
        { id: 2, title: "Look at him fancy", body: "This is the second post", img: '/cat/2.jpeg' },
        { id: 3, title: "Look at him waiting for food", body: "This is the third post", img: '/cat/3.jpeg' },
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
            <ul className='grid-cols-2 grid gap-4'>
                {data.map((post: any) => (
                    <li key={post.id} className='p-3 border my-2 mr-1'>
                        <a href={`/posts/${post.id}`} className='flex justify-center'>
                            <img className='w-14 h-auto' src={post.img} alt={post.title}/>
                            <span>{post.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}
