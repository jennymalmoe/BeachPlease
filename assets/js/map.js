//Declare a function to create the map
function initMap() {

    //mapProp variable defines the properties of the map
    const mapProp = {

        //center prperty spec where to centre the map or pass in the coordinates fr an external variable/function
        center: { 
            lat: 55.990257, 
            lng: 13.595769
        },

        //set the zoom level of the map
        zoom: 5,
    };

//creates a new map inside the div that has the id of "map" set it then calls the properties to see how to render the map
const map = new google.maps.Map(document.getElementById("map"), mapProp);
}

