let vpnOn = false;

function playSound(type) {
    const sounds = {
        vzuhh: new Audio("vzuh.mp3"),
        bzzz: new Audio("bzzz.mp3"),
        piu: new Audio("piu.mp3")
    };
    sounds[type].play();
}

function toggleVPN() {
    vpnOn = !vpnOn;
    document.getElementById("vpnStatus").textContent = "VPN: " + (vpnOn ? "Подключён" : "Выключен");
}
