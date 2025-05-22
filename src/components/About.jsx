import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Tentang Sedap</h2>
        <p className="text-gray-700 text-lg mb-6">
          Sedap adalah platform kuliner yang menyediakan makanan lezat, bergizi, dan terjangkau untuk semua kalangan.
          Kami menghubungkan Anda dengan UMKM lokal dan memastikan kualitas rasa dan pelayanan terbaik.
        </p>
        <ul className="text-left list-disc list-inside text-gray-600 space-y-2">
          <li>✅ Makanan sehat dan terkurasi</li>
          <li>🚀 Pengiriman cepat dan aman</li>
          <li>📱 Mudah diakses melalui aplikasi dan website</li>
          <li>💬 Layanan pelanggan 24/7</li>
        </ul>
      </div>
    </section>
  );
};

export default About;