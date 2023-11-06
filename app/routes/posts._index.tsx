import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Title from "~/components/Title";
import Button from "~/components/Button";
import {db} from '~/utils/db.server';

export const loader = async (): Promise<Array<Object>> => {
    return await db.post.findMany({
        take: 20,
        select: {
            id: true,
            title: true,
            img: true,
        }
    });
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
