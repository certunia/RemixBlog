import React from 'react';
import {Link} from "@remix-run/react";

function Button({text, type='link', to, onClick}: {text: string; type?: string; to?: string; onClick?: () => void}) {
    return (
        type === 'link' ? (
            <Link
                to={to}
                onClick={onClick}
                className='bg-black text-white px-4 py-2 rounded-md'
            >
                {text}
            </Link>
        ) : (
            <button onClick={onClick}>{text}</button>
        )
    );
}

export default Button;
