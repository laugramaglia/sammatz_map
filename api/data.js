import GroupClass from '../static/classes/groupsClass'
import MarkerClass from '../static/classes/markerClass'

 const visitUsMarker = [
       new MarkerClass("Cafe", "Take something to go", -36.879621, 45.263672, ""),
       new MarkerClass("Arche Hof", "Arche farm", -57.04073, 64.423828, ""),
       new MarkerClass("Hofladen", "House of ...", -59.327892, 64.445028, ""),
       new MarkerClass("Spielplatz", "Kids paradice", -57.309929, 82.204943, ""),
  ]

  const arbeitsbereicheMarker = [
    new MarkerClass("Meierei", "Take something to go", -54.585095, 60.930262, ""),
    new MarkerClass("Bäckerei", "Arche farm", -54.684004, 76.484671, ""),
    new MarkerClass("Eichenhof", "Kitchen", -27.254629577800078, 52.03125, ""),
    new MarkerClass("Küche", "Laboratory", -37.87485339352928, 38.18847656250001, ""),
    new MarkerClass("Gemüseacker", "Take something to go", 46.6795944656402, 39.90234375000001, ""),
    new MarkerClass("Heilpflanzenacker", "Arche farm", 60.13706034449873, 12.615394592285156, ""),
]

const gartensMarker = [
  new MarkerClass("Rosengarten", "Take something to go", -46.862069, 42.995467, ""),
    new MarkerClass("Waldsee", "Arche farm", -54.470038, 15.556641, ""),
    new MarkerClass("Arena", "House of ...", -6.35761, 46.165237, ""),
    new MarkerClass("Staudenplateau", "Kids paradice", -7.947717, 29.809513, ""),
    new MarkerClass("Campus-Garten", "Take something to go", -55.052318, 49.652367, ""),
    new MarkerClass("Dahliengarten", "Arche farm", -12.806068, 52.259173, ""),
    new MarkerClass("Zentrale Gärten", "House of ...", -31.826232, 38.705521, ""),
    new MarkerClass("Waldgärtlein", "Kids paradice", -51.862924, 25.048828, ""),
]

  const groups = [
    new GroupClass("Visit us", "blue", visitUsMarker, 'visit'),
    new GroupClass("Arbeitsbereiche", "red", arbeitsbereicheMarker, 'arbeitsbereiche'),
    new GroupClass("Gartens", "black", gartensMarker, 'gartens'),
  ]

  
  export default groups