import { useEffect } from "react";

export default function Map({x,y}){

    useEffect(() => {
        // Check if map already exists on the element
        const existing = document.getElementById('map');
        
        const map = L.map('map').setView([x, y], 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        var marker = L.marker([x, y]).addTo(map);
    
        // Cleanup on unmount
        return () => {
            map.remove();
        };
    }, [x,y]);

    return(
        <>
            <div id="map"></div>
        </>
    );
}