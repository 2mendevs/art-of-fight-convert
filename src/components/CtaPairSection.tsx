const CtaPairSection = () => (
  <section
    className="relative w-full overflow-hidden flex flex-col justify-center"
    style={{
      // Pointing directly to your image file
      backgroundImage: `url('/CTA_BG.png')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      minHeight: '350px', 
    }}
  >
    {/* The black overlay has been COMPLETELY REMOVED from here */}

    {/* Content Wrapper */}
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 h-full flex flex-col justify-center py-8">
      
      {/* Top Text Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <p className="text-lg md:text-xl uppercase tracking-widest text-[#07b4ba] font-bold mb-1 drop-shadow-md">
          Your New Standard Starts Here
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white font-bold uppercase mb-2 drop-shadow-md">
          Join AOF Train Like A Fighter
        </h2>
        <p className="text-white font-semibold text-lg drop-shadow-md">Results Don't Wait</p>
      </div>

      {/* Buttons Section */}
      <div className="flex w-full justify-between px-2 md:px-16 gap-4 mt-auto">
        <button className="w-[48%] md:w-auto md:min-w-[280px] py-3 rounded-full bg-[#07b4ba] text-black font-extrabold text-sm md:text-base uppercase tracking-wide hover:bg-[#059a9f] transition-colors shadow-lg">
          1 On 1 Coaching
        </button>
        <button className="w-[48%] md:w-auto md:min-w-[280px] py-3 rounded-full bg-[#07b4ba] text-black font-extrabold text-sm md:text-base uppercase tracking-wide hover:bg-[#059a9f] transition-colors shadow-lg">
          AOF 30 Days Program
        </button>
      </div>

    </div>
  </section>
);

export default CtaPairSection;
