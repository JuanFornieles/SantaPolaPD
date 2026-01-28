/* CREADO POR JUAN (ESCLAVO) */
/* FECHA: 28/01/2026 */
/* RUBEN EXPLOTADOR */


const loginSection = document.getElementById('loginSection');
const gameSection = document.getElementById('gameSection');
const usernameInput = document.getElementById('usernameInput');
const playerNameSpan = document.getElementById('playerName');
const startBtn = document.getElementById('startBtn');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');

let playerName = '';
let character = null;
let quests = [];

startBtn.addEventListener('click', () => {
    const name = usernameInput.value.trim();
    if (name) {
        playerName = name;
        playerNameSpan.textContent = playerName;
        loginSection.style.display = 'none';
        gameSection.style.display = 'block';
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    } else {
        alert('Introduce un nombre de usuario');
    }
});

logoutBtn.addEventListener('click', () => {
    location.reload();
});


const createCharacterBtn = document.getElementById('createCharacterBtn');
const characterInfo = document.getElementById('characterInfo');

createCharacterBtn.addEventListener('click', () => {
    character = {
        name: playerName + 'Hero',
        level: 1,
        health: 100,
        mana: 50
    };
    updateCharacterInfo();
});

function updateCharacterInfo() {
    if (character) {
        characterInfo.textContent = `Nombre: ${character.name} | Nivel: ${character.level} | Salud: ${character.health} | Mana: ${character.mana}`;
    }
}


const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');

sendChatBtn.addEventListener('click', () => {
    const msg = chatInput.value.trim();
    if (msg) {
        const messageElement = document.createElement('p');
        messageElement.textContent = `${playerName}: ${msg}`;
        chatBox.appendChild(messageElement);
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});


const questList = document.getElementById('questList');
const newQuestBtn = document.getElementById('newQuestBtn');

newQuestBtn.addEventListener('click', () => {
    const quest = `Misión #${quests.length + 1}: Completa una tarea épica`;
    quests.push(quest);
    renderQuests();
});

function renderQuests() {
    questList.innerHTML = '';
    quests.forEach(q => {
        const li = document.createElement('li');
        li.textContent = q;
        questList.appendChild(li);
    });
}
