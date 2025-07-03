import { useEffect, useState } from 'react';
import DataImage from './data';
import { listTools, listProyek } from "./data";
import axios from 'axios';
import React from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/users`);
      setUsers(res.data);
    } catch (error) {
      console.error('Gagal mengambil data:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API_BASE_URL}/users/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post(`${API_BASE_URL}/users`, form);
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

  const handleDelete = async (id) => {
    if (confirm('Yakin ingin menghapus data ini?')) {
      try {
        await axios.delete(`${API_BASE_URL}/users/${id}`);
        fetchUsers();
      } catch (error) {
        console.error('Gagal menghapus data:', error);
      }
    }
  };

  return (
    <>

    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className='animate__animated animate__fadeInUp animate__delay-3s'>
        <div className='flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl'>
          <img src={DataImage.HeroImage} alt="Hero Image" className='w-10 rounded-md' loading='lazy'/>
          <q>Kata yang indah, akan menghasilkan senyuman yang indah juga😁</q>
        </div>
        <h1 className='text-5xl/tight font-bold mb-6'>Hai, Nama Saya Dani Panawan</h1>
        <p className='text-base/loose mb-6 opacity-50'>
          Saya memiliki sedikit pengetahuan tentang Programming dan Designer, 
          terutama dalam pembuatan aplikasi dan website serta Desain seperti Thumbnail dan sebagainya. 
          Saya juga sedang menempuh perkuliahan dengan Program Studi Teknik Informatika 
          di salahsatu perguruan tinggi di Purwokerto yaitu, STMIK Widya Utama Purwokerto. 
          Di sana saya memiliki NIM (Nomor Induk Mahasiswa) STI202102537. 
          Saya cukup senang menempuh kuliah disana, selain Program Studinya yang menarik, 
          pembelajaran serta dosennya sangat baik dalam memberikan informasi atau wawasanya kepada para mahasiswa.
          </p>
          <div className='flex items-center sm:gap-4 gap-2'>

            <a href="assets/cv.pdf" download className='bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600' >
              Download CV 
              <i className="ri-download-line ri-lg"></i></a>
            <a href="#proyek" className='bg-indigo-700 p-4 rounded-2xl hover:bg-indigo-600'>Lihat Proyek
              <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className='w-[500px] md:ml-auto 
      animate__animated animate__fadeInUp animate__delay-4s' loading='lazy'/>
    </div>

    {/* tentang */}
     <div className="tentang mt-32 py-10" id='tentang'>
      <div className='xl:w-2/3 lg:2-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg'
      data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md mb-10 sm:hidden' loading='lazy'/>
        <p className='text-base/loose mb-10'>
          Halo guys, perkenalkan nama saya Dani Panawan, Saya seorang mahasiswa disalah satu perguruan tinggi dipurwokerto yaitu STMIK Widya Utama.
          Saya kuliah dengan jurusan Prodi Teknik Informatika jenjang Sarjana. Saya sangat suka dengan Pemrograman dan Designer.
          Saya juga sempat menempuh pendidikan disebuah pesantren bernama Pondok Pesantren Attholibiyah yang bertempat di Bumijawa, Tegal.
          Alhamdulillah, sekarang saya juga bisa berkesempatan untuk menempuh pendidikan diperguruan tinggi.
          Sebagai seorang santri dan mahasiswa, tentunya saya harus menjaga akhlaq dan perilaku saya dalam kehidupan sehari-hari.
          Kenapa saya memilih Prodi TI?
          Karena menurut saya sebuah bahasa pemrograman cukup menantang untuk dipelajari, mulai dari bahasa coding, sampai membuat 
          sebuah proyek aplikasi. Dalam hal lain, Pemrograman menurut saya adalah bentuk rasa syukur kepada Allah SWT. yang telah 
          menciptakan akal pikiran, sehingga dalam proses pemgembangan web atau aplikasi kita dituntut untuk berpikir keras menggunakan
          logika atau akal kita. Memang awalnya saya juga merasa sangat kebingungan, karena tidak memiliki basic sama sekali.
          Namun seiring berkembangnya teknologi, memudahkan kita untuk belajar secara terus menerus tentang pemrograman, yang menurut saya
          sangatlah menarik.
          Harapan saya, semoga untuk kedepan saya bisa menciptakan sebuah proyek baik web maupun aplikasi yang bisa bermanfaat bagi
          generasi muda dalam kehidupan sehari-hari, sebagai individu berahklaq dan bernegara. Aamiin....
          "Sebaik-baiknya Manusia Adalah yang Bisa memberikan Manfaat kepada orang lain".
        </p>
        <div className='flex items-center justify-between'>
          <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md sm:block hidden' loading='lazy'/>
          <div className='flex items-center gap-6'>
            <div>
              <h1 className='text-4xl mb-1'>
                45<span className='text-violet-500'>+</span></h1>
              <p>Proyek Selesai</p>
            </div>
             <div>
              <h1 className='text-4xl mb-1'>
                4<span className='text-violet-500'>+</span></h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>

      <div className='tools mt-32'>
        <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
        <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        Berikut ini beberapa Tools yang saya pakai untuk Pemrograman maupun Desain</p>

        <div className='tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>

          {listTools.map((tool) => (
            <div className='flex items-center gap-2 p-3 border-zinc-600 rounded-md hover:bg-zinc-800 group'
            key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
            <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900' loading='lazy'/>
            <div>
                  <h4 className='font-bold'>{tool.nama}</h4>
                  <p className='opacity-50'>{tool.ket}</p>  
            </div>
          </div>
          ))}


          
        </div>
      </div>
</div>
{/* tentang */}


{/* Proyek */}
<div className="proyek mt-32 py-10" id='proyek'>
  <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
  <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa proyek yang telah saya buat</p>
  <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {listProyek.map((proyek) => (
      <div key={proyek.id} className='p-4 bg-zinc-800 rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
        <img src={proyek.gambar} alt="Proyek Image" loading='lazy'/>
        <div>
          <h1 className='text-2xl font-bold my-4 '>{proyek.nama}</h1>
          <p className='text-base/loose mb-4'>{proyek.desk}</p>
          <div className='flex flex-wrap gap-2'>
            {proyek.tools.map((tool, index) => (
              <p className='py-1 px-3 border border-zinc-500 bg-blue-600 rounded-md font-semibold' key={index}>{tool}</p>
            ))}
          </div>
          <div className='mt-8 text-center'>
            <a href="#" className='bg-zinc-700 p-3 rounded-lg block border border-zinc-600 hover:bg-zinc-600'>lihat website</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Proyek */}

{/* Kontak */}

<div className="kontak mt-32 sm:p-10 p-0" id='kontak'> 
  <h1 className='text-4xl mb-2 font-bold text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
  <p className='text-base/loose text-center mb-10 opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari Terhubung Dengan Saya</p>
  <form action="https://formsubmit.co/danfitry@gmail.com" method="POST"
   className='bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md' autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true"> 
    <div className='flex flex-col gap-6'>
       <div className='flex flex-col gap-2'>
      <label className='font-semibold'>Nama Lengkap</label>
      <input type="text" name='nama' placeholder='Masukan Nama...' className='border border-zinc-500 p-2 rounded-md' required/>
    </div>
    
    <div className='flex flex-col gap-2'>
      <label className='font-semibold ' >Email</label>
      <input type="email" name='email' placeholder='Masukan Email...' className='border border-zinc-500 p-2 rounded-md' required/>
    </div>
    
    <div className='flex flex-col gap-2'>
      <label htmlFor='pesan' className='font-semibold'>Pesan</label>
      <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder='Pesan...' className='border border-zinc-500 p-2 rounded-md' required></textarea>
    </div>
    <div className='text-center'>
      <button type='submit' className='bg-blue-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600'>Kirim Pesan</button>
    </div>
    </div>
   

  </form>
</div>




      {/* Hero section */}
      {/* ... SEMUA KODE TAMPILAN (yang tidak diubah) seperti hero, tentang, proyek ... */}

      {/* DataBase Section */}
      <div className="database mt-32 py-10" id='database'>
        <div className='tools mt-32 '>
          <h1 className='text-4xl/snug font-bold mb-4'>Data Base Pengunjung Website</h1>
          <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50'>
            Halo guys, terimakasih sudah mau berkunjung ke website saya. Silahkan kalau berkenan bisa bantu isi data diri anda dan masukan komentar buat website ya...
          </p>
        </div>
        <div className="mt-3 py-10" id=''></div>


       <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white py-12 p-3 rounded-2xl shadow-lg space-y-2 mb-5">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-10">
      📊 Data Pengunjung Website
    </h1>

    {/* Form */}
    <form onSubmit={handleSubmit} className="bg-violet-300 dark:bg-white-800 p-8 rounded-2xl shadow-lg space-y-6 mb-12">
      <div className="grid sm:grid-cols-2 gap-4">
        <input className="input-style bg-zinc-200 p-3 rounded-2xl shadow-lg space-y-2 mb-5" placeholder="Nama" value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })} required />
        <input className="input-style bg-zinc-200 p-3 rounded-2xl shadow-lg space-y-2 mb-5" type="email" placeholder="Email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="input-style bg-zinc-200 p-3 rounded-2xl shadow-lg space-y-2 mb-5" placeholder="Alamat" value={form.alamat}
          onChange={(e) => setForm({ ...form, alamat: e.target.value })} required />
        <input className="input-style bg-zinc-200 p-3 rounded-2xl shadow-lg space-y-2 mb-5" placeholder="NIM Mahasiswa" value={form.nim}
          onChange={(e) => setForm({ ...form, nim: e.target.value })} required />
          <textarea className="input-style bg-zinc-200 p-3 rounded-2xl shadow-lg space-y-2 mb-5" placeholder="Komentar" rows="4" value={form.komentar}
          onChange={(e) => setForm({ ...form, komentar: e.target.value })} required />
        <input className="input-style bg-zinc-200 p-3 rounded-2xl shadow-lg space-y-10 mb-32" placeholder="Program Studi" value={form.prodi}
          onChange={(e) => setForm({ ...form, prodi: e.target.value })} required />
        
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          {editId ? '🔄 Update Data' : '➕ Tambah Data'}
        </button>
      </div>
    </form>

    {/* Tabel */}
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <table className="w-full table-auto text-sm">
        <thead className="bg-indigo-600 text-white rounded">
          <tr>
            <th className="p-3 text-left">Nama</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Alamat</th>
            <th className="p-3 text-left">NIM</th>
            <th className="p-3 text-left">Prodi</th>
            <th className="p-3 text-left">Komentar</th>
            <th className="p-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="p-2">{user.nama}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.alamat}</td>
              <td className="p-2">{user.nim}</td>
              <td className="p-2">{user.prodi}</td>
              <td className="p-2">{user.komentar}</td>
              <td className="p-2 text-center space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="text-yellow-500 hover:underline"
                  title="Edit"
                >✏️</button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:underline"
                  title="Hapus"
                >🗑️</button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="7" className="p-4 text-center text-gray-500 dark:text-gray-400">
                Tidak ada data pengunjung.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default App;
