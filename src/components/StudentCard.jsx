import { useStudent } from "../context/StudentContext";

function StudentCard({ student, isFavouritePage = false }) {
  const {
    favourites,
    addToFavourite,
    removeFromFavourite,
  } = useStudent();

  const alreadyFavourite = favourites.some(
    (item) => item.id === student.id
  );

  return (
    <div className="student-card">

      <div className="student-icon">
        {student.name.charAt(0)}
      </div>

      <div className="student-info">
        <h2>{student.name}</h2>
        <p>Roll Number: {student.rollNumber}</p>
        <span>{student.course}</span>
      </div>

      {!isFavouritePage ? (
        <button
          className="favourite-button"
          onClick={() => addToFavourite(student)}
          disabled={alreadyFavourite}
        >
          {alreadyFavourite ? "✓ Added" : "♡ Add to Favourite"}
        </button>
      ) : (
        <button
          className="remove-button"
          onClick={() => removeFromFavourite(student.id)}
        >
          Remove
        </button>
      )}

    </div>
  );
}

export default StudentCard;