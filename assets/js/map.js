//Declare a function to create the map
function initMap() {

    //mapProp variable defines the properties of the map
    const mapProp = {

        //center property spec where to centre the map or pass in the coordinates fr an external variable/function
        center: new google.maps.LatLng(55.99, 13.59), 

        //set the zoom level of the map
        zoom: 8,
    };

//creates a new map inside the div that has the id of "map" set it then calls the properties to see how to render the map
    const map = new google.maps.Map(document.getElementById("map"), mapProp);


//add markers
    const myMarks = [{"lat": 55.38, "lng": 14.19, "name": "Sandhammaren", "information": `<div><i class="fas fa-water beach-icon1"<p> Stong winds and great waves. Attention Strong currents!</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-umbrella-beach beach-icons"<p> Miles of fine white sand</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-car beach-icons"<p> Free public car parks next to the beach</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class=" beach-icon2"></i></div>
                    <div><i class="fas fa-utensils beach-icons"<p> Limited facilities, only a small beach shack cafeteria</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-restroom beach-icons"<p> YES</p></i><i class="beach-icon2"></i><i class="beach-icon2"></i><i class="beach-icon2"></i></div>`},
                    {"lat": 55.92, "lng": 14.29, "name": "Åhus", "information": `<div><i class="fas fa-water beach-icon1"<p> The shallow water are perfect for families with small children</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-umbrella-beach beach-icons"<p> Several hundred meters of soft white sand</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-car beach-icons"<p> Free parking, 100 meters from the beach</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class=" beach-icon2"></i></div>
                    <div><i class="fas fa-utensils beach-icons"<p> NO</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-restroom beach-icons"<p> NO</p></i><i class="beach-icon2"></i><i class="beach-icon2"></i><i class="beach-icon2"></i></div>`},
                    {"lat": 55.61, "lng": 12.97, "name": "Västra Hamnen", "information": `<div><i class="fas fa-water beach-icon1"<p> Open air swimming right in the centre of the city</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-umbrella-beach beach-icons"<p> Wooden swim decks all along the boardwalk, often crowded</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-car beach-icons"<p> Plenty of car parks</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class=" beach-icon2"></i></div>
                    <div><i class="fas fa-utensils beach-icons"<p> The beachfront here is packed with restaurants, bars, cafés and nightclubs and it is bursting with life, especially in the summer</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-restroom beach-icons"<p> YES</p></i><i class="beach-icon2"></i><i class="beach-icon2"></i><i class="beach-icon2"></i></div>`},
                    {"lat": 55.41, "lng": 12.85, "name": "Skanör Falsterbo", "information": `<div><i class="fas fa-water beach-icon1"<p> Shallow clean water, perfect for families</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-umbrella-beach beach-icons"<p> 10 kilometre-long beach with white sand and high dunes</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-car beach-icons"<p> Parking lots are not free during the high season</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class=" beach-icon2"></i></div>
                    <div><i class="fas fa-utensils beach-icons"<p> Lots of cafes and restaurant</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-restroom beach-icons"<p> YES</p></i><i class="beach-icon2"></i><i class="beach-icon2"></i><i class="beach-icon2"></i></div>`},
                    {"lat": 56.28, "lng": 12.50, "name": "Mölle och Kullaberg", "information": `<div><i class="fas fa-water beach-icon1"<p> Plenty of caves in the cliffs</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-umbrella-beach beach-icons"<p> Dramatic cliffs</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-car beach-icons"<p> Free parking</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class=" beach-icon2"></i></div>
                    <div><i class="fas fa-utensils beach-icons" <p> NO</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-restroom beach-icons"<p> NO</p></i><i class="beach-icon2"></i><i class="beach-icon2"></i><i class="beach-icon2"></i></div>`},
                    {"lat": 55.65, "lng": 14.26, "name": "Stenshuvud", "information": `<div><i class="fas fa-water beach-icon1"<p> Clear, cold(!) water, be careful of currents</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-umbrella-beach beach-icons"<p> National Park with rocky coastland and sandy beaches</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-car beach-icons"<p> Free car park near main entrance</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class=" beach-icon2"></i></div>
                    <div><i class="fas fa-utensils beach-icons"<p> NO</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-restroom beach-icons"<p> YES</p></i><i class="beach-icon2"></i><i class="beach-icon2"></i><i class="beach-icon2"></i></div>`},
                    {"lat": 55.75, "lng": 14.18, "name": "Knäbäckshusen", "information": `<div><i class="fas fa-water beach-icon1"<p> Shallow shore, you have to walk quite far into the sea to swim.</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-umbrella-beach beach-icons"<p> Narrow, several kilometres long natural sandy beach</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-car beach-icons"<p> No official car park</p></i></div><i class="beach-icon2"</i></div><i class="beach-icon2"></i></div><i class=" beach-icon2"></i></div>
                    <div><i class="fas fa-utensils beach-icons"<p> NO</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-restroom beach-icons"<p> NO</p></i><i class="beach-icon2"></i><i class="beach-icon2"></i><i class="beach-icon2"></i></div>`},
                    {"lat": 55.59, "lng": 12.94, "name": "Ribban", "information": `<div><i class="fas fa-water beach-icon1"<p> Separate area for dogs and nudists!</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-umbrella-beach beach-icons"<p> Long, shallow, sandy beach, perfect for small children</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-car beach-icons"<p> A lot of paking spaces near by</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class=" beach-icon2"></i></div>
                    <div><i class="fas fa-utensils beach-icons"<p> YES</p></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div><i class="beach-icon2"></i></div>
                    <div><i class="fas fa-restroom beach-icons"<p> YES</p></i><i class="beach-icon2"></i><i class="beach-icon2"></i><i class="beach-icon2"></i></div>`}
];

let markers = [];

var InfoObj = [];

    for(i = 0; i < myMarks.length; i++) {
        let contentString = '<h3>' + myMarks[i].name + '</h3>' +
        '<p>' + myMarks[i].information + '</p>' +
        '<a href="https://www.skanetrafiken.se/">' + 'Public transport Skåne' + '</a>';

//marker constructor creates a marker, set postition property = to myMark
        const marker = new google.maps.Marker({

            position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
            map: map,
            title: myMarks[i].name,
            animation: google.maps.Animation.DROP,
  });
  const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 500
  });

  marker.addListener("click", function () {
      closeOtherInfo();
      infowindow.open(map, marker);
      InfoObj[0] = infowindow;
  });

markers.push(marker);
}

  function closeOtherInfo() {
      if( InfoObj.length > 0 ){
          InfoObj[0].set("marker", null);
          InfoObj[0].close();
          InfoObj[0].length = 0;
      }
  }

  
const dBtns = document.querySelectorAll('.destination-btns');
    dBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            google.maps.event.trigger(markers[i], 'click');
        })
    })
}

function OpenInfowindowForMarker(index) {
    google.maps.event.trigger(markers[index], 'click');
}


