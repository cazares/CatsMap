// Texas State University CatsMap
// Authors: Miguel Cazares
//          Juan Gonzalez

var map;
var buildings = new Array(); //Creates the array which contains all buildingObjects
var paths = new Array(5); // Array of Paths
var numBuildings = 5;

// Creates 2-dimensional array of paths
// Retrieval procedure: if you want the path from Alk to Derr... since Alk is building 0 and Derr is building 1...
// The path from Alk to Derr will be stored in paths[0][1] and so on in that standard
for(var i = 0; i < 5; i++)
paths[i] = new Array(5);

var catsMap;


//This creates GLatLng, from buildingObject's lat, lon. NAME:buildingLocations
var alkekLoc = new GLatLng(29.88925, -97.94322);
var derrLoc = new GLatLng(29.88926, -97.94233);
var mcsLoc = new GLatLng(29.88943, -97.94263);
var mitteLoc = new GLatLng(29.88853, -97.94696);
var suppleLoc = new GLatLng(29.88816, -97.94653);

//Creates markers from buildingLocations, NAME:buildingMarkers
var alkekMarker = new GMarker (alkekLoc);
var derrMarker = new GMarker (derrLoc);
var mcsMarker = new GMarker (mcsLoc);
var mitteMarker = new GMarker (mitteLoc);
var suppleMarker = new GMarker (suppleLoc);

//This creates an object for each building, NAME:buildingObjects
var alkek = {name: "alk", name2: "alkek", name3: "library", name4: "albert b. alkek", lat: 29.88925, lon: -97.94322, marker: alkekMarker, loc:alkekLoc};
var derr = {name: "derr", name2: "derrick", name3: "derrick hall", name4: "dh", lat: 29.88926, lon: -97.94233, marker: derrMarker, loc:derrLoc};
var mcs = {name: "mcs", name2: "math computer science", name3: "m.c.s.", name4: "math/computer science", lat: 29.88943, lon: -97.94263, marker: mcsMarker, loc:mcsLoc};
var mitte = {name: "rfm", name2: "roy f mitte", name3: "mitte", name4: "r.f.m.", lat: 29.88853, lon: -97.94696, marker: mitteMarker, loc:mitteLoc};
var supple = {name: "supp", name2: "supple", name3: "science building", name4:"jerome and catherine supple", lat: 29.88816, lon: -97.94653, marker: suppleMarker, loc:suppleLoc};

//adds buildingObjects to array of buildings
buildings[0] = alkek;
buildings[1] = derr;
buildings[2] = mcs;
buildings[3] = mitte;
buildings[4] = supple;

/*
 Name: DerrToAlk, Derr2AlkPath
 The next lines add the Derrick To Alkek Path to the Map
 Done by storing points along the path in an array
 Then creating a GPolyline from the array and displaying it on the map
 */
var DerrToAlk = new Array();
DerrToAlk[0] = new GLatLng(29.88926, -97.94233);
DerrToAlk[1] = new GLatLng(29.88920, -97.94245);
DerrToAlk[2] = new GLatLng(29.88905, -97.94246);
DerrToAlk[3] = new GLatLng(29.88896, -97.94275);
DerrToAlk[4] = new GLatLng(29.88900, -97.94292);
DerrToAlk[5] = new GLatLng(29.88907, -97.94310);
DerrToAlk[6] = new GLatLng(29.88925, -97.94322);
var Derr2AlkPath = new GPolyline(DerrToAlk, "#00ff00", 5, 1);

// These add the Alkek to Mitte Path to the Map
var AlkToMitte = new Array();
AlkToMitte[0] = new GLatLng(29.88896, -97.94341);
AlkToMitte[1] = new GLatLng(29.88888, -97.94400);
AlkToMitte[2] = new GLatLng(29.88890, -97.94408);
AlkToMitte[3] = new GLatLng(29.88883, -97.94416);
AlkToMitte[4] = new GLatLng(29.88887, -97.94431);
AlkToMitte[5] = new GLatLng(29.88880, -97.94493);
AlkToMitte[6] = new GLatLng(29.88869, -97.94504);
AlkToMitte[7] = new GLatLng(29.88869, -97.94533);
AlkToMitte[8] = new GLatLng(29.88873, -97.94540);
AlkToMitte[9] = new GLatLng(29.88869, -97.94546);
AlkToMitte[10] = new GLatLng(29.88863, -97.94549);
AlkToMitte[11] = new GLatLng(29.88842, -97.94693);
AlkToMitte[12] = new GLatLng(29.88851, -97.94698);
var Alk2MittePath = new GPolyline(AlkToMitte, "#00ff00", 5, 1);

var SupToMit = new Array();
SupToMit[0] = new GLatLng(29.88817, -97.94662);
SupToMit[1] = new GLatLng(29.88839, -97.94688);
SupToMit[2] = new GLatLng(29.88852, -97.94699);
var Sup2MitPath = new GPolyline(SupToMit, "#00ff00", 5, 1);

// These add the Alkek to Supple Path to the Map
var AlkToSupp = new Array();
AlkToSupp[0] = new GLatLng(29.88896, -97.94341);
AlkToSupp[1] = new GLatLng(29.88888, -97.94400);
AlkToSupp[2] = new GLatLng(29.88890, -97.94408);
AlkToSupp[3] = new GLatLng(29.88883, -97.94416);
AlkToSupp[4] = new GLatLng(29.88887, -97.94431);
AlkToSupp[5] = new GLatLng(29.88880, -97.94493);
AlkToSupp[6] = new GLatLng(29.88869, -97.94504);
AlkToSupp[7] = new GLatLng(29.88869, -97.94533);
AlkToSupp[8] = new GLatLng(29.88873, -97.94540);
AlkToSupp[9] = new GLatLng(29.88869, -97.94546);
AlkToSupp[10] = new GLatLng(29.88863, -97.94549);
AlkToSupp[11] = new GLatLng(29.88842, -97.94693);
AlkToSupp[12] = new GLatLng(29.88824, -97.94662);
AlkToSupp[13] = new GLatLng(29.88816, -97.94661);
var Alk2SuppPath = new GPolyline(AlkToSupp, "#00ff00", 5, 1);


var mcsToAlk = new Array();
mcsToAlk[0] = new GLatLng(29.88942, -97.94271);
mcsToAlk[1] = new GLatLng(29.88938, -97.94281);
mcsToAlk[2] = new GLatLng(29.88898, -97.94273);
mcsToAlk[3] = new GLatLng(29.88899, -97.94315);
var mcsToAlkPath = new GPolyline(mcsToAlk, "#00ff00", 5, 1);


var DerrToMcs = new Array();
DerrToMcs[0] = new GLatLng(29.88931, -97.94238);
DerrToMcs[1] = new GLatLng(29.88930, -97.94247);
DerrToMcs[2] = new GLatLng(29.88940, -97.94246);
DerrToMcs[3] = new GLatLng(29.88941, -97.94251);
var Derr2McsPath = new GPolyline(DerrToMcs, "#00ff00", 5, 1);

var DerrToMitte = new Array();
DerrToMitte[0] = new GLatLng(29.88923, -97.94239);
DerrToMitte[1] = new GLatLng(29.88922, -97.94251);
DerrToMitte[2] = new GLatLng(29.88901, -97.94257);
DerrToMitte[3] = new GLatLng(29.88900, -97.94269);
DerrToMitte[4] = new GLatLng(29.88895, -97.94269);
DerrToMitte[5] = new GLatLng(29.88898, -97.94294);
DerrToMitte[6] = new GLatLng(29.88896, -97.94341);
DerrToMitte[7] = new GLatLng(29.88888, -97.94400);
DerrToMitte[8] = new GLatLng(29.88890, -97.94408);
DerrToMitte[9] = new GLatLng(29.88883, -97.94416);
DerrToMitte[10] = new GLatLng(29.88887, -97.94431);
DerrToMitte[11] = new GLatLng(29.88880, -97.94493);
DerrToMitte[12] = new GLatLng(29.88869, -97.94504);
DerrToMitte[13] = new GLatLng(29.88869, -97.94533);
DerrToMitte[14] = new GLatLng(29.88873, -97.94540);
DerrToMitte[15] = new GLatLng(29.88869, -97.94546);
DerrToMitte[16] = new GLatLng(29.88863, -97.94549);
DerrToMitte[17] = new GLatLng(29.88842, -97.94693);
DerrToMitte[18] = new GLatLng(29.88851, -97.94698);
var Derr2MittePath = new GPolyline(DerrToMitte, "#00ff00", 5, 1);

var DerrToSupp = new Array();
DerrToSupp[0] = new GLatLng(29.88923, -97.94239);
DerrToSupp[1] = new GLatLng(29.88922, -97.94251);
DerrToSupp[2] = new GLatLng(29.88901, -97.94257);
DerrToSupp[3] = new GLatLng(29.88900, -97.94269);
DerrToSupp[4] = new GLatLng(29.88895, -97.94269);
DerrToSupp[5] = new GLatLng(29.88898, -97.94294);
DerrToSupp[6] = new GLatLng(29.88896, -97.94341);
DerrToSupp[7] = new GLatLng(29.88888, -97.94400);
DerrToSupp[8] = new GLatLng(29.88890, -97.94408);
DerrToSupp[9] = new GLatLng(29.88883, -97.94416);
DerrToSupp[10] = new GLatLng(29.88887, -97.94431);
DerrToSupp[11] = new GLatLng(29.88880, -97.94493);
DerrToSupp[12] = new GLatLng(29.88869, -97.94504);
DerrToSupp[13] = new GLatLng(29.88869, -97.94533);
DerrToSupp[14] = new GLatLng(29.88873, -97.94540);
DerrToSupp[15] = new GLatLng(29.88869, -97.94546);
DerrToSupp[16] = new GLatLng(29.88863, -97.94549);
DerrToSupp[17] = new GLatLng(29.88842, -97.94693);
DerrToSupp[18] = new GLatLng(29.88824, -97.94662);
DerrToSupp[19] = new GLatLng(29.88816, -97.94661);
var Derr2SuppPath = new GPolyline(DerrToSupp, "#00ff00", 5, 1);

var McsToMitte = new Array();
McsToMitte[0] = new GLatLng(29.88942, -97.94271);
McsToMitte[1] = new GLatLng(29.88938, -97.94281);
McsToMitte[2] = new GLatLng(29.88898, -97.94273);
McsToMitte[3] = new GLatLng(29.88899, -97.94315);
McsToMitte[4] = new GLatLng(29.88896, -97.94341);
McsToMitte[5] = new GLatLng(29.88888, -97.94400);
McsToMitte[6] = new GLatLng(29.88890, -97.94408);
McsToMitte[7] = new GLatLng(29.88883, -97.94416);
McsToMitte[8] = new GLatLng(29.88887, -97.94431);
McsToMitte[9] = new GLatLng(29.88880, -97.94493);
McsToMitte[10] = new GLatLng(29.88869, -97.94504);
McsToMitte[11] = new GLatLng(29.88869, -97.94533);
McsToMitte[12] = new GLatLng(29.88873, -97.94540);
McsToMitte[13] = new GLatLng(29.88869, -97.94546);
McsToMitte[14] = new GLatLng(29.88863, -97.94549);
McsToMitte[15] = new GLatLng(29.88842, -97.94693);
McsToMitte[16] = new GLatLng(29.88851, -97.94698);
var Mcs2MittePath = new GPolyline(McsToMitte, "#00ff00", 5, 1);

var McsToSupp = new Array();
McsToSupp[0] = new GLatLng(29.88942, -97.94271);
McsToSupp[1] = new GLatLng(29.88938, -97.94281);
McsToSupp[2] = new GLatLng(29.88898, -97.94273);
McsToSupp[3] = new GLatLng(29.88899, -97.94315);
McsToSupp[4] = new GLatLng(29.88896, -97.94341);
McsToSupp[5] = new GLatLng(29.88888, -97.94400);
McsToSupp[6] = new GLatLng(29.88890, -97.94408);
McsToSupp[7] = new GLatLng(29.88883, -97.94416);
McsToSupp[8] = new GLatLng(29.88887, -97.94431);
McsToSupp[9] = new GLatLng(29.88880, -97.94493);
McsToSupp[10] = new GLatLng(29.88869, -97.94504);
McsToSupp[11] = new GLatLng(29.88869, -97.94533);
McsToSupp[12] = new GLatLng(29.88873, -97.94540);
McsToSupp[13] = new GLatLng(29.88869, -97.94546);
McsToSupp[14] = new GLatLng(29.88863, -97.94549);
McsToSupp[15] = new GLatLng(29.88842, -97.94693);
McsToSupp[16] = new GLatLng(29.88824, -97.94662);
McsToSupp[17] = new GLatLng(29.88816, -97.94661);
var Mcs2SuppPath = new GPolyline(McsToSupp, "#00ff00", 5, 1);


// Retrieval procedure: if you want the path from Alk to Derr... since Alk is building 0 and Derr is building 1...
// The path from Alk to Derr will be stored in paths[0][1] and so on in that standard
//for(int i = 0; i < 5; i++)
//   paths[i] = new Array();

// From Alk to all others
paths[0][1] = {tag1: "alk", tag2: "derr", path: Derr2AlkPath};
paths[0][2] = {tag1: "alk", tag2: "mcs", path: mcsToAlkPath};
paths[0][3] = {tag1: "alk", tag2: "rfm", path: Alk2MittePath};
paths[0][4] = {tag1: "alk", tag2: "supp", path: Alk2SuppPath};

// From Derr to all others
paths[1][0] = {tag1: "derr", tag2: "alk", path: Derr2AlkPath};
paths[1][2] = {tag1: "derr", tag2: "mcs", path: Derr2McsPath};
paths[1][3] = {tag1: "derr", tag2: "rfm", path: Derr2MittePath};
paths[1][4] = {tag1: "derr", tag2: "supp", path: Derr2SuppPath};

// From MCS to all others
paths[2][0] = {tag1: "mcs", tag2: "alk", path: mcsToAlkPath};
paths[2][1] = {tag1: "mcs", tag2: "derr", path: Derr2McsPath};
paths[2][3] = {tag1: "mcs", tag2: "rfm", path: Mcs2MittePath};
paths[2][4] = {tag1: "mcs", tag2: "supp", path: Mcs2SuppPath};

// From Mitte to all others
paths[3][0] = {tag1: "rfm", tag2: "alk", path: Alk2MittePath};
paths[3][1] = {tag1: "rfm", tag2: "derr", path: Derr2MittePath};
paths[3][2] = {tag1: "rfm", tag2: "mcs", path: Mcs2MittePath};
paths[3][4] = {tag1: "rfm", tag2: "supp", path: Sup2MitPath};

// From Supp to all others
paths[4][0] = {tag1: "supp", tag2: "alk", path: Alk2SuppPath};
paths[4][1] = {tag1: "supp", tag2: "derr", path: Derr2SuppPath};
paths[4][2] = {tag1: "supp", tag2: "mcs", path: Mcs2SuppPath};
paths[4][3] = {tag1: "supp", tag2: "rfm", path: Sup2MitPath};

// Dummy Paths
paths[0][0] = {tag1: "", tag2: "", path: Alk2MittePath};
paths[1][1] = {tag1: "", tag2: "", path: Alk2MittePath};
paths[2][2] = {tag1: "", tag2: "", path: Alk2MittePath};
paths[3][3] = {tag1: "", tag2: "", path: Alk2MittePath};
paths[4][4] = {tag1: "", tag2: "", path: Alk2MittePath};

function initialize() {
    if (GBrowserIsCompatible()) {
        map = new GMap2(document.getElementById("map_canvas"));
        map.setCenter(new GLatLng(29.889416,-97.942622), 18);
        map.setUIToDefault();
        map.setMapType(G_SATELLITE_MAP);
        
        
        // ====== Restricting the range of Zoom Levels =====
        // Get the list of map types
        var mt = map.getMapTypes();
        // Overwrite the getMinimumResolution() and getMaximumResolution() methods
        for (var i=0; i<mt.length; i++) {
            mt[i].getMinimumResolution = function() {return 17;}
            mt[i].getMaximumResolution = function() {return 19;}
        }
        
        var boundaries = new GLatLngBounds(new GLatLng(29.886439,-97.949778), new GLatLng(29.891388,-97.936882));
        catsMap = new GGroundOverlay("http://cs.txstate.edu/~jg1595/pics/2010-2009-CMJ.jpg", boundaries);
        map.addOverlay(catsMap);
        catsMap.hide();
        
        //Windows and listeners for buildingMarkers NAME:buildingMarkersListeners
        
        
        
        
        GEvent.addListener(alkekMarker, "mouseover", function() {
                           alkekMarker.openInfoWindowHtml("<b>Alkek Library</b> <br> <img src=\"http://cs.txstate.edu/~jg1595/pics/alkek.jpg \" width=\"150\" height=\"112\" 		/>");
                           });
        
        GEvent.addListener(derrMarker, "mouseover", function() {
                           derrMarker.openInfoWindowHtml("<b>Derrick Hall</b> <br> <img src=\"http://cs.txstate.edu/~jg1595/pics/derr.jpg \" width=\"150\" height=\"112\" 		/>");
                           });
        GEvent.addListener(mcsMarker, "mouseover", function() {
                           mcsMarker.openInfoWindowHtml("<b>Math Computer Science</b> <br> <img src=\"http://cs.txstate.edu/~jg1595/pics/mcs.jpg \" width=\"150\" 		height=\"112\" />");
                           });
        GEvent.addListener(mitteMarker, "mouseover", function() {
                           mitteMarker.openInfoWindowHtml("<b>Roy F Mitte</b> <br> <img src=\"http://cs.txstate.edu/~jg1595/pics/rfm.jpg \" width=\"150\" height=\"112\" 		/>");
                           });
        GEvent.addListener(suppleMarker, "mouseover", function() {
                           suppleMarker.openInfoWindowHtml("<b>Jerome & Catherine Supple Science Building</b> <br> <img src=\"http://cs.txstate.edu/~jg1595/pics/supp.jpg \" 		width=\"150\" height=\"112\" />");
                           });
        
        //Adds buildingMarkers to map
        map.addOverlay(alkekMarker);
        map.addOverlay(derrMarker);
        map.addOverlay(mcsMarker);
        map.addOverlay(mitteMarker);
        map.addOverlay(suppleMarker);
        
        //Hides BuildingMarkers from map
        alkekMarker.hide()
        derrMarker.hide()
        mcsMarker.hide()
        mitteMarker.hide()
        suppleMarker.hide()
        
        //Adds all paths to map
        map.addOverlay(Alk2MittePath);
        map.addOverlay(Alk2SuppPath);
        
        map.addOverlay(Derr2AlkPath);
        map.addOverlay(Derr2McsPath);
        map.addOverlay(Derr2MittePath);
        map.addOverlay(Derr2SuppPath);
        
        map.addOverlay(mcsToAlkPath);
        map.addOverlay(Mcs2MittePath);
        map.addOverlay(Mcs2SuppPath);
        
        map.addOverlay(Sup2MitPath);
        
        // Hide all the paths from the map
        Alk2MittePath.hide();
        Alk2SuppPath.hide();
        
        Derr2AlkPath.hide();
        Derr2McsPath.hide();
        Derr2MittePath.hide();
        Derr2SuppPath.hide();
        
        mcsToAlkPath.hide();
        Mcs2MittePath.hide();
        Mcs2SuppPath.hide();
        
        Sup2MitPath.hide();
        
        
        //Hides BuildingMarkers from map
        alkekMarker.hide()
        derrMarker.hide()
        mcsMarker.hide()
        mitteMarker.hide()
        suppleMarker.hide()
        
        GEvent.addListener(map, "move", function() {
                           checkBounds();})
    }
}


// The allowed region which the whole map must be within
var allowedBounds = new GLatLngBounds(new GLatLng(29.886774,-97.949381), new GLatLng(29.891053,-97.938223));

// If the map position is out of range, move it back
function checkBounds() {
    // Perform the check and return if OK
    if (allowedBounds.contains(map.getCenter())){
        return;
    }
    // It`s not OK, so find the nearest allowed point and move there
    var C = map.getCenter();
    var X = C.lng();
    var Y = C.lat();
    
    var AmaxX = allowedBounds.getNorthEast().lng();
    var AmaxY = allowedBounds.getNorthEast().lat();
    var AminX = allowedBounds.getSouthWest().lng();
    var AminY = allowedBounds.getSouthWest().lat();
    
    if (X < AminX) {X = AminX;}
    if (X > AmaxX) {X = AmaxX;}
    if (Y < AminY) {Y = AminY;}
    if (Y > AmaxY) {Y = AmaxY;}
    //alert ("Restricting "+Y+" "+X);
    map.setCenter(new GLatLng(Y,X));
}


//This function searches for the buildings and makes them visible if found
function search(query){
    var lowerQuery = query.toLowerCase();
    var counter = 0;
    
    for(var i = 0; i < 5; i++){
        for(var j = 0; j < 5; j++){
            paths[i][j].path.hide();
        }
    }
    
    for (var i = 0; i < 5; i++){
        buildings[i].marker.hide();
    }
    for (var i = 0; i < 5; i++){
        if(buildings[i].name == lowerQuery){
            buildings[i].marker.show();
            map.panTo(buildings[i].loc);
            dispWindow(i);
        }
        else if(buildings[i].name2 == lowerQuery){
            buildings[i].marker.show();
            map.panTo(buildings[i].loc);
            dispWindow(i);
        }
        else if(buildings[i].name3 == lowerQuery){
            buildings[i].marker.show();
            map.panTo(buildings[i].loc);
            dispWindow(i);
        }
        else if(buildings[i].name4 == lowerQuery){
            buildings[i].marker.show();
            map.panTo(buildings[i].loc);
            dispWindow(i);
        }
        else{
            counter++;
        }
    }
    if (counter == 5){
        alert("Building not found, try another search");
    }
}


function dispWindow(buildingIndex){
    if(buildingIndex == 0){
        alkekMarker.openInfoWindowHtml("<b>Albert B. Alkek</b> <br> <img src=\"http://cs.txstate.edu/~jg1595/pics/alkek.jpg \" width=\"150\" height=\"112\" /> ");
    }
    else if(buildingIndex == 1){
        derrMarker.openInfoWindowHtml("<b>Derrick Hall</b> <br> <img src=\"http://cs.txstate.edu/~jg1595/pics/derr.jpg \" width=\"150\" height=\"112\" />");
    }
    else if(buildingIndex == 2){
        mcsMarker.openInfoWindowHtml("<b>Math Computer Science</b> <br> <img src=\"http://cs.txstate.edu/~jg1595/pics/mcs.jpg \" width=\"150\" height=\"112\" />");
    }
    else if(buildingIndex == 3){
        mitteMarker.openInfoWindowHtml("<b>Roy F Mitte</b> <br> <img src=\"http://cs.txstate.edu/~jg1595/pics/rfm.jpg \" width=\"150\" height=\"112\" />");
    }
    else if(buildingIndex == 4){
        suppleMarker.openInfoWindowHtml("<b>Jerome & Catherine Supple Science Building</b> <br> <img src=\"http://cs.txstate.edu/~jg1595/pics/supp.jpg \" width=\"150\" height=\"112\" />");
    }
}

// start is 1 if passed is point A
// start is 0 if passed is point B
function dispMarker(buildingIndex) {
    if(buildingIndex == 0){
        alkekMarker.show();
    }
    else if(buildingIndex == 1){
        derrMarker.show();
    }
    else if(buildingIndex == 2){
        mcsMarker.show();
    }
    else if(buildingIndex == 3){
        mitteMarker.show();
    }
    else if(buildingIndex == 4){
        suppleMarker.show();
    }
}


function show_catsMap() {catsMap.show();}
function hide_catsMap() {catsMap.hide();}

function idBuilding(building){
    var counter = 0;
    for(var i = 0; i < 5; i++){
        if (buildings[i].name == building){
            return buildings[i].name;
        }
        else if(buildings[i].name2 == building){
            return buildings[i].name;
        }
        else if(buildings[i].name3 == building){
            return buildings[i].name;
        }
        else if(buildings[i].name4 == building){
            return buildings[i].name;
        }
        else
            counter++;
    }
    if (counter == 5){
        alert("Building not found, try another search");
    }
}

//This function loads the directions
function directions(fromBuilding, toBuilding){
    alkekMarker.hide();
    derrMarker.hide();
    mcsMarker.hide();
    mitteMarker.hide();
    suppleMarker.hide();
    
    for(var i = 0; i < 5; i++){
        for(var j = 0; j < 5; j++){
            paths[i][j].path.hide();
        }
    }
    
    var from = idBuilding(fromBuilding);
    var to = idBuilding(toBuilding);
    for (var i = 0; i < 5; i++){
        for (var j = 0; j < 5; j++){
            if (from == paths[i][j].tag1 && to == paths[i][j].tag2){
                paths[i][j].path.show();
                dispWindow(i);
                dispMarker(i, buildings[i].loc, 1);
                dispMarker(j, buildings[j].loc, 0);
            }
        }
    }
}
