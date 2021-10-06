export default class MarkerClass {
    name = ""
    description = ""
    lat = null
    lng = null

    constructor(cName, cDescription, cLat, cLng){
        this.name = cName
        this.description = cDescription
        this.lat = cLat
        this.lng = cLng
    }
}