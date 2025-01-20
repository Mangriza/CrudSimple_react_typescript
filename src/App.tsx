import React, { useState } from "react";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";
import EditStudentForm from "./components/EditStudentForm";
import "./App.css"; 

interface Student {
  name: string;
  nim: string;
  major: string;
  year: string;
}

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

 
  const handleAddStudent = (student: Student) => {

    console.log("Adding student:", student);

   
    setStudents((prevStudents) => [...prevStudents, student]);

 
    console.log("Updated students list:", students);
  };

  const handleDeleteStudent = (index: number) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const handleEditStudent = (index: number) => {
    setEditingIndex(index);
  };

  const handleSaveStudent = (updatedStudent: Student) => {
    if (editingIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = updatedStudent;
      setStudents(updatedStudents);
      setEditingIndex(null);
    }
  };

  return (
    <div className="app-container">
      <h1>Crud Simple Management System</h1>
      {editingIndex === null ? (
        <>
          <h2>Form Input Data Mahasiswa</h2>
          <AddStudentForm onAddStudent={handleAddStudent} />
          <StudentTable
            students={students}
            onDelete={handleDeleteStudent}
            onEdit={handleEditStudent}
          />
        </>
      ) : (
        <EditStudentForm
          initialStudent={students[editingIndex]}
          onSave={handleSaveStudent}
          onCancel={() => setEditingIndex(null)}
        />
      )}
    </div>
  );
};

export default App;
