let windwin = document.getElementsByClassName("windwin")[0]
let windexplor = document.getElementsByClassName("bg5")[0]
let windsearch = document.getElementsByClassName("bg2")[0]
let windsett = document.getElementsByClassName("bg4")[0]
let widgetsd = document.getElementsByClassName("widgetsd")[0]
let calendarsd = document.getElementsByClassName("calendarsd")[0]

let explor = document.getElementsByClassName("explor")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let search = document.getElementsByClassName("search")[0]
let setting = document.getElementsByClassName("setting")[0]
let widget=document.getElementsByClassName("widgets")[0]
let calendar=document.getElementsByClassName("calendar")[0]
let notes=document.getElementsByClassName("notes")[0]
let camera=document.getElementsByClassName("camera")[0]
let paint=document.getElementsByClassName("paint")[0]
let excel=document.getElementsByClassName("excel")[0]
let calculator=document.getElementsByClassName("calculator")[0]
let mode=document.getElementsByClassName("mode")[0]
let power=document.getElementsByClassName("power")[0]
let dark=document.getElementsByClassName("dark")[0]
let more=document.getElementsByClassName("more")[0]
let games=document.getElementsByClassName("games")[0]
let spacex=document.getElementsByClassName("spacex")[0]
let dare=document.getElementsByClassName("snake")[0]
let mario=document.getElementsByClassName("tictac")[0]
// let snake=document.getElementsByClassName("snake")[0]
// let tictac=document.getElementsByClassName("tictac")[0]



let google=document.getElementsByClassName("google")[0]
let folder=document.getElementsByClassName("folder")[0]
let thispc=document.getElementsByClassName("this-pc")[0]
let trash=document.getElementsByClassName("trash")[0]
let sticky=document.getElementsByClassName("sticky")[0]
let zoom = document.getElementsByClassName("zoom")[0]
let mystart=document.getElementsByClassName("startv")[0]
let on = document.getElementsByClassName("on")[0]
let mystop=document.getElementsByClassName("stop")[0]
let off = document.getElementsByClassName("off")[0]


let startMenu = document.querySelector(".start-menu")
let menuBtn = document.querySelector(".start")
menuBtn.addEventListener("click", ()=>{
    console.log("ha")
startMenu.classList.toggle('active')
menuBtn.classList.toggle("active")
})

mode.addEventListener("click", ()=>{
    console.log("clicked");
    if(power.style.bottom == "50px"){
        power.style.bottom = "-157px"
    }
    else{
        power.style.bottom = "50px"
    }
})

more.addEventListener("click", ()=>{
    console.log("clicked");
    if(games.style.bottom == "302px"){
        games.style.bottom = "-157px"
    }
    else{
        games.style.bottom = "302px"
    }
})


let glob=0;
dark.addEventListener("click", ()=>{
    glob=glob+1;
    console.log("clicked");
    if(glob%2==0){
        document.body.style.backgroundImage = "url('bg1.jpg')";
    }
    else{
        document.body.style.backgroundImage = "url('bg2.jpg')";
    }
})

on.addEventListener("click", ()=>{
    mystart.style.bottom = "-54px"
    mystart.play();
    setTimeout(function(){ mystart.style.bottom = "-782px"; }, 20000);
    
})
off.addEventListener("click", ()=>{
    mystop.style.bottom = "-54px"
    mystop.play();
    setTimeout(function(){ mystop.style.bottom = "-782px"; }, 5000);
    
})
spacex.addEventListener("click", ()=>{
    window.location.assign("./spacex/index.html");
    
})
mario.addEventListener("click", ()=>{
    window.location.assign("./mario/index.html");
    
})
dare.addEventListener("click", ()=>{
    window.location.assign("./spinwin/spin.html");
    
})
// snake.addEventListener("click", ()=>{
//     window.location.assign("./snake/index.html");
    
// })
// tictac.addEventListener("click", ()=>{
//     window.location.assign("./tictac/index.html");
    
// })





// widgetsd.addEventListener("mouseover", ()=>{
//     console.log("clicked");
//     if(widget.style.right == "-50px"){
//         widget.style.right = "-655px"
//     }
//     else{
//         widget.style.right = "-50px"
//     }
// })
widgetsd.addEventListener("click", ()=>{
    console.log("clicked");
    if(widget.style.right == "-50px"){
        widget.style.right = "-655px"
    }
    else{
        widget.style.right = "-50px"
    }
})

calendarsd.addEventListener("click", ()=>{
    console.log("clicked");
    if(calendar.style.right == "-55px"){
        calendar.style.right = "-655px"
    }
    else{
        calendar.style.right = "-55px"
    }
})



// windwin.addEventListener("mouseover", ()=>{
//     console.log("clicked");
//     if(startmenu.style.bottom == "50px"){
//         startmenu.style.bottom = "-655px"
//     }
//     else{
//         startmenu.style.bottom = "50px"
//     }
// })
// windwin.addEventListener("click", ()=>{
//     console.log("clicked");
//     if(startmenu.style.bottom == "50px"){
//         startmenu.style.bottom = "-655px"
//     }
//     else{
//         startmenu.style.bottom = "50px"
//     }
// })



// windsett.addEventListener("mouseover", ()=>{
//     console.log("clicked");
//     if(setting.style.bottom == "50px"){
//         setting.style.bottom = "-655px"
//     }
//     else{
//         setting.style.bottom = "50px"
//     }
// })
windsett.addEventListener("click", ()=>{
    console.log("clicked");
    if(setting.style.bottom == "50px"){
        setting.style.bottom = "-655px"
    }
    else{
        setting.style.bottom = "50px"
    }
})



// windsearch.addEventListener("mouseover", ()=>{
//     console.log("clicked");
//     if(search.style.bottom == "50px"){
//         search.style.bottom = "-655px"
//     }
//     else{
//         search.style.bottom = "50px"
//     }
// })
windsearch.addEventListener("click", ()=>{
    console.log("clicked");
    if(search.style.bottom == "50px"){
        search.style.bottom = "-655px"
    }
    else{
        search.style.bottom = "50px"
    }
})



// windexplor.addEventListener("mouseover", ()=>{
//     console.log("clicked");
//     if(explor.style.bottom == "50px"){
//         explor.style.bottom = "-655px"
//     }
//     else{
//         explor.style.bottom = "50px"
//     }
// })
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

excel.addEventListener("click", ()=>{
    window.location.assign("./excel/index.html");
})

calculator.addEventListener("click", ()=>{
    window.location.assign("./calculator/index.html");
})
