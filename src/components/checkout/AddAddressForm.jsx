import React, {useEffect, useState} from 'react';
import {AiOutlineLogin} from "react-icons/ai";
import InputField from "../shared/InputField.jsx";
import Spinners from "../shared/Spinners.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {addUpdateUserAddress, authenticateSignInUser} from "../../store/actions/index.js";
import toast from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {FaAddressCard} from "react-icons/fa";

const AddAddressForm = ({ address, setOpenAddressModal }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { btnLoader } = useSelector((state) => state.errors);
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm({
        mode: "onTouched",
    })

    const loginHandler = async (data) => {
        console.log("Login Click")
        // dispatch(authenticateSignInUser(data, toast, reset, navigate, setLoader))
    }

    const onSaveAddressHandler = async (data) => {
            dispatch(addUpdateUserAddress(
                data,
                toast,
                address?.addressId,
                setOpenAddressModal
            ))
    }

    useEffect(() => {
        if (address?.addressId){
            setValue("buildingName", address?.buildingName)
            setValue("city", address?.city)
            setValue("street", address?.street)
            setValue("state", address?.state)
            setValue("zipcode", address?.zipcode)
            setValue("country", address?.country)
        }
    }, [address]);


  return (

      <div className="">
          <form
              onSubmit={handleSubmit(onSaveAddressHandler)}
              className=""
          >
              <div className="flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800  py-2 px-4">
                  <FaAddressCard className="mr-2 text-2xl"/>
                  {!address?.addressId
                      ? "Add Address"
                      : "Update Address" }
              </div>

              <div className="flex flex-col gap-4">
                  <InputField
                      label="Building Name"
                      required
                      id="buildingName"
                      type="text"
                      placeholder="Enter Building Name"
                      message="*Building name is required"
                      register={register}
                      error={errors}
                  />

                  <InputField
                      label="City"
                      required
                      id="city"
                      type="text"
                      placeholder="Enter City"
                      message="*City is required"
                      register={register}
                      error={errors}
                  />

                  <InputField
                      label="State"
                      required
                      id="state"
                      type="text"
                      placeholder="Enter State"
                      message="*State is required"
                      register={register}
                      error={errors}
                  />

                  <InputField
                      label="PinCode"
                      required
                      id="zipcode"
                      type="text"
                      placeholder="Enter PinCode"
                      message="*PinCode is required"
                      register={register}
                      error={errors}
                  />

                  <InputField
                      label="Street"
                      required
                      id="street"
                      type="text"
                      placeholder="Enter Street"
                      message="*Street is required"
                      register={register}
                      error={errors}
                  />

                  <InputField
                      label="Country"
                      required
                      id="country"
                      type="text"
                      placeholder="Enter Country"
                      message="*Country is required"
                      register={register}
                      error={errors}
                  />
              </div>

              <button
                  disabled={btnLoader}
                  className="text-white bg-blue-500 px-4 py-2 rounded-md mt-4"
                  type="submit">
                  {btnLoader ? (
                      <>
                          <Spinners />    Loading....
                      </>
                  ): (
                      <>Save</>
                  )}
              </button>

          </form>
      </div>

  );
};

export default AddAddressForm;