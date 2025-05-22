import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-cover bg-center h-[80vh] flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-QAeZ8UP82W5Iwr9hdB2btHnA37JjTqtMA&s)',
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-md text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Selamat Datang di Sedap!</h1>
        <p className="text-lg md:text-xl">
          Temukan berbagai makanan lezat, sehat, dan siap antar ke rumah Anda.
        </p>
      </div>
    </section>
  );
};

export default Hero;
