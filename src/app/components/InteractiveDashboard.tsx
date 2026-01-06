"use client";

import { useState } from "react";
import { AlertCircle, X, Droplets, Clock, BrainCircuit, CheckCircle, BarChart3, Map, Settings } from "lucide-react";

type DashboardMode = "overview" | "analytics" | "fields";

export default function InteractiveDashboard() {
  const [selectedView, setSelectedView] = useState<string | null>(null);
  const [selectedBar, setSelectedBar] = useState<number | null>(null);
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  const [deploymentConfirmed, setDeploymentConfirmed] = useState(false);
  const [dashboardMode, setDashboardMode] = useState<DashboardMode>("overview");

  const closeView = () => {
    setSelectedView(null);
    setSelectedBar(null);
    setSelectedStat(null);
    setDeploymentConfirmed(false);
  };

  const handleConfirmDeployment = () => {
    setDeploymentConfirmed(true);
  };

  return (
    <div className="hidden md:block relative">
      <div className="bg-white rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-black">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
            <span className="text-sm font-black text-black uppercase">
              {dashboardMode === "overview" && "Gelionyx Dashboard"}
              {dashboardMode === "analytics" && "Analytics View"}
              {dashboardMode === "fields" && "Field Monitoring"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 border-black transition-all ${
                dashboardMode === "overview" 
                  ? 'bg-[#40E0D0] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
                  : 'bg-white text-black hover:bg-[#40E0D0]'
              }`}
              onClick={() => {
                setDashboardMode("overview");
                setSelectedView(null);
              }}
            >
              Overview
            </button>
            <button
              className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 border-black transition-all ${
                dashboardMode === "analytics" 
                  ? 'bg-[#00A651] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
                  : 'bg-white text-black hover:bg-[#00A651] hover:text-white'
              }`}
              onClick={() => {
                setDashboardMode("analytics");
                setSelectedView(null);
              }}
            >
              Analytics
            </button>
            <button
              className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 border-black transition-all ${
                dashboardMode === "fields" 
                  ? 'bg-[#40E0D0] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
                  : 'bg-white text-black hover:bg-[#40E0D0]'
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

        {/* Overview Mode */}
        {dashboardMode === "overview" && (
          <>
            {/* Field Status */}
            <div className="mb-4">
              <div 
                className="bg-black text-white text-xs font-bold px-3 py-1.5 mb-3 inline-block rounded-full hover:bg-[#00A651] hover:text-black transition-all cursor-pointer"
                onClick={() => setSelectedView("field-details")}
              >
                Field Zone A
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#00A651] rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-black">Status: Active</span>
              </div>
            </div>

            {/* Chart Area */}
            <div className="bg-[#40E0D0] rounded-2xl border-2 border-black p-4 mb-4 hover:border-[#00A651] transition-colors">
              <div className="text-xs font-bold text-black mb-2 uppercase">Soil Moisture</div>
              <div className="flex items-end gap-1 h-20">
                {[20, 35, 50, 80, 25, 15].map((value, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t transition-all cursor-pointer group relative ${
                      index === 3 ? "bg-[#00A651] border-2 border-black" : "bg-black"
                    } ${
                      selectedBar === index ? "h-[90%] bg-[#00A651] scale-105" : `h-[${value}%]`
                    }`}
                    onClick={() => setSelectedBar(selectedBar === index ? null : index)}
                    style={{ height: selectedBar === index ? "90%" : `${value}%` }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alert Box */}
            <div 
              className="bg-black text-white p-4 mb-4 rounded-2xl border-2 border-black hover:bg-[#00A651] hover:text-black hover:border-[#40E0D0] transition-all cursor-pointer group"
              onClick={() => setSelectedView("alert-details")}
            >
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 group-hover:animate-pulse" />
                <span className="text-xs font-bold uppercase">Action Required</span>
              </div>
              <p className="text-xs">Deploy Hydrogel batch B-04 within 48 hours</p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button 
                className="bg-[#00A651] text-white text-xs font-bold py-2 px-4 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:bg-[#40E0D0] hover:text-black transition-all active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                onClick={() => setSelectedView("deploy")}
              >
                Deploy Now
              </button>
              <button 
                className="bg-white text-black text-xs font-bold py-2 px-4 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:bg-black hover:text-white transition-all active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                onClick={() => setSelectedView("details")}
              >
                View Details
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t-2 border-black">
              <div 
                className="text-center hover:scale-110 transition-transform cursor-pointer group"
                onClick={() => setSelectedStat(selectedStat === "moisture" ? null : "moisture")}
              >
                <div className="text-lg font-black text-black group-hover:text-[#00A651] transition-colors">12%</div>
                <div className="text-[10px] font-bold text-black uppercase">Moisture</div>
              </div>
              <div 
                className="text-center hover:scale-110 transition-transform cursor-pointer group"
                onClick={() => setSelectedStat(selectedStat === "window" ? null : "window")}
              >
                <div className="text-lg font-black text-black group-hover:text-[#40E0D0] transition-colors">48h</div>
                <div className="text-[10px] font-bold text-black uppercase">Window</div>
              </div>
              <div 
                className="text-center hover:scale-110 transition-transform cursor-pointer group"
                onClick={() => setSelectedStat(selectedStat === "ai" ? null : "ai")}
              >
                <div className="text-lg font-black text-black group-hover:text-[#00A651] transition-colors">AI</div>
                <div className="text-[10px] font-bold text-black uppercase">Active</div>
              </div>
            </div>
          </>
        )}

        {/* Analytics Mode */}
        {dashboardMode === "analytics" && (
          <div className="space-y-4">
            <div className="bg-[#40E0D0] rounded-2xl border-2 border-black p-4">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-black" />
                <span className="text-sm font-black text-black uppercase">Performance Metrics</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-3 border-2 border-black">
                  <div className="text-xs font-bold text-black mb-1">Water Efficiency</div>
                  <div className="text-2xl font-black text-black">87%</div>
                </div>
                <div className="bg-white rounded-xl p-3 border-2 border-black">
                  <div className="text-xs font-bold text-black mb-1">Crop Yield</div>
                  <div className="text-2xl font-black text-black">+23%</div>
                </div>
              </div>
            </div>
            <div className="bg-black text-white rounded-2xl border-2 border-black p-4">
              <div className="text-xs font-bold mb-2 uppercase">AI Predictions</div>
              <div className="space-y-2 text-xs">
                <div>• Optimal deployment window: Next 24-48h</div>
                <div>• Expected moisture increase: +35%</div>
                <div>• Risk level: Low</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border-2 border-black p-4">
              <div className="text-xs font-bold text-black mb-2 uppercase">Historical Data</div>
              <div className="flex items-end gap-1 h-16">
                {[30, 45, 60, 75, 55, 40, 50].map((value, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-[#00A651] rounded-t"
                    style={{ height: `${value}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Fields Mode */}
        {dashboardMode === "fields" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div 
                className="bg-[#00A651] text-white rounded-2xl border-2 border-black p-4 cursor-pointer hover:bg-[#40E0D0] hover:text-black transition-all"
                onClick={() => setSelectedView("field-details")}
              >
                <div className="text-xs font-bold mb-1 uppercase">Field Zone A</div>
                <div className="text-sm font-bold">2.5 hectares</div>
                <div className="text-xs mt-2">Status: Active</div>
              </div>
              <div className="bg-white rounded-2xl border-2 border-black p-4">
                <div className="text-xs font-bold text-black mb-1 uppercase">Field Zone B</div>
                <div className="text-sm font-bold text-black">1.8 hectares</div>
                <div className="text-xs text-black mt-2">Status: Monitoring</div>
              </div>
            </div>
            <div className="bg-[#40E0D0] rounded-2xl border-2 border-black p-4">
              <div className="flex items-center gap-2 mb-3">
                <Map className="w-5 h-5 text-black" />
                <span className="text-sm font-black text-black uppercase">Field Map</span>
              </div>
              <div className="bg-white rounded-xl p-4 border-2 border-black relative h-48 overflow-hidden">
                {/* Interactive Map Grid */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-2">
                  {/* Field Zone A - Large area */}
                  <div 
                    className="col-span-2 row-span-2 bg-[#00A651] border-2 border-black rounded-lg cursor-pointer hover:bg-[#40E0D0] transition-all hover:scale-105 flex items-center justify-center group relative"
                    onClick={() => setSelectedView("field-map-zone-a")}
                  >
                    <span className="text-xs font-bold text-white group-hover:text-black">Zone A</span>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-black rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Field Zone B */}
                  <div 
                    className="col-span-1 row-span-2 bg-white border-2 border-black rounded-lg cursor-pointer hover:bg-[#40E0D0] transition-all hover:scale-105 flex items-center justify-center group"
                    onClick={() => setSelectedView("field-map-zone-b")}
                  >
                    <span className="text-xs font-bold text-black">Zone B</span>
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
                <div className="absolute bottom-2 left-2 right-2 bg-black/80 text-white text-[10px] px-2 py-1 rounded">
                  Click on fields to view details
                </div>
              </div>
            </div>
            <div className="bg-black text-white rounded-2xl border-2 border-black p-4">
              <div className="text-xs font-bold mb-2 uppercase">Field Status Summary</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Total Fields:</span>
                  <span className="font-bold">2</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Monitoring:</span>
                  <span className="font-bold">2</span>
                </div>
                <div className="flex justify-between">
                  <span>Alerts:</span>
                  <span className="font-bold text-[#40E0D0]">1 Critical</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      {selectedView && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeView}
        >
          <div 
            className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 max-w-md w-full relative"
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
                  <div className="bg-[#40E0D0] rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Location</div>
                    <div className="text-sm font-bold text-black">Coordinates: 12.345°N, 45.678°E</div>
                  </div>
                  <div className="bg-[#00A651] rounded-2xl p-4 border-2 border-black text-white">
                    <div className="text-xs font-bold mb-2 uppercase">Crop Type</div>
                    <div className="text-sm font-bold">Maize (Zea mays)</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border-2 border-black">
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
                  <div className="bg-black text-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold mb-2 uppercase">Batch ID</div>
                    <div className="text-sm font-bold">B-04</div>
                  </div>
                  <div className="bg-[#40E0D0] rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Time Window</div>
                    <div className="text-sm font-bold text-black">48 hours remaining</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Priority</div>
                    <div className="text-sm font-bold text-black">High - Critical drought risk detected</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "deploy" && !deploymentConfirmed && (
              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Deploy Hydrogel</h3>
                <div className="space-y-3">
                  <div className="bg-[#00A651] text-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold mb-2 uppercase">Batch Selected</div>
                    <div className="text-sm font-bold">B-04 (Cashew Gum Hydrogel)</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Quantity</div>
                    <div className="text-sm font-bold text-black">50kg per hectare</div>
                  </div>
                  <div className="bg-[#40E0D0] rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Total Area</div>
                    <div className="text-sm font-bold text-black">2.5 hectares</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Total Quantity</div>
                    <div className="text-sm font-bold text-black">125kg required</div>
                  </div>
                  <button 
                    onClick={handleConfirmDeployment}
                    className="w-full bg-[#40E0D0] text-black text-sm font-bold py-3 px-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    Confirm Deployment
                  </button>
                </div>
              </div>
            )}

            {selectedView === "deploy" && deploymentConfirmed && (
              <div>
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-[#00A651] mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-black mb-4 uppercase">Deployment Confirmed!</h3>
                  <div className="space-y-3">
                    <div className="bg-[#00A651] text-white rounded-2xl p-4 border-2 border-black">
                      <div className="text-xs font-bold mb-2 uppercase">Deployment ID</div>
                      <div className="text-lg font-bold">DEP-2025-0428</div>
                    </div>
                    <div className="bg-[#40E0D0] rounded-2xl p-4 border-2 border-black">
                      <div className="text-xs font-bold text-black mb-2 uppercase">Status</div>
                      <div className="text-sm font-bold text-black">Scheduled for deployment within 2 hours</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border-2 border-black">
                      <div className="text-xs font-bold text-black mb-2 uppercase">Estimated Completion</div>
                      <div className="text-sm font-bold text-black">48 hours from deployment start</div>
                    </div>
                    <div className="bg-black text-white rounded-2xl p-4 border-2 border-black">
                      <div className="text-xs font-bold mb-2 uppercase">Next Steps</div>
                      <div className="text-sm font-bold">Drone fleet will be dispatched automatically. Monitor progress in dashboard.</div>
                    </div>
                    <button 
                      onClick={closeView}
                      className="w-full bg-[#40E0D0] text-black text-sm font-bold py-3 px-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "details" && (
              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Field Analytics</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#40E0D0] rounded-xl p-3 border-2 border-black text-center">
                      <div className="text-lg font-black text-black">12%</div>
                      <div className="text-[10px] font-bold text-black uppercase">Moisture</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 border-2 border-black text-center">
                      <div className="text-lg font-black text-black">28°C</div>
                      <div className="text-[10px] font-bold text-black uppercase">Temperature</div>
                    </div>
                  </div>
                  <div className="bg-black text-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold mb-2 uppercase">AI Prediction</div>
                    <div className="text-sm font-bold">Optimal deployment window: Next 24-48 hours</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "view-overview" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-[#40E0D0] rounded-full"></div>
                  <h3 className="text-xl font-black text-black uppercase">Overview Mode</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#40E0D0] rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Current View</div>
                    <div className="text-sm font-bold text-black">Default dashboard with real-time monitoring</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Features</div>
                    <div className="text-sm font-bold text-black">• Field status • Soil moisture charts • Alerts • Quick actions</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "view-analytics" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-6 h-6 text-[#00A651]" />
                  <h3 className="text-xl font-black text-black uppercase">Analytics View</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#00A651] text-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold mb-2 uppercase">View Mode</div>
                    <div className="text-sm font-bold">Detailed analytics and performance metrics</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Features</div>
                    <div className="text-sm font-bold text-black">• Performance metrics • AI predictions • Historical data • Trend analysis</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "view-fields" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Map className="w-6 h-6 text-[#40E0D0]" />
                  <h3 className="text-xl font-black text-black uppercase">Field Monitoring View</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#40E0D0] rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">View Mode</div>
                    <div className="text-sm font-bold text-black">Multi-field monitoring and management</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Features</div>
                    <div className="text-sm font-bold text-black">• Field list • Field map • Status summary • Multi-field operations</div>
                  </div>
                </div>
              </div>
            )}

            {selectedView === "field-map-zone-a" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Map className="w-6 h-6 text-[#00A651]" />
                  <h3 className="text-xl font-black text-black uppercase">Field Zone A - Map View</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#00A651] text-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold mb-2 uppercase">Location</div>
                    <div className="text-sm font-bold">Coordinates: 12.345°N, 45.678°E</div>
                  </div>
                  <div className="bg-[#40E0D0] rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Field Details</div>
                    <div className="text-sm font-bold text-black">Area: 2.5 hectares</div>
                    <div className="text-sm font-bold text-black mt-1">Crop: Maize (Zea mays)</div>
                    <div className="text-sm font-bold text-black mt-1">Status: Active Monitoring</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border-2 border-black">
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
                    className="w-full bg-[#00A651] text-white text-sm font-bold py-3 px-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
                  >
                    View Full Details
                  </button>
                </div>
              </div>
            )}

            {selectedView === "field-map-zone-b" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Map className="w-6 h-6 text-[#40E0D0]" />
                  <h3 className="text-xl font-black text-black uppercase">Field Zone B - Map View</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Location</div>
                    <div className="text-sm font-bold text-black">Coordinates: 12.350°N, 45.680°E</div>
                  </div>
                  <div className="bg-[#40E0D0] rounded-2xl p-4 border-2 border-black">
                    <div className="text-xs font-bold text-black mb-2 uppercase">Field Details</div>
                    <div className="text-sm font-bold text-black">Area: 1.8 hectares</div>
                    <div className="text-sm font-bold text-black mt-1">Crop: Wheat (Triticum)</div>
                    <div className="text-sm font-bold text-black mt-1">Status: Monitoring</div>
                  </div>
                  <div className="bg-black text-white rounded-2xl p-4 border-2 border-black">
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
        <div className="absolute inset-0 bg-white/95 rounded-3xl border-4 border-black p-4 flex items-center justify-center z-10">
          <button
            onClick={() => setSelectedStat(null)}
            className="absolute top-2 right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          {selectedStat === "moisture" && (
            <div className="text-center">
              <Droplets className="w-12 h-12 text-[#00A651] mx-auto mb-3" />
              <div className="text-3xl font-black text-black mb-2">12%</div>
              <div className="text-sm font-bold text-black uppercase mb-2">Current Soil Moisture</div>
              <div className="text-xs text-black">Below optimal threshold (25%)</div>
            </div>
          )}

          {selectedStat === "window" && (
            <div className="text-center">
              <Clock className="w-12 h-12 text-[#40E0D0] mx-auto mb-3" />
              <div className="text-3xl font-black text-black mb-2">48h</div>
              <div className="text-sm font-bold text-black uppercase mb-2">Deployment Window</div>
              <div className="text-xs text-black">Time remaining before critical threshold</div>
            </div>
          )}

          {selectedStat === "ai" && (
            <div className="text-center">
              <BrainCircuit className="w-12 h-12 text-[#00A651] mx-auto mb-3" />
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

