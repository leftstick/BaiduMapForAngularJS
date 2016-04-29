
export const createInstance = function(opts, element) {
    // create map instance
    var map = new BMap.Map(element[0]);

    // init map, set central location and zoom level
    map.centerAndZoom(new BMap.Point(opts.center.longitude, opts.center.latitude), opts.zoom);
    if (opts.navCtrl) {
        // add navigation control
        map.addControl(new BMap.NavigationControl());
    }
    if (opts.scaleCtrl) {
        // add scale control
        map.addControl(new BMap.ScaleControl());
    }
    if (opts.overviewCtrl) {
        //add overview map control
        map.addControl(new BMap.OverviewMapControl());
    }
    if (opts.enableScrollWheelZoom) {
        //enable scroll wheel zoom
        map.enableScrollWheelZoom();
    }

    // set the city name
    map.setCurrentCity(opts.city);
    return map;

};

export const createMarker = function(marker, pt) {
    if (marker.icon) {
        var icon = new BMap.Icon(marker.icon, new BMap.Size(marker.width, marker.height));
        return new BMap.Marker(pt, {icon: icon});
    }
    return new BMap.Marker(pt);

};

export const redrawMarkers = function(map, previousMarkers, opts) {

    previousMarkers.forEach(function({marker, listener}) {
        marker.removeEventListener('click', listener);
        map.removeOverlay(marker);
    });

    previousMarkers.length = 0;

    if (!opts.markers) {
        return;
    }

    opts.markers.forEach(function(marker) {

        var marker2 = createMarker(marker, new BMap.Point(marker.longitude, marker.latitude));

        // add marker to the map
        map.addOverlay(marker2);
        let previousMarker = {marker: marker2, listener: null};
        previousMarkers.push(previousMarker);

        if (!marker.title && !marker.content) {
            return;
        }
        let msg = `<p>${marker.title || ''}</p><p>${marker.content || ''}</p>`;
        let infoWindow2 = new BMap.InfoWindow(msg, {
            enableMessage: !!marker.enableMessage
        });
        previousMarker.listener = function() {
            this.openInfoWindow(infoWindow2);
        };
        marker2.addEventListener('click', previousMarker.listener);
    });
};
