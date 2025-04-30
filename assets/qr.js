var error = document.querySelector(".error");

document.querySelectorAll(".action").forEach((element) => {
    element.addEventListener('click', () => {
        if (element.querySelector('.action_title').innerText === "Zeskanuj kod QR") {
            openScanner();
        } else {
            error.classList.add("error_open");
        }
    });
});

document.querySelectorAll(".close").forEach((element) => {
    element.addEventListener('click', () => {
        error.classList.remove("error_open");
    })
})

function openScanner() {
    const video = document.createElement('video');
    document.body.appendChild(video);

    const qrScanner = new QrScanner(video, result => {
        alert("Zeskanowano kod QR: " + result);
        qrScanner.stop();
        video.remove();
    });

    qrScanner.start();

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Zamknij';
    closeButton.onclick = () => {
        qrScanner.stop();
        video.remove();
    };
    document.body.appendChild(closeButton);
}

var params = new URLSearchParams(window.location.search);

function sendTo(url){
    location.href = `${url}.html?` + params;
}

document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
})

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) {
        return 1;
    }
  
    if (/android/i.test(userAgent)) {
        return 2;
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 3;
    }
  
    return 4;
}
  
if (getMobileOperatingSystem() == 2){
    document.querySelector(".bottom_bar").style.height = "70px";
}
