
function playSound(id) {
    document.getElementById(id).play();
}

let vpnState = false;
function toggleVPN() {
    vpnState = !vpnState;
    document.getElementById('vpnBtn').innerText = vpnState ? 'VPN подключён' : 'VPN выключен';
}

function openChat() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('chatContainer').style.display = 'flex';
}

function closeChat() {
    document.getElementById('chatContainer').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;

    const chatBox = document.getElementById('chatBox');
    const userMsg = document.createElement('div');
    userMsg.textContent = "Вы: " + message;
    chatBox.appendChild(userMsg);

    const botMsg = document.createElement('div');
    botMsg.textContent = "S.E.R.G: " + getFakeReply(message);
    chatBox.appendChild(botMsg);

    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getFakeReply(msg) {
    const responses = [
        "Обработка завершена.",
        "Провожу анализ нейросети...",
        "Сигнал получен.",
        "Подключение к серверу Ватикана...",
        "Нейросинтез выполнен."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
