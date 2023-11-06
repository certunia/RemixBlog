import { Link } from "@remix-run/react";
import Button from "~/components/Button";

function New() {
    return (
        <>
            <div className='flex justify-between'>
                <h1 className="text-3xl font-bold">
                    New post !
                </h1>

                <Button to='/posts' text='←back'/>
            </div>

            <div className='max-w-screen-sm'>
                <form action="POST">
                    <div>
                        <label htmlFor="title"></label>
                        <input type="text" name='title' id='title'></input>
                    </div>
                    <div>
                        <label htmlFor="body"></label>
                        <textarea name='body' id='body'></textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

export default New;
