const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const totalBatteries = batteryBatches.reduce((total, element) => total + element);



// function reducer(arr, reducer, init){
//     let totalBatteries = init;
//     for(const element of arr){
//         totalBatteries = batteryCount(totalBatteries, element);
//     }
//     return totalBatteries
// }


// console.log (reducer(batteryBatches, batteryCount, 0));