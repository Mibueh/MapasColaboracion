var map = L.map('map').setView([37.1880, -3.7180], 15);

var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
});
osmBase.addTo(map);


var catastroBase = L.tileLayer.wms('http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
    layers: 'Catastro',
    format: 'image/png',
    transparent: false,
    continuousWorld : true,
    attribution: '<a href="https://www.sedecatastro.gob.es/"" target="_blank">Dirección General de Catastro</a>',
    maxZoom: 20
});


var bar1 = L.marker([37.1916462, -3.711131]).bindPopup('Bar d`tapas'),
    bar2 = L.marker([37.1915012, -3.7118028]).bindPopup('Bar santi'),
    bar3 = L.marker([37.1899571, -3.7166183]).bindPopup('Taberna el arco');
    bar4 = L.marker([37.191016, -3.717353]).bindPopup('El Reñidero');
    bar5 = L.marker([37.191542, -3.710769]).bindPopup('El Trocadero');

var bus1 = L.marker([37.189728, -3.71841]).bindPopup('Parada plaza'),
var bus2 = L.marker([37.190274 , -3.715949]).bindPopup('Parada optica'),
var bus3 = L.marker([37.191337, -3.711714]).bindPopup('Parada rotonda del reloj'),
var bus4 = L.marker([37.192012, -3.708805]).bindPopup('Parada parque de la rotonda'),
var bus5 = L.marker([37.188952, -3.721459]).bindPopup('Parada Carmen Salles'),
var bus6 = L.marker([37.192348, -3.71767]).bindPopup('Parada del puente'),

var bares = L.layerGroup([bar1, bar2, bar3]);
var bus = L.layerGroup([bus1, bus2, bus3, bus4, bus5, bus6]);


var baseMaps = {
    "Santa Fe": osmBase,
    "Catastro": catastroBase
};

var overlayMaps = {
    "Bares": bares,
    "Autobus": Buses,
};


L.control.layers(baseMaps, overlayMaps,{
	position: 'topright',
	collapsed: false
}).addTo(map);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
if (map.tap) map.tap.disable();
document.getElementById('map').style.cursor='default';
