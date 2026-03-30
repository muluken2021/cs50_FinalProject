const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");

// Load notes when popup opens
document.addEventListener("DOMContentLoaded", loadNotes);

// Add note
addBtn.addEventListener("click", () => {
  const text = noteInput.value.trim();
  if (text === "") return;

  chrome.storage.local.get(["notes"], (result) => {
    const notes = result.notes || [];
    notes.push(text);

    chrome.storage.local.set({ notes }, () => {
      noteInput.value = "";
      displayNotes(notes);
    });
  });
});

// Display notes
function displayNotes(notes) {
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${note}
      <button data-index="${index}">❌</button>
    `;

    // Delete button
    li.querySelector("button").addEventListener("click", () => {
      deleteNote(index);
    });

    notesList.appendChild(li);
  });
}

// Delete note
function deleteNote(index) {
  chrome.storage.local.get(["notes"], (result) => {
    const notes = result.notes || [];
    notes.splice(index, 1);

    chrome.storage.local.set({ notes }, () => {
      displayNotes(notes);
    });
  });
}

// Load notes from storage
function loadNotes() {
  chrome.storage.local.get(["notes"], (result) => {
    const notes = result.notes || [];
    displayNotes(notes);
  });
}