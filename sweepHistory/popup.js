document.getElementById('remove').onclick = () => {
    console.log("button clicked")
    chrome.browsingData.removeHistory({},()=>{
      console.log("delete history");
  })
}
document.getElementById("cookies").onclick=()=>{
    chrome.cookies.getAll({},cookies)
      
}
function cookies(cookies){
     console.log(cookies)
}