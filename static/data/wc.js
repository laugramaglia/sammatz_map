import GroupClass from '../classes/groupsClass'

const marksWc =[
     {
         lat: -63.470144746565445,
          lng: 47.81250000000001,
        },
        {
            lat: -40.46366632458767,
            lng: 42.41889953613282
        },
        {
            lat: -36.426619385901905, 
            lng: 44.207139015197754
        }
]

const groupWc = [
    new GroupClass("Wc", "wc", marksWc, 'wc'),
]

export default groupWc

