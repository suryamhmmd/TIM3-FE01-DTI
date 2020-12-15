import React from 'react';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-6 col-sm-4">
            <h3> Kontak Kami</h3>
            <ul className="list-unstyled">
              <li>Jl. Medan Merdeka Selatan No.11</li>
              <li>Jakarta 10110</li>
              <li>Jl. Salemba Raya No.28A</li>
              <li>Jakarta 10430</li>
              <li>Email : info@perpusnas.go.id</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col-md-6 col-sm-4">
            <h3> Jam Operasional Layanan Perpustakaan</h3>
            <ul className="list-unstyled">
              <li>Senin - Kamis 08.00 - 21.00 WIB</li>
              <li>Jumat 09.00 - 21.00 WIB</li>
              <li>Kuota antrian layanan keanggotaan</li>
              <li>500</li>
              <li>Layanan Malam (Layanan Koleksi )</li>
            </ul>
          </div>
          <hr />
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy;
            {new Date().getFullYear()}
            {' '}
            Hover Library - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
