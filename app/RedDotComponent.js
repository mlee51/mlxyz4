import React, { useState, useEffect } from 'react';

const RedDotComponent = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        if (typeof window !== "undefined") {
            document.addEventListener('mousemove', updateMousePosition);
        }

        return () => {
            if (typeof window !== "undefined") {
                document.removeEventListener('mousemove', updateMousePosition);
            }
        };
    }, []);


    return (
        <div className="hidden sm:block fixed w-full h-full z-40 mix-blend-exclusion pointer-events-none">
            <div className="fixed w-8 h-8 -mt-4 -ml-4 bg-red-900 opacity-40  rounded-full"
                style={{ top: position.y, left: position.x }}
            />
        </div>
    );
};

export default RedDotComponent;
