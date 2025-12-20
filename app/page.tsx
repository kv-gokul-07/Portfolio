import CarScroller from "./components/carScroller.tsx/CarScroller";
import Header from "./components/header/Header";
import Portfolio from "./Portfolio/page";
export default function Home() {
  return (
      <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      
      {/* Top Header */}
      <header className="w-full">
        <Header />
      </header>

      {/* Content Area */}
      <main className="mx-auto flex max-w-7xl">
        {/* Right Content (always visible) */}
        <section className="w-full p-4">
          <Portfolio />
        </section>
         <section className="w-full p-4">
          <Portfolio />
        </section>
         <section className="w-full p-4">
          <Portfolio />
        </section>
         <section className="w-full p-4">
          <Portfolio />
        </section>
      </main>

       <CarScroller />
    </div>
  );
}
