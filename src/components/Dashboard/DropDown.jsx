import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { TiDocument } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import { PiSignOutBold } from "react-icons/pi";
import { IoTrailSignOutline } from "react-icons/io5";
import { BsStars, BsCollection } from "react-icons/bs";

const DropDown = ({name, image, open, status}) => {
    console.log(status)

    return (
        <div className={`absolute bg-[#111111] border-[1px] flex flex-col border-neutral-700 top-0 h-screen right-0 py-4 px-3 rounded-xl transform ${
            status ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}>
            <div className = "flex flex-row items-center justify-between border-b-[1px] border-neutral-700 pb-6">
                <div className = "flex flex-row items-center">
                    {image !== null ? (
                        <img src={image} className = "rounded-full w-7 h-7"/>
                    ) : (
                        <FaRegUserCircle className = "w-7 h-7 text-neutral-700"/>
                    )}
                    <h1 className = "text-neutral-200 ml-2 text-md">Margungijs</h1>
                </div>
                <IoIosClose onClick = {open} className = "text-2xl text-neutral-400 cursor-pointer ml-28"/>
            </div>
            <div className = "flex flex-col justify-center py-4 gap-2 border-b-[1px] border-neutral-700">
                <div className = "flex flex-row text-neutral-400 rounded-lg p-1 items-center cursor-pointer hover:bg-neutral-800 transition duration-200">
                    <FiUser className = "w-5 h-5 mr-2 text-neutral-400"/>
                    <h1 className = "text-md">Your profile</h1>
                </div>
                <div className = "flex flex-row text-neutral-400 rounded-lg p-1 items-center cursor-pointer hover:bg-neutral-800 transition duration-200">
                    <TiDocument className = "w-5 h-5 mr-2 text-neutral-400"/>
                    <h1 className = "text-md">Your templates</h1>
                </div>
                <div className = "flex flex-row text-neutral-400 rounded-lg p-1 items-center cursor-pointer hover:bg-neutral-800 transition duration-200">
                    <IoTrailSignOutline className = "w-5 h-5 mr-2 text-neutral-400"/>
                    <h1 className = "text-md">Your shortcuts</h1>
                </div>
                <div className = "flex flex-row text-neutral-400 rounded-lg p-1 items-center cursor-pointer hover:bg-neutral-800 transition duration-200">
                    <BsStars className = "w-5 h-5 mr-2 text-neutral-400"/>
                    <h1 className = "text-md">Your friends</h1>
                </div>
                <div className = "flex flex-row text-neutral-400 rounded-lg p-1 items-center cursor-pointer hover:bg-neutral-800 transition duration-200">
                    <BsCollection className = "w-5 h-5 mr-2 text-neutral-400"/>
                    <h1 className = "text-md">Your collection</h1>
                </div>
            </div>
            <div className = "flex flex-col justify-center py-4 gap-2 border-b-[1px]  border-neutral-700">
                <div className = "flex flex-row text-neutral-400 items-center rounded-lg p-1 cursor-pointer hover:bg-neutral-800 transition duration-200">
                    <CiSettings className = "w-5 h-5 mr-2 text-neutral-400"/>
                    <h1 className = "text-md">Settings</h1>
                </div>
            </div>
            <div className = "flex flex-col justify-center py-4 gap-2">
                <div className = "flex flex-row text-neutral-400 items-center cursor-pointer rounded-lg p-1 hover:bg-neutral-800 transition duration-200">
                    <PiSignOutBold className = "w-5 h-5 mr-2 text-neutral-400"/>
                    <h1 className = "text-md">Sign out</h1>
                </div>
            </div>
        </div>
    );
};

export default DropDown;