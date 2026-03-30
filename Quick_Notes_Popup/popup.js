const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const notesList = document.getElementById('notesList');
const clearAllBtn = document.getElementById('clearAllBtn');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// --- INITIALIZE ---
document.addEventListener('DOMContentLoaded', () => {
  // Load Theme
  const savedTheme = localStorage.getItem('notesTheme') || 'dark-mode';
  setTheme(savedTheme);
  
  // Check if list is empty to show "No notes"
  updateEmptyState();
});

// --- ADD NOTE LOGIC ---
addBtn.addEventListener('click', () => {
  const text = noteInput.value.trim();
  
  if (text !== "") {
    createNoteElement(text);
    noteInput.value = ""; // Clear input
    updateEmptyState();
  }
});

function createNoteElement(text) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="note-text">${text}</span>
    <button class="delete-note"><i class="fa-solid fa-trash-can"></i></button>
  `;
  notesList.appendChild(li);
}

// --- DELETE & CLEAR LOGIC ---
notesList.addEventListener('click', (e) => {
  if (e.target.closest('.delete-note')) {
    e.target.closest('li').remove();
    updateEmptyState();
  }
});

clearAllBtn.addEventListener('click', () => {
  notesList.innerHTML = '';
  updateEmptyState();
});

// --- EMPTY STATE LOGIC ---
function updateEmptyState() {
  if (notesList.children.length === 0) {
    notesList.innerHTML = `<div id="emptyMsg" style="text-align:center; color:var(--text-muted); margin-top:20px; font-size:0.9rem;">No notes found</div>`;
  } else {
    const msg = document.getElementById('emptyMsg');
    if (msg) msg.remove();
  }
}

// --- THEME TOGGLE ---
themeToggle.addEventListener('click', () => {
  const isDark = body.classList.contains('dark-mode');
  setTheme(isDark ? 'light-mode' : 'dark-mode');
});

function setTheme(theme) {
  if (theme === 'light-mode') {
    body.classList.replace('dark-mode', 'light-mode');
    themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
  localStorage.setItem('notesTheme', theme);
}

// Close App
document.getElementById('closeApp').addEventListener('click', () => window.close());