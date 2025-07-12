import { use, useEffect, useState } from 'react';
import data from './data.json'
import './App.css'

export default function Table(){

    const [suma, setSuma] = useState(0);
    const [maxSuma, setMaxSuma] = useState(0);

    useEffect(() => {

        let max = 0;
        let total = 0;
    
        for (let i = 0; i < 7; i++) {
            const amount = parseFloat(data[i].amount);
            total += amount;
            max = Math.max(max, amount);
        }
    
        setSuma(total);
        setMaxSuma(max);

    }, [data]);
    
    function selectHeight(i){

        if(maxSuma >= 500){
            let div;

            div = parseInt(maxSuma/10);
            let str = div + '';

            let divisor = Math.pow(10, str.length-2);
            
            return data[i].amount / divisor;

        }else if(maxSuma>200){
            return data[i].amount/2;
        }else if(maxSuma >= 150){
            return data[i].amount;
        }else if(maxSuma<150){
            return data[i].amount*2;
        }

    }

    function selectHeightContainer(){
        if(maxSuma >= 500){
            let div;

            div = parseInt(maxSuma/10);
            let str = div + '';

            let divisor = Math.pow(10, str.length-2);
            
            return maxSuma / divisor;

        }else if(maxSuma>200){
            return maxSuma/2;
        }else if(maxSuma >= 150){
            return maxSuma;
        }else if(maxSuma<150){
            return maxSuma*2;
        }
    }
    
    return(
        <>
            <div className='body'>
                <div className='chart-container'>
                    <div className="head-container">
                        <div className='my-balance-container'>
                            <label>My balance</label>
                            <input className='my-balance' value={'$921.48'} readOnly></input>
                        </div>

                        <div className='logo'></div>
                    </div>

                    <div className="body-container">
                        <h3>Spending - Last 7 days</h3>
                        
                        <div style={{height:`${selectHeightContainer()+72}px`}} className="results-container">
                            {data.map((day, i)=>(
                                
                                <div key={i} className='bar-container'>
                                    <span>{`$${day.amount}`}</span>
                                    <div className='bar' style={{width: '30px', height: `${selectHeight(i)}px`}}>
                                    </div>
                                    <label>{day.day}</label>
                                </div>

                            ))}
                        </div>
                        
                        <div className="body-foot-container">
                            <div>
                                <span>Total this month</span>
                                <input value={`$${suma}`} readOnly></input>
                            </div>

                            <div>
                                <span>+2.4%</span>
                                <span>from last month</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}