
let vpnOn = false;

function playSound(id) {
    document.getElementById(id).play();
}

function toggleVPN() {
    vpnOn = !vpnOn;
    document.getElementById("vpnBtn").innerText = vpnOn ? "VPN подключён" : "VPN выключен";
}

function openChat() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("chat").classList.remove("hidden");
}

function closeChat() {
    document.querySelector(".container").style.display = "block";
    document.getElementById("chat").classList.add("hidden");
}

function sendMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value.trim();
    if (msg) {
        const chatBox = document.getElementById("chatMessages");
        const p = document.createElement("p");
        p.textContent = "Вы: " + msg;
        chatBox.appendChild(p);
        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
