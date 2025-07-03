import { useEffect, useState } from 'react'
import DataImage from './data';
import {listTools, listProyek} from "./data";
import axios from 'axios';
import React from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    nama: '',
    email: '',
    alamat: '',
    nim: '',
    prodi: '',
    komentar: ''
  });
  const [editId, setEditId] = useState(null);

  // Ambil semua data pengguna
  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/users');
      setUsers(res.data);
    } catch (error) {
      console.error('Gagal mengambil data:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Submit data (POST atau PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/users/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post('http://localhost:5000/users', form);
      }
      setForm({
        nama: '',
        email: '',
        alamat: '',
        nim: '',
        prodi: '',
        komentar: ''
      });
      fetchUsers();
    } catch (error) {
      console.error('Terjadi kesalahan saat menyimpan data:', error);
    }
  };

  // Isi form dengan data saat klik edit
  const handleEdit = (user) => {
    setForm({
      nama: user.nama,
      email: user.email,
      alamat: user.alamat,
      nim: user.nim,
      prodi: user.prodi,
      komentar: user.komentar
    });
    setEditId(user.id);
  };

  // Hapus data
  const handleDelete = async (id) => {
    if (confirm('Yakin ingin menghapus data ini?')) {
      try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        fetchUsers();
      } catch (error) {
        console.error('Gagal menghapus data:', error);
      }
    }
  };

  return (
    <>
    

{/* DataBase*/}
<div className="database mt-32 py-10" id='database'>
      <div className='tools mt-32'>
        <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Data Base Pengunjung Website</h1>
        <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        Halo guys, terimakasih sudah mau berkunjung ke website saya. Silahkan kalau berkenan bisa bantu isi data diri anda dan masukan komentar buat website ya...</p>
        </div>
<div className='mt-5 py-10'></div>
  
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
          Data Pengunjung Website
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4 mb-8">
          <input
            className="w-full p-2 rounded border dark:border-gray-600 placeholder-black dark:placeholder-gray-400"
            placeholder="Nama"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            required
          />
          <input
            className="w-full p-2 rounded border dark:border-gray-600 placeholder-black dark:placeholder-gray-400"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            className="w-full p-2 rounded border dark:border-gray-600 placeholder-black dark:placeholder-gray-400"
            placeholder="Alamat"
            value={form.alamat}
            onChange={(e) => setForm({ ...form, alamat: e.target.value })}
            required
          />
          <input
            className="w-full p-2 rounded border dark:border-gray-600 placeholder-black dark:placeholder-gray-400"
            placeholder="NIM Mahasiswa"
            value={form.nim}
            onChange={(e) => setForm({ ...form, nim: e.target.value })}
            required
          />
          <input
            className="w-full p-2 rounded border dark:border-gray-600 placeholder-black dark:placeholder-gray-400"
            placeholder="Program Studi"
            value={form.prodi}
            onChange={(e) => setForm({ ...form, prodi: e.target.value })}
            required
          />
          <textarea
            className="w-full p-2 rounded border dark:border-gray-600 placeholder-black dark:placeholder-gray-400"
            placeholder="Komentar"
            value={form.komentar}
            onChange={(e) => setForm({ ...form, komentar: e.target.value })}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            {editId ? 'Update Data' : 'Tambah Data'}
          </button>
        </form>

        {/* Tabel Data */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
                <th className="p-2 text-left">Nama</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Alamat</th>
                <th className="p-2 text-left">NIM</th>
                <th className="p-2 text-left">Prodi</th>
                <th className="p-2 text-left">Komentar</th>
                <th className="p-2 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t dark:border-gray-700">
                  <td className="p-2">{user.nama}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.alamat}</td>
                  <td className="p-2">{user.nim}</td>
                  <td className="p-2">{user.prodi}</td>
                  <td className="p-2">{user.komentar}</td>
                  <td className="p-2 text-center space-x-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-yellow-600 dark:text-yellow-400 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 dark:text-red-400 hover:underline"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="7" className="p-4 text-center text-gray-500 dark:text-gray-400">
                    Belum ada data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
</div>
  
        
{/* DataBase*/}

    </>
  )
}

export default App
