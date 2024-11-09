import React, { useState, useEffect } from 'react';
import { useNotes } from '../contexts/NotesContext';
import { Link } from 'react-router-dom';
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineSearch,
} from 'react-icons/ai';

function ViewNote() {
  const { notes, deleteNote } = useNotes();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const filtered = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNotes(filtered);
    }, 300); // 300ms delay for debouncing

    return () => clearTimeout(delayDebounceFn); // Cleanup timeout on component unmount
  }, [searchTerm, notes]);

  return (
    <div className="m-20">
      <h2 className="text-3xl font-semibold mb-8">Here are your notes</h2>

      {/* Search Input with Icon */}
      <div className="relative mb-6 w-full md:w-1/3">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          <AiOutlineSearch className="w-5 h-5" />
        </span>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 py-2 w-full border border-gray-300 rounded-lg focus:border-black"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Notes title</th>
              <th className="px-4 py-2 border">Last modified at</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note) => (
                <tr key={note.id} className="text-center">
                  <td className="px-4 py-2 border">
                    <Link
                      to={`/note/${note.id}`}
                      className="text-blue-600 font-semibold"
                    >
                      {note.title}
                    </Link>
                  </td>
                  <td className="px-4 py-2 border">
                    {formatDate(note.timestamp)}
                  </td>
                  <td className="px-4 py-2 border space-x-6 flex justify-center items-center">
                    <Link to={`/edit/${note.id}`} className="text-black">
                      <AiOutlineEdit className="w-6 h-6" />
                    </Link>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="text-black"
                    >
                      <AiOutlineDelete className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-4 text-center text-gray-500">
                  No search results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewNote;
