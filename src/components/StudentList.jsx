import StudentItem from './StudentItem';

function StudentList({ students, onDelete }) {
  return (
    <div className="student-list">
      {students.length === 0 ? (
        <p className="empty-message">No students registered yet.</p>
      ) : (
        students.map((student) => (
          <StudentItem key={student.id} student={student} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default StudentList;