
import Button from "../atoms/Button";

function AdBanner() {
  return (
    <div className="relative min-h-[280px] overflow-hidden bg-blue-900">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=85"
        alt="Airplane in the sky"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center gap-3 p-4 text-center text-white">

        <p className="text-xs font-bold uppercase tracking-widest">
          Special Offer
        </p>

        <h2 className="text-4xl font-extrabold uppercase leading-tight">
          Flight
          <br />
          Ticket
        </h2>

        <span className="bg-yellow-400 px-4 py-1 text-lg font-extrabold text-blue-950">
          40% OFF
        </span>

        <Button className="bg-white !text-blue-900 hover:!bg-gray-200">
          Book Now
        </Button>

      </div>

    </div>
  );
}

export default AdBanner;
