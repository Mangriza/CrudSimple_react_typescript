import React, { useState } from "react";

interface AddStudentFormProps {
  onAddStudent: (student: { name: string; nim: string; major: string; year: string }) => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddStudent({ name, nim, major, year });
    setName("");
    setNim("");
    setMajor("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Nama"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        value={nim}
        placeholder="NIM"
        onChange={(e) => setNim(e.target.value)}
        required
      />
      <input
        type="text"
        value={major}
        placeholder="Jurusan"
        onChange={(e) => setMajor(e.target.value)}
        required
      />
      <input
        type="text"
        value={year}
        placeholder="Angkatan"
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <button type="submit">Tambah</button>
    </form>
  );
};

export default AddStudentForm;
