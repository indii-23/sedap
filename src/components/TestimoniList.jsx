import React from 'react';
import testimoni from '../data/testimoni.json';

const TestimoniList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">Apa Kata Mereka?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimoni.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.nama}
                  className="w-12 h-12 rounded-full border"
                />
                <h3 className="text-lg font-semibold text-gray-800">{t.nama}</h3>
              </div>
              <p className="text-gray-600 italic">“{t.ulasan}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniList;
