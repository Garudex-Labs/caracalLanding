"use client";

import React from 'react';
import Image from 'next/image';

const CapabilitiesFlow = () => {
  return (
    <section className="bg-[#0a0a0a] pt-24 pb-32 px-5 sm:px-12 desktop:px-20 text-white selection:bg-[#cdff3e] selection:text-[#0a0a0a]">
      <div className="max-w-[1408px] mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="badge-orange mb-6">How It Works</div>
          <h2 className="font-mono text-[32px] md:text-[40px] leading-[1.1] max-w-3xl mb-6">
            THREE CORE PRIMITIVES FOR<br />
            EXECUTION AUTHORITY ENFORCEMENT
          </h2>
          <p className="text-[#999999] text-base md:text-lg max-w-2xl font-sans">
            Caracal replaces implicit trust with explicit authority by issuing execution mandates.
          </p>
        </div>

        {/* Triple Feature Flow */}
        <div className="flex flex-col gap-8 md:gap-12">

          {/* 1. Build */}
          <div className="relative border border-[#333333] rounded-[2px] bg-black overflow-hidden p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-5/12 z-10">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-lg md:text-xl font-bold leading-none py-1">1</span>
                  <div className="flex flex-col gap-6">
                    <h3 className="font-mono text-lg md:text-xl leading-tight">
                      MACHINE-ENFORCEABLE POLICY
                    </h3>
                    <p className="text-[#999999] text-sm md:text-sm leading-relaxed max-w-md">
                      Structured rules defining when and how authority is issued and validated relative to specific environments and resources.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-7/12 relative flex justify-center items-center">
                <div className="relative w-full aspect-[4/3] max-w-[420px]">
                  {/* Mockup for Code Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/auditable.jpg"
                      alt="Build agentic applications illustration"
                      width={420}
                      height={315}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Connect */}
          <div className="relative border border-[#333333] rounded-[2px] bg-black overflow-hidden p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-5/12 z-10">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-lg md:text-xl font-bold leading-none py-1">2</span>
                  <div className="flex flex-col gap-6">
                    <h3 className="font-mono text-lg md:text-xl leading-tight">
                      EXPLICIT DELEGATION
                    </h3>
                    <p className="text-[#999999] text-sm md:text-sm leading-relaxed max-w-md">
                      Bounded grants with defined scope, duration, and end-to-end chain preservation to prove exactly who authorized an action.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-7/12 relative flex justify-center items-center">
                <div className="relative w-full aspect-[4/3] max-w-[420px]">
                  <img
                    src="/budget.jpg"
                    alt="Connect agents illustration"
                    width={420}
                    height={315}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Empower */}
          <div className="relative border border-[#333333] rounded-[2px] bg-black overflow-hidden p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-5/12 z-10">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-lg md:text-xl font-bold leading-none py-1">3</span>
                  <div className="flex flex-col gap-6">
                    <h3 className="font-mono text-lg md:text-xl leading-tight">
                      MULTI-AGENT AUTHORITY
                    </h3>
                    <p className="text-[#999999] text-sm md:text-sm leading-relaxed max-w-md">
                      Enforced constraints across agent interactions to prevent privilege expansion and ensure authority is preserved during handoffs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-7/12 relative flex justify-center items-center">
                <div className="relative w-full aspect-[4/3] max-w-[420px]">
                  <img
                    src="/inter_agent.jpg"
                    alt="Empower teams illustration"
                    width={420}
                    height={315}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .badge-orange {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          color: #ff4f03;
          border: 1px solid #ff4f03;
          padding: 2px 6px;
          display: inline-block;
          letter-spacing: 0.05em;
        }
      `}</style>
    </section>
  );
};

export default CapabilitiesFlow;