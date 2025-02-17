import React from "react";
import Link from "next/link";

export function NavBar(): React.JSX.Element {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start" />
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">quirky_notes</a>
            </div>
            <div className="navbar-end flex flex-row space-x-2.5">
                <Link href={"/notes"} className="btn btn-ghost">
                    notes
                </Link>
                {
                    // add href to "account" when you end backend stuff or smth
                }
                <Link href={"/signin"} className="btn btn-ghost">
                    account
                </Link>
            </div>
        </div>
    );
}