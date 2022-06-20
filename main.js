let latitude = 12.872226
let longitude = 77.577471
mapboxgl.accessToken = 'pk.eyJ1IjoibmlzaGFwaWxsYXkiLCJhIjoiY2wzazVidXh5MWFqbjNibGpyczcxamtieiJ9.NtJXl88vBVxssEbH8QakuQ'

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    centre:[longitude, latitude],
    zoom:16
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positonOptions: {enableHighAccuracy:true},
        trackUserLocation : true
    })
)

map.addControl(
    new MapboxDirections({
        accessToken : mapboxgl.accessToken
    }),
    'top-left'
)