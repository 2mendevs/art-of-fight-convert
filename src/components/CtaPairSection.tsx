import { Button } from "@/components/ui/button";

const CtaPairSection = () => (
  <section
    className="relative w-full overflow-hidden"
    style={{ height: "160px" }}
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/boxing-bg.png')",
        filter: "brightness(0.55)",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h2
        className="text-lg md:text-2xl font-extrabold uppercase tracking-widest mb-0.5"
        style={{ color: "#07b4ba" }}
      >
        Your New Standard Starts Here
      </h2>
      <p className="text-white font-semibold text-sm md:text-base mb-0.5">
        Join AOF Train Like A Fighter
      </p>
      <p className="text-white font-semibold text-xs md:text-sm mb-3">
        Results Don't Wait
      </p>

      <div className="flex flex-row gap-6 md:gap-28 justify-center w-full max-w-2xl">
        <Button
          size="sm"
          className="rounded-full px-6 text-xs md:text-sm font-bold uppercase text-black"
          style={{ backgroundColor: "#07b4ba", border: "none" }}
        >
          1 On 1 Coaching
        </Button>
        <Button
          size="sm"
          className="rounded-full px-6 text-xs md:text-sm font-bold uppercase text-black"
          style={{ backgroundColor: "#07b4ba", border: "none" }}
        >
          AOF 30 Days Program
        </Button>
      </div>
    </div>
  </section>
);

export default CtaPairSection;
