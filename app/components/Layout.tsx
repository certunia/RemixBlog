import {Link} from "@remix-run/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className='bg-gray-200 p-3'>
                <nav className="flex gap-3">
                    <Link to='/' className='logo'>
                        <img src="/pets_black.svg" alt="logo image"/>
                    </Link>

                    <ul>
                        <li>
                            <Link to='/posts'>Posts</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="container p-3">
                {children}
            </div>
        </>
    )
}
