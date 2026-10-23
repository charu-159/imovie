

import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import API from "../api/axios"; // your axios instance

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await API.get("/movies"); // backend route
        setMovies(res.data);
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading movies...</p>
      </div>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">🎬 Popular Movies</h2>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} md={4}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
