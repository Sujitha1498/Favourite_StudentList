import StudentCard from "../components/StudentCard";
import { useStudent } from "../context/StudentContext";

function FavouriteStudents() {
  const { favourites } = useStudent();

  return (
    <div className="page">

      <div className="page-heading">
        <p className="label">YOUR COLLECTION</p>
        <h1>Favourite Students</h1>
        <p>
          Students you have added to your favourite list.
        </p>
      </div>

      {favourites.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">♡</div>

          <h2>No favourite students added yet</h2>

          <p>
            Go to the Student List and add students to your
            favourites.
          </p>
        </div>
      ) : (
        <div className="student-grid">
          {favourites.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              isFavouritePage={true}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default FavouriteStudents;