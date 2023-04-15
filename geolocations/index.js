navigator.geolocation ? 
navigator.geolocation.getCurrentPosition(getData,error)


: alert("not read")

function error(mes){
    alert(mes);
}
function getData(data){
    let datas=data.coords;
    console.log(datas.latitude)        
    console.log(datas.latitude)
}