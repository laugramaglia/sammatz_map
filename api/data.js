import GroupClass from '../static/classes/groupsClass'
import MarkerClass from '../static/classes/markerClass'

 const visitUsMarker = [
       new MarkerClass("Blue house", "House of houndred of volunteeers", -78.647995, 55.203552)
  ]

  const arbeitsbereicheMarker = [
    
]

const gartensMarker = [
    
]

  const groups = [
    new GroupClass("Visit us", "blue", visitUsMarker, 'visit'),
    new GroupClass("Arbeitsbereiche", "red", arbeitsbereicheMarker, 'arbeitsbereiche'),
    new GroupClass("Gartens", "black", gartensMarker, 'gartens'),
  ]

  
  export default groups