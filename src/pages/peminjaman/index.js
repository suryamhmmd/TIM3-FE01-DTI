import React from 'react';
import TextField from '@material-ui/core/TextField';

const Peminjaman = () => {
  const renderTextField = (label, type, shrink) => {
    return (
      <TextField
        style={{ backgroundColor: 'white' }}
        fullWidth
        className="rounded mt-3"
        // name={name}
        size="small"
        label={label}
        type={type}
        variant="filled"
        InputLabelProps={shrink}
      />
    );
  };

  return (
    <div className="container">
      <h2 className="d-flex justify-content-center">Peminjaman Buku</h2>
      <div className="pt-3 d-flex flex-column">
        <div className="row justify-content-center">
          <div className="col-6">
            {renderTextField('Judul Buku', '', null)}
            {renderTextField('Penulis', '', null)}
            {renderTextField('Penerbit', '', null)}
            {renderTextField('Tanggal Pinjam', 'date', { shrink: true })}
            {renderTextField('Tanggal Kembali', 'date', { shrink: true })}
          </div>
        </div>
        <button
          className="btn btn-lg btn-dark mt-3 align-self-center"
          type="submit"
        >
          Input
        </button>
      </div>
    </div>
  );
};

export default Peminjaman;
