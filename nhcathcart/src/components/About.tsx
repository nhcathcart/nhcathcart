import "../css/About.css";
export function About() {
  return (
    <div className="w-full h-full flex flex-col gap-5" id="About">
      <h4 className="text-emerald-400 text-2xl animate-about-1">
        Hi my name is
      </h4>
      <h1 className="text-emerald-800 text-6xl animate-about-2">
        Nicholas Cathcart.
      </h1>
      <h5 className="text-emerald-600 text-xl animate-about-3">
        I build stuff for the internet.
      </h5>

    </div>
  );
}
