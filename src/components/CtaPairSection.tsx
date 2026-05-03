import { useNavigate } from "react-router-dom";

const CtaPairSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="w-full min-h-screen flex items-center"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="px-6 md:px-16 py-20 max-w-3xl">
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-4"
          style={{ color: "#07b4ba" }}
        >
          Art of Fighting Academy
        </p>

        <h1
          className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: "#ffffff",
          }}
        >
          AOF Academy:
          <br />
          Unleash Your
          <br />
          Potential
        </h1>

        <p
          className="text-sm md:text-base mb-10 max-w-md"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Transform your body and mind.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/coaching")}
            className="px-8 py-4 rounded font-bold text-sm uppercase tracking-widest border-2 transition-all hover:bg-white hover:text-black"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              borderColor: "#ffffff",
              color: "#ffffff",
              backgroundColor: "transparent",
            }}
          >
            1 On 1 Coaching
          </button>

          <button
            onClick={() => navigate("/program")}
            className="px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              backgroundColor: "#07b4ba",
              color: "#000000",
            }}
          >
            AOF 30 Days Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaPairSection;
