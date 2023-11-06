import {
    ActionFunctionArgs,
    redirect,
    unstable_parseMultipartFormData,
    unstable_composeUploadHandlers,
    unstable_createMemoryUploadHandler,
    unstable_createFileUploadHandler,
    NodeOnDiskFile
} from "@remix-run/node";
import {useRouteError, isRouteErrorResponse, Form} from "@remix-run/react";
import Button from "~/components/Button";
import {db} from '~/utils/db.server';
import {FileUploadHandlerFilterArgs} from "@remix-run/node/dist/upload/fileUploadHandler";

export const action = async ({ request }: ActionFunctionArgs) => {
    // handle the image upload
    const uploadHandler = unstable_composeUploadHandlers(
        unstable_createFileUploadHandler({
            maxPartSize: 5_000_000,
            file: ({ filename }) => filename,
            directory: './public/cat',
            filter(args: FileUploadHandlerFilterArgs): boolean | Promise<boolean> {
                // todo filter only images and return false if not an image
                return true;
            }
        }),
        unstable_createMemoryUploadHandler()
    );

    const form = await unstable_parseMultipartFormData(
        request,
        uploadHandler
    );

    const title = form.get('title');
    const body = form.get('body');
    const img = form.get('img');
    const imgFile = img as NodeOnDiskFile;
    const imgPath: string = '/cat/' + imgFile.name

    const fields = { title, body, img: imgPath };

    // @ts-ignore
    const post = await db.post.create({ data: fields });

    return redirect(`/posts/${post.id}`);
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
                <Form method="POST" className='flex flex-wrap flex-col items-center gap-4' encType="multipart/form-data">
                    <div>
                        <label htmlFor="title"></label>
                        <input type="text" name='title' id='title' className='border'></input>
                    </div>
                    <div>
                        <label htmlFor="img"></label>
                        <input type="file" name='img' id='img' className='border'></input>
                    </div>
                    <div>
                        <label htmlFor="body"></label>
                        <textarea name='body' id='body' className='border'></textarea>
                    </div>

                    <Button type='submit' text='Save'/>
                </Form>
            </div>
        </>
    )
}

export default NewPost;
