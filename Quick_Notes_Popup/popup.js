const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const notesList = document.getElementById('notesList');
const clearAllBtn = document.getElementById('clearAllBtn');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// --- INITIALIZE ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Load Theme
  const savedTheme = localStorage.getItem('notesTheme') || 'dark-mode';
  setTheme(savedTheme);
  
  // 2. Load Saved Notes
  loadNotes();
});

// --- ADD NOTE LOGIC ---
addBtn.addEventListener('click', () => {
  const text = noteInput.value.trim();
  
  if (text !== "") {
    createNoteElement(text);
    noteInput.value = ""; 
    saveNotes(); // Save to memory
    updateEmptyState();
  }
});

// Helper to build the HTML for a note
function createNoteElement(text) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="note-text">${text}</span>
    <button class="delete-note"><i class="fa-solid fa-trash-can"></i></button>
  `;
  notesList.appendChild(li);
}

// --- STORAGE LOGIC ---

// Save all current notes to localStorage
function saveNotes() {
  const notes = [];
  // Grab all note-text spans and put them in an array
  document.querySelectorAll('.note-text').forEach(noteSpan => {
    notes.push(noteSpan.innerText);
  });
  localStorage.setItem('savedQuickNotes', JSON.stringify(notes));
}

// Load notes from localStorage on startup
function loadNotes() {
  const saved = localStorage.getItem('savedQuickNotes');
  if (saved) {
    const notesArray = JSON.parse(saved);
    notesList.innerHTML = ""; // Clear placeholder
    notesArray.forEach(text => createNoteElement(text));
  }
  updateEmptyState();
}

// --- DELETE & CLEAR LOGIC ---
notesList.addEventListener('click', (e) => {
  if (e.target.closest('.delete-note')) {
    e.target.closest('li').remove();
    saveNotes(); // Update memory after deleting
    updateEmptyState();
  }
});

clearAllBtn.addEventListener('click', () => {
  if (confirm("Clear all notes?")) {
    notesList.innerHTML = '';
    saveNotes(); // Update memory
    updateEmptyState();
  }
});

// --- EMPTY STATE LOGIC ---
function updateEmptyState() {
  // Only show "No notes found" if the list is actually empty
  if (notesList.querySelectorAll('li').length === 0) {
    if (!document.getElementById('emptyMsg')) {
        notesList.innerHTML = `<div id="emptyMsg" style="text-align:center; color:var(--text-muted); margin-top:20px; font-size:0.9rem; padding: 20px; border: 1px dashed var(--text-muted); border-radius: 10px; opacity: 0.6;">No notes found</div>`;
    }
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
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
  localStorage.setItem('notesTheme', theme);
}

// Close App
document.getElementById('closeApp').addEventListener('click', () => window.close());