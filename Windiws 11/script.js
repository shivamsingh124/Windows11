let windwin = document.getElementsByClassName("windwin")[0]
let windexplor = document.getElementsByClassName("windexplor")[0]
let windsearch = document.getElementsByClassName("windsearch")[0]
let windsett = document.getElementsByClassName("windsett")[0]
let widgetsd = document.getElementsByClassName("widgetsd")[0]

let explor = document.getElementsByClassName("explor")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let search = document.getElementsByClassName("search")[0]
let setting = document.getElementsByClassName("setting")[0]
let widget=document.getElementsByClassName("widgets")[0]
let notes=document.getElementsByClassName("notes")[0]
let camera=document.getElementsByClassName("camera")[0]
let paint=document.getElementsByClassName("paint")[0]
let calculator=document.getElementsByClassName("calculator")[0]



let google=document.getElementsByClassName("google")[0]
let folder=document.getElementsByClassName("folder")[0]
let thispc=document.getElementsByClassName("this-pc")[0]
let trash=document.getElementsByClassName("trash")[0]
let sticky=document.getElementsByClassName("sticky")[0]
let zoom = document.getElementsByClassName("zoom")[0]
// let sticky = document.getElementsByClassName("zoom")[0]




widgetsd.addEventListener("mouseover", ()=>{
    console.log("clicked");
    if(widget.style.right == "-50px"){
        widget.style.right = "-655px"
    }
    else{
        widget.style.right = "-50px"
    }
})
widgetsd.addEventListener("click", ()=>{
    console.log("clicked");
    if(widget.style.right == "-50px"){
        widget.style.right = "-655px"
    }
    else{
        widget.style.right = "-50px"
    }
})



windwin.addEventListener("mouseover", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
windwin.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})



windsett.addEventListener("mouseover", ()=>{
    console.log("clicked");
    if(setting.style.bottom == "50px"){
        setting.style.bottom = "-655px"
    }
    else{
        setting.style.bottom = "50px"
    }
})
windsett.addEventListener("click", ()=>{
    console.log("clicked");
    if(setting.style.bottom == "50px"){
        setting.style.bottom = "-655px"
    }
    else{
        setting.style.bottom = "50px"
    }
})



windsearch.addEventListener("mouseover", ()=>{
    console.log("clicked");
    if(search.style.bottom == "50px"){
        search.style.bottom = "-655px"
    }
    else{
        search.style.bottom = "50px"
    }
})
windsearch.addEventListener("click", ()=>{
    console.log("clicked");
    if(search.style.bottom == "50px"){
        search.style.bottom = "-655px"
    }
    else{
        search.style.bottom = "50px"
    }
})



windexplor.addEventListener("mouseover", ()=>{
    console.log("clicked");
    if(explor.style.bottom == "50px"){
        explor.style.bottom = "-655px"
    }
    else{
        explor.style.bottom = "50px"
    }
})
windexplor.addEventListener("click", ()=>{
    console.log("clicked");
    if(explor.style.bottom == "50px"){
        explor.style.bottom = "-655px"
    }
    else{
        explor.style.bottom = "50px"
    }
})


google.addEventListener("click", ()=>{
    console.log("check");
    window.location.assign("index1.html");
})

folder.addEventListener("click", ()=>{
    console.log("check");
    let folder = document.createElement("div");
    folder.classList.add("folder");
    let atag = document.createElement("a");
    atag.href=`file:///C:/Users/Hp/Desktop/Code%20With%20Harry/`;
  document.querySelector("body").append(folder);
  atag.click();
})

trash.addEventListener("click", ()=>{
    console.log("check");
    let folder = document.createElement("div");
    folder.classList.add("folder");
    let atag = document.createElement("a");
    atag.href=`file:///C:/$Recycle.Bin/`;
  document.querySelector("body").append(folder);
  atag.click();
})
zoom.addEventListener("click", ()=>{
    console.log("check");
    let folder = document.createElement("div");
    folder.classList.add("folder");
    let atag = document.createElement("a");
    atag.href=`file:///C:/Users/Hp/AppData/Roaming/Microsoft/Windows/Start%20Menu/Programs/Zoom/`;
  document.querySelector("body").append(folder);
  atag.click();
})

thispc.addEventListener("click", ()=>{
    console.log("check");
    let folder = document.createElement("div");
    folder.classList.add("folder");
    let atag = document.createElement("a");
    atag.href=`file:///C:/Users/Hp/Desktop/`;
  document.querySelector("body").append(folder);
  atag.click();
})


sticky.addEventListener("click", ()=>{
    window.location.assign("./ticket_app/activity/index.html");
})

notes.addEventListener("click", ()=>{
    window.location.assign("./todo_app/activity/index.html");
})

camera.addEventListener("click", ()=>{
    window.location.assign("./PepSnap/index.html");
})

paint.addEventListener("click", ()=>{
    window.location.assign("./whiteboard/activity/index.html");
})

calculator.addEventListener("click", ()=>{
    window.location.assign("./calculator/index.html");
})


// google.addEventListener("click", ()=>{
//     window.location.assign("index1.html");
// })
//