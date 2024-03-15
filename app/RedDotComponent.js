'use client'
import React, { useState, useEffect } from 'react';

const RedDotComponent = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const isMobile = () => {
        const width = typeof window !== "undefined" ? window.innerWidth : 1080;
        return width <= 640; // Adjust the width threshold according to your needs
    };

    useEffect(() => {
        const updateMousePosition = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', updateMousePosition);

        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className="fixed w-full h-full z-20 mix-blend-exclusion">
            {!isMobile() && <div
                className="absolute w-4 h-4 -mt-2 -ml-2 bg-red-900  rounded-full "
                style={{ top: position.y, left: position.x }}
            />}
        </div>
    );
};

export default RedDotComponent;
