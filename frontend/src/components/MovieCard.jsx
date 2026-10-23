
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleBook = () => {
    // Pass movie ID to bookings page
    navigate(`/bookings?movieId=${movie.id}`);
  };

  return (
    <Card className="shadow-sm mb-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.poster} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description.length > 80
            ? movie.description.substring(0, 80) + "..."
            : movie.description}
        </Card.Text>
        <Button variant="primary" onClick={handleBook}>
          Book Now
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
