import { useState, useEffect } from 'react';

import "./App.css";

const App: React.FC<{}> = () => {
    const [fullCups, setFullCups] = useState<number>(0);
    const [percentage, setPercentage] = useState<number>(0);
    const [remained, setRemained] = useState<number>(2);

    useEffect(() => {
        setPercentage(fullCups / 8 * 100);
        setRemained(2 - (250 * fullCups / 1000));
    }, [fullCups]);

const handleClick = (index: number) => {
    const newFullCups = fullCups === index + 1 
        ? index 
        : (index === 7 && fullCups === 8) 
            ? 7 
            : index + 1;
    setFullCups(newFullCups);
};

    const smallCups = Array(8).fill(0).map((_, index: number) => (
        <div
            key={index}
            className={`cup cup-small ${index < fullCups ? 'full' : ''}`}
            onClick={() => handleClick(index)}
        >
            250 ml
        </div>
    ));

    return (
        <div className="App">
            <h1>Drink Water</h1>
            <h3>Goal: 2 Liters</h3>
            <div className="cup">
                <div className={`remained ${percentage === 100 ? 'full' : ''}`} id="remained">
                    <span id="liters">{remained}L</span>
                    <small>Remained</small>
                </div>
                <div
                    className="percentage"
                    id="percentage"
                    style={{
                        visibility: fullCups === 0 ? 'hidden' : 'visible',
                        height: `${ percentage / 100 * 330}px`,
                    }}
                >
                    {`${percentage}%`}
                </div>
            </div>
            <p className="text">Select how many glasses of water that you have drank</p>
            <div className="cups">{smallCups}</div>
        </div>
    );
}

export default App;
