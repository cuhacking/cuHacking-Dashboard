import React from 'react';
import mapboxgl from 'mapbox-gl'
import RB from '../assets/RB.geojson'

mapboxgl.accessToken = 'pk.eyJ1IjoidGVqYXNocGF0ZWwiLCJhIjoiY2p5YWJoaHhrMDF4bzNtbzg1dzBwbGZyZiJ9.3pAUNTmqoMsgpEWoOZfKlw';

class Map extends React.Component {

    componentDidMount() {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [-75.6962, 45.38236],
            zoom: 18.6,
            bearing: -125
        });

        map.on('load', function () {
            map.addSource('river-building', {
                type: 'geojson',
                data: RB
            });

            // LAYER L1 ////////////////////////////////////////////////////

            map.addLayer({
                "id": "L1-1",
                "type": "line",
                "source": "river-building",
                'layout': {
                    'visibility': 'visible'
                },
                "paint": {
                    "line-color": "#7C39BF",
                    "line-width": 3
                },
                "filter": ["all", ["==", "floor", 1]]
            });
            map.addLayer({
                "id": "L1-2",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'visible'
                },
                "paint": {
                    "fill-color": "#00D0FE",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "room"], ["==", "floor", 1]]
            }, "L1-1");

            map.addLayer({
                "id": "L1-3",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "text-field": ["get", "room"],
                    "text-variable-anchor": ["center"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'visible'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 1], ["==", "type", "room"]]
            });
            map.addLayer({
                "id": "L1-4",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "icon-image": "toilet-15",
                    "text-field": "washroom",
                    "text-variable-anchor": ["top"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'visible'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 1], ["==", "type", "washroom"]]
            });
            map.addLayer({
                "id": "L1-5",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "icon-image": "prison-11",
                    "text-field": "elevator",
                    "text-variable-anchor": ["top"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'visible'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 1], ["==", "type", "elevator"]]
            });
            map.addLayer({
                "id": "L1-6",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "icon-image": "dot-9",
                    "text-field": "Stairs",
                    "text-variable-anchor": ["top"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'visible'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 1], ["==", "type", "stairs"]]
            });
            map.addLayer({
                "id": "L1-7",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'visible'
                },
                "paint": {
                    "fill-color": "yellow",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "washroom"], ["==", "floor", 1]]
            }, "L1-1");
            map.addLayer({
                "id": "L1-8",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'visible'
                },
                "paint": {
                    "fill-color": "white",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "hallway"], ["==", "floor", 1]]
            }, "L1-1");
            map.addLayer({
                "id": "L1-9",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'visible'
                },
                "paint": {
                    "fill-color": "red",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "elevator"], ["==", "floor", 1]]
            }, "L1-1");
            map.addLayer({
                "id": "L1-10",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'visible'
                },
                "paint": {
                    "fill-color": "blue",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "stairs"], ["==", "floor", 1]]
            }, "L1-1");


            // LAYER L2 ////////////////////////////////////////////////////


            map.addLayer({
                "id": "L2-1",
                "type": "line",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "line-color": "#7C39BF",
                    "line-width": 3
                },
                "filter": ["all", ["==", "floor", 2]]
            });
            map.addLayer({
                "id": "L2-2",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "fill-color": "#00D0FE",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "room"], ["==", "floor", 2]]
            }, "L1-1");

            map.addLayer({
                "id": "L2-3",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "text-field": ["get", "room"],
                    "text-variable-anchor": ["center"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'none'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 2], ["==", "type", "room"]]
            });
            map.addLayer({
                "id": "L2-4",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "icon-image": "toilet-15",
                    "text-field": "washroom",
                    "text-variable-anchor": ["top"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'none'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 2], ["==", "type", "washroom"]]
            });
            map.addLayer({
                "id": "L2-5",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "icon-image": "prison-11",
                    "text-field": "elevator",
                    "text-variable-anchor": ["top"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'none'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 2], ["==", "type", "elevator"]]
            });
            map.addLayer({
                "id": "L2-6",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "icon-image": "dot-9",
                    "text-field": "Stairs",
                    "text-variable-anchor": ["top"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'none'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 2], ["==", "type", "stairs"]]
            });
            map.addLayer({
                "id": "L2-7",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "fill-color": "yellow",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "washroom"], ["==", "floor", 2]]
            }, "L1-1");
            map.addLayer({
                "id": "L2-8",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "fill-color": "white",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "hallway"], ["==", "floor", 2]]
            }, "L1-1");
            map.addLayer({
                "id": "L2-9",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "fill-color": "red",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "elevator"], ["==", "floor", 2]]
            }, "L1-1");
            map.addLayer({
                "id": "L2-10",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "fill-color": "blue",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "stairs"], ["==", "floor", 2]]
            }, "L1-1");

            // LAYER L3 ////////////////////////////////////////////////////


            map.addLayer({
                "id": "L3-1",
                "type": "line",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "line-color": "#7C39BF",
                    "line-width": 3
                },
                "filter": ["all", ["==", "floor", 3]]
            });
            map.addLayer({
                "id": "L3-2",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "fill-color": "#00D0FE",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "room"], ["==", "floor", 3]]
            }, "L1-1");

            map.addLayer({
                "id": "L3-3",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "text-field": ["get", "room"],
                    "text-variable-anchor": ["center"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'none'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 3], ["==", "type", "room"]]
            });
            map.addLayer({
                "id": "L3-4",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "icon-image": "toilet-15",
                    "text-field": "washroom",
                    "text-variable-anchor": ["top"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'none'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 3], ["==", "type", "washroom"]]
            });
            map.addLayer({
                "id": "L3-5",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "icon-image": "prison-11",
                    "text-field": "elevator",
                    "text-variable-anchor": ["top"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'none'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 3], ["==", "type", "elevator"]]
            });
            map.addLayer({
                "id": "L3-6",
                "type": "symbol",
                "source": "river-building",
                "layout": {
                    "icon-image": "dot-9",
                    "text-field": "Stairs",
                    "text-variable-anchor": ["top"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    'visibility': 'none'
                },
                "paint": {
                    "text-color": "#ffffff"
                },
                "filter": ["all", ["==", "floor", 3], ["==", "type", "stairs"]]
            });
            map.addLayer({
                "id": "L3-7",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "fill-color": "yellow",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "washroom"], ["==", "floor", 3]]
            }, "L1-1");
            map.addLayer({
                "id": "L3-8",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "fill-color": "white",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "hallway"], ["==", "floor", 3]]
            }, "L1-1");
            map.addLayer({
                "id": "L3-9",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "fill-color": "red",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "elevator"], ["==", "floor", 3]]
            }, "L1-1");
            map.addLayer({
                "id": "L3-10",
                "type": "fill",
                "source": "river-building",
                'layout': {
                    'visibility': 'none'
                },
                "paint": {
                    "fill-color": "blue",
                    "fill-opacity": 0.75
                },
                "filter": ["all", ["==", "type", "stairs"], ["==", "floor", 3]]
            }, "L1-1");
        });
        document.getElementById("L1").onclick = function L1() {

            for (var i = 1; i < 11; i++) {
                map.setLayoutProperty("L2-" + i, 'visibility', 'none');
                map.setLayoutProperty("L3-" + i, 'visibility', 'none');
                map.setLayoutProperty("L1-" + i, 'visibility', 'visible');
            }
            for (var k = 1; k < 4; k++) {
                document.getElementById("L" + k).className = "";
            }
            document.getElementById("L1").className = "active";
        };
        document.getElementById("L2").onclick = function L2() {

            for (var i = 1; i < 11; i++) {
                map.setLayoutProperty("L1-" + i, 'visibility', 'none');
                map.setLayoutProperty("L3-" + i, 'visibility', 'none');
                map.setLayoutProperty("L2-" + i, 'visibility', 'visible');
            }
            for (var k = 1; k < 4; k++) {
                document.getElementById("L" + k).className = "";
            }
            document.getElementById("L2").className = "active";
        };
        document.getElementById("L3").onclick = function L3() {

            for (var i = 1; i < 11; i++) {
                map.setLayoutProperty("L1-" + i, 'visibility', 'none');
                map.setLayoutProperty("L2-" + i, 'visibility', 'none');
                map.setLayoutProperty("L3-" + i, 'visibility', 'visible');
            }
            for (var k = 1; k < 4; k++) {
                document.getElementById("L" + k).className = "";
            }
            document.getElementById("L3").className = "active";
        };
        map.on('click', 'L1-2', function (e) {
            document.getElementById("right-side-bar").classList.remove("col-1");
            document.getElementById("right-side-bar").classList.add("col-3");
            document.getElementById("map-main").classList.remove("col-11");
            document.getElementById("map-main").classList.add("col-9");


            document.getElementById("right-side-bar").style.display = "block";
            document.getElementById("info").innerHTML = "Room No: " + e.features[0].properties.room;

        });

        // Change the cursor to a pointer when the mouse is over the states layer.
        map.on('mouseenter', 'L1-2', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'L1-2', function () {
            map.getCanvas().style.cursor = '';
        });
        map.on('click', 'L2-2', function (e) {
            document.getElementById("right-side-bar").classList.remove("col-1");
            document.getElementById("right-side-bar").classList.add("col-3");
            document.getElementById("map-main").classList.remove("col-11");
            document.getElementById("map-main").classList.add("col-9");


            document.getElementById("right-side-bar").style.display = "block";
            document.getElementById("info").innerHTML = "Room No: " + e.features[0].properties.room;

        });

        // Change the cursor to a pointer when the mouse is over the states layer.
        map.on('mouseenter', 'L2-2', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'L2-2', function () {
            map.getCanvas().style.cursor = '';
        });
        map.on('click', 'L3-2', function (e) {
            document.getElementById("right-side-bar").classList.remove("col-1");
            document.getElementById("right-side-bar").classList.add("col-3");
            document.getElementById("map-main").classList.remove("col-11");
            document.getElementById("map-main").classList.add("col-9");


            document.getElementById("right-side-bar").style.display = "block";
            document.getElementById("info").innerHTML = "Room No: " + e.features[0].properties.room;

        });

        // Change the cursor to a pointer when the mouse is over the states layer.
        map.on('mouseenter', 'L3-2', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'L3-2', function () {
            map.getCanvas().style.cursor = '';
        });
        document.getElementById("close").onclick = function () {
            document.getElementById("right-side-bar").style.display = 'none';
            document.getElementById("right-side-bar").classList.remove("col-3");
            document.getElementById("right-side-bar").classList.add("col-1");
            document.getElementById("map-main").classList.remove("col-9");
            document.getElementById("map-main").classList.add("col-11");
        }
    }

    render() {
        return (
            <div className="row">
                <div className="Map col-11" id="map-main">
                    <nav id="menu">
                        <button className="" id="L3">L3</button>
                        <button className="" id="L2">L2</button>
                        <button className="active" id="L1">L1</button>
                    </nav>
                    <div id="map" />
                </div>
                <div className="col-1" id="right-side-bar">
                    <button id="close" className="btn btn-danger m-1">Close</button>
                    <h1 id="info">h</h1>
                    <h4>Event Description:</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
            </div>
        )
    }
}

export default Map;


