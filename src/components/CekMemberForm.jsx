import React, { useState } from "react";
import members from "../data/members.json";

const warnaMember = {
  silver: "bg-gray-300 text-gray-800",
  gold: "bg-yellow-400 text-yellow-900",
  platinum: "bg-purple-400 text-white",
};

const CekMemberForm = () => {
  const [email, setEmail] = useState("");
  const [hasil, setHasil] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCek = (e) => {
    e.preventDefault();
    setError("");
    setHasil(null);

    const validEmail = /^\S+@\S+\.\S+$/;

    if (!email) {
      setError("Email tidak boleh kosong");
      return;
    }

    if (!validEmail.test(email)) {
      setError("Format email tidak valid");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const found = members.find(
        (m) => m.email.toLowerCase() === email.toLowerCase()
      );

      if (found) {
        setHasil({
          status: "found",
          nama: found.nama,
          tipe: found.tipe_member,
        });
      } else {
        setHasil({ status: "not-found" });
      }

      setLoading(false);
    }, 800);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-md text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">
          Cek Keanggotaan
        </h2>
        <form onSubmit={handleCek} className="space-y-4">
          <input
            type="email"
            placeholder="Masukkan email anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
          >
            {loading ? "Mengecek..." : "Cek Sekarang"}
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {hasil && hasil.status === "found" && (
          <div className={`mt-6 p-4 rounded shadow ${warnaMember[hasil.tipe]}`}>
            🧾 Selamat datang, <strong>{hasil.nama}</strong>!<br />
            Anda adalah member{" "}
            <strong className="uppercase">{hasil.tipe}</strong>.
          </div>
        )}

        {hasil && hasil.status === "not-found" && (
          <div className="mt-6 p-4 rounded bg-red-100 text-red-800 border border-red-400">
            ❌ Email tidak terdaftar sebagai member.
          </div>
        )}
      </div>
    </section>
  );
};

export default CekMemberForm;
