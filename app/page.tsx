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

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
            ALWAYS LINK SOLUTIONS
          </p>

          <h1 className="text-7xl font-bold leading-[1.05] tracking-tight">
            Technology becomes
            <br />
            valuable when
            <br />
            everything is linked.
          </h1>

          <p className="mt-10 max-w-xl text-xl leading-9 text-slate-300">
            We link infrastructure, cloud, automation,
            industrial systems, AI, and business applications
            into reliable systems that quietly work.
          </p>

          <div className="mt-10 flex gap-5">

            <a
              href="#"
              className="rounded-full bg-sky-500 px-8 py-4 font-semibold transition hover:bg-sky-400"
            >
              Let's Link
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-600 px-8 py-4 font-semibold hover:border-sky-400"
            >
              What We Link
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative h-[760px] w-[760px] rounded-[36px] border border-slate-800 bg-[#050918] overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,.16),transparent_70%)]" />

          <div className="absolute inset-0 tech-grid" />
          {/* LINES */}
          <LinkLine
  direction="vertical"
  className="flow-top left-1/2 top-[170px] h-[140px] w-[3px] -translate-x-1/2"
/>
          

          <LinkLine
  className="flow-left left-[160px] top-[350px] h-[3px] w-[220px]"
/>
          <LinkLine className="left-[380px] top-[350px] h-[3px] w-[180px]" />
          <LinkLine className="left-[150px] top-[600px] h-[3px] w-[400px]" />

          {/* NODES */}
          <Node icon="firewall" label="FIREWALL" className="left-1/2 top-[75px] -translate-x-1/2" />
          <Node icon="server" label="SERVER" className="left-[55px] top-[290px]" />
          <Node icon="cloud" label="CLOUD" className="right-[55px] top-[280px]" />
          <Node icon="infrastructure" label="INFRASTRUCTURE" primary className="left-1/2 top-[280px] -translate-x-1/2" />
          <Node icon="plc" label="PLC" className="left-[70px] top-[530px]" />
          <Node icon="dashboard" label="DASHBOARD" className="right-[70px] top-[530px]" />

        </div>
      </section>
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
