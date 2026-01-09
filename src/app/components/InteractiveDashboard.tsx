"use client";

import { useState } from "react";
import { AlertCircle, X, Droplets, Clock, BrainCircuit, CheckCircle, BarChart3, Map, Settings, Waves } from "lucide-react";

type DashboardMode = "overview" | "analytics" | "fields";

export default function InteractiveDashboard() {
  const [selectedView, setSelectedView] = useState<string | null>(null);
  const [selectedBar, setSelectedBar] = useState<number | null>(null);
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  const [dashboardMode, setDashboardMode] = useState<DashboardMode>("overview");

  const closeView = () => {
    setSelectedView(null);
    setSelectedBar(null);
    setSelectedStat(null);
  };

  return (
    <div className="hidden md:block relative z-0">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-white/30 shadow-2xl p-4 relative">
        {/* Dashboard Header - Compact */}
        <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-black/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#4A90E2] rounded-full animate-pulse"></div>
            <span className="text-xs font-black text-black uppercase">
              Gelionyx Dashboard
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              className={`px-2.5 py-1 rounded-full text-[10px] font-semibold transition-all ${
                dashboardMode === "overview" 
                  ? 'bg-[#4A90E2] text-white shadow-md' 
                  : 'bg-white/50 text-black/60 hover:bg-[#4A90E2] hover:text-white'
              }`}
              onClick={() => {
                setDashboardMode("overview");
                setSelectedView(null);
              }}
            >
              Overview
            </button>
            <button
              className={`px-2.5 py-1 rounded-full text-[10px] font-semibold transition-all ${
                dashboardMode === "analytics" 
                  ? 'bg-[#0F4C75] text-white shadow-md' 
                  : 'bg-white/50 text-black/60 hover:bg-[#0F4C75] hover:text-white'
              }`}
              onClick={() => {
                setDashboardMode("analytics");
                setSelectedView(null);
              }}
            >
              Analytics
            </button>
            <button
              className={`px-2.5 py-1 rounded-full text-[10px] font-semibold transition-all ${
                dashboardMode === "fields" 
                  ? 'bg-[#4A90E2] text-white shadow-md' 
                  : 'bg-white/50 text-black/60 hover:bg-[#4A90E2] hover:text-white'
              }`}
              onClick={() => {
                setDashboardMode("fields");
                setSelectedView(null);
              }}
            >
              Fields
            </button>
          </div>
        </div>

        {/* Overview Mode - Full Dashboard */}
        {dashboardMode === "overview" && (
          <>
            {/* Field Status Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2.5">
                <div>
                  <div 
                    className="bg-[#0F4C75] text-white text-xs font-bold px-3 py-1.5 mb-1.5 inline-block rounded-full hover:bg-[#4A90E2] transition-all cursor-pointer"
                    onClick={() => setSelectedView("field-details")}
                  >
                    Field Zone A
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 bg-[#4A90E2] rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-black">Status: Active Monitoring</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-black/60 mb-1">Last Updated</div>
                  <div className="text-xs font-semibold text-black">2 minutes ago</div>
                </div>
              </div>
            </div>

            {/* Key Metrics - Agricultural */}
            <div className="grid grid-cols-4 gap-2.5 mb-5">
              <div className="bg-[#4A90E2]/10 rounded-xl p-3 border border-[#4A90E2]/20">
                <div className="text-lg font-black text-[#4A90E2] mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>68%</div>
                <div className="text-xs font-semibold text-black/60 uppercase">Moisture</div>
                <div className="text-xs font-bold text-green-600 mt-1">Optimal</div>
              </div>
              <div className="bg-[#0F4C75]/10 rounded-xl p-3 border border-[#0F4C75]/20">
                <div className="text-lg font-black text-[#0F4C75] mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>24h</div>
                <div className="text-xs font-semibold text-black/60 uppercase">Window</div>
                <div className="text-xs font-bold text-[#4A90E2] mt-1">Active</div>
              </div>
              <div className="bg-[#4A90E2]/10 rounded-xl p-5 border border-[#4A90E2]/20">
                <div className="text-2xl font-black text-[#4A90E2] mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>AI</div>
                <div className="text-xs font-semibold text-black/60 uppercase">Powered</div>
                <div className="text-xs font-bold text-green-600 mt-1">Online</div>
              </div>
              <div className="bg-[#0F4C75]/10 rounded-xl p-5 border border-[#0F4C75]/20">
                <div className="text-2xl font-black text-[#0F4C75] mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>2.5ha</div>
                <div className="text-xs font-semibold text-black/60 uppercase">Coverage</div>
                <div className="text-xs font-bold text-[#4A90E2] mt-1">Zone A</div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              {/* Soil Moisture Chart */}
              <div className="bg-white/80 rounded-xl p-4 border border-black/10">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1">
                    <Droplets className="w-3.5 h-3.5 text-[#4A90E2]" />
                    <div className="text-[10px] font-black text-black uppercase">Soil Moisture</div>
                  </div>
                  <select className="text-[9px] font-semibold text-black/60 bg-transparent border border-black/10 rounded px-1 py-0.5">
                    <option>Last 7 days</option>
                  </select>
                </div>
                <div className="flex items-end gap-1 h-28 mb-2 overflow-hidden">
                  {[35, 45, 55, 68, 72, 65, 60].map((value, index) => (
                    <div
                      key={index}
                      className={`flex-1 rounded-t transition-all cursor-pointer group relative ${
                        index === 3 ? "bg-[#0F4C75]" : "bg-[#4A90E2]"
                      } hover:bg-[#0F4C75]`}
                      style={{ height: `${value}%`, minHeight: '4px' }}
                      onClick={() => setSelectedBar(selectedBar === index ? null : index)}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {value}%
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#4A90E2] rounded-full"></div>
                      <span className="text-black/60 font-semibold">Current</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#0F4C75] rounded-full"></div>
                      <span className="text-black/60 font-semibold">Optimal</span>
                    </div>
                  </div>
                  <span className="text-black/50 text-[10px] font-semibold">Units: %</span>
                </div>
              </div>

              {/* Water Usage Chart */}
              <div className="bg-white/80 rounded-xl p-4 border border-black/10">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1">
                    <Waves className="w-3.5 h-3.5 text-[#0F4C75]" />
                    <div className="text-[10px] font-black text-black uppercase">Water Usage</div>
                  </div>
                  <select className="text-[9px] font-semibold text-black/60 bg-transparent border border-black/10 rounded px-1 py-0.5">
                    <option>Last 7 days</option>
                  </select>
                </div>
                <div className="flex items-end gap-1 h-28 mb-2 overflow-hidden">
                  {[45, 38, 42, 35, 30, 28, 32].map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-[#0F4C75] rounded-t transition-all cursor-pointer hover:bg-[#4A90E2] group relative"
                      style={{ height: `${value}%`, minHeight: '4px' }}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {value}L
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="text-black/60">Avg: 35L/day</div>
                  <div className="flex items-center gap-2">
                    <div className="text-green-600 font-semibold">↓ 12% vs last week</div>
                    <span className="text-black/50 text-[10px] font-semibold">Units: L/day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Field Conditions Row */}
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              <div className="bg-white/80 rounded-xl p-3 border border-black/10">
                <div className="flex items-center gap-1 mb-2">
                  <BrainCircuit className="w-2.5 h-2.5 text-[#4A90E2]" />
                  <div className="text-[9px] font-black text-black uppercase">AI Predictions</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-black/70">Expected Increase:</span>
                    <span className="font-semibold text-green-600">+35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/70">Risk Level:</span>
                    <span className="font-semibold text-green-600">Low</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-3 border border-black/10">
                <div className="flex items-center gap-1 mb-2">
                  <Clock className="w-2.5 h-2.5 text-[#0F4C75]" />
                  <div className="text-[9px] font-black text-black uppercase">Recent Activity</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="text-black/70">Field monitoring active</div>
                  <div className="text-black/70">Soil analysis completed</div>
                  <div className="text-black/70">AI model updated</div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-3 border border-black/10">
                <div className="flex items-center gap-1 mb-2">
                  <CheckCircle className="w-2.5 h-2.5 text-green-600" />
                  <div className="text-[9px] font-black text-black uppercase">System Health</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-black/70">Sensors:</span>
                    <span className="font-semibold text-green-600">All Online</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/70">Connectivity:</span>
                    <span className="font-semibold text-green-600">Stable</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/70">Battery:</span>
                    <span className="font-semibold text-black">87%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 gap-2.5 mb-4">
              <button 
                className="bg-white/80 text-black rounded-xl p-2.5 border border-black/10 hover:bg-[#0F4C75] hover:text-white transition-all flex items-center justify-center gap-1"
                onClick={() => setSelectedView("details")}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span className="text-[10px] font-semibold">View Analytics</span>
              </button>
            </div>

            {/* Alerts and Notifications */}
            <div 
              className="bg-[#0F4C75]/10 border-l-4 border-[#4A90E2] rounded-lg p-2.5 hover:bg-[#0F4C75]/20 transition-all cursor-pointer group mb-2.5"
              onClick={() => setSelectedView("alert-details")}
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-[#4A90E2] group-hover:animate-pulse" />
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-black mb-0.5">Action Recommended</div>
                  <div className="text-[9px] text-black/70">Monitor soil moisture levels regularly</div>
                </div>
              </div>
            </div>

            {/* Additional Field Info */}
            <div className="bg-white/60 rounded-xl p-3 border border-black/10">
              <div className="text-[9px] font-black text-black uppercase mb-2">Field Details</div>
              <div className="grid grid-cols-2 gap-2.5 text-[9px]">
                <div>
                  <div className="text-black/60 mb-1">Crop Type:</div>
                  <div className="font-semibold text-black">Maize</div>
                </div>
                <div>
                  <div className="text-black/60 mb-1">Soil Type:</div>
                  <div className="font-semibold text-black">Sandy Loam</div>
                </div>
                <div>
                  <div className="text-black/60 mb-1">Temperature:</div>
                  <div className="font-semibold text-black">28°C</div>
                </div>
                <div>
                  <div className="text-black/60 mb-1">Humidity:</div>
                  <div className="font-semibold text-black">45%</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Analytics Mode - Full Dashboard */}
        {dashboardMode === "analytics" && (
          <>
            {/* Analytics Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2.5">
                <div>
                  <div className="text-xs font-black text-black uppercase mb-1">Analytics Dashboard</div>
                  <div className="text-[10px] text-black/60">Comprehensive field insights</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-black/60 mb-1">Analysis Period</div>
                  <div className="text-xs font-semibold text-black">Last 30 days</div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <div className="bg-[#0F4C75]/10 rounded-xl p-5 border border-[#0F4C75]/20">
                <div className="text-2xl font-black text-[#0F4C75] mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>40%</div>
                <div className="text-xs font-semibold text-black/60 uppercase">Water Saved</div>
                <div className="text-xs font-bold text-green-600 mt-1">vs Traditional</div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              {/* Moisture Trend Over Time */}
              <div className="bg-white/80 rounded-xl p-4 border border-black/10">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1">
                    <BarChart3 className="w-3.5 h-3.5 text-[#4A90E2]" />
                    <div className="text-[10px] font-black text-black uppercase">Moisture Trend</div>
                  </div>
                  <select className="text-[9px] font-semibold text-black/60 bg-transparent border border-black/10 rounded px-1 py-0.5">
                    <option>Last 30 days</option>
                  </select>
                </div>
                <div className="flex items-end gap-1 h-28 mb-2 overflow-hidden">
                  {[45, 52, 58, 65, 72, 68, 75, 80, 78, 82, 85, 87].map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-[#4A90E2] rounded-t transition-all cursor-pointer hover:bg-[#0F4C75] group relative"
                      style={{ height: `${value}%`, minHeight: '4px' }}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {value}%
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end text-xs">
                  <span className="text-black/50 text-[10px] font-semibold">Units: %</span>
                </div>
              </div>

              {/* Water Usage Comparison */}
              <div className="bg-white/80 rounded-xl p-4 border border-black/10">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1">
                    <Waves className="w-3.5 h-3.5 text-[#0F4C75]" />
                    <div className="text-[10px] font-black text-black uppercase">Water Usage</div>
                  </div>
                  <select className="text-[9px] font-semibold text-black/60 bg-transparent border border-black/10 rounded px-1 py-0.5">
                    <option>Last 30 days</option>
                  </select>
                </div>
                <div className="flex items-end gap-1 h-28 mb-2 overflow-hidden">
                  {[60, 55, 50, 45, 42, 40, 38, 35, 32, 30, 28, 25].map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-[#0F4C75] rounded-t transition-all cursor-pointer hover:bg-[#4A90E2] group relative"
                      style={{ height: `${value}%`, minHeight: '4px' }}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {value}L
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="text-black/60">Avg: 35L/day</div>
                  <div className="flex items-center gap-2">
                    <div className="text-green-600 font-semibold">↓ 40% reduction</div>
                    <span className="text-black/50 text-[10px] font-semibold">Units: L/day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Predictions & Insights */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-[#0F4C75] text-white rounded-xl p-4 border border-[#0F4C75]">
                <div className="flex items-center gap-1 mb-2.5">
                  <BrainCircuit className="w-3.5 h-3.5" />
                  <div className="text-[10px] font-black uppercase">AI Predictions</div>
                </div>
                <div className="space-y-2 text-[10px]">
                  <div className="flex justify-between items-start">
                    <span className="text-white/80">Monitoring status:</span>
                    <span className="font-semibold">Active</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-white/80">Expected increase:</span>
                    <span className="font-semibold text-green-300">+35%</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-white/80">Risk level:</span>
                    <span className="font-semibold text-green-300">Low</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-white/80">Confidence:</span>
                    <span className="font-semibold">92%</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-black/10">
                <div className="flex items-center gap-1 mb-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                  <div className="text-[10px] font-black text-black uppercase">Key Insights</div>
                </div>
                <div className="space-y-2 text-[9px]">
                  <div className="text-black/70">• Optimal monitoring conditions identified</div>
                  <div className="text-black/70">• System operating optimally</div>
                </div>
              </div>
            </div>

            {/* Historical Data Chart */}
            <div className="bg-white/80 rounded-xl p-4 mb-4 border border-black/10">
              <div className="flex items-center justify-between mb-2.5">
                <div className="text-[10px] font-black text-black uppercase">Historical Data</div>
                <select className="text-[9px] font-semibold text-black/60 bg-transparent border border-black/10 rounded px-1 py-0.5">
                  <option>Last 6 months</option>
                </select>
              </div>
              <div className="flex items-end gap-1 h-28 mb-2 overflow-hidden">
                {[30, 45, 60, 75, 70, 65, 80, 85, 82, 88, 87, 90].map((value, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-[#0F4C75] rounded-t transition-all cursor-pointer hover:bg-[#4A90E2] group relative"
                    style={{ height: `${value}%`, minHeight: '4px' }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      {value}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="text-black/60">Showing 6-month trend</div>
                <div className="flex items-center gap-2">
                  <div className="text-green-600 font-semibold">↑ 200% water saved</div>
                  <span className="text-black/50 text-[10px] font-semibold">Units: %</span>
                </div>
              </div>
            </div>

            {/* Water Usage Comparison */}
            <div className="bg-white/60 rounded-xl p-3 border border-black/10">
              <div className="text-[9px] font-black text-black uppercase mb-2.5">Water Usage Comparison</div>
              <div className="grid grid-cols-2 gap-2.5 text-[9px]">
                <div>
                  <div className="text-black/60 mb-2">Traditional Method:</div>
                  <div className="font-semibold text-black">100L/day avg</div>
                  <div className="text-red-600 mt-1">Baseline</div>
                </div>
                <div>
                  <div className="text-black/60 mb-2">Gelionyx System:</div>
                  <div className="font-semibold text-black">60L/day avg</div>
                  <div className="text-green-600 mt-1">40% reduction</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Fields Mode - Full Dashboard */}
        {dashboardMode === "fields" && (
          <>
            {/* Fields Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2.5">
                <div>
                  <div className="text-xs font-black text-black uppercase mb-1">Field Management</div>
                  <div className="text-[10px] text-black/60">Monitor and manage all field zones</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-black/60 mb-1">Total Fields</div>
                  <div className="text-xs font-semibold text-black">2 Active Zones</div>
                </div>
              </div>
            </div>

            {/* Field Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div 
                className="bg-[#0F4C75] text-white rounded-xl p-4 border border-[#0F4C75] cursor-pointer hover:bg-[#4A90E2] transition-all"
                onClick={() => setSelectedView("field-details")}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="text-[10px] font-bold uppercase">Field Zone A</div>
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full animate-pulse"></div>
                </div>
                <div className="text-lg font-black mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>2.5 hectares</div>
                <div className="text-xs mb-4">Status: Active</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white/80">Moisture:</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Crop:</span>
                    <span className="font-semibold">Maize</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Last Update:</span>
                    <span className="font-semibold">3 days ago</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-black/10">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="text-[10px] font-bold text-black uppercase">Field Zone B</div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <div className="text-lg font-black text-black mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>1.8 hectares</div>
                <div className="text-xs text-black/70 mb-4">Status: Monitoring</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-black/70">Moisture:</span>
                    <span className="font-semibold text-black">55%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/70">Crop:</span>
                    <span className="font-semibold text-black">Wheat</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Field Map - Larger */}
            <div className="bg-white/80 rounded-xl p-4 mb-5 border border-black/10">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1">
                  <Map className="w-3.5 h-3.5 text-[#4A90E2]" />
                  <div className="text-[10px] font-black text-black uppercase">Field Map Overview</div>
                </div>
                <button className="text-[9px] font-semibold text-[#4A90E2] hover:text-[#0F4C75] transition">
                  View Full Map
                </button>
              </div>
              <div className="bg-white rounded-xl p-2.5 border border-black/20 relative h-44 overflow-hidden">
                {/* Interactive Map Grid */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-3">
                  {/* Field Zone A - Large area */}
                  <div 
                    className="col-span-2 row-span-2 bg-[#0F4C75] border-2 border-[#4A90E2] rounded-lg cursor-pointer hover:bg-[#4A90E2] transition-all hover:scale-105 flex items-center justify-center group relative shadow-lg"
                    onClick={() => setSelectedView("field-map-zone-a")}
                  >
                    <span className="text-sm font-bold text-white group-hover:text-black">Zone A</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#4A90E2] rounded-full animate-pulse border-2 border-white"></div>
                    <div className="absolute bottom-1 left-1 text-[10px] font-semibold text-white">2.5ha</div>
                  </div>
                  
                  {/* Field Zone B */}
                  <div 
                    className="col-span-1 row-span-2 bg-white border-2 border-black/20 rounded-lg cursor-pointer hover:bg-[#4A90E2] transition-all hover:scale-105 flex items-center justify-center group shadow-md"
                    onClick={() => setSelectedView("field-map-zone-b")}
                  >
                    <span className="text-xs font-bold text-black">Zone B</span>
                    <div className="absolute bottom-1 left-1 text-[10px] font-semibold text-black">1.8ha</div>
                  </div>
                  
                  {/* Empty areas */}
                  <div className="col-span-1 row-span-1 bg-gray-100 border border-gray-300 rounded"></div>
                  <div className="col-span-1 row-span-1 bg-gray-100 border border-gray-300 rounded"></div>
                  <div className="col-span-1 row-span-1 bg-gray-100 border border-gray-300 rounded"></div>
                  <div className="col-span-1 row-span-1 bg-gray-100 border border-gray-300 rounded"></div>
                  <div className="col-span-1 row-span-1 bg-gray-100 border border-gray-300 rounded"></div>
                  <div className="col-span-1 row-span-1 bg-gray-100 border border-gray-300 rounded"></div>
                  <div className="col-span-1 row-span-1 bg-gray-100 border border-gray-300 rounded"></div>
                  <div className="col-span-1 row-span-1 bg-gray-100 border border-gray-300 rounded"></div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 text-white text-xs px-3 py-2 rounded flex items-center justify-between">
                  <span>Click on fields to view detailed information</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#0F4C75] rounded-full"></div>
                    <span className="text-[10px]">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Field Status Summary */}
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              <div className="bg-[#4A90E2]/10 rounded-xl p-3 border border-[#4A90E2]/20">
                <div className="text-[9px] font-black text-black uppercase mb-1">Total Fields</div>
                <div className="text-lg font-black text-[#4A90E2] mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>2</div>
                <div className="text-xs text-black/60">4.3 hectares total</div>
              </div>
              <div className="bg-[#0F4C75]/10 rounded-xl p-3 border border-[#0F4C75]/20">
                <div className="text-[9px] font-black text-black uppercase mb-1">Active Monitoring</div>
                <div className="text-lg font-black text-[#0F4C75] mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>2</div>
                <div className="text-xs text-black/60">100% coverage</div>
              </div>
              <div className="bg-white/80 rounded-xl p-3 border border-black/10">
                <div className="text-[9px] font-black text-black uppercase mb-1">Alerts</div>
                <div className="text-lg font-black text-[#4A90E2] mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>1</div>
                <div className="text-xs text-black/60">Action required</div>
              </div>
            </div>

            {/* Field Details Table */}
            <div className="bg-white/60 rounded-xl p-4 border border-black/10">
              <div className="text-[9px] font-black text-black uppercase mb-2.5">Field Comparison</div>
              <div className="space-y-2">
                <div className="grid grid-cols-5 gap-2.5 text-[9px] pb-2 border-b border-black/10">
                  <div className="font-semibold text-black">Field</div>
                  <div className="font-semibold text-black">Size</div>
                  <div className="font-semibold text-black">Moisture</div>
                  <div className="font-semibold text-black">Status</div>
                  <div className="font-semibold text-black">Last Action</div>
                </div>
                <div className="grid grid-cols-5 gap-4 text-xs py-2">
                  <div className="font-semibold text-[#0F4C75]">Zone A</div>
                  <div className="text-black/70">2.5 ha</div>
                  <div className="text-black/70">68%</div>
                  <div className="text-green-600 font-semibold">Active</div>
                  <div className="text-black/70">3 days ago</div>
                </div>
                <div className="grid grid-cols-5 gap-4 text-xs py-2">
                  <div className="font-semibold text-black">Zone B</div>
                  <div className="text-black/70">1.8 ha</div>
                  <div className="text-black/70">55%</div>
                  <div className="text-[#4A90E2] font-semibold">Monitoring</div>
                  <div className="text-black/70">5 days ago</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal Overlay */}
      {selectedView && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeView}
        >
          <div 
            className="bg-white rounded-2xl border border-black/20 shadow-2xl p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeView}
              className="absolute top-4 right-4 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {selectedView === "field-details" && (
              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Field Zone A Details</h3>
                <div className="space-y-3">
                  <div className="bg-[#4A90E2] rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Location</div>
                    <div className="text-sm font-bold text-black">Coordinates: 12.345°N, 45.678°E</div>
                  </div>
                  <div className="bg-[#0F4C75] rounded-2xl p-4 border border-black/20 text-white">
                    <div className="text-xs font-bold mb-2 uppercase">Crop Type</div>
                    <div className="text-sm font-bold">Maize (Zea mays)</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Area</div>
                    <div className="text-sm font-bold text-black">2.5 hectares</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "alert-details" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-6 h-6 text-black" />
                  <h3 className="text-xl font-black text-black uppercase">Action Required</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-black text-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold mb-2 uppercase">Batch ID</div>
                    <div className="text-sm font-bold">B-04</div>
                  </div>
                  <div className="bg-[#4A90E2] rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Time Window</div>
                    <div className="text-sm font-bold text-black">48 hours remaining</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Priority</div>
                    <div className="text-sm font-bold text-black">High - Critical drought risk detected</div>
                  </div>
                </div>
              </div>
            )}


            {selectedView === "details" && (
              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Field Analytics</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#4A90E2] rounded-xl p-3 border border-black/20 text-center text-white">
                      <div className="text-lg font-black text-black">12%</div>
                      <div className="text-[10px] font-bold text-black uppercase">Moisture</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-black/20 text-center">
                      <div className="text-lg font-black text-black">28°C</div>
                      <div className="text-[10px] font-bold text-black uppercase">Temperature</div>
                    </div>
                  </div>
                  <div className="bg-black text-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold mb-2 uppercase">AI Prediction</div>
                    <div className="text-sm font-bold">Optimal monitoring window: Next 24-48 hours</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "view-overview" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-[#4A90E2] rounded-full"></div>
                  <h3 className="text-xl font-black text-black uppercase">Overview Mode</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#4A90E2] rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Current View</div>
                    <div className="text-sm font-bold text-black">Default dashboard with real-time monitoring</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Features</div>
                    <div className="text-sm font-bold text-black">• Field status • Soil moisture charts • Alerts • Quick actions</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "view-analytics" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-6 h-6 text-[#0F4C75]" />
                  <h3 className="text-xl font-black text-black uppercase">Analytics View</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#0F4C75] text-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold mb-2 uppercase">View Mode</div>
                    <div className="text-sm font-bold">Detailed analytics and field metrics</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Features</div>
                    <div className="text-sm font-bold text-black">• Field metrics • AI predictions • Historical data • Trend analysis</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "view-fields" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Map className="w-6 h-6 text-[#4A90E2]" />
                  <h3 className="text-xl font-black text-black uppercase">Field Monitoring View</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#4A90E2] rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">View Mode</div>
                    <div className="text-sm font-bold text-black">Multi-field monitoring and management</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Features</div>
                    <div className="text-sm font-bold text-black">• Field list • Field map • Status summary • Multi-field operations</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "field-map-zone-a" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Map className="w-6 h-6 text-[#0F4C75]" />
                  <h3 className="text-xl font-black text-black uppercase">Field Zone A - Map View</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#0F4C75] text-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold mb-2 uppercase">Location</div>
                    <div className="text-sm font-bold">Coordinates: 12.345°N, 45.678°E</div>
                  </div>
                  <div className="bg-[#4A90E2] rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Field Details</div>
                    <div className="text-sm font-bold text-black">Area: 2.5 hectares</div>
                    <div className="text-sm font-bold text-black mt-1">Crop: Maize (Zea mays)</div>
                    <div className="text-sm font-bold text-black mt-1">Status: Active Monitoring</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Current Conditions</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <div className="font-bold text-black">Moisture: 12%</div>
                        <div className="text-black/70">Below optimal</div>
                      </div>
                      <div>
                        <div className="font-bold text-black">Temp: 28°C</div>
                        <div className="text-black/70">Normal</div>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedView("field-details");
                    }}
                    className="w-full bg-[#0F4C75] text-white text-sm font-bold py-3 px-4 rounded-full border border-black/20 shadow-lg4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-lg6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
                  >
                    View Full Details
                  </button>
                </div>
              </div>
            )}

            {selectedView === "field-map-zone-b" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Map className="w-6 h-6 text-[#4A90E2]" />
                  <h3 className="text-xl font-black text-black uppercase">Field Zone B - Map View</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Location</div>
                    <div className="text-sm font-bold text-black">Coordinates: 12.350°N, 45.680°E</div>
                  </div>
                  <div className="bg-[#4A90E2] rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Field Details</div>
                    <div className="text-sm font-bold text-black">Area: 1.8 hectares</div>
                    <div className="text-sm font-bold text-black mt-1">Crop: Wheat (Triticum)</div>
                    <div className="text-sm font-bold text-black mt-1">Status: Monitoring</div>
                  </div>
                  <div className="bg-black text-white rounded-2xl p-4 border border-black/20">
                    <div className="text-xs font-bold mb-2 uppercase">Current Conditions</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <div className="font-bold">Moisture: 18%</div>
                        <div className="text-white/70">Stable</div>
                      </div>
                      <div>
                        <div className="font-bold">Temp: 26°C</div>
                        <div className="text-white/70">Normal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Stat Detail Overlays */}
      {selectedStat && (
        <div className="absolute inset-0 bg-white/95 rounded-2xl border border-black/20 p-4 flex items-center justify-center z-10">
          <button
            onClick={() => setSelectedStat(null)}
            className="absolute top-2 right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          {selectedStat === "moisture" && (
            <div className="text-center">
              <Droplets className="w-12 h-12 text-[#0F4C75] mx-auto mb-3" />
              <div className="text-3xl font-black text-black mb-2">12%</div>
              <div className="text-sm font-bold text-black uppercase mb-2">Current Soil Moisture</div>
              <div className="text-xs text-black">Below optimal threshold (25%)</div>
            </div>
          )}

          {selectedStat === "window" && (
            <div className="text-center">
              <Clock className="w-12 h-12 text-[#4A90E2] mx-auto mb-3" />
              <div className="text-3xl font-black text-black mb-2">48h</div>
              <div className="text-sm font-bold text-black uppercase mb-2">Monitoring Window</div>
              <div className="text-xs text-black">Time remaining before critical threshold</div>
            </div>
          )}

          {selectedStat === "ai" && (
            <div className="text-center">
              <BrainCircuit className="w-12 h-12 text-[#0F4C75] mx-auto mb-3" />
              <div className="text-3xl font-black text-black mb-2">Active</div>
              <div className="text-sm font-bold text-black uppercase mb-2">AI Monitoring</div>
              <div className="text-xs text-black">Real-time analysis enabled</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

