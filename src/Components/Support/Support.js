import React, { useState } from "react";


const Support = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Gönderiliyor....");
    const formData = new FormData(event.target);
    formData.append("access_key", "78711bf7-e7b6-4aa1-8f7d-d7d69b26706d");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Mesaj Başarıyla Gönderildi.");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="support py-24 min-h-screen flex justify-center align-center">
      <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            DESTEK
          </h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                İsim
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder="İsminiz"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder="Mesajınız"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Mesaj Gönder
            </button>
            {result && <p className="mt-2 text-center text-sm">{result}</p>}
          </form>
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">DESTEK AL</h2>
          <p className="mb-4">Soru, öneri ya da yardım almak için iletişime geçin.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Support;
