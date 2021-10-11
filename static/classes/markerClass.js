export default class MarkerClass {
    name = ""
    description = ""
    lat = null
    lng = null
    link = ""
    img = ''

    constructor(cName, cDescription, cLat, cLng, cImg, cLink){
        this.name = cName
        this.description = cDescription
        this.lat = cLat
        this.lng = cLng
        this.link = cLink
        this.img = cImg
    }
}