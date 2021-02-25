function initMap() {
  L.mapquest.key = 'Z1YXIPGGDL6iMB5ksMKEqMTJypJ5pXQQ';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.87863177066982, -117.23579972871384],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });

  L.marker([32.87863177066982, -117.23579972871384]).addTo(map);
}
