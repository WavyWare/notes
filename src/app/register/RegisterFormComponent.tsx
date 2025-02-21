"use client"
import React, {useState} from "react";
import {validateEmail} from "@/app/utils/validateEmail";
import {getStrengthDetails, checkPasswordStrength} from "@/app/utils/passwordStrength";

export function RegisterFormComponent(): React.JSX.Element {
    type PasswordStrength = "Weak" | "Medium" | "Strong";
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState<PasswordStrength>("Weak");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleSubmit: (e: React.FormEvent) => void = (e: React.FormEvent): void => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError("You entered an invalid email");
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            // here I should enter some backend stuff :rofl: im a frontend dev
        }
    };

    const handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newPassword: string = e.target.value;
        setPassword(newPassword);
        setStrength(checkPasswordStrength(newPassword));
    };

    const handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newEmail: string = e.target.value;
        setEmail(newEmail);
        if (!validateEmail(newEmail)) {
            setEmailError("You entered not valid email")
        } else {
            setEmailError("");
        }
    }

    const handlePasswordConfirmationChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>): void=> {
        const newPassword = e.target.value;
        setConfirmPassword(newPassword);
        if (!(password === newPassword)) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }
    }

    const { color, width, label } = getStrengthDetails(strength);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type username..." className="input input-bordered w-full max-w-xs"/>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your e-mail?</span>
                    </div>
                    <input type="text" placeholder="Type your e-mail..." className="input input-bordered w-full max-w-xs" onChange={handleEmailChange} />
                    <span
                        className={"font-semibold text-red-500 transition-all block"}>{emailError ? emailError : ""}</span>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Type your password</span>
                    </div>
                    <input type="text" placeholder="Your password should be strong 💪..." className="input input-bordered w-full max-w-xs" onChange={handlePasswordChange} />
                </label>
                <div
                    className="relative w-full max-w-md h-4 bg-background border-white border rounded-3xl overflow-hidden my-3">
                    <div className="absolute top-0 left-1/3 h-full border-l-2 border-gray-300"></div>
                    <div className="absolute top-0 left-2/3 h-full border-l-2 border-gray-300"></div>
                    <div
                        className={`h-full transition-all ease-in-out duration-500 ${color}`}
                        style={{width}}
                    ></div>
                </div>
                <div className="text-lg font-semibold">{label}</div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Confirm your password.</span>
                    </div>
                    <input type="text" placeholder="Retype your password..." className="input input-bordered w-full max-w-xs" onChange={handlePasswordConfirmationChange} />
                    <span
                        className={"font-semibold text-red-500 transition-all block"}>{confirmPasswordError ? confirmPasswordError : ""}</span>
                </label>
            </form>
        </>
    )
}