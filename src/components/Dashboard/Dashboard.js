import React, {useEffect, useState} from 'react';
import Logo from "../../assets/images/final_final.png";
import { HiMagnifyingGlass } from "react-icons/hi2";
import DashboardHeader from "./DashboardHeader";
import { FaHome } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { BsStars } from "react-icons/bs";
import {FaM, FaMessage} from "react-icons/fa6";
import axios from "axios";

const Dashboard = () => {
    const [data, setData] = useState({});
    const [profile, setProfile] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/api/user');
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching the data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className = "bg-neutral-950 h-screen w-full flex flex-col">
            <DashboardHeader name = {data.name} image = {data.image} profile={() => setProfile(!profile)}/>
            <div className = "h-full p-2 w-1/4">
                <div className = "rounded-md flex flex-col bg-[#111111] border-[1px] border-neutral-700 py-8 px-6">
                    <div className = "flex flex-row justify-between items-center mb-8">
                        <h1 className = "text-neutral-200 text-2xl">Shortcuts</h1>
                        <div className = "bg-blue-600 rounded-lg flex flex-col items-center justify-center px-4 py-1 cursor-pointer hover:bg-blue-700 transform duration-300">
                            <h1 className = "text-white">New</h1>
                        </div>
                    </div>
                    <div className = "flex flex-row items-center cursor-pointer text-neutral-300  hover:text-blue-500 transform duration-300 mb-8">
                        <FaHome className = "text-neutral-300 mr-4 w-8 h-8"/>
                        <h1 className = "text-xl">Home</h1>
                    </div>
                    <div className = "flex flex-row items-center cursor-pointer text-neutral-300 hover:text-blue-500 transform duration-300 mb-8">
                        <GoStarFill className = "text-neutral-300 mr-4 w-8 h-8"/>
                        <h1 className = " text-xl">Your Posts</h1>
                    </div>
                    <div className = "flex flex-row items-center cursor-pointer text-neutral-300  hover:text-blue-500 transform duration-300 mb-8">
                        <FaMessage className = "text-neutral-300 mr-4 w-8 h-8"/>
                        <h1 className = "text-xl">Messages</h1>
                    </div>
                    <div className = "flex flex-row items-center cursor-pointer text-neutral-300 hover:text-blue-500 transform duration-300">
                        <BsStars className = "text-neutral-300 mr-4 w-8 h-8"/>
                        <h1 className = "text-xl">Friends</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;