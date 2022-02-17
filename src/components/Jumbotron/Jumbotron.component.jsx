import React, { useEffect, useState } from 'react';
import './Jumbotron.styles.scss';
import { Link } from "react-router-dom";
import { useSwipeable } from 'react-swipeable';

export const JumbotronItem = ({ image, altText, heroText, subHeroText, link }) => {
    return (
        <Link to={`/${link}`} className="link">
            <div className="jumbotron-item" style={{backgroundImage: `url(${image})`}} >
                <h1 className='hero-text'>{heroText}</h1>
                <h3 className='sub-hero-text'>{subHeroText}</h3>
            </div>
        </Link>

    );
}


const Jumbotron = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }

        }, 30000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    });

    // Swipe functions
    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });
    return (
        <div
            {...handlers}
            className="jumbotronContainer mt-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className="indicators">
                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${(index === activeIndex) ? 'active' : ''}`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        >
                        </button>
                    )
                })}
            </div>
        </div>
    );
}

export default Jumbotron;