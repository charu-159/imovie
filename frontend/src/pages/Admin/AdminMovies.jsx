import { useEffect, useState } from "react";
import { Container, Table, Button, Spinner } from "react-bootstrap";
import API from "../../api/axios";

function AdminMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await API.get("/movies");
        setMovies(res.data);
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/movies/${id}`);
      setMovies(movies.filter((m) => m.id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  if (loading) return <Spinner animation="border" />;

  return (
    <Container className="mt-4">
      <h2>🎬 Manage Movies</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Poster</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>{m.title}</td>
              <td>{m.description}</td>
              <td><img src={m.poster} alt={m.title} width="80" /></td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(m.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary">➕ Add New Movie</Button>
    </Container>
  );
}

export default AdminMovies;
