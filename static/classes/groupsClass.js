export default class GroupClass {
    name = ""
    color = "#555555"
    visible = true
    markers = []
    router = ""

    constructor(cName, cColor, cMarkers, cRouter) {
        this.name = cName
        this.color = cColor
        this.markers = cMarkers
        this.router = cRouter
    }
    getName() {
        return this.name;
    }
    getColor() {
        return this.color;
    }
    getList(){
        return this.markers
    }
}