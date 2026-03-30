const note = document.getElementById("note");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");

// Load saved note
document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["note"], (result) => {
    if (result.note) {
      note.value = result.note;
    }
  });
});

// Save note
saveBtn.addEventListener("click", () => {
  chrome.storage.local.set({ note: note.value }, () => {
    alert("Note saved!");
  });
});

// Clear note
clearBtn.addEventListener("click", () => {
  note.value = "";
  chrome.storage.local.remove("note");
});