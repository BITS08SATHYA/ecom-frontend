import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {AiOutlineLogin} from "react-icons/ai";
import InputField from "../shared/InputField.jsx";
import {authenticateSignInUser} from "../../store/actions/index.js";
import {useDispatch} from "react-redux";
import toast from "react-hot-toast";
import Spinners from "../shared/Spinners.jsx";

const LogIn = () => {

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

    const loginHandler = async (data) => {
        console.log("Login Click")
        dispatch(authenticateSignInUser(data, toast, reset, navigate, setLoader))
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="sm:W-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md "
            >
                <div className="flex flex-col items-center justify-center">
                    <AiOutlineLogin className="text-slate-800 text-5xl"/>
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                        Login Here
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
                        label="Password"
                        required
                        id="password"
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
                        <>
                            <Spinners />    Loading....
                        </>
                    ): (
                        <>Login</>
                        )}
                </button>
                <p className="text-center text-sm text-slate-700 mt-6">
                    Don't have an account ?
                    <Link to="/register" className="font-semibold underline hover:text-black">
                    <span> SignUp </span>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default LogIn;