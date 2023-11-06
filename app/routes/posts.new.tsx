import {ActionFunctionArgs, redirect} from "@remix-run/node";
import {useRouteError, isRouteErrorResponse} from "@remix-run/react";
import Button from "~/components/Button";
import Layout from "~/components/Layout";
import Document from "~/components/Document";

export const action = async ({ request }: ActionFunctionArgs) => {
    const form = await request.formData();
    const title = form.get('title');
    const body = form.get('body');

    const fields = { title, body };

    // todo - submit to database

    // return redirect('/posts');
}

export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </>
        );
    } else if (error instanceof Error) {
        return (
            <>
                <h1>Error</h1>
                <p>{error.message}</p>
            </>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}

function NewPost() {
    return (
        <>
            <div className='flex justify-between'>
                <h1 className="text-3xl font-bold">
                    New post !
                </h1>

                <Button to='/posts' text='←back'/>
            </div>

            <div className='max-w-screen-sm'>
                <form method="POST" className='flex flex-wrap flex-col items-center gap-4'>
                    <div>
                        <label htmlFor="title"></label>
                        <input type="text" name='title' id='title' className='border'></input>
                    </div>
                    <div>
                        <label htmlFor="body"></label>
                        <textarea name='body' id='body' className='border'></textarea>
                    </div>

                    <Button type='submit' text='Save'/>
                </form>
            </div>
        </>
    )
}

export default NewPost;
