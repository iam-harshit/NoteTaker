// CreateNote.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotes } from '../contexts/NotesContext';

const CreateNote = () => {
  const { addNote } = useNotes();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      const newNote = {
        title,
        content,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      };
      addNote(newNote);
      navigate('/');
    }
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-2xl font-bold mb-4">Create Note</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg px-2 py-1 mb-2 w-full"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note here..."
          className="border rounded px-2 py-1 w-full h-40"
        ></textarea>
        <button
          onClick={handleAddNote}
          className="mt-4 py-2 px-6 bg-black text-white rounded-3xl font-semibold"
        >
          Save Note
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
