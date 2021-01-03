var map = L.map('mapid').setView([47.730428, 7.301058], 17);

var polygon = L.polygon([
    [47.731538, 7.300609],
    [47.731141, 7.302325],
    [47.729005, 7.301553],
    [47.729495, 7.299477]
]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([47.729746, 7.301738]).addTo(map)
    .bindPopup('SGM et MMI<br> Bâtiment E')
    .openPopup();

L.marker([47.729863, 7.301078]).addTo(map)
    .bindPopup('GMP<br> Bâtiment C')
    .openPopup();

L.marker([47.730712, 7.301593]).addTo(map)
    .bindPopup('GEII<br> Bâtiment B et A')
    .openPopup();

L.marker([47.730523, 7.300542]).addTo(map)
    .bindPopup('GEA<br> Bâtiment H et F')
    .openPopup();