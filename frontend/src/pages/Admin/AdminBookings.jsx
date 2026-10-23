import { useEffect, useState } from "react";
import { Container, Table, Spinner } from "react-bootstrap";
import API from "../../api/axios";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await API.get("/bookings");
        setBookings(res.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) return <Spinner animation="border" />;

  return (
    <Container className="mt-4">
      <h2>📋 Manage Bookings</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Movie</th>
            <th>Seats</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.userName}</td>
              <td>{b.movieTitle}</td>
              <td>{b.seats.join(", ")}</td>
              <td>{new Date(b.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminBookings;
