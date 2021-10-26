'use strict';

function initMap() {

  //Church location object
  var MapLocation = {
    lat: 40.628520,
    lng: -74.031539
  };

  //user locations object
  var UserLocation = [{
      username: 'Aaron Williams',
      lat: 40.630826,
      lng: -74.038738,
      Lastlogin: "10/11/2019",
      Totaldonation: "5000",
      MembersType: 'Free',
      img: 'assets/img/map/user_image_1.png'
    },
    {
      username: 'Aaron Williams',
      lat: 40.620445,
      lng: -74.033166,
      Lastlogin: "06/02/2019",
      Totaldonation: "400",
      MembersType: 'Subscribed',
      img: 'assets/img/map/user_image_2.png'
    },
    {
      username: 'Aaron Williams',
      lat: 40.629336,
      lng: -74.026047,
      Lastlogin: "02/05/2019",
      Totaldonation: "20,000",
      MembersType: 'Free',
      img: 'assets/img/map/user_image_3.png'
    },
  ];

  // Map Zooming level
  var MapZoom = 15;

  // Basic Map
  var Map = new google.maps.Map(document.getElementById('Map'), {
    zoom: MapZoom,
    center: MapLocation,
    styles: [{
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      }
    ]
  });

  //Markers_custom_Primary_Location
  var image = 'assets/img/map/church_img.png';
  var marker_1 = new google.maps.Marker({
    position: MapLocation,
    map: Map,
    animation: google.maps.Animation.PULSE,
    icon: image
  });

  //Create and open InfoWindow.
  var infowindow = new google.maps.InfoWindow();

  function initUser(user) {
    var myLatlng = new google.maps.LatLng(user.lat, user.lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: Map,
      title: user.username,
      animation: google.maps.Animation.DROP,
      icon: user.img
    });

    //InfoWindow connection
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.close(); // Close previously opened infowindow
      infowindow.setContent("<div class='ss-dash-info-window p-2' id='infowindow'><p><strong>Username</strong>: " + user.username + "</p> <p><strong>Last Login</strong>: " + user.Lastlogin + "</p> <p><strong>Total Donation</strong>: $ " + user.Totaldonation + "</p> <p><strong>Membership</strong>: " + user.MembersType + "</p></div>");
      infowindow.open(Map, marker);
    });

    if (user != undefined || user != null || user != "") {
      infowindow.setContent("<div class='ss-dash-info-window p-2' id='infowindow'><p><strong>Username</strong>: " + user.username + "</p> <p><strong>Last Login</strong>: " + user.Lastlogin + "</p> <p><strong>Total Donation</strong>: $ " + user.Totaldonation + "</p> <p><strong>Membership</strong>: " + user.MembersType + "</p></div>");
      console.log(infowindow.open(Map, marker));
    }


  }

  for (var i = 0; i < UserLocation.length; i++) {
    initUser(UserLocation[i]);
  }

}

//map_marker_animation_bounce
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
