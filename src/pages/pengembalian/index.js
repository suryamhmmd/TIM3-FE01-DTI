import React from 'react';

const Pengembalian = () => {
  return (
    <div>
      <h1 className="d-flex justify-content-center">Data Buku dipinjam</h1>
      <center>
        <table className="table table-hover w-50 mt-5">
          <thead>
            <tr>
              <th>Item</th>
              <th>Judul Buku</th>
              <th>Penerbit</th>
              <th>Kode Katalog</th>
              <th>Tanggal Pinjam</th>
              <th>Tanggal Kembali</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">Total Buku Dipinjam </h5>
            <p className="card-text">__</p>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Pengembalian;
