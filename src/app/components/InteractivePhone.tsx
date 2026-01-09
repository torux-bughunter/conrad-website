"use client";

import { useState } from "react";
import { Menu, User, AlertCircle, X, Droplets, BarChart3, Map } from "lucide-react";
import GelionyxLogo from "./GelionyxLogo";

export default function InteractivePhone() {
  const [selectedView, setSelectedView] = useState<string | null>(null);
  const [selectedBar, setSelectedBar] = useState<number | null>(null);
  const [phoneScreen, setPhoneScreen] = useState<"main" | "details" | "menu">("main");

  const closeView = () => {
    setSelectedView(null);
    setSelectedBar(null);
  };

  const barHeights = [40, 60, 30, 20, 15];
  const barValues = [40, 60, 30, 20, 15];

  return (
    <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] p-4 shadow-2xl border-8 border-black transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
      <div className="w-full h-full bg-neutral-900 rounded-[2.2rem] overflow-hidden relative">
        {/* App UI Simulation */}
        {phoneScreen === "main" && (
          <div className="p-6 flex flex-col h-full text-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={() => setPhoneScreen("menu")}
                className="hover:opacity-70 transition-opacity"
              >
                <Menu className="w-6 h-6 cursor-pointer" />
              </button>
              <div className="scale-75 origin-center">
                <GelionyxLogo size="sm" />
              </div>
              <button 
                onClick={() => setSelectedView("profile")}
                className="hover:opacity-70 transition-opacity"
              >
                <User className="w-6 h-6 cursor-pointer" />
              </button>
            </div>

            {/* Field Status */}
            <div 
              className="mb-6 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelectedView("field-info")}
            >
              <h4 className="text-2xl font-bold font-instrument-serif mb-1">Field Zone A</h4>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <p className="text-white/70 text-sm">Critical Drought Risk</p>
              </div>
            </div>

            {/* Graph UI */}
            <div 
              className="bg-neutral-800 rounded-xl p-4 mb-4 border border-neutral-700 cursor-pointer hover:border-[#0F4C75] transition-colors"
              onClick={() => setSelectedView("chart-details")}
            >
              <div className="flex justify-between items-end mb-2 h-24 gap-1">
                {barHeights.map((height, index) => (
                  <div
                    key={index}
                    className={`w-full rounded-t transition-all cursor-pointer group relative ${
                      index === 3 ? "bg-[#0F4C75]" : "bg-[#0F4C75]/50"
                    } ${
                      selectedBar === index ? "h-[90%] bg-[#4A90E2] scale-105" : `h-[${height}%]`
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBar(selectedBar === index ? null : index);
                    }}
                    style={{ height: selectedBar === index ? "90%" : `${height}%` }}
                  >
                    {selectedBar === index && (
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded whitespace-nowrap">
                        {barValues[index]}%
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-neutral-400">Soil Moisture Projection</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex justify-center gap-4">
              <button 
                onClick={() => setPhoneScreen("details")}
                className="w-full bg-[#0F4C75] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#4A90E2] transition-all active:scale-95"
              >
                View Details
              </button>
            </div>
          </div>
        )}

        {/* Details Screen */}
        {phoneScreen === "details" && (
          <div className="p-6 flex flex-col h-full text-white overflow-y-auto">
            <button 
              onClick={() => setPhoneScreen("main")}
              className="text-white/70 hover:text-white mb-4 text-sm font-bold"
            >
              ← Back
            </button>
            <div className="space-y-4">
              <div className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
                <div className="text-xs font-bold mb-2 uppercase">Field Information</div>
                <div className="text-sm">Zone A - 2.5 hectares</div>
                <div className="text-xs text-neutral-400 mt-1">Maize (Zea mays)</div>
              </div>
              <div className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-4 h-4 text-[#4A90E2]" />
                  <div className="text-xs font-bold uppercase">Current Metrics</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="font-bold">Moisture: 12%</div>
                    <div className="text-neutral-400">Below optimal</div>
                  </div>
                  <div>
                    <div className="font-bold">Temp: 28°C</div>
                    <div className="text-neutral-400">Normal</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#0F4C75] rounded-xl p-4 border border-white/20">
                <div className="text-xs font-bold mb-2 uppercase">AI Prediction</div>
                <div className="text-sm">Optimal monitoring window: Next 24-48 hours</div>
              </div>
            </div>
          </div>
        )}

        {/* Menu Screen */}
        {phoneScreen === "menu" && (
          <div className="p-6 flex flex-col h-full text-white">
            <button 
              onClick={() => setPhoneScreen("main")}
              className="text-white/70 hover:text-white mb-6 text-sm font-bold"
            >
              ← Back
            </button>
            <div className="space-y-3">
              <button 
                onClick={() => {
                  setPhoneScreen("main");
                  setSelectedView("menu-overview");
                }}
                className="w-full bg-neutral-800 rounded-xl p-4 border border-neutral-700 hover:bg-neutral-700 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-[#4A90E2]" />
                  <div>
                    <div className="font-bold text-sm">Overview</div>
                    <div className="text-xs text-neutral-400">Field monitoring</div>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => {
                  setPhoneScreen("main");
                  setSelectedView("menu-analytics");
                }}
                className="w-full bg-neutral-800 rounded-xl p-4 border border-neutral-700 hover:bg-neutral-700 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-[#0F4C75]" />
                  <div>
                    <div className="font-bold text-sm">Analytics</div>
                    <div className="text-xs text-neutral-400">Performance metrics</div>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => {
                  setPhoneScreen("main");
                  setSelectedView("menu-fields");
                }}
                className="w-full bg-neutral-800 rounded-xl p-4 border border-neutral-700 hover:bg-neutral-700 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <Map className="w-5 h-5 text-[#4A90E2]" />
                  <div>
                    <div className="font-bold text-sm">Fields</div>
                    <div className="text-xs text-neutral-400">Field management</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Modal Overlay */}
      {selectedView && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeView}
        >
          <div 
            className="bg-white rounded-2xl border border-black/20 shadow-2xl p-6 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeView}
              className="absolute top-4 right-4 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {selectedView === "field-info" && (
              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Field Zone A</h3>
                <div className="space-y-3">
                  <div className="bg-[#0F4C75] text-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold mb-2 uppercase">Status</div>
                    <div className="text-sm font-bold">Critical Drought Risk</div>
                  </div>
                  <div className="bg-[#4A90E2] rounded-2xl p-4 border border-black/20 text-white">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Area</div>
                    <div className="text-sm font-bold text-black">2.5 hectares</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "chart-details" && (
              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Soil Moisture Chart</h3>
                <div className="space-y-3">
                  <div className="bg-black text-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold mb-2 uppercase">Current Reading</div>
                    <div className="text-lg font-bold">12%</div>
                  </div>
                  <div className="bg-[#4A90E2] rounded-2xl p-4 border border-black/20 text-white">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Trend</div>
                    <div className="text-sm font-bold text-black">Decreasing - Action required</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "profile" && (
              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">User Profile</h3>
                <div className="space-y-3">
                  <div className="bg-[#4A90E2] rounded-2xl p-4 border border-black/20 text-white">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Account</div>
                    <div className="text-sm font-bold text-black">Farmer Account</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Active Fields</div>
                    <div className="text-sm font-bold text-black">2 fields monitored</div>
                  </div>
                </div>
              </div>
            )}


            {selectedView === "menu-overview" && (
              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Overview</h3>
                <p className="text-sm text-black">Main dashboard with real-time field monitoring and alerts.</p>
              </div>
            )}

            {selectedView === "menu-analytics" && (
              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Analytics</h3>
                <p className="text-sm text-black">View performance metrics, trends, and AI predictions.</p>
              </div>
            )}

            {selectedView === "menu-fields" && (
              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Fields</h3>
                <p className="text-sm text-black">Manage multiple fields and view field maps.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

