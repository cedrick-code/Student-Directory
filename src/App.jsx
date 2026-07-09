import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import StudentList from './components/StudentList';
import StudentCounter from './components/StudentCounter';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  function handleAddStudent(newStudent) {
    const updatedList = students.concat(newStudent);
    setStudents(updatedList);
  }

  function handleDeleteStudent(id) {
    const updatedList = students.filter((student) => student.id !== id);
    setStudents(updatedList);
  }

  return (
    <div className="app">
      <h1>Student Directory</h1>

      <RegistrationForm onAddStudent={handleAddStudent} />
      <StudentCounter count={students.length} />
      <StudentList students={students} onDelete={handleDeleteStudent} />
    </div>
  );
}

export default App;