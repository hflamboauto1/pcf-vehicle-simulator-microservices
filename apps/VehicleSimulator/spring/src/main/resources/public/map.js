var map;
var marker;

function initialize() 
{
    var mapOptions = 
    {
      center: { lat: 39.833333, lng: -98.583333},
      zoom: 4
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

function addLatLngToNewMap( latitude, longitude)
{
    console.debug("adding latlng to map");
    
	var mapCanvas = $( "#map-canvas")[0];
   	var latlng = new google.maps.LatLng (latitude, longitude);
   	var mapOptions = {
           	center: latlng,
           	zoom: 13,
           	mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map( mapCanvas, mapOptions);

    var markerOptions = {
            position: latlng,
            title: "Current Vehicle Location",
            map: map
    }

    marker = new google.maps.Marker( markerOptions );

    return map;
}

function updateMap(latitude, longitude)
{
    var latlng = new google.maps.LatLng( latitude, longitude );
    marker.setPosition( latlng );
    map.panTo( latlng );
	return map;
} 

function addMarkerToMap(map, lat, lng, iconUrl, iconSizeX, iconSizeY, title)
{
    var latlng = new google.maps.LatLng ( lat, lng );
    
    var mapIcon = {
            url: iconUrl,
            size: new google.maps.Size(iconSizeX, iconSizeY),
            orign: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, iconSizeY)
    }

    var markerOptions = {
            icon: mapIcon,
            position: latlng,
            title: title,
            map: map
    }

    var marker = new google.maps.Marker( markerOptions );
}
