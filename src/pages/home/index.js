import React, { useEffect, useState } from 'react';
// import { CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Typewriter from 'typewriter-effect';
import ReactTooltip from 'react-tooltip';
// import { Carousel } from 'primereact/carousel';
import { book as bookServices } from '../../services';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    bookServices
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
      <div className="content">
        {!loading ? (
          <div className=" container mt-5 container rounded shadow">
            <div className="pt-4 px-3">
              <h4>Best Seller</h4>
            </div>
            <ReactTooltip place="top" type="dark" effect="solid" />
            {books.map((p) => {
              return (
                <Link to={`/buku/${p.id}`} key={p.id} className="card">
                  <div
                    className=" card m-3 p-3 text-center"
                    style={{ width: '60rem' }}
                  >
                    <div className="card-body">
                      <p className="font-weight-bold card-title text-truncate">
                        {p.judul}
                      </p>
                      <p className="card-text font-weight-bold">{p.penulis}</p>
                      <p className="card-text font-weight-bold">{p.penerbit}</p>
                      <button
                        className="btn btn-block btn-outline-dark my-2"
                        type="submit"
                      >
                        Pinjam
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <Skeleton height={100} />
        )}
      </div>
    </div>
  );
};

export default Home;
