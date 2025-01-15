import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/')", // Path ke gambarmu
        backgroundSize: "cover", // Gambar menyesuaikan ukuran section
        backgroundPosition: "center", // Gambar di posisi tengah
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-4 text-yellow-300">Hi! I'm Faiz Habibi</h1>
        <p className="text-lg mb-6 text-yellow-300">
          A passionate Game Designer with a knack for crafting beautiful and
          user-friendly designs. Let me help bring your ideas to life!
        </p>
        <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-black hover:text-yellow-500">
            Contact Me
            </button>
            <button className="px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded hover:bg-yellow-500 hover:text-black">
            My Work
            </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
