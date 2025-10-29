// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Leaflet map
  const map = L.map('map').setView([20.5937, 78.9629], 5); // Center of India

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Example delivery locations
  const deliveryLocations = [
    { name: "Delhi Outlet", coords: [28.6139, 77.2090] },
    { name: "Mumbai Outlet", coords: [19.0760, 72.8777] },
    { name: "Bangalore Outlet", coords: [12.9716, 77.5946] },
    { name: "Hyderabad Outlet", coords: [17.3850, 78.4867] },
    { name: "Chennai Outlet", coords: [13.0827, 80.2707] }
  ];

  // Add markers for all outlets
  deliveryLocations.forEach(loc => {
    L.marker(loc.coords)
      .addTo(map)
      .bindPopup(`<b>${loc.name}</b><br>We deliver fresh fruits here!`);
  });

  // Get user location
  map.locate({ setView: true, maxZoom: 15 });
  
  function onLocationFound(e) {
    const radius = e.accuracy;
    L.marker(e.latlng).addTo(map)
      .bindPopup("You are within " + Math.round(radius) + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(map);
  }

  function onLocationError(e) {
    alert("Unable to get your location: " + e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);
});

