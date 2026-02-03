import React, { useEffect, useRef, useState } from 'react';
import './Background.css';

const Background = () => {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                });
                setCursorVisible(true);
            }
        };

        const handleMouseLeave = () => {
            setCursorVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Calculate snapped grid position (50px is the grid size defined in CSS)
    const gridSize = 50;
    const highlightX = Math.floor(mousePosition.x / gridSize) * gridSize;
    const highlightY = Math.floor(mousePosition.y / gridSize) * gridSize;

    return (
        <div
            ref={containerRef}
            className="background-container"
            style={{
                '--mouse-x': `${mousePosition.x}px`,
                '--mouse-y': `${mousePosition.y}px`,
                '--highlight-x': `${highlightX}px`,
                '--highlight-y': `${highlightY}px`,
                '--opacity': cursorVisible ? 1 : 0
            }}
        >
            <div className="dot-pattern-bg"></div>
            <div className="dot-mask"></div>
            <div className="grid-highlight"></div>
        </div>
    );
};

export default Background;
