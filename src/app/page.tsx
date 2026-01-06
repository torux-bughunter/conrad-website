import {
  Leaf,
  PlayCircle,
  Droplets,
  Dna,
  Smartphone,
  Menu,
  User,
  Sprout,
  ArrowRight,
  Microscope,
  BrainCircuit,
  Recycle,
  Award,
  Handshake,
  Linkedin,
  Twitter,
  Github,
  AlertCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import InteractiveDashboard from "./components/InteractiveDashboard";
import InteractivePhone from "./components/InteractivePhone";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 bg-[#40E0D0] rounded-full flex items-center justify-center text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Leaf className="w-5 h-5 fill-transparent" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,1)] font-instrument-serif">Gelionyx</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#problem" className="hover:text-[#40E0D0] transition text-sm font-bold text-white drop-shadow-md">Problem</Link>
          <Link href="#solution" className="hover:text-[#40E0D0] transition text-sm font-bold text-white drop-shadow-md">Solution</Link>
          <Link href="#impact" className="text-sm font-bold text-white hover:text-[#40E0D0] transition drop-shadow-md">Impact</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="#" className="hidden md:block text-sm font-bold text-white hover:text-[#40E0D0] transition drop-shadow-md">Read Whitepaper</Link>
          <Link href="#contact" className="hover:bg-[#222] transition transform hover:-translate-y-0.5 text-sm font-bold text-white bg-black border-white border-2 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[4px_4px_0px_0px_rgba(64,224,208,1)]"> Partner With Us </Link>
        </div>
      </nav>

      {/* Hero Section - Gumroad Style */}
      <header className="bg-[#00A651] pt-20 pb-16 md:pt-28 md:pb-20 px-6 relative">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Badge - Simple */}
              <div className="mb-4">
                <span className="inline-block bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full border-2 border-black uppercase tracking-wider">
                  Innovation Finalist 2025
                </span>
              </div>

              {/* Main Heading - Bold & Simple */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight font-instrument-serif">
                Defeating drought<br />with intelligence.
              </h1>

              {/* Description - Clean */}
              <p className="text-lg md:text-xl text-white mb-6 font-manrope leading-relaxed">
                Biodegradable probiotic hydrogels combined with predictive AI to restore soil health and optimize water usage in arid regions.
              </p>
              
              {/* CTA Buttons - Rounded, Fluid */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="#solution" className="bg-[#40E0D0] text-black text-base font-bold px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-2">
                  Explore the System
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="bg-white text-black text-base font-bold px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-2">
                  <PlayCircle className="w-4 h-4" />
                  Watch Demo
                </button>
              </div>

              {/* Stats - Simple Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-3xl font-black text-black mb-1 font-instrument-serif">40%</div>
                  <div className="text-xs font-bold text-black uppercase tracking-wider">Water Saved</div>
                </div>
                <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-3xl font-black text-black mb-1 font-instrument-serif">100%</div>
                  <div className="text-xs font-bold text-black uppercase tracking-wider">Biodegradable</div>
                </div>
                <div className="bg-[#40E0D0] p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-3xl font-black text-black mb-1 font-instrument-serif">AI</div>
                  <div className="text-xs font-bold text-black uppercase tracking-wider">Powered</div>
                </div>
                <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-3xl font-black text-black mb-1 font-instrument-serif">24/7</div>
                  <div className="text-xs font-bold text-black uppercase tracking-wider">Monitoring</div>
                </div>
              </div>

              {/* Features - Simple Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full border-2 border-black">Cashew Gum</span>
                <span className="bg-[#40E0D0] text-black text-xs font-bold px-3 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">+40% Water Retention</span>
                <span className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full border-2 border-black">Probiotic Loaded</span>
                <span className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full border-2 border-black">AI Powered</span>
              </div>

              {/* Social Proof - Minimal */}
              <div className="flex flex-wrap items-center gap-4 text-white">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center text-black font-bold text-xs">UN</div>
                  <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center text-black font-bold text-xs">NGO</div>
                  <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center text-black font-bold text-xs">Gov</div>
                </div>
                <span className="text-xs font-bold">Designed for Global Impact</span>
              </div>
            </div>

            {/* Right Column - Interactive Dashboard */}
            <InteractiveDashboard />
          </div>
        </div>
      </header>

      {/* Value Prop / How it works (Yellow) */}
      <section id="solution" className="overflow-hidden bg-[#40E0D0] border-black border-t-2 pt-24 pr-6 pb-24 pl-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-black mb-8 leading-none font-instrument-serif">
              Nature meets<br />neural networks.
            </h2>
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-black text-[#40E0D0] flex items-center justify-center flex-shrink-0 mt-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-black mb-2">1. Bio-Integrated Hydrogels</h3>
                    <p className="text-black/80 font-medium leading-relaxed">
                      Cashew-gum based polymers absorb massive amounts of water, releasing it slowly to roots during dry spells. 100% biodegradable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-black text-[#40E0D0] flex items-center justify-center flex-shrink-0 mt-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    <Dna className="w-6 h-6" />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-black mb-2">2. Probiotic Loading</h3>
                    <p className="text-black/80 font-medium leading-relaxed">
                      Infused with targeted microbial strains to restore soil microbiome diversity, boosting natural crop resilience and nutrient uptake.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-black text-[#40E0D0] flex items-center justify-center flex-shrink-0 mt-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-black mb-2">3. Predictive AI Engine</h3>
                    <p className="text-black/80 font-medium leading-relaxed">
                      Our ML app analyzes local weather and soil data to tell farmers exactly when and where to deploy for maximum yield.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-[#333] transition shadow-[4px_4px_0px_0px_rgba(0,166,81,1)]">
                See Technical Specs
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center">
            {/* Interactive Phone */}
            <InteractivePhone />
          </div>
        </div>
      </section>

      {/* Transition Section (Black) */}
      <div className="text-[#40E0D0] bg-black border-black border-t-2 relative">
        {/* Top Wave SVG */}
        <svg className="absolute top-0 w-full h-16 md:h-32 -mt-1 transform rotate-180" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#40E0D0" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight text-[#00A651] leading-none mb-6 font-instrument-serif">
                Stop guessing. <br />Start growing.
              </h2>
              <Link href="#impact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#40E0D0] text-black rounded-full font-bold hover:bg-white transition border-2 border-transparent hover:border-[#40E0D0]">
                View Impact Data
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed font-manrope">
                Traditional irrigation wastes water. Gelionyx provides a closed-loop system for open-field agriculture. Whether you are a smallholder farmer or a government agency, we turn scarcity into abundance.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="pb-32 px-6">
          <div className="max-w-6xl mr-auto ml-auto">
            <div className="text-center mb-16">
              <span className="bg-[#222] text-[#40E0D0] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider border border-[#333]">Core Technology</span>
              <h3 className="text-4xl md:text-5xl font-bold text-white mt-4 font-instrument-serif">The Gelionyx Ecosystem</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

              {/* Card 1 */}
              <div className="group hover:bg-[#222] transition duration-300 overflow-hidden cursor-pointer hover:border-[#40E0D0] bg-[#1a1a1a] border-neutral-800 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                  <Sprout className="w-24 h-24 text-[#40E0D0]" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2 font-instrument-serif">Cashew Gum</h4>
                <p className="text-neutral-400 text-sm mb-6">Utilizing agricultural waste for superior water absorption.</p>
                <span className="text-[#40E0D0] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-[#1a1a1a] rounded-3xl p-8 hover:bg-[#222] transition duration-300 overflow-hidden cursor-pointer border-2 border-neutral-800 hover:border-[#00A651]">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                  <Microscope className="w-24 h-24 text-[#00A651]" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2 font-instrument-serif">Microbes</h4>
                <p className="text-neutral-400 text-sm mb-6">Restoring microbiome diversity for long-term soil health.</p>
                <span className="text-[#00A651] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Strains <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-[#1a1a1a] rounded-3xl p-8 hover:bg-[#222] transition duration-300 overflow-hidden cursor-pointer border-2 border-neutral-800 hover:border-[#40E0D0]">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                  <BrainCircuit className="w-24 h-24 text-[#40E0D0]" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2 font-instrument-serif">AI Models</h4>
                <p className="text-neutral-400 text-sm mb-6">Deep learning algorithms optimize irrigation timing.</p>
                <span className="text-[#40E0D0] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  See Data <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Card 4 */}
              <div className="group relative bg-[#1a1a1a] rounded-3xl p-8 hover:bg-[#222] transition duration-300 overflow-hidden cursor-pointer border-2 border-neutral-800 hover:border-[#00A651]">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                  <Recycle className="w-24 h-24 text-[#00A651]" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2 font-instrument-serif">Circular</h4>
                <p className="text-neutral-400 text-sm mb-6">Fully biodegradable materials leaving zero trace.</p>
                <span className="text-[#00A651] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Lifecycle <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof / Blog Section (White) */}
      <section id="impact" className="bg-white py-24 px-6 border-t-2 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black leading-none mb-6 md:mb-0 drop-shadow-[3px_3px_0px_rgba(0,166,81,1)] font-instrument-serif">
              Global Impact.
            </h2>
            <Link href="#" className="px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-[#333] transition shadow-[4px_4px_0px_0px_rgba(0,166,81,1)]">
              Read User Stories
            </Link>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Large Card (Green) */}
            <div className="md:col-span-2 bg-[#00A651] rounded-[2rem] p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-end border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group">
              <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" alt="Farming" />
              <div className="relative z-10">
                <span className="bg-[#40E0D0] text-black text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block border border-black">Pilot Program</span>
                <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-md font-instrument-serif">&quot;We saved the harvest despite the drought.&quot;</h3>
                <p className="text-white font-medium text-lg font-manrope">— Agricultural Ministry, Kenya</p>
              </div>
            </div>

            {/* Small Card 1 (Black) */}
            <div className="bg-black rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div>
                <span className="bg-[#00A651] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">Recognition</span>
                <h3 className="text-2xl font-bold text-white mb-2">Conrad Challenge</h3>
                <p className="text-neutral-400 text-sm">2025 Innovation Finalist.</p>
              </div>
              <div className="mt-8 flex justify-center">
                <Award className="w-20 h-20 text-[#40E0D0]" />
              </div>
            </div>

            {/* Small Card 2 (Yellow) */}
            <div className="bg-[#40E0D0] rounded-[2rem] p-8 text-black flex flex-col justify-between border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="">
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">Statistics</span>
                <h3 className="text-2xl font-bold text-black mb-2">Resource Efficiency</h3>
              </div>
              <div className="mt-4">
                <p className="font-bold text-5xl mb-1 font-instrument-serif">40%</p>
                <p className="text-sm font-bold">Reduction in water usage.</p>
                <Link href="#" className="mt-6 inline-flex items-center justify-center w-full py-3 bg-black text-white rounded-xl font-bold hover:bg-neutral-800 transition"> View Report </Link>
              </div>
            </div>

            {/* Medium Card (White/Bordered) */}
            <div className="md:col-span-2 bg-[#f4f4f4] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-black mb-4 font-instrument-serif">Trusted by Leaders.</h3>
                <p className="text-black/70 text-lg mb-6">Partnering with NGOs and government bodies to secure food sources for the future.</p>
                <div className="flex -space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-full border-2 border-[#00A651] bg-white flex items-center justify-center font-bold text-xs">UN</div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#00A651] bg-white flex items-center justify-center font-bold text-xs">WFP</div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#00A651] bg-white flex items-center justify-center font-bold text-xs">FAO</div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#00A651] bg-black text-white flex items-center justify-center text-xs font-bold">+12</div>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="bg-white p-6 rounded-2xl border-2 border-black text-black text-center shadow-md">
                  <Handshake className="w-10 h-10 mx-auto mb-2 text-[#00A651]" />
                  <p className="font-bold">&quot;A game changer for rural agriculture.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider for Footer */}
      <div className="relative h-16 md:h-24 bg-white overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full text-[#00A651] fill-current" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      {/* Footer / Contact (Green) */}
      <footer id="contact" className="bg-[#00A651] pt-12 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.85] font-instrument-serif">
            Ready to <br />scale?
          </h2>
          <p className="text-xl font-medium text-white/90 mb-10 max-w-xl mx-auto font-manrope">
            Whether you represent a government, NGO, or commercial farm, let&apos;s discuss how Gelionyx can secure your future.
          </p>

          {/* Registration Form */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black max-w-lg mx-auto transform -rotate-2 hover:rotate-0 transition duration-300">
            <form className="space-y-4 text-left">
              <div className="">
                <label className="block text-sm font-bold text-black mb-1">Email Address</label>
                <input type="email" placeholder="contact@organization.org" className="w-full px-4 py-3 rounded-xl bg-neutral-100 border-2 border-neutral-200 focus:outline-none focus:ring-0 focus:border-black font-medium" />
              </div>
              <div className="">
                <label className="block text-sm font-bold text-black mb-1">Organization Type</label>
                <select className="w-full px-4 py-3 rounded-xl bg-neutral-100 border-2 border-neutral-200 focus:outline-none focus:ring-0 focus:border-black font-medium">
                  <option>Government Agency</option>
                  <option>NGO / Non-Profit</option>
                  <option>Commercial Farm</option>
                  <option>Investor</option>
                </select>
              </div>
              <button type="button" className="w-full py-4 bg-black text-white text-lg font-bold rounded-xl hover:bg-[#333] transition shadow-md mt-4 flex items-center justify-center gap-2">
                Request Information <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs text-neutral-500 text-center mt-4">We respect your privacy.</p>
          </div>

          {/* Footer Links */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-white font-medium text-sm font-manrope">
            <div>
              <h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">Technology</h5>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-[#40E0D0]">Hydrogel Specs</Link></li>
                <li><Link href="#" className="hover:text-[#40E0D0]">AI Platform</Link></li>
                <li><Link href="#" className="hover:text-[#40E0D0]">Research</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">Organization</h5>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-[#40E0D0]">About Us</Link></li>
                <li><Link href="#" className="hover:text-[#40E0D0]">Team</Link></li>
                <li><Link href="#" className="hover:text-[#40E0D0]">Conrad Challenge</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">Resources</h5>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-[#40E0D0]">Whitepaper</Link></li>
                <li><Link href="#" className="hover:text-[#40E0D0]">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-[#40E0D0]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">Connect</h5>
              <div className="flex gap-4">
                <Link href="#" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition border border-black"><Linkedin className="w-4 h-4" /></Link>
                <Link href="#" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition border border-black"><Twitter className="w-4 h-4" /></Link>
                <Link href="#" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition border border-black"><Github className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t-2 border-white/20 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-white/60">
            <div className="flex gap-4 mb-4 md:mb-0">
              <Link href="#" className="hover:text-white">Terms</Link>
              <Link href="#" className="hover:text-white">Privacy</Link>
              <Link href="#" className="hover:text-white">Cookies</Link>
            </div>
            <div>
              © 2025 Gelionyx.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
