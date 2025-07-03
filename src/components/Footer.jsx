
import React from "react";
const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-7">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Project</a>
          
        </div>
        <div className="flex items-center gap-4">
            <a href="https://github.com/danipanawan4/uas-portofolio-reactjs" target="_blank">
                <i className="ri-github-fill r-4x"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <i className="ri-instagram-fill r-4x"></i>
            </a>
            <a href="https://redditinc.com/" target="_blank">
                <i className="ri-reddit-fill r-4x"></i>
            </a>
            <a href="https://www.youtube.com/@danfitry2158" target="_blank">
                <i className="ri-youtube-fill r-4x"></i>
            </a>
        </div>
    </div>

  )
}

export default Footer