export default class GroupClass {
    name = ""
    color = "#555555"
    visible = true

    constructor(cname, ccolor) {
        this.name = cname;
        this.color = ccolor;
    }
    getName() {
        return this.name;
    }
    getColor() {
        return this.color;
    }
}