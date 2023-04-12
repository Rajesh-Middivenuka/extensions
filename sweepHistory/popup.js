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
let removes=document.getElementById("cookiesRemove");
removes.addEventListener("click",()=>{
  chrome.cookies.remove({
    url: "https://www.google.com/",
    name: "myCookie",
    path: "/subdirectory"
  }, function(removedCookie) {
    console.log("Removed cookie:", removedCookie);
  });
  
})