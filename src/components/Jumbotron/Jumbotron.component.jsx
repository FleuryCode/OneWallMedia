import React, { useEffect, useState } from 'react';
import './Jumbotron.styles.scss';
import { useSwipeable } from 'react-swipeable';

export const JumbotronItem = ({ children, width, image }) => {
    return (
        <div className="jumbotron-item">
            <img src={image} alt="" />
        </div>
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

        }, 4000);

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