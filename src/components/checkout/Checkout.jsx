import React, { useState, useEffect} from 'react';
import {Button, Step, StepLabel, Stepper} from "@mui/material";
import AddressInfo from "./AddressInfo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getUserAddresses} from "../../store/actions/index.js";
import toast from "react-hot-toast";
import Skeleton from "../shared/Skeleton.jsx";
import PaymentMethod from "./PaymentMethod.jsx";
import OrderSummary from "./OrderSummary.jsx";
import cart from "../cart/Cart.jsx";
import StripePayment from "./StripePayment.jsx";
import PaypalPayment from "./PaypalPayment.jsx";
import ErrorPage from "../shared/ErrorPage.jsx";

const Checkout = () => {
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(0);
    const { isLoading, errorMessage } = useSelector((state) => state.errors);
    const { cart, totalPrice } = useSelector((state) => state.carts);
    const { address, selectedUserCheckoutAddress } = useSelector((state) => state.auth)
    // const { address }  = useSelector(
    //     (state) => state.auth
    // )

    const { paymentMethod } = useSelector((state) => state.payment)


    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    }

    const handleNext = () => {

        if(activeStep === 0 && !selectedUserCheckoutAddress) {
            toast.error("Please select checkout address before procedding.")
            return
        }

        if(activeStep === 1 && (!selectedUserCheckoutAddress || !paymentMethod)) {
            toast.error("Please select payment address before procedding.")
            return
        }

        setActiveStep((prevStep) => prevStep + 1);
    }

    const steps = [
        "Address",
        "Payment Method",
        "Order Summary",
        "Payment"
    ]

    useEffect(() => {
        dispatch(getUserAddresses());
    }, [dispatch]);

    return (
        <div className='py-14 min-h-[calc(100vh - 100px]'>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {isLoading ? (
                <div className='lg:w-[80%] mx-auto py-5'>
                    <Skeleton />
                </div>
            ) : (
                <div className="mt-5">
                    {
                        activeStep === 0 && <AddressInfo address={address} />
                    }
                    {
                        activeStep === 1 && <PaymentMethod />
                    }
                    {
                        activeStep === 2 && <OrderSummary
                            totalPrice={totalPrice}
                            cart={cart}
                            address={selectedUserCheckoutAddress}
                            paymentMethod={paymentMethod}
                        />
                    }
                    {
                        activeStep === 3 &&
                        <>
                            {paymentMethod === "Stripe" ? (
                                <StripePayment />
                            ) : (
                                <PaypalPayment />
                            )}
                        </>
                    }
                </div>
            )}



            <div
                style={{boxShadow: "0 -2px 4px rgba(100,100,100,0.15"}}
                className="flex justify-between items-center px-4 fixed z-50 h-24 bottom-0 bg-white left-0 w-full py-4 border-slate-800">
                <Button
                    variant='outlined'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    >
                        Back
                </Button>
                {activeStep !== steps.length -1 && (
                    <button
                        className={`bg-blue-600 font-semibold px-6 h-10 rounded-md text-white ${
                            errorMessage ||
                            (activeStep === 0 && !selectedUserCheckoutAddress) ||
                            (activeStep === 1 && !paymentMethod)
                            ? "opacity-60"
                                : ""
                        }`}
                        disabled={
                            errorMessage || (
                                activeStep === 0 ? !selectedUserCheckoutAddress
                                    : activeStep === 1 ? !paymentMethod : false
                            )
                        }
                        onClick={handleNext}
                    >
                        Proceed
                    </button>
                )}
            </div>

            {errorMessage && <ErrorPage message={errorMessage} />}

        </div>
    )
}

export default Checkout;