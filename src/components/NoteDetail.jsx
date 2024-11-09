import React from 'react';
import { useParams } from 'react-router-dom';
import { useNotes } from '../contexts/NotesContext';

const NoteDetail = () => {
  const { id } = useParams();
  const { notes } = useNotes();
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return <p>Note not found!</p>;
  }

  // Function to preserve newlines in the content
  const formatContent = (content) => {
    // Split the content by newlines and render <br /> tags
    return content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="m-20 flex flex-col max-w-full">
      <h1 className="text-4xl font-semibold mb-6 break-words">{note.title}</h1>
      <div className="text-xl">
        {/* Render the formatted content with preserved line breaks */}
        {formatContent(note.content)}
      </div>
    </div>
  );
};

export default NoteDetail;
