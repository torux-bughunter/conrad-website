"use client";

import {
  Droplets,
  PlayCircle,
  Waves,
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
import { useEffect, useState } from "react";
import InteractiveDashboard from "./components/InteractiveDashboard";
import InteractivePhone from "./components/InteractivePhone";
import GelionyxLogo from "./components/GelionyxLogo";
import AnimatedBlobBackground from "./components/AnimatedBlobBackground";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar - Sticky & Transparent */}
      <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="flex gap-2 items-center">
          <GelionyxLogo size="sm" useImage={true} />
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link href="#problem" className="hover:text-[#4A90E2] transition text-sm font-semibold text-white">Problem</Link>
          <Link href="#solution" className="hover:text-[#4A90E2] transition text-sm font-semibold text-white">Solution</Link>
          <Link href="#team" className="hover:text-[#4A90E2] transition text-sm font-semibold text-white">Team</Link>
          <Link href="#impact" className="hover:text-[#4A90E2] transition text-sm font-semibold text-white">Impact</Link>
        </div>
        <div className="flex gap-3 items-center">
          <Link href="#contact" className="hidden md:block text-sm font-semibold text-white hover:text-[#4A90E2] transition">Contact Us</Link>
          <Link href="#contact" className="hover:bg-white/10 transition text-xs font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"> Partner With Us </Link>
        </div>
      </nav>

      {/* Hero Section - Centered Layout */}
      <header className="pt-20 pb-0 md:pt-24 md:pb-0 px-6 relative overflow-visible">
        {/* Animated Background - Full Coverage extending into next section */}
        <div 
          className="absolute z-0 pointer-events-none"
          style={{
            top: 0,
            left: 0,
            right: 0,
            height: "200vh",
            overflow: "hidden",
          }}
        >
          <AnimatedBlobBackground />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Marketing Section - Centered */}
          <div className="text-center mb-12">
            {/* Main Heading - Centered */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Grow more<br />
              <span className="text-[#4A90E2]">with less water.</span>
            </h1>

            {/* Description - Centered */}
            <p className="text-lg md:text-xl text-white/80 mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
              A drought-resilience system that pairs biodegradable hydrogel made from cashew gum, chitosan, and PVA with an offline-capable AI app to help farmers optimize water usage and protect yields under drought pressure.
            </p>
            
            {/* CTA Buttons - Centered */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href="#solution" className="bg-black text-white text-base font-semibold px-8 py-3 rounded-full hover:bg-[#333] transition inline-flex items-center justify-center gap-2 shadow-lg">
                Explore the System
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#solution" className="text-white text-base font-semibold hover:text-[#4A90E2] transition inline-flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" />
                See how it works
              </Link>
            </div>
          </div>

          {/* Bottom Dashboard UI Section */}
          <div className="relative mt-8 mb-62 md:mb-84 pb-0">
            {/* Gradient fade at bottom for blending - starts much higher */}
            <div className="absolute bottom-0 left-0 right-0 h-80 md:h-96 bg-gradient-to-b from-transparent via-[#0F4C75]/50 to-[#0F4C75] z-10 pointer-events-none rounded-b-2xl"></div>
            <InteractiveDashboard />
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section id="problem" className="bg-white py-24 px-6 border-t-2 border-black relative -mt-64 md:-mt-96 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-[#4A90E2] text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider border border-[#4A90E2] shadow-md">The Challenge</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-black mt-4 mb-8 leading-none" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Water scarcity is<br />squeezing farmers.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-xl text-black/80 font-medium leading-relaxed mb-6">
                Across the globe, farming communities are being squeezed by water scarcity and more frequent extreme weather. The World Health Organization reports that water scarcity affects about 40 percent of the world's population and that roughly 55 million people live in drought-impacted areas each year.
              </p>
              <p className="text-xl text-black/80 font-medium leading-relaxed mb-6">
                Recent analyses show dry rainfall shocks have increased by about 233 percent in recent years, and more than 85 percent of droughts strike low to middle-income countries, where a single failed season can spiral into debt, migration, and hunger.
              </p>
            </div>
            <div className="bg-[#0F4C75] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-black mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>The Pain Points</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#4A90E2] flex-shrink-0 mt-1" />
                  <span className="font-medium">Groundwater pumping accelerates depletion and land subsidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#4A90E2] flex-shrink-0 mt-1" />
                  <span className="font-medium">Drip irrigation is expensive, difficult to maintain, and prone to failure</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#4A90E2] flex-shrink-0 mt-1" />
                  <span className="font-medium">Traditional irrigation wastes water and ignores shifting climate patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#4A90E2] flex-shrink-0 mt-1" />
                  <span className="font-medium">High-tech alternatives cost tens of thousands per month, out of reach for most growers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop / How it works */}
      <section id="solution" className="overflow-hidden bg-[#0F4C75] border-black border-t-2 pt-16 md:pt-20 pr-6 pb-24 pl-6 relative z-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 leading-none" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Nature meets<br />neural networks.
            </h2>
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4A90E2] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-white mb-2">1. Biodegradable Hydrogels</h3>
                    <p className="text-white/80 font-medium leading-relaxed">
                      Powdered hydrogel made from cashew gum, chitosan, and PVA through cross-linking. Mixed into soil near roots, it absorbs rainfall or irrigation, holds nutrients in place, and releases moisture as the ground dries. 100% biodegradable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4A90E2] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Dna className="w-6 h-6" />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-white mb-2">2. Prebiotic-Loaded Blends</h3>
                    <p className="text-white/80 font-medium leading-relaxed">
                      Optional prebiotic-loaded blends, such as inulin, support beneficial soil biology and strengthen crop defenses when drought stress would normally invite disease. Tailored by crop and region for maximum effectiveness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4A90E2] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-white mb-2">3. Offline-Capable AI App</h3>
                    <p className="text-white/80 font-medium leading-relaxed">
                      A companion AI app designed to function offline uses crop, soil, climate, and satellite information to recommend hydrogel timing, dosage, and water scheduling. Stores core guidance on-device and syncs when connectivity returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Link href="#contact" className="inline-block px-8 py-3.5 bg-[#4A90E2] text-white rounded-full font-semibold hover:bg-[#5BA0F2] transition shadow-lg">
                Request Technical Specs
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center">
            {/* Interactive Phone */}
            <InteractivePhone />
          </div>
        </div>
      </section>

      {/* Transition Section (Black) */}
      <div className="text-[#4A90E2] bg-black border-black border-t-2 relative">
        {/* Top Wave SVG */}
        <svg className="absolute top-0 w-full h-16 md:h-32 -mt-1 transform rotate-180" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#4A90E2" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight text-[#4A90E2] leading-none mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Stop guessing. <br />Start growing.
              </h2>
              <Link href="#impact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4A90E2] text-white rounded-full font-semibold hover:bg-[#5BA0F2] transition shadow-lg">
                View Impact Data
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed font-manrope">
                Traditional irrigation wastes water and ignores shifting climate patterns. Gelionyx addresses the gap by improving root-zone water retention and pairing it with clear, localized recommendations, so farmers can conserve water while protecting yields under drought pressure.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="pb-32 px-6">
          <div className="max-w-6xl mr-auto ml-auto">
            <div className="text-center mb-16">
              <span className="bg-[#4A90E2] text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider border border-[#4A90E2] shadow-md">Core Technology</span>
              <h3 className="text-4xl md:text-5xl font-black text-white mt-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>The Gelionyx Ecosystem</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

              {/* Card 1 */}
              <div className="group hover:bg-white/5 transition duration-300 overflow-hidden cursor-pointer hover:border-[#4A90E2]/50 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                  <Sprout className="w-24 h-24 text-[#4A90E2]" />
                </div>
                <h4 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Cashew Gum</h4>
                <p className="text-white/60 text-sm mb-6">Utilizing agricultural waste for superior water absorption.</p>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition duration-300 overflow-hidden cursor-pointer border border-white/10 hover:border-[#4A90E2]/50">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                  <Microscope className="w-24 h-24 text-[#4A90E2]" />
                </div>
                <h4 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Prebiotics</h4>
                <p className="text-white/60 text-sm mb-6">Inulin and other prebiotics support beneficial soil biology and strengthen crop defenses.</p>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition duration-300 overflow-hidden cursor-pointer border border-white/10 hover:border-[#4A90E2]/50">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                  <BrainCircuit className="w-24 h-24 text-[#4A90E2]" />
                </div>
                <h4 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>AI Models</h4>
                <p className="text-white/60 text-sm mb-6">Offline-capable AI analyzes crop, soil, climate, and satellite data for optimal recommendations.</p>
              </div>

              {/* Card 4 */}
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition duration-300 overflow-hidden cursor-pointer border border-white/10 hover:border-[#4A90E2]/50">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                  <Recycle className="w-24 h-24 text-[#4A90E2]" />
                </div>
                <h4 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Circular</h4>
                <p className="text-white/60 text-sm mb-6">Fully biodegradable materials leaving zero trace.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof / Blog Section (White) */}
      <section id="impact" className="bg-white py-24 px-6 border-t-2 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black leading-none mb-6 md:mb-0" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Global Impact.
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Large Card */}
            <div className="md:col-span-2 bg-[#0F4C75] rounded-2xl p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-end border border-white/20 shadow-xl group">
              <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" alt="Farming" />
              <div className="relative z-10">
                <span className="bg-[#4A90E2] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase mb-4 inline-block border border-[#4A90E2] shadow-md">Pilot Program</span>
                <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Field Validation Coming Q4 2026</h3>
                <p className="text-white font-medium text-lg font-manrope">Six pilot farms across Ethiopia, Kenya, and Somalia in partnership with agricultural agencies</p>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="bg-black rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 shadow-xl">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div>
                <span className="bg-[#4A90E2] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase mb-4 inline-block border border-[#4A90E2] shadow-md">Target Cost</span>
                <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>$44 per acre</h3>
                <p className="text-white/60 text-sm">Compared to $250 per acre for key competitors</p>
              </div>
              <div className="mt-8 flex justify-center">
                <Award className="w-20 h-20 text-[#4A90E2]" />
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="bg-[#4A90E2] rounded-2xl p-8 text-white flex flex-col justify-between border border-white/20 shadow-xl">
              <div className="">
                <span className="bg-white/30 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase mb-4 inline-block border border-white/40 shadow-md">Statistics</span>
                <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Water Conservation</h3>
              </div>
              <div className="mt-4">
                <p className="font-black text-5xl mb-1 text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>40%</p>
                <p className="text-sm font-semibold text-white">Reduction in water usage.</p>
              </div>
            </div>

            {/* Medium Card */}
            <div className="md:col-span-2 bg-[#0F4C75] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-black/10 shadow-xl">
              <div className="flex-1">
                <h3 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Market Opportunity</h3>
                <p className="text-white/80 text-lg mb-6">Serving small to mid-sized farmers in drought-prone regions and the institutions that fund drought programs. With 350 million farmers in Sub-Saharan Africa and South Asia, and over 1.2 million agricultural cooperatives worldwide, the opportunity is vast.</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                    <p className="text-white font-semibold text-sm">350M+ Farmers</p>
                    <p className="text-white/60 text-xs">Sub-Saharan Africa & South Asia</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                    <p className="text-white font-semibold text-sm">1.2M+ Cooperatives</p>
                    <p className="text-white/60 text-xs">Worldwide</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 text-white text-center shadow-xl">
                  <Handshake className="w-10 h-10 mx-auto mb-2 text-[#4A90E2]" />
                  <p className="font-semibold text-white">Hybrid Revenue-Impact Model</p>
                  <p className="text-white/80 text-sm mt-2">Commercial growth funds free distribution in Ethiopia, Kenya, and Somalia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-white py-24 px-6 border-t-2 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-[#4A90E2] text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider border border-[#4A90E2] shadow-md">Our Team</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-black mt-4 mb-6 leading-none" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Three friends.<br />One mission.
            </h2>
            <p className="text-xl text-black/80 font-medium leading-relaxed max-w-3xl mx-auto">
              Gelionyx formed when three friends from Illinois and Texas combined their interest in chemistry and computer science to address an important issue in agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 - Leroy */}
            <div className="bg-[#0F4C75] rounded-2xl p-8 text-white border border-white/10 shadow-xl">
              <div className="w-20 h-20 rounded-full bg-[#4A90E2] flex items-center justify-center mb-6 text-3xl font-black">
                L
              </div>
              <h3 className="text-2xl font-black mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Leroy</h3>
              <p className="text-[#4A90E2] font-semibold mb-4">Biomaterials Design Lead</p>
              <p className="text-white/80 leading-relaxed">
                Leads biomaterials design and ran formulation experiments, from cross-linking chemistry to powder processing and biodegradation testing, building on advanced chemistry coursework and independent polymer research.
              </p>
            </div>

            {/* Team Member 2 - Tarunesh */}
            <div className="bg-[#0F4C75] rounded-2xl p-8 text-white border border-white/10 shadow-xl">
              <div className="w-20 h-20 rounded-full bg-[#4A90E2] flex items-center justify-center mb-6 text-3xl font-black">
                T
              </div>
              <h3 className="text-2xl font-black mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Tarunesh</h3>
              <p className="text-[#4A90E2] font-semibold mb-4">AI & Mobile Experience</p>
              <p className="text-white/80 leading-relaxed">
                Built the AI and mobile experience, translating soil, weather, and satellite inputs into clear recommendations that can run without consistent internet, drawing on machine learning projects and mobile development skills.
              </p>
            </div>

            {/* Team Member 3 - Avyay */}
            <div className="bg-[#0F4C75] rounded-2xl p-8 text-white border border-white/10 shadow-xl">
              <div className="w-20 h-20 rounded-full bg-[#4A90E2] flex items-center justify-center mb-6 text-3xl font-black">
                A
              </div>
              <h3 className="text-2xl font-black mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Avyay</h3>
              <p className="text-[#4A90E2] font-semibold mb-4">Business Logistics</p>
              <p className="text-white/80 leading-relaxed">
                Drove business logistics, including supplier research, pricing, partnerships, and the hybrid revenue-impact plan, while also supporting the AI workflow and data requirements.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-black/80 font-medium leading-relaxed max-w-3xl mx-auto">
              As a team, we combine hands-on prototyping, practical software design, and program-style thinking about training, delivery, and impact measurement. We are motivated by the farmers who bear climate risk first, and by the belief that saving water should not come at the environment's expense.
            </p>
          </div>
        </div>
      </section>

      {/* Wave Divider for Footer */}
      <div className="relative h-16 md:h-24 bg-white overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full text-[#0F4C75] fill-current" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-black pt-12 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.85]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Ready to <br />scale?
          </h2>
          <p className="text-xl font-medium text-white/90 mb-10 max-w-xl mx-auto font-manrope">
            Whether you represent a government, NGO, or commercial farm, let&apos;s discuss how Gelionyx can secure your future.
          </p>

          {/* Registration Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-lg mx-auto shadow-xl">
            <form className="space-y-4 text-left">
              <div className="">
                <label className="block text-sm font-semibold text-white mb-1">Email Address</label>
                <input type="email" placeholder="contact@organization.org" className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] text-white placeholder-white/60 font-medium" />
              </div>
              <div className="">
                <label className="block text-sm font-semibold text-white mb-1">Organization Type</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] text-white font-medium">
                  <option className="text-black">Government Agency</option>
                  <option className="text-black">NGO / Non-Profit</option>
                  <option className="text-black">Commercial Farm</option>
                  <option className="text-black">Investor</option>
                </select>
              </div>
              <button type="button" className="w-full py-4 bg-[#4A90E2] text-white text-lg font-semibold rounded-xl hover:bg-[#5BA0F2] transition shadow-lg mt-4 flex items-center justify-center gap-2">
                Request Information <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs text-white/60 text-center mt-4">We respect your privacy.</p>
          </div>

          {/* Footer Links */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-white font-medium text-sm font-manrope">
            <div>
              <h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">Technology</h5>
              <ul className="space-y-2">
                <li><Link href="#solution" className="hover:text-[#4A90E2]">Hydrogel Technology</Link></li>
                <li><Link href="#solution" className="hover:text-[#4A90E2]">AI Platform</Link></li>
                <li><Link href="#problem" className="hover:text-[#4A90E2]">The Challenge</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">Organization</h5>
              <ul className="space-y-2">
                <li><Link href="#problem" className="hover:text-[#4A90E2]">About Us</Link></li>
                <li><Link href="#team" className="hover:text-[#4A90E2]">Team</Link></li>
                <li><Link href="#impact" className="hover:text-[#4A90E2]">Impact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">Resources</h5>
              <ul className="space-y-2">
                <li><Link href="#contact" className="hover:text-[#4A90E2]">Request Info</Link></li>
                <li><Link href="#impact" className="hover:text-[#4A90E2]">Market Data</Link></li>
                <li><Link href="#contact" className="hover:text-[#4A90E2]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 uppercase tracking-wider text-xs border-b-2 border-white/20 pb-2">Connect</h5>
              <div className="flex gap-4">
                <a href="mailto:contact@gelionyx.com" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition border border-black" aria-label="Email"><User className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t-2 border-white/20 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-white/60">
            <div>
              © 2025 Gelionyx. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
