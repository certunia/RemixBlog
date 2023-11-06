import {Form, useLoaderData} from "@remix-run/react";
import Title from "~/components/Title";
import Button from "~/components/Button";
import {db} from '~/utils/db.server';
import {ActionFunctionArgs, redirect} from "@remix-run/node";

export const loader = async ({ params }: any) => {
    const postId = Number(params.postId);

    const post = await db.post.findUnique({
        where: { id: postId },
        select: {
            id: true,
            title: true,
            body: true,
            img: true,
        }
    });


    if (!post) throw new Error('Post not found')

    return {post};
}

export const action = async ({request, params}: ActionFunctionArgs) => {
    const form = await request.formData()
    if(form.get('_method') === 'delete') {
        const post = await db.post.findUnique({
            where: { id: Number(params.postId) },
        })

        if (!post) throw new Error('Post not found')

        await db.post.delete({ where: { id: post.id } })
    }
    return redirect('/posts')
}


function Post() {
    // @ts-ignore
    const {post} = useLoaderData();
    const {title, img, body} = post;

    return (
        <>
            <Title text={title}>
                <Button to='/posts' text='←back'/>
            </Title>
            <div className='mt-3'>
                <img src={img} alt={title}/>
                <p>{body}</p>
            </div>
            <Form method='POST' className='mt-6'>
                <input type='hidden' name='_method' value='delete'/>
                <Button type='submit' text='delete'/>
            </Form>
        </>
    )
}

export default Post;
