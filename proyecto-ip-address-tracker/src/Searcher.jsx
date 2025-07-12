import Map from "./Map";
import './App.css'
import { useEffect, useState } from "react";

export default function Searcher(){
    const [ipRes, setIpRes] = useState('');
    const [ipInput, setIpInput] = useState('');
    const [location, setLocation] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [isp, setIsp] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    useEffect(()=>{ 
        fetchFunction();
    },[])


    const fetchFunction = async () => {
            
        try{

            const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_hHH9z4Oy0Ps7L50RCwnYC6Ufbuvxo&ipAddress=${ipInput}`);

            if(!res.ok){
                throw new Error("HTTP ERRROR: ", res.status);
            }

            const result = await res.json();

            setLocation(`${result.location.country}, ${result.location.region}`);
            setTimeZone(result.location.timezone);
            setIsp(result.isp);
            setIpRes(result.ip);
            setLat(result.location.lat);
            setLng(result.location.lng);

        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <div className="body">
                <div className="head-container">
                    <h1>IP Address Tracker</h1>
                    
                    <div className="input-container">
                        <input value={ipInput} onChange={(e)=>setIpInput(e.target.value)} placeholder="Search for any IP address"></input>
                        <button onClick={()=>fetchFunction()}></button>
                    </div>

                    <div className="results-container">
                        <div className="address-container">
                            <span>IP ADDRESS</span>
                            <span>{ipRes}</span>
                        </div>

                        <div className="location-container">
                            <span>LOCATION</span>
                            <span>{location}</span>
                        </div>

                        <div className="timezone-container">
                            <span>TIMEZONE</span>
                            <span>{timeZone}</span>
                        </div>

                        <div className="isp-container">
                            <span>ISP</span>
                            <span>{isp}</span>
                        </div> 
                    </div>
                </div>

                <div className="map-container">
                    <Map x={lat} y={lng}/>
                </div>
            </div>
        </>
    );
}