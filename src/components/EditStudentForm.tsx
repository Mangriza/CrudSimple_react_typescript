import React, { useState } from "react";

interface EditStudentFormProps {
  initialStudent: { name: string; nim: string; major: string; year: string };
  onSave: (updatedStudent: { name: string; nim: string; major: string; year: string }) => void;
  onCancel: () => void;
}

const EditStudentForm: React.FC<EditStudentFormProps> = ({
  initialStudent,
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState(initialStudent.name);
  const [nim, setNim] = useState(initialStudent.nim);
  const [major, setMajor] = useState(initialStudent.major);
  const [year, setYear] = useState(initialStudent.year);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, nim, major, year });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        value={nim}
        onChange={(e) => setNim(e.target.value)}
        required
      />
      <input
        type="text"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
        required
      />
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <button type="submit">Simpan</button>
      <button type="button" onClick={onCancel}>
        Batal
      </button>
    </form>
  );
};

export default EditStudentForm;
