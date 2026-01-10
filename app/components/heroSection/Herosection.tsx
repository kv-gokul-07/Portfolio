import Image from "next/image";
import Profile from "../../../public/profile.jpg";

function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6">

        {/* Profile Photo */}
        <div className="relative mx-auto w-36 h-36 rounded-full p-1
          bg-gradient-to-br from-cyan-400/40 to-violet-500/40
          shadow-[0_0_80px_rgba(94,234,212,0.45)]">
           <Image
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-white">
          Gokul <span className="text-cyan-300">KV</span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Senior Software Engineer crafting scalable MERN applications
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
