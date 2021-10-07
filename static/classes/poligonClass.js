 class PoligonClass {
    name = ''
    color = '#3388ff'
    visible = true
    latlngs = []

    constructor(cLatLng) {
        this.latlngs = cLatLng
    }

}

 class ParkingClass extends PoligonClass{
    visible = false

    constructor(cName,cLatLng) {
        super()
        this.latlngs = cLatLng
        this.name = cName
    }
}

export {ParkingClass}
