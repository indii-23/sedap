import React from 'react';
import products from '../data/products.json';

const ProdukList = () => {
  return (
    <section id="produk" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">Produk Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow hover:shadow-md transition p-4">
              <img src={product.gambar} alt={product.nama} className="rounded-md w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{product.nama}</h3>
              <p className="text-red-600 font-bold mt-2">Rp {product.harga.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdukList;
