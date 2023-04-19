const videowrap = document.getElementById("video-wrap");
const video = document.getElementById("video");
const closeBtn = document.getElementById("close");


function closeVid() {
    if (closeBtn.innerHTML == "Video schliessen") {
        videowrap.style.display = "none";
        closeBtn.innerHTML = "Video einblenden";
    } else if (closeBtn.innerHTML == "Video einblenden") {
        videowrap.style.display = "flex";
        closeBtn.innerHTML = "Video schliessen";
    }
}

closeBtn.addEventListener("click", function () {
    closeVid();
});


