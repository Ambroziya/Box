
let vpnOn = false;

function playSound(id) {
  document.getElementById(id).play();
}

function toggleVPN() {
  vpnOn = !vpnOn;
  document.getElementById("vpn-status").textContent = vpnOn ? "подключён" : "выключен";
}

function showChat() {
  document.getElementById("main-screen").classList.add("hidden");
  document.getElementById("chat-screen").classList.remove("hidden");
}

function showMain() {
  document.getElementById("chat-screen").classList.add("hidden");
  document.getElementById("main-screen").classList.remove("hidden");
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const box = document.getElementById("chat-box");
  if (input.value.trim() !== "") {
    const msg = document.createElement("div");
    msg.textContent = "Вы: " + input.value;
    box.appendChild(msg);
    input.value = "";
    box.scrollTop = box.scrollHeight;
  }
}

// Эмуляция загрузки
window.onload = () => {
  const loader = document.getElementById("loader");
  const text = document.getElementById("loader-text");
  let step = 0;

  const steps = [
    { text: "загружаем ваши данные", duration: 2000, spin: "spin-right" },
    { text: "отправляем данные в ФСБ", duration: 2000, spin: "spin-left" },
    { text: "", duration: 1500, spin: "" }
  ];

  const runStep = () => {
    const s = steps[step];
    text.textContent = s.text;
    const circle = document.getElementById("loader-circle");
    circle.style.animation = `${s.spin} ${s.duration}ms linear`;

    setTimeout(() => {
      step++;
      if (step < steps.length) {
        runStep();
      } else {
        loader.classList.add("hidden");
        document.getElementById("main-screen").classList.remove("hidden");
      }
    }, s.duration);
  };

  runStep();
};
