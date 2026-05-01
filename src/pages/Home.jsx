import heroBg from "../assets/images.1.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="font-sans">
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center pt-32"
      >
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg ">
            Bid Low, Ship Smart
          </h1>
          <p className="text-gray-200 mt-4 text-xl ">
            Post your cargo, let transporters compete, save money!
          </p>

          <div className="mt-8 flex gap-4 justify-center items-center">
            <button
              onClick={() => navigate("/register?role=shipper")}
              className="bg-blue-600 text-white px-6 py-3 rounded-full"
            >
              I am Shipper
            </button>

            <button
              onClick={() => navigate("/register?role=transporter")}
              className="bg-orange-500 text-white px-6 py-3 rounded-full"
            >
              I am Transporter
            </button>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="bg-orange-500 grid grid-cols-4">
        {[
          { num: "500+", label: "Shippers" },
          { num: "1,200+", label: "Transporters" },
          { num: "10K+", label: "Deliveries" },
          { num: "40%", label: "Avg. Savings" },
        ].map((stat, i) => (
          <div
            key={i}
            className="py-5 text-center border-r border-white/20 last:border-r-0"
          >
            <div className="text-2xl font-black text-white">{stat.num}</div>
            <div className="text-xs text-white/75 uppercase tracking-widest mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl font-black text-gray-900">Our Services</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "🚛",
              bg: "bg-orange-50",
              title: "Road Freight",
              desc: "Competitive bidding for road transport across all major Indian cities and routes.",
            },
            {
              icon: "📦",
              bg: "bg-green-50",
              title: "Cargo Posting",
              desc: "Post your cargo in minutes and get bids from verified transporters instantly.",
            },
            {
              icon: "💰",
              bg: "bg-blue-50",
              title: "Best Price Bidding",
              desc: "Let transporters compete and choose the best quote that fits your budget.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <div
                className={`${s.bg} h-28 flex items-center justify-center text-5xl`}
              >
                {s.icon}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
                <span className="inline-block mt-3 text-sm text-orange-500 font-semibold">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="py-16 px-8 bg-gray-900">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">
            Simple Process
          </p>
          <h2 className="text-3xl font-black text-white">How It Works</h2>
        </div>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              num: "1",
              title: "Post Your Cargo",
              desc: "Fill in cargo details, weight, pickup location and your budget.",
            },
            {
              num: "2",
              title: "Receive Bids",
              desc: "Verified transporters place their best competitive quotes.",
            },
            {
              num: "3",
              title: "Accept & Ship",
              desc: "Choose the best bid and your cargo is on its way!",
            },
          ].map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-black mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* WHY US */}
      <div className="py-16 px-8 bg-white">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-black text-gray-900">Why CargoBid?</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            {
              icon: "⚡",
              title: "Real-time Bidding",
              desc: "Get live competitive quotes from verified transporters instantly.",
            },
            {
              icon: "🔒",
              title: "Secure Platform",
              desc: "JWT authentication and protected routes for safe transactions.",
            },
            {
              icon: "✅",
              title: "Verified Transporters",
              desc: "Only trusted and verified transporters can place bids.",
            },
            {
              icon: "💰",
              title: "Save Up to 40%",
              desc: "Competitive bidding ensures you always get the best market price.",
            },
          ].map((w, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 border border-gray-200 rounded-lg"
            >
              <div className="w-11 h-11 bg-orange-50 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                {w.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{w.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="py-16 px-8 bg-orange-500">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
            What They Say
          </p>
          <h2 className="text-3xl font-black text-white">Customer Reviews</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              text: "CargoBid saved me ₹15,000 on my first shipment. The bidding process is so simple!",
              name: "Rajesh Kumar",
              role: "Shipper, Mumbai",
            },
            {
              text: "As a transporter, I get new cargo leads every day. Best platform for consistent work!",
              name: "Suresh Yadav",
              role: "Transporter, Delhi",
            },
            {
              text: "Posted my cargo and got 5 bids within 2 hours. Accepted the best one easily!",
              name: "Priya Sharma",
              role: "Shipper, Bangalore",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-lg p-5">
              <div className="text-orange-500 text-sm mb-2">★★★★★</div>
              <p className="text-sm text-gray-500 leading-relaxed italic mb-4">
                "{t.text}"
              </p>
              <p className="font-bold text-gray-900 text-sm">{t.name}</p>
              <p className="text-xs text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 py-16 px-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">
            Ready to Ship Smarter?
          </h2>
          <p className="text-gray-400 text-sm">
            Join thousands of businesses already saving on logistics
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/register?role=shipper")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-bold text-sm transition"
          >
            Start as Shipper
          </button>
          <button
            onClick={() => navigate("/register?role=transporter")}
            className="bg-transparent text-white border-2 border-white/20 px-6 py-3 rounded text-sm transition"
          >
            Join as Transporter
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-gray-900 border-t-4 border-orange-500 px-8 py-5 flex justify-between items-center">
        <div className="text-lg font-black text-white">
          Cargo<span className="text-orange-500">Bid</span>
        </div>
        <div className="flex gap-6">
          {["Home", "How it Works", "Login", "Register"].map((l, i) => (
            <span
              key={i}
              className="text-xs text-gray-500 cursor-pointer hover:text-gray-300"
            >
              {l}
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-600">
          © 2026 CargoBid. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Home;
