import StudentCard from "../components/StudentCard";

function StudentList() {
  const students = [
    {
      id: 1,
      name: "Ananya Sharma",
      rollNumber: "CS101",
      course: "Computer Science",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      rollNumber: "CS102",
      course: "Computer Science",
    },
    {
      id: 3,
      name: "Priya Nair",
      rollNumber: "CS103",
      course: "Information Technology",
    },
    {
      id: 4,
      name: "Arjun Patel",
      rollNumber: "CS104",
      course: "Artificial Intelligence",
    },
    {
      id: 5,
      name: "Meera Krishnan",
      rollNumber: "CS105",
      course: "Information Technology",
    },
    {
      id: 6,
      name: "Vikram Singh",
      rollNumber: "CS106",
      course: "Computer Science",
    },
  ];

  return (
    <div className="page">

      <div className="page-heading">
        <p className="label">STUDENTS</p>
        <h1>Student List</h1>
        <p>
          Choose your favourite students from the list below.
        </p>
      </div>

      <div className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>

    </div>
  );
}

export default StudentList;