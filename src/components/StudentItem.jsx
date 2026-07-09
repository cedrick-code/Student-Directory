function StudentItem({ student, onDelete }) {
  return (
    <div className="student-item">
      <h3>{student.name}</h3>
      <p>Course: {student.course}</p>
      <p>Year Level: {student.year}</p>
      <button className="delete-btn" onClick={() => onDelete(student.id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentItem;