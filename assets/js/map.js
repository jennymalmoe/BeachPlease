//Declare a function to create the map
function initMap() {

    //mapProp variable defines the properties of the map
    const mapProp = {

        //center prperty spec where to centre the map or pass in the coordinates fr an external variable/function
        center: new google.maps.LatLng(55.99, 13.59), 

        //set the zoom level of the map
        zoom: 8,
    };

//creates a new map inside the div that has the id of "map" set it then calls the properties to see how to render the map
    const map = new google.maps.Map(document.getElementById("map"), mapProp);


//add markers
    const myMarks = [{"lat": 55.99, "lng": 13.59, "name": "Sandhammaren", "information": `Sandhammaren is the blablablabla blsbslbslbsl blsbslbslbslsblsb blsbslbslsblsbslbbslbsl bslbslsblsblssblsbblsbslbsb bslbslbslsbslbslsblbsbs bslbslbslbslbslsbls.`},
                    {"lat": 55.92, "lng": 14.29}, "name": "Åhus", "information": `Åhus is the blablablabla blsbslbslbsl blsbslbslbslsblsb blsbslbslsblsbslbbslbsl bslbslsblsblssblsbblsbslbsb bslbslbslsbslbslsblbsbs bslbslbslbslbslsbls.`},
                    {"lat": 55.61, "lng": 12.98}, "name": "Västra Hamnen", "information": `Västra Hamnen is the blablablabla blsbslbslbsl blsbslbslbslsblsb blsbslbslsblsbslbbslbsl bslbslsblsblssblsbblsbslbsb bslbslbslsbslbslsblbsbs bslbslbslbslbslsbls.`},
                    {"lat": 55.41, "lng": 12.85}, "name": "Skanör Falsterbo", "information": `Skanör Falsterbo is the blablablabla blsbslbslbsl blsbslbslbslsblsb blsbslbslsblsbslbbslbsl bslbslsblsblssblsbblsbslbsb bslbslbslsbslbslsblbsbs bslbslbslbslbslsbls.`},
                    {"lat": 56.28, "lng": 12.50}, "name": "Mölle och Kullaberg", "information": `Mölle och Kullaberg is the blablablabla blsbslbslbsl blsbslbslbslsblsb blsbslbslsblsbslbbslbsl bslbslsblsblssblsbblsbslbsb bslbslbslsbslbslsblbsbs bslbslbslbslbslsbls.`},
                    {"lat": 55.65, "lng": 14.26}, "name": "Stenshuvud", "information": `Stenshuvud is the blablablabla blsbslbslbsl blsbslbslbslsblsb blsbslbslsblsbslbbslbsl bslbslsblsblssblsbblsbslbsb bslbslbslsbslbslsblbsbs bslbslbslbslbslsbls.`},
                    {"lat": 55.75, "lng": 14.18}, "name": "Knäbäckshusen", "information": `Knäbäckshusen is the blablablabla blsbslbslbsl blsbslbslbslsblsb blsbslbslsblsbslbbslbsl bslbslsblsblssblsbblsbslbsb bslbslbslsbslbslsblbsbs bslbslbslbslbslsbls.`}
];

var InfoObj = [];

    for(i = 0; i < myMarks.length; i++) {
        let contentString = '<h3>' + myMarks[i].name + '</h3>' +
        '<p>' + myMarks[i].information + '</p>' +
        '<a href="https://developers.google.com/maps/documentation/javascript/overview">>' + 'Click me!' + '</a>';

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
}

  function closeOtherInfo() {
      if( InfoObj.length > 0 ){
          InfoObj[0].set("marker", null);
          InfoObj[0].close();
          InfoObj[0].length = 0;
      }
  }
}


//call the map
initMap();