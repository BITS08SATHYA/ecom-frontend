import React, { useState, useEffect} from 'react';
import {Step, StepLabel, Stepper} from "@mui/material";
import AddressInfo from "./AddressInfo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getUserAddresses} from "../../store/actions/index.js";

const Checkout = () => {
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(0);
    const { isLoading, errorMessage } = useSelector((state) => state.errors);

    const { address }  = useSelector(
        (state) => state.auth
    )

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

            <div className="mt-5">
                {
                    activeStep === 0 && <AddressInfo address={address} />
                }
            </div>
        </div>
    )
}

export default Checkout;