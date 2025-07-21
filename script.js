
let currentChat = 'system';

function showScreen(screen) {
  document.getElementById('main-screen').style.display = screen === 'main' ? 'block' : 'none';
  document.getElementById('chat-screen').style.display = screen === 'chat' ? 'block' : 'none';
  if (screen === 'chat' && currentChat === 'group') loadGroupChat();
}

const chatLog = () => document.getElementById('chat-log');
const input = () => document.getElementById('user-input');

const responses = {
  system: [
    "🔒 Система ведёт наблюдение.",
    "🧠 Анализ завершён. Вы — загадка.",
    "📤 Отправка файлов... ой, они уже у нас.",
    "✅ Вы приняты. Пока."
  ],
  bot: {
    привет: "Привет, агент!",
    кто: "Я — искусственный разум, но меня зовут Сергей.",
    пока: "Уходим в оффлайн...",
    default: "Не понял. Но звучит убедительно."
  },
  group: [
    "👻 @ghost-bot: Кто выключил VPN?",
    "🐸 @kermit: Пью чай, наблюдаю за хаосом...",
    "🤡 @clowncore: Все системы сломались, кайф.",
    "🛸 @alien420: Мы уже в пути, держитесь там."
  ]
};

function switchChat(type) {
  currentChat = type;
  chatLog().innerHTML = '';
  if (type === 'group') loadGroupChat();
}

function loadGroupChat() {
  chatLog().innerHTML = '';
  responses.group.forEach(msg => appendMessage(msg, false));
}

function sendMessage() {
  const text = input().value.trim();
  if (!text) return;
  appendMessage("Вы: " + text, true);
  input().value = '';

  if (currentChat === 'system') {
    const reply = responses.system[Math.floor(Math.random() * responses.system.length)];
    setTimeout(() => appendMessage(reply, false), 800);
  } else if (currentChat === 'bot') {
    const key = text.toLowerCase().replace(/[^a-zа-яё]/gi, '');
    const reply = responses.bot[key] || responses.bot.default;
    setTimeout(() => appendMessage(reply, false), 600);
  }
}

function appendMessage(text, fromUser) {
  const div = document.createElement('div');
  div.className = 'chat-message';
  div.textContent = text;
  chatLog().appendChild(div);
  chatLog().scrollTop = chatLog().scrollHeight;
}
