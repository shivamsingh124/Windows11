let videoElement = document.querySelector("video");
let recordButton = document.querySelector(".inner-record");
let capturePhoto = document.querySelector(".inner-capture");
let filters = document.querySelectorAll(".filter");
let filterSelected = "none";
let zoomIn = document.querySelector(".zoomIn");
let zoomOut = document.querySelector(".zoomOut");
let galleryBtn = document.querySelector(".gallery-btn");

galleryBtn.addEventListener("click" , function(){
  window.location.assign("gallery.html");
})

let minZoom = 1;
let maxZoom = 3.1;
let currentZoom = 1;

let recordingState = false;
let mediaRecorder;

(async function () {
  let constraint = { video: true };
  let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
  videoElement.srcObject = mediaStream;
  mediaRecorder = new MediaRecorder(mediaStream);
  mediaRecorder.onstart = function () {
    console.log("Inside on start");
  };
  mediaRecorder.ondataavailable = function (e) {
    console.log("Inside on data available");
    console.log(e.data);
    let videoObject = new Blob([e.data], { type: "video/mp4" });
    // console.log(videoObject);
    // videoObject/imageObject => URL
    // aTag

    // let videoURL = URL.createObjectURL(videoObject);
    // let aTag = document.createElement("a");
    // aTag.download = `Video${Date.now()}.mp4`;
    // aTag.href = videoURL;
    // aTag.click();

    // add video object to db
    addMedia(videoObject , "video");
  };
  mediaRecorder.onstop = function () {
    console.log("Inside on stop");
  };
  recordButton.addEventListener("click", recordMediaFun);
  capturePhoto.addEventListener("click", capturePhotoFun);
})();

for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", function (e) {
    let currentFilterSelected = e.target.style.backgroundColor;
    if (currentFilterSelected == "") {
      if (document.querySelector(".filter-div")) {
        document.querySelector(".filter-div").remove();
        filterSelected = "none";
        return;
      }
    }

    console.log(currentFilterSelected);
    if (filterSelected == currentFilterSelected) {
      return;
    }

    let filterDiv = document.createElement("div");
    filterDiv.classList.add("filter-div");
    filterDiv.style.backgroundColor = currentFilterSelected;

    if (filterSelected == "none") {
      document.body.append(filterDiv);
    } else {
      document.querySelector(".filter-div").remove();
      document.body.append(filterDiv);
    }
    filterSelected = currentFilterSelected;
  });
}

zoomIn.addEventListener("click", function () {
  if (currentZoom + 0.1 > maxZoom) {
    return;
  }
  currentZoom = currentZoom + 0.1;
  videoElement.style.transform = `scale(${currentZoom})`;
});

zoomOut.addEventListener("click", function () {
  if (currentZoom - 0.1 < minZoom) {
    return;
  }
  currentZoom = currentZoom - 0.1;
  videoElement.style.transform = `scale(${currentZoom})`;
});

function capturePhotoFun() {
  capturePhoto.classList.add("animate-capture");

  setTimeout(function () {
    capturePhoto.classList.remove("animate-capture");
  }, 1000);

  //   canvas
  let canvas = document.createElement("canvas");
  canvas.width = 640; //video width
  canvas.height = 480; // video height

  let ctx = canvas.getContext("2d");

  if (currentZoom != 1) {
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(currentZoom, currentZoom);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
  }

  ctx.drawImage(videoElement, 0, 0);

  if (filterSelected != "none") {
    ctx.fillStyle = filterSelected;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // download canvas as an image
  // let aTag = document.createElement("a");
  // aTag.download = `Image${Date.now()}.jpg`;
  // aTag.href = canvas.toDataURL("image/jpg");
  // aTag.click();

  // save image to DB
  let canvasURL = canvas.toDataURL("image.jpg");
  addMedia(canvasURL, "photo");
}

function recordMediaFun() {
  if (recordingState) {
    // already recording is going on
    // stop the recording
    mediaRecorder.stop();
    recordingState = false;
    recordButton.classList.remove("animate-record");
  } else {
    // start the recording
    mediaRecorder.start();
    recordingState = true;
    recordButton.classList.add("animate-record");
  }
}

function addMedia(mediaURL, mediaType) {
  //   db me media add hojaega
  let txnObject = db.transaction("Media", "readwrite"); // start transaction on mediaTable
  let mediaTable = txnObject.objectStore("Media"); // this will get access to mediaTable

  mediaTable.add({ mid: Date.now(), type: mediaType, url: mediaURL }); // it will add this object in mediaTable or mediaStore

  txnObject.onerror = function (e) {
    console.log("txn failed");
    console.log(e);
  };
}