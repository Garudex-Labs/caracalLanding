import React from 'react';

const FeaturesGrid = () => {
  const features = [
    {
      title: "Deterministic Enforcement",
      description: "Verify authority at execution time. Automatically block unauthorized, expired, or out-of-scope actions before they occur.",
      imageUrl: "/revoke.jpg",
      alt: "Deterministic Enforcement illustration"
    },
    {
      title: "Intent-Constrained Authority",
      description: "Narrow authority scope using execution context. Default to minimum required trust when intent is missing or ambiguous.",
      imageUrl: "/federated.jpg",
      alt: "Intent-Constrained Authority illustration"
    },
    {
      title: "Immutable Authority Ledger",
      description: "The system of record for mandates. Cryptographically verifiable proof of delegation and execution for precise accountability.",
      imageUrl: "/native.jpg",
      alt: "Immutable Authority Ledger illustration"
    },
    {
      title: "Stable Integration",
      description: "Integrate through clear boundaries. System-handled mandates ensure your application logic stays clean and focused.",
      imageUrl: "/sdk.jpg",
      alt: "Stable Integration illustration"
    },
    {
      title: "Full System Coverage",
      description: "Complete authority coverage across identity, runtime enforcement, and policy evaluation for both single and multi-agent systems.",
      imageUrl: "/policy.jpg",
      alt: "Full System Coverage illustration"
    },
    {
      title: "Execution Authority Layer",
      description: "Scale automation without scaling uncontrolled risk. Ensure every action is authorized, time-bounded, and provable.",
      imageUrl: "/ecosystem.jpg",
      alt: "Execution Authority Layer illustration"
    }
  ];

  return (
    <section className="bg-black border-t border-[#333333] pt-24 pb-32">
      <div className="container mx-auto px-5 sm:px-12 desktop:px-20 max-w-[1408px]">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge-orange">FEATURES</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl desktop:text-[40px] font-mono font-bold uppercase mb-6 leading-tight">
            BUILT FOR ENTERPRISE CONTROL
          </h2>
          <p className="text-[#999999] text-base desktop:text-lg max-w-[720px] font-sans">
            Built for CIOs, FinOps, and compliance leaders to control money, risk, and accountability in automated systems.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-[#333333]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-8 sm:p-10 border-r border-b border-[#333333] transition-colors duration-300 hover:bg-[#111111]"
            >
              <div className="mb-8 h-full flex flex-col">
                <h3 className="text-white text-xl font-mono font-bold uppercase mb-4 h-auto min-h-[1.5rem]">
                  {feature.title}
                </h3>
                <p className="text-[#999999] text-sm leading-relaxed mb-10 opacity-90">
                  {feature.description}
                </p>

                <div className="mt-auto relative w-full aspect-[4/3] flex items-center justify-center">
                  <img
                    src={feature.imageUrl}
                    alt={feature.alt}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;