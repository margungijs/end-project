import React, { useEffect, useState } from 'react';
import axios from "axios";
import ShortcutPreview from "./ShortcutPreview";
import {FaRegUserCircle} from "react-icons/fa";
import ShortcutConfiguration from "./ShortcutConfiguration";
import ShortcutCustomisation from "./ShortcutCustomisation";

const ShortcutMain = () => {
    const [shortcuts, setShortcuts] = useState([]);
    const [shortcutName, setShortcutName] = useState('');
    const name = localStorage.getItem('name');
    const image = localStorage.getItem('image');
    const [newShortcut, setNewShortcut] = useState({
        name: "",
        route: "",
        icon: 0,
        color: "",
        hover_color: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/api/authenticated/shortcuts');
                setShortcuts(response.data.shortcuts);
            } catch (error) {
                console.error('Error fetching the data', error);
            }
        };

        fetchData();
    }, []);

    const newRoute = (route) => {
        setNewShortcut(prevState => ({
            ...prevState,
            route: route
        }));
    }

    const newIcon = (icon) => {
        setNewShortcut(prevState => ({
            ...prevState,
            icon: icon
        }));
    }

    const newColor = (color) => {
        setNewShortcut(prevState => ({
            ...prevState,
            color: color
        }));
    }

    const newHover = (color) => {
        setNewShortcut(prevState => ({
            ...prevState,
            hover_color: color
        }));
    }

    return (
        <div className = "flex flex-row w-3/4 gap-4">
            <div className = "p-2 w-2/3 flex flex-col">
                <h1 className = "text-neutral-200 text-2xl mb-2">Shortcut creation</h1>
                <h1 className="text-neutral-600 mb-2 text-xl">Create personalised shortcuts throughout Chronicle - choose parts of Chronicle you want to access quicker and customise your shortcut</h1>
                <h1 className = "text-neutral-200 text-xl mb-1">Name your shortcut</h1>
                <h1 className = "text-neutral-600 text-md mb-2">Pick whatever name you want, it's your shortcut after all</h1>
                <div className = "flex flex-row items-center py-2 gap-4 w-full mb-4">
                    <div className = "flex flex-row w-1/2 items-center gap-2">
                        {image != "null" ? (
                            <img src={image} alt=""/>
                        ) : (
                            <FaRegUserCircle className = "w-8 h-8 text-neutral-700 cursor-pointer"/>
                        )}
                        <h1 className = "text-neutral-200 text-md">{name}->Shortcuts->{shortcutName}</h1>
                    </div>
                    <div className = "flex flex-row w-1/2 items-center">
                        <input
                            type="text"
                            className = "bg-[#111111] text-neutral-200 border-[1px] w-full border-neutral-700 rounded-md placeholder-neutral-600 indent-2 py-1 focus:outline-none focus:ring-[1px] focus:ring-neutral-200 transition duration-200"
                            placeholder = "shortcut name"
                            onChange={(e) => {
                                setShortcutName(e.target.value);
                                setNewShortcut(prevState => ({
                                    ...prevState,
                                    name: e.target.value
                                }));
                            }}
                        />
                    </div>
                </div>
                {shortcutName !== "" && (
                    <>
                        <h1 className = "text-neutral-200 text-xl mb-1">Configure your shortcut</h1>
                        <h1 className = "text-neutral-600 text-md mb-2">Choose a part of Chronicle you want to navigate quicker to</h1>
                        <ShortcutConfiguration newRoute = {newRoute}/>
                    </>
                )}
                {newShortcut.route !== "" && (
                    <>
                        <h1 className = "text-neutral-200 text-xl mb-1">Customise your shortcut</h1>
                        <h1 className = "text-neutral-600 text-md mb-2">Customise your shortcut to meet your aesthetic</h1>
                        <ShortcutCustomisation setIcon = {newIcon} icon = {newShortcut.icon} setColor = {newColor} color = {newShortcut.color} setHover = {newHover} hover = {newShortcut.hover_color}/>
                    </>
                )}
                <div className = "rounded-md cursor-pointer transition px-2 duration-200 hover:bg-blue-700 bg-blue-600 w-fit p-1">
                    <h1 className = "text-neutral-200">Create</h1>
                </div>
            </div>
            <ShortcutPreview shortcuts={shortcuts} preview = {newShortcut}/>
        </div>
    );
};

export default ShortcutMain;