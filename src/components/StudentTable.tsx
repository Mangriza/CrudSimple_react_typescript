import React from "react";

interface Student {
  name: string;
  nim: string;
  major: string;
  year: string;
}

interface StudentTableProps {
  students: Student[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

const StudentTable: React.FC<StudentTableProps> = ({ students, onDelete, onEdit }) => {
  return (
    <div className="table-container">
      <h2>Data Mahasiswa</h2>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIM</th>
            <th>Jurusan</th>
            <th>Angkatan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.nim}</td>
              <td>{student.major}</td>
              <td>{student.year}</td>
              <td>
                <button onClick={() => onEdit(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
