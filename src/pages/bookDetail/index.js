import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { book as bookServices } from '../../services';

const BookDetail = () => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const { bookId } = useParams();

  useEffect(() => {
    setLoading(true);
    bookServices(bookId)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [bookId]);
  return (
    <div className="container">
      {!loading && books !== null ? (
        <div className="content_header">
          <span className="title">
            <strong>{`buku/${books.judul}`}</strong>
          </span>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default BookDetail;
