export default class MarkerClass {
    name = ""
    description = ""
    lat = null
    lng = null
    link = ""

    constructor(cName, cDescription, cLat, cLng, cLink){
        this.name = cName
        this.description = cDescription
        this.lat = cLat
        this.lng = cLng
        this.link = cLink
    }
}