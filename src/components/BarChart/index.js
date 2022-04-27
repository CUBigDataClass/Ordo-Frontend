import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import 'react-circular-progressbar/dist/styles.css';


const BarChart = ({ value, sentiment }) => {
    return (
        <div>
            <div className='row' style={{ textAlign: 'center', fontSize: '20px' }}>
                <span>{sentiment}</span>
            </div>
            <div className='row'>
                {/* <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={value}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                >
                    {value => {
                        const roundedValue = Math.round(value);
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                styles={buildStyles({ pathTransition: "none" })}
                            />
                        );
                    }}
                </AnimatedProgressProvider> */}
                <CircularProgressbar
                    value={value}
                    text={`${value}%`}
                />
            </div>
        </div>
    )
}

export default BarChart
