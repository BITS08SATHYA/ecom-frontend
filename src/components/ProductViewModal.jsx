import {Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'
import { useState } from 'react'
import {MdClose, MdDone} from "react-icons/md";
import Status from "./Status.jsx";

function ProductViewModal({open, setOpen, product, isAvailable}) {

    // let [isOpen, setIsOpen] = useState(true)

    const {id,
        productName,
        image,
        description,
        quantity,
        price,
        discount,
        specialPrice} = product;

    const handleClickOpen = () => {
        setOpen(true);
    }

    // function open() {
    //     setOpen(true)
    // }
    //
    // function close() {
    //     setIsOpen(false)
    // }

    return (
        <>
            {/*<Button*/}
            {/*    onClick={open}*/}
            {/*    className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"*/}
            {/*>*/}
            {/*    Open dialog*/}
            {/*</Button>*/}

            <Dialog open={open} as="div" className="relative z-10" onClose={close}>
                <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transistion-all
                            md:max-w-[620px] md:min-w-[620px] w-full"
                        >

                            {
                                image && (
                                    <div className='flex justify-center aspect-[3/2]'>
                                    <img
                                         src={image} alt={productName} />
                                    </div>
                                )
                            }
                            <div className='px-6 pt-10 pb-2'>
                                <DialogTitle as="h1" className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6  text-gray-800 mb-4">
                                    {productName}
                                </DialogTitle>
                            </div>
                            <div>
                            {
                                isAvailable ? (
                                <Status
                                    text="In Stock"
                                    icon={MdDone}
                                    bg="bg-teal-200"
                                    color="text-teal-900"
                                />
                                ) : (
                                <Status
                                    text="Out of Stock"
                                    icon={MdClose}
                                    bg="bg-rose-200"
                                    color="text-rose-905"
                                />
                                )
                            }
                    </div>

                            <p className="mt-2 text-sm/6 text-slate-600">
                                {description}
                            </p>
                            <div className="mt-4">
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                                    onClick={() => setOpen(false)}
                                >
                                    Got it, thanks!
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ProductViewModal