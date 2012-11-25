// Generated by CoffeeScript 1.3.3
(function() {

  define(function(require) {
    var $, Backbone, Cylinder, csgSugar, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    require('csg');
    /*here we define various shorthands, wrappers etc for the base csg.js syntax,
    all in the mindset of "simple, clearer better"
    Some of these can eventually be migrated into csg.js as modified /added methods
    and classes .
    */

    /*experimenting
          
        class Cylinder 
          constructor:(start=[0, -1, 0],end=[0, 1, 0],radius=1,radiusEnd=1,radiusStart=1)->
            return CSG.cylinder
              start:start
              end:end
              radius:radius
              radiusEnd:radiusEnd
              radiusStart:radiusStart
    */

    /*CSG
    Cube = CSG.cube
    Sphere = CSG.Sphere
    Cylinder = CSG.cylinder
    roundedCylinder = CSG.roundedCylinder
    roundedCube = CSG.roundedCube
    */

    /*CAG
    fromPoints= CAG.fromPoints
    Circle= CAG.circle
    Rectangle = CAG.rectangle
    roundedRectangle = CAG.roundedRectangle
    */

    Cylinder = "(options)=>\nif \"size\" of options\n  console.log \"tutu\"\nreturn CSG.cylinder options";
    csgSugar = "";
    csgSugar += "Cube=(options)=> \n  if \"size\" of options\n    options.radius = options.size.map (comp) -> comp/2\n  if \"$fn\" of options\n    options.resolution = options.$fn\n  if \"r\" of options\n    options.roundradius = options.r\n  if \"d\" of options\n    options.roundradius = options.d/2\n  if \"center\" of options\n    if options.center == true\n      options.center= [0,0,0]\n  else\n    if options.roundradius?\n      result = CSG.roundedCube options\n    else\n      result = CSG.cube options\n    result = result.translate([options.radius[0],options.radius[1],options.radius[2]])\n  if not result?\n    if options.roundradius? \n      result = CSG.roundedCube options\n    else\n      result = CSG.cube options\n  return result\n\n";
    csgSugar += "RoundedCube = CSG.roundedCube\n";
    csgSugar += "Sphere =(options)=>\n  if \"r\" of options\n    options.radius = options.r\n  if \"d\" of options\n    options.radius = options.d/2\n  if \"$fn\" of options\n    options.resolution = options.$fn\n  if \"center\" of options\n    if options.center == true\n      options.center = [0,0,0]\n  return CSG.sphere options\n\n";
    csgSugar += "Cylinder=(options)=> \n  if \"h\" of options\n    options.start = [0, 0, 0]\n    options.end = [0, 0, options.h]\n  if \"r\" of options\n    options.radius = options.r\n  else\n    if \"r1\" of options\n      options.radiusStart = options.r1\n    if \"r2\" of options\n      options.radiusEnd= options.r2\n  if \"d\" of options\n    options.radius = options.d/2\n  else\n    if \"d1\" of options\n      options.radiusStart = options.d1/2\n    if \"d2\" of options\n      options.radiusEnd = options.d2/2  \n  if \"center\" of options\n    if options.center == true\n      result = CSG.cylinder options\n      result = result.translate([0,0,-options.h/2])\n    else\n      options.center= [0,0,0]\n  if not result?\n    result = CSG.cylinder options\n  return result\n\n";
    csgSugar += "RoundedCylinder = CSG.roundedCylinder\n";
    csgSugar += "fromPoints = CAG.fromPoints\n";
    csgSugar += "Circle = CAG.circle\n";
    csgSugar += "Rectangle = CAG.rectangle\n";
    csgSugar += "RoundedRectangle = CAG.roundedRectangle\n";
    return csgSugar;
  });

}).call(this);
