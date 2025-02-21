import React from "react";
import {RegisterFormComponent} from "@/app/register/RegisterFormComponent";

export default function SignInPage(): React.JSX.Element {
    return (
        <>
            <div className={"flex h-[80vh] justify-center items-center w-full"}>
                <div className="card bg-base-100 w-96 border-primary border-2">
                    <form className="card-body">
                        <h2 className="card-title">Sign in to quirky_notes</h2>
                        <RegisterFormComponent />
                        <div className="card-actions justify-end">

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}