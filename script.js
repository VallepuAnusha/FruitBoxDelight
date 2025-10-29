// Initialize the map centered on India
const map = L.map('map').setView([20.5937, 78.9629], 5);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker example
const marker = L.marker([20.5937, 78.9629]).addTo(map);
marker.bindPopup("Hello from India!").openPopup();

// If you want to track live location:
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Add marker at current location
        const userMarker = L.marker([lat, lon]).addTo(map);
        userMarker.bindPopup("You are here!").openPopup();

        // Center map on user
        map.setView([lat, lon], 13);
    }, error => {
        console.error("Geolocation error:", error);
        alert("Unable to get your location.");
    }, {
        enableHighAccuracy: true
    });
} else {
    alert("Geolocation is not supported by your browser.");
}
