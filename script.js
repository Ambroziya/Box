
function triggerEffect(type) {
  let status = document.getElementById("status");
  let audio = new Audio();
  switch(type) {
    case '12d':
      document.body.style.transition = "all 0.3s";
      document.body.style.transform = "rotate(2deg)";
      status.textContent = "12D активирован. Вы вне времени.";
      audio.src = "https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg";
      break;
    case 'byte':
      status.textContent = "Сжато до 1 байта. Поздравляем.";
      audio.src = "https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg";
      break;
    case 'mind':
      status.textContent = "Сканирование мозга... Ошибка!";
      audio.src = "https://actions.google.com/sounds/v1/alarms/beep_short.ogg";
      break;
  }
  audio.play();
  setTimeout(() => document.body.style.transform = "rotate(0deg)", 300);
}
function toggleVPN() {
  let btn = document.getElementById("vpn-btn");
  if (btn.textContent.includes("выключен")) {
    btn.textContent = "VPN подключён";
  } else {
    btn.textContent = "VPN выключен";
  }
}
window.onload = function() {
  const splashText = document.getElementById("splash-text");
  setTimeout(() => { splashText.textContent = "загружаем ваши данные..."; }, 200);
  setTimeout(() => { splashText.textContent = "отправляем данные в ФСБ..."; }, 2200);
  setTimeout(() => { splashText.textContent = ""; }, 4200);
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }, 5700);
}


function showChat() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('chatPage').style.display = 'block';
}

function showMain() {
  document.getElementById('chatPage').style.display = 'none';
  document.getElementById('main').style.display = 'block';
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  if (message) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = 'user-message';
    chatBox.appendChild(messageDiv);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
