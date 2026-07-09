import { useState } from 'react';

function RegistrationForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name === '' || course === '' || year === '') {
      alert('Please fill out all fields.');
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      course: course,
      year: year,
    };

    onAddStudent(newStudent);

    setName('');
    setCourse('');
    setYear('');
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Register Student</h2>

      <label>Full Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Juan Dela Cruz" />

      <label>Course</label>
      <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="e.g. BSIT" />

      <label>Year Level</label>
      <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="e.g. 3rd Year" />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default RegistrationForm;