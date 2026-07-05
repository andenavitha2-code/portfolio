import React from 'react';
import portfolio from "../assets/portfolio.png";
import weather from "../assets/weather.png";
import cred from "../assets/cred.png";
import auth from "../assets/auth.png";
import todo from "../assets/todo.png";
import qr from "../assets/qr.png";
import playlist from "../assets/playlist.png";
const images = {
    portfolio,
    weather,
    cred,
    auth,
    todo,
    qr,
    playlist,
};
export default function ProjectMockup({
    type,
    className = "w-full h-48",
}){
    return (
        <img src={images[type]}
        alt={type}
        className={'${className} w-full h-full object-cover rounded-xl'} />
    );
}