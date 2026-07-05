"use client";
import { useState } from "react";
import {
  Shield,
  Server,
  Cloud,
  Database,
  Cpu,
  Monitor,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050b14] text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8">

        {/* LEFT */}

        <div className="max-w-2xl">

          <p className="mb-6 text-lg font-bold uppercase tracking-[0.45em] text-sky-400">
            ALWAYS LINK SOLUTIONS
          </p>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight">
            Technology becomes
            <br />
            valuable when
            <br />
            everything is linked.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
            We link infrastructure, cloud, automation,
            industrial systems, AI, and business applications
            into reliable systems that quietly work.
          </p>

          <div className="mt-10 flex gap-5">

            <a
              href="#contact"
              className="rounded-full bg-sky-500 px-8 py-4 font-semibold transition hover:bg-sky-400"
            >
              Let's Link
            </a>

            <a
              href="#what-we-deliver"
              className="rounded-full border border-slate-600 px-8 py-4 font-semibold hover:border-sky-400"
            >
              What We Deliver
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative h-[620px] w-[620px] rounded-[36px] border border-slate-800 bg-[#050918] overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,.16),transparent_70%)]" />

          <div className="absolute inset-0 tech-grid" />
          {/* LINES */}
          <LinkLine
  direction="vertical"
  className="flow-top left-1/2 top-[120px] h-[160px] w-[3px] -translate-x-1/2"
/>
          

          <LinkLine
  className="flow-left left-[160px] top-[300px] h-[3px] w-[220px]"
/>
          <LinkLine className="left-[380px] top-[300px] h-[3px] w-[180px]" />
          <LinkLine className="left-[150px] top-[470px] h-[3px] w-[400px]" />

          {/* NODES */}
          <Node icon="firewall" label="FIREWALL" className="left-1/2 top-[30px] -translate-x-1/2" />
          <Node icon="server" label="SERVER" className="left-[55px] top-[240px]" />
          <Node icon="cloud" label="CLOUD" className="right-[55px] top-[240px]" />
          <Node icon="infrastructure" label="INFRASTRUCTURE" primary className="left-1/2 top-[230px] -translate-x-1/2" />
          <Node icon="plc" label="PLC" className="left-[70px] top-[400px]" />
          <Node icon="dashboard" label="DASHBOARD" className="right-[70px] top-[400px]" />

        </div>
      </section>
      <WhatWeDeliver/>
    </main>
  );
}
function Node({
  icon,
  label,
  className,
  primary = false,
}: {
  icon: "firewall" | "server" | "cloud" | "infrastructure" | "plc" | "dashboard";
  label: string;
  className?: string;
  primary?: boolean;
}) {
  const icons = {
    firewall: Shield,
    server: Server,
    cloud: Cloud,
    infrastructure: Server,
    plc: Cpu,
    dashboard: Monitor,
  };

  const Icon = icons[icon];

  return (
    <div className={`absolute z-10 flex flex-col items-center gap-4 ${className}`}>
      <div
        className={`flex items-center justify-center rounded-full border bg-[#050918] shadow-[0_0_45px_rgba(56,189,248,.55)] ${
          primary
            ? "h-32 w-32 border-sky-400"
            : "h-28 w-28 border-sky-300/70"
        }`}
      >
        <Icon size={primary ? 54 : 48} className="text-sky-200" />
      </div>

      <span
  className="text-sm font-bold uppercase tracking-wider text-white">
        {label}
      </span>
    </div>
  );
}
function LinkLine({
  className,
  direction = "horizontal",
}: {
  className?: string;
  direction?: "horizontal" | "vertical";
}) {
  return (
    <div
      className={`absolute overflow-hidden bg-sky-400/60 shadow-[0_0_16px_rgba(56,189,248,.9)] ${className} ${
        direction === "vertical"
          ? "flow-vertical"
          : "flow-horizontal"
      }`}
    />
  );
}

const solutions = [
  {
    title: "Enterprise Server Solutions",
    description:
      "Deployment, migration, maintenance and optimization for business-critical servers.",
    items: ["Windows Server", "Linux Server", "Hyper-V", "VMware"],
  },
  {
    title: "IT Infrastructure",
    description:
      "Reliable enterprise infrastructure that keeps your business connected.",
    items: ["Switching", "Routing", "Storage", "Backup", "Virtualization"],
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud environments for modern businesses.",
    items: ["Microsoft Azure", "AWS", "Hybrid Cloud", "Cloud Migration"],
  },
  {
    title: "Network Security",
    description:
      "Protect your business with enterprise-grade security solutions.",
    items: ["Firewall Deployment", "Site-to-Site VPN", "Remote Access VPN"],
  },
  {
    title: "Industrial Automation",
    description: "PLC programming and industrial control systems.",
    items: ["Basic I/O Control", "Servo & VFD Control", "Temperature Control"],
  },
  {
    title: "IoT & SCADA Monitoring",
    description:
      "Real-time monitoring and visualization for industrial operations.",
    items: ["IoT Monitoring", "SCADA Integration", "Production Dashboard"],
  },
];
function WhatWeDeliver() {
  const [active, setActive] = useState(0);
const current = solutions[active];

  return (
    <section id="what-we-deliver" className="mx-auto max-w-7xl px-8 py-28">
      <div className="mb-16 text-center">
        <p className="text-lg font-bold uppercase tracking-[0.45em] text-sky-400">
          WHAT WE DELIVER
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Solutions Built for Business
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-300">
          From enterprise infrastructure to industrial automation, we build
          reliable systems that keep your business running.
        </p>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[420px_1fr]">
        <div className="space-y-2">
          {solutions.map((solution, index) => (
  <div
    key={solution.title}
    onMouseEnter={() => setActive(index)}
    onClick={() => setActive(index)}
    className={`flex cursor-pointer items-center justify-between border-b border-slate-800 py-5 transition ${
  active === index ? "text-sky-300" : "text-slate-300 hover:text-white"
}`}
  >
    <span className="text-xl font-semibold">{solution.title}</span>
    <span
  className={`transition ${
    active === index
      ? "text-sky-300 translate-x-1"
      : "text-slate-500"
  }`}
>
  →
</span>
  </div>
  ))}
         
  
        </div>

        <div className="rounded-[32px] border border-slate-800 bg-[#09121f] p-10">
          <h3 className="text-3xl font-bold text-white">{current.title}</h3>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            {current.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {current.items.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-sky-500/30 bg-sky-500/10 px-5 py-4 text-sky-200"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}