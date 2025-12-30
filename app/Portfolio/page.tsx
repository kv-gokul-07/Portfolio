const Page = () => {
  return (
    <>
      <section className="flex justify-center items-center h-full w-full" id="home">
        <div className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row justify-center items-center gap-6">
          <div>
            <div className="w-75 h-75 bg-blue-500 rounded-full"></div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Gokul V</h1>
             {/* 3D rotating box */}
        <div
  className="
    mt-3
    relative
    w-fit
    border border-gray-300
    rounded-lg
    shadow-md
    overflow-hidden

    origin-bottom
    transform-gpu
    [transform-style:preserve-3d]
    [perspective:1000px]
  "
>
  {/* TEXT 1 */}
  <div
    className="
      absolute inset-0
      flex items-center justify-center
      px-4 py-2
      bg-white text-gray-600
      origin-bottom
      [transform:rotateX(90deg)]
      animate-[flipUp_4s_cubic-bezier(0.2,0.8,0.2,1)_infinite]
    "
  >
    Senior Software Engineer
  </div>

  {/* TEXT 2 */}
  <div
    className="
      absolute inset-0
      flex items-center justify-center
      px-4 py-2
      bg-gray-50 font-medium text-gray-700
      origin-bottom
      [transform:rotateX(90deg)]
      animate-[flipUp_4s_cubic-bezier(0.2,0.8,0.2,1)_infinite]
      [animation-delay:2s]
    "
  >
    MERN Stack
  </div>

  {/* Spacer to preserve height */}
  <div className="px-4 py-2 opacity-0">
    Senior Software Engineer
  </div>
</div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
