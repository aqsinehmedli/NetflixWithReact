import React, { useState } from "react";
import Form from "common/Form";
import Footer from "../components/landing/Footer";
import { useNavigate } from "react-router";
import { useStore } from "zustand";
import { themeStore } from "../../common/Store";
import { toast } from "react-toastify";
const Register = () => {
    const { addAccessToken } = useStore(themeStore);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const register = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/v1/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            if (response.ok) {
                addAccessToken(data.token);
                toast.success(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate("/");
            } else {
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };
    const formItems = [
        {
            label: "",
            name: "username",
            type: "text",
            placeholder: "Enter your Username",
            inputStyle: "p-4 border-[1px] rounded-[4px] border-zinc-400 bg-transparent",
        },
        {
            label: "",
            name: "email",
            type: "email",
            placeholder: "Enter your Email",
            inputStyle: "p-4 border-[1px] rounded-[4px] border-zinc-400 bg-transparent",
        },
        {
            label: "",
            name: "password",
            type: "password",
            placeholder: "Enter your Password",
            inputStyle: "p-4 border-[1px] text-white border-zinc-400 rounded-[4px] bg-transparent",
        },
    ];

    const formButtons = [
        {
            title: "Sign Up",
            style: "bg-[#E50914] w-full text-white mt-4 font-medium py-3 rounded-[4px]",
            action: register
        },
        {
            title: "Already have an account? Sign in",
            style: "text-zinc-300 mt-4 w-full mt-[25px]",
            action: () => navigate("/login"),
        },
    ]

    return (
        <>
            <div className="h-screen mb-0 relative flex justify-center items-center w-full bg-cover bg-black/30 bg-blend-overlay bg-no-repeat bg-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg)]">
                <button onClick={() => {
                    navigate('/')
                }}>
                    <img
                        className="w-[160px] absolute top-[24px] left-[168px]"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
                        alt="Netflix Logo"
                    />
                </button>
                <Form
                    headerText={{
                        title: "Sign Up",
                        style: "text-white font-bold text-[32px]",
                    }}
                    setFormData={setFormData}
                    formStyle="w-[450px] h-[470px] bg-black/70 px-[68px] pt-[48px] flex text-white rounded-[4px] flex-col gap-4"
                    formItems={formItems}
                    formButtons={formButtons}
                />
            </div>
            <Footer />
        </>
    )
}

export default Register;
