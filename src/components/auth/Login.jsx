import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {AiOutlineLogin} from "react-icons/ai";
import InputField from "../shared/InputField.jsx";

const LogIn = () => {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: "onTouched",
    })

    const loginHandler = async (data) => {
        console.log("Login Click")
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
                    type="submit"
                    {loader ? (
                        Loading....
                    ): (
                        Login
                        )}
                >Hello</button>
            </form>
        </div>
    )
}

export default LogIn;