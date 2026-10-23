
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import API from "../api/axios"; // axios instance

function Bookings() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const movieId = params.get("movieId");

  const seats = ["A1", "A2", "A3", "B1", "B2", "B3"];
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleConfirm = async () => {
    try {
      setLoading(true);
      const res = await API.post("/bookings", {
        movieId,
        seats: selectedSeats,
        userId: "123", // later: get from auth token
      });
      setMessage(res.data.message);
    } catch (err) {
      console.error("Booking error:", err);
      setMessage("Booking failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        <h2>🎟️ Booking Page</h2>
        <p>Booking for Movie ID: {movieId}</p>

        <h4>Select Seats:</h4>
        <div className="d-flex flex-wrap mb-3">
          {seats.map((seat) => (
            <Button
              key={seat}
              variant={selectedSeats.includes(seat) ? "success" : "outline-secondary"}
              className="m-2"
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </Button>
          ))}
        </div>

        <Button
          variant="primary"
          onClick={handleConfirm}
          disabled={selectedSeats.length === 0 || loading}
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </Button>

        {message && <p className="mt-3">{message}</p>}
      </Card>
    </Container>
  );
}

export default Bookings;
