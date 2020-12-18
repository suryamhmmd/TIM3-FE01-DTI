import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Card, CardDeck } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import Typewriter from 'typewriter-effect';
import { auth } from '../../services';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    auth
      .book()
      .then((res) => {
        console.log(res);
        setBooks(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="welcomeFont m-3 mx-auto container rounded shadow">
        <div className="p-1 text-center">
          <h1 className="mt-4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Welcome to HoverLibrary!');
                typewriter.typeString(' Book is Window of The World!').start();
              }}
              options={{
                cursor: '',
              }}
            />
          </h1>
        </div>
      </div>
      {/* <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck> */}
      <div className="content">
        {!loading ? (
          <div>
            <div className="card-deck">
              {books.map((val) => {
                return (
                  <Link to="/home" className="card">
                    <hr />
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <div className="normalprice m-0">
                        <span className="normalprice_disc">{val.bookID}</span>
                        {' '}
                        <span className="normalprice_price">{val.authors}</span>
                      </div>
                      <span className="card-text">{val.publisher}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <Skeleton height={100} />
        )}
      </div>
    </div>
  );
};

export default Home;
