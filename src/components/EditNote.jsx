// EditNote.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useNotes } from '../contexts/NotesContext';

const EditNote = () => {
  const { id } = useParams();
  const { notes, updateNote } = useNotes();
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === id);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      updateNote({
        ...note,
        title,
        content,
        timestamp: new Date().toISOString(),
      });
      navigate(`/note/${id}`);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-2xl font-bold mb-4">Edit Note</h1>
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
          placeholder="Edit your note here..."
          className="border rounded-lg px-2 py-1 w-full h-40"
        ></textarea>
        <button
          onClick={handleSave}
          className="mt-4 py-2 px-6 bg-black text-white rounded-3xl font-semibold"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditNote;
