import React from 'react';

const Keranjang = () => {
  return (
    <div>
      <center>
        <table className="table table-hover w-50 mt-5">
          <thead>
            <tr>
              <th>Item</th>
              <th>Judul Buku</th>
              <th>Penerbit</th>
              <th>Kode Katalog</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">Total Buku Dipinjam </h5>
            <p className="card-text">__</p>
            <p className="card-text">__</p>
            <button className="btn btn-primary" type="submit">
              Pinjam
            </button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Keranjang;
