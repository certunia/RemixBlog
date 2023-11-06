import {Link} from "@remix-run/react";

function Title({ children, text }: { children: React.ReactNode; text: string; }) {
    return (
        <div className='flex justify-between'>
            <h1 className="text-3xl font-bold">
                { text }
            </h1>

            { children }
        </div>
    );
}

export default Title;
