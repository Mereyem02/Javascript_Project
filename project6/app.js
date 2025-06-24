const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesList = document.getElementById('notesList');

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notesList.innerHTML = '';
  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.textContent = note;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '×';
    deleteBtn.title = "Delete note";
    deleteBtn.addEventListener('click', () => {
      deleteNote(index);
    });

    noteDiv.appendChild(deleteBtn);
    notesList.appendChild(noteDiv);
  });
}

function saveNotes(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function addNote() {
  const noteText = noteInput.value.trim();
  if (!noteText) return alert("Please write something to add a note.");

  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notes.push(noteText);
  saveNotes(notes);
  noteInput.value = '';
  loadNotes();
}

function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notes.splice(index, 1);
  saveNotes(notes);
  loadNotes();
}

addNoteBtn.addEventListener('click', addNote);
window.addEventListener('load', loadNotes);
