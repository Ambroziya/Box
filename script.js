
let vpnStatus = false;
const loader = document.getElementById('loader');
const loadingCircle = document.getElementById('loading-circle');
const loadingText = document.getElementById('loading-text');
const main = document.getElementById('main');
const chat = document.getElementById('chat');
const vpnBtn = document.getElementById('vpn-btn');

function playEffect(type) {
  const sound = new Audio(type + ".mp3");
  sound.play();
}

function toggleVPN() {
  vpnStatus = !vpnStatus;
  vpnBtn.innerText = vpnStatus ? "VPN подключён" : "VPN выключен";
}

function toggleChat() {
  main.classList.toggle('hidden');
  chat.classList.toggle('hidden');
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value;
  if (message.trim() === "") return;
  const chatMessages = document.getElementById("chat-messages");
  const div = document.createElement("div");
  div.textContent = "Вы: " + message;
  chatMessages.appendChild(div);
  input.value = "";
}

function runLoaderAnimation() {
  loadingText.textContent = "Загружаем ваши данные...";
  setTimeout(() => {
    loadingCircle.style.animation = "spinLeft 2s linear forwards";
    loadingText.textContent = "Отправляем данные в ФСБ...";
    setTimeout(() => {
      loadingText.textContent = "";
      setTimeout(() => {
        loader.style.display = "none";
        main.classList.remove("hidden");
      }, 1500);
    }, 2000);
  }, 2000);
}

window.onload = runLoaderAnimation;
