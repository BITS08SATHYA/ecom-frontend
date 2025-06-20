import React, {useState} from 'react'
import InputField from "../shared/InputField.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FaUserPlus} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {registerNewUser} from "../../store/actions/index.js";
import toast from "react-hot-toast";

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: "onTouched",
    })

    const registerHandler = async (data) => {
        console.log("Register Click")
        dispatch(registerNewUser(data, toast, reset, navigate, setLoader ))
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(registerHandler)}
                className="sm:W-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md "
            >
                <div className="flex flex-col items-center justify-center">
                    <FaUserPlus className="text-slate-800 text-5xl"/>
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                        Register User
                    </h1>
                </div>
                <hr className="mt-2 mb-5 text-black"></hr>
                <div className="flex flex-col gap-3">
                    <InputField
                        label="UserName"
                        required
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        message="*UserName is required"
                        register={register}
                        error={errors}
                    />

                    <InputField
                        label="Email"
                        required
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        message="*Email is required"
                        register={register}
                        error={errors}
                    />

                    <InputField
                        label="Password"
                        required
                        id="password"
                        min={6}
                        type="password"
                        placeholder="Enter your password"
                        message="*password is required"
                        register={register}
                        error={errors}
                    />
                </div>

                {/*   <button*/}
                {/*       disabled={loader}*/}
                {/*       className="bg-button-gradient flex gap-2 items-center justify-center*/}
                {/*font-semibold text-white w-full py-2 hover:text-slate-400*/}
                {/*transition-colors duration-100 rounded-sm my-3"*/}
                {/*   >*/}
                {/*       Login*/}
                {/*   </button>*/}

                <button
                    disabled={loader}
                    className="bg-blue-500
                    flex gap-2 items-center justify-center font-semibold text-white w-full py-2
                     hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
                    type="submit">
                    {loader ? (
                        <>Loading....</>
                    ): (
                        <>Register</>
                    )}
                </button>
                <p className="text-center text-sm text-slate-700 mt-6">
                    Already have an account ?
                    <Link to="/login" className="font-semibold underline hover:text-black">
                        <span> Login </span>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register;