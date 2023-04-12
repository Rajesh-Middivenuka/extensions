function clear(){
    chrome.browsingData.removeHistory({},()=>{
        console.log("delete history");
    })

}
// chrome.alarms.create('clear',{
//     periodInMinutes:1,
//     delayInMinutes:1
// })
// chrome.alarms.onAlarm.addListener(
//     ()=>{
//         clear();
//     }
//   )
