function StudentCounter({ count }) {
  return (
    <div className="student-counter">
      Total Registered Students: <strong>{count}</strong>
    </div>
  );
}

export default StudentCounter;