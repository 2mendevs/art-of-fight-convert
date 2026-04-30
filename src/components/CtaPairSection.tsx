const CtaPairSection = () => (
  <section
    className="relative w-full overflow-hidden"
    style={{
      backgroundImage: 'url(/Box.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '220px',
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <p className="text-xs uppercase tracking-widest text-[#07b4ba] font-semibold mb-1">
        Your New Standard Starts Here
      </p>
      <h2 className="font-display text-2xl md:text-3xl text-white font-bold uppercase mb-1">
        Join AOF Train Like A Fighter
      </h2>
      <p className="text-white/70 text-sm mb-5">Results Don't Wait</p>

      {/* Buttons */}
      <div className="flex w-full max-w-2xl justify-between px-4 md:px-10 gap-4">
        <button className="flex-1 py-3 rounded-full bg-[#07b4ba] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#059a9f] transition-colors">
          1 On 1 Coaching
        </button>
        <button className="flex-1 py-3 rounded-full bg-[#07b4ba] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#059a9f] transition-colors">
          AOF 30 Days Program
        </button>
      </div>
    </div>
  </section>
);

export default CtaPairSection;
