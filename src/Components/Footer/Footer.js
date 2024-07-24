import React from 'react';
import logo from "../../assets/alphamotors.png"

const Footer = () => {
  return (
    <footer className=" text-white py-8 bg-slate-500  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 ">Açılış Saatleri</h3>
            <p>Hafta içi: Pazartesi-Cuma, 09:00 - 18:00</p>
            <p>Cumartesi: 10:00 - 15:00</p>
            <p>Pazar: Kapalı</p>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">İletişim</h3>
            <p>Adres: İzmit/Kocaeli</p>
            <p>Telefon: +123 456 7890</p>
            <p>E-posta: by.yunusdeniz@gmail.com</p>
          </div>
        </div>
      </div>
        <div className="mt-6 border-t border-gray-800 pt-4 text-center">
          <p className="text-sm text-gray-200">© 2024 AlphaMotors. Tüm hakları saklıdır.</p>
        </div>
    </footer>
  );
};

export default Footer;
