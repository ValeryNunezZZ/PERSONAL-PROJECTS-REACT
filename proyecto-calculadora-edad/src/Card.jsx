import { useState } from "react";

function Card(){

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const [dayResult, setDayResult] = useState('');
    const [monthResult, setMonthResult] = useState('');
    const [yearResult, setYearResult] = useState('');

    function calcular(){

        let date = new Date();

        const currentDay = date.getDate();
        const currentMonth = date.getMonth() + 1;
        const currentYear = date.getFullYear();

        let resYear = currentYear - year;
        let resMonth = currentMonth - month;
        let resDay = currentDay - day;

        if(resDay < 0){
            resMonth--;

            date = new Date(currentYear, currentMonth, 0);

            resDay += date.getDate();
        }

        if(resMonth < 0){
            resYear--;
            resMonth += 12;
        }

        setDayResult(resDay);
        setMonthResult(resMonth);
        setYearResult(resYear);
    }

    return(
        <>
            <div className="body">
                <div className="card">
                    <div className="container">
                        <div className="input-container">
                            <label className="label1">DAY</label>
                            <input value={day} placeholder="DD" onChange={(e)=>setDay(e.target.value)}></input>

                            <label className="label2">MONTH</label>
                            <input value={month} placeholder="MM" onChange={(e)=>setMonth(e.target.value)}></input>

                            <label className="label3">YEAR</label>
                            <input value={year} placeholder="YYYY" onChange={(e)=>setYear(e.target.value)}></input>
                            <div></div>
                            <button onClick={() => calcular()}></button>
                        </div>

                        <div className="container-results">
                            <div className="container-results-text">
                                <input value={yearResult} placeholder="--" readOnly></input>
                                <label>years</label>
                            </div>

                            <div className="container-results-text">
                                <input value={monthResult} placeholder="--" readOnly></input>
                                <label>months</label>
                            </div>

                            <div className="container-results-text">
                                <input value={dayResult} placeholder="--" readOnly></input>
                                <label>days</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card