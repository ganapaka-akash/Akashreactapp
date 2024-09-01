// src/Movies.js
import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'; // Import caret icons

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.post('https://hoblist.com/api/movieList', {
            category: 'movies',
            language: 'kannada',
            genre: 'all',
            sort: 'voting'
        }).then(response => {
            const moviesWithVotes = response.data.result.map(movie => ({
                ...movie,
                votes: movie.votes || 0,
            }));
            setMovies(moviesWithVotes);
        }).catch(error => {
            console.error('Error fetching movies:', error);
        });
    }, []);

    const handleUpvote = (id) => {
        setMovies(movies.map(movie => {
            if (movie._id === id) {
                return { ...movie, votes: movie.votes + 1 };
            }
            return movie;
        }));
    };

    const handleDownvote = (id) => {
        setMovies(movies.map(movie => {
            if (movie._id === id && movie.votes > 0) {
                return { ...movie, votes: movie.votes - 1 };
            }
            return movie;
        }));
    };

    return (
        <Container className="mt-5">
            <h2>Movie List</h2>
            <Row>
                {movies.map(movie => (
                    <Col md={6} className="mb-4" key={movie._id}>
                        <Card>
                            <Row noGutters>
                                <Col md={4}>
                                    <Card.Img variant="top" src={movie.poster || 'https://via.placeholder.com/150'} />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Card.Text>
                                            <strong>Genre:</strong> {movie.genre}<br />
                                            <strong>Director:</strong> {movie.director.join(', ')}<br />
                                            <strong>Stars:</strong> {movie.stars.join(', ')}<br />
                                            <strong>Votes:</strong> {movie.votes}
                                        </Card.Text>
                                        <div className="d-flex align-items-center mb-2">
                                            {/* Upvote and Downvote buttons using icons */}
                                            <Button variant="light" onClick={() => handleUpvote(movie._id)} className="mr-2">
                                                <FaCaretUp size={24} />
                                            </Button>
                                            <Button variant="light" onClick={() => handleDownvote(movie._id)} className="mr-2">
                                                <FaCaretDown size={24} />
                                            </Button>
                                            <span className="ml-3">Votes: {movie.votes}</span>
                                        </div>
                                        <Button
                                            variant="primary"
                                            onClick={() => window.open(movie.trailerUrl || '#', '_blank')} // Open trailer in a new tab
                                        >
                                            Watch Trailer
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Movies;
