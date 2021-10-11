import {ParkingClass} from '../classes/poligonClass'

const bigParkingCoordinates = [
    [-37.720898693330355, 71.57987594604494],
    [-37.232651885727314, 82.25858688354494],
    [-47.933021604290374, 83.09354782104494],
    [-48.57672070602498, 72.37089157104494]
]

const electricParkingCoordinates = [
    [-33.49985644983338, 36.48855686187745],
    [-34.74580890841533, 36.49954319000245],
    [-34.64644849840743, 40.67434787750245],
    [-33.43570319382015, 40.66336154937745]
]

const park3Coordinates = [
    [-36.639360753375755, 23.317623138427738],
    [-37.724700553982224, 23.888912200927734],
    [-36.25050298575717, 29.733638763427738],
    [-35.0722955416968, 29.118404388427738]
]

const farmParkCoordinates = [
    [-57.619852964631654, 68.89637947082521],
    [-57.22945889224901, 71.73085212707521],
    [-59.9200972441226, 73.18104743957521],
    [-60.66056437470588, 72.32411384582521],
    [-60.68208961433506, 70.36854743957521]
]

const blueHouseParkCoordinates = [
    [-57.45376996046309, 39.20514106750488],
    [-57.45376996046309, 36.74420356750489],
    [-61.929985685140174, 36.76351547241212],
    [-61.89895222687746, 38.76302719116212],
    [-59.569201421145415, 38.49935531616212],
    [-59.513509946546876, 39.44417953491211]
]

const street1ParkingCoordinates = [
    [-56.950029950239454, 72.70511627197267],
    [-56.83000490041603, 73.71585845947267],
    [-60.763687268999405, 75.89115142822267],
    [-60.8601274607222, 74.63871002197267]
]
/*
const street2ParkingCoordinates = [
    [-53.85252660044952, 74.09179687500001],
[-53.91728101547621, 73.14697265625001],
[-56.72862197314074, 74.50927734375001],
[-56.60788546500924, 75.32226562500001]
]
*/
/*
const mainHouse1ParkingCoordinates = [
    [-22.684984142872107, 54.87670898437501],
[-23.02918734674459, 53.909912109375],
[-25.18505888358066, 54.27246093750001],
[-25.055745117015306, 55.23925781250001]
]
*/
/*
const mainHouse2ParkingCoordinates = [
    [-28.18684408543942, 57.132468223571784],
    [-28.041493317920267, 58.329977989196784],
    [-22.440027233403118, 57.297263145446784],
    [-22.6226864719147, 56.198630332946784]
]
*/

// Exported list
const polygon = [
    new ParkingClass("parking 1", bigParkingCoordinates),
    new ParkingClass("parking 2", electricParkingCoordinates),
    new ParkingClass("parking 3", park3Coordinates),
    new ParkingClass("parking 4", farmParkCoordinates),
    new ParkingClass("parking 5", street1ParkingCoordinates),
    // new ParkingClass("parking 6", street2ParkingCoordinates),
    new ParkingClass("parking 7", blueHouseParkCoordinates),
    // new ParkingClass("parking 8", mainHouse1ParkingCoordinates),
    // new ParkingClass("parking 9", mainHouse2ParkingCoordinates),
]

export default polygon
