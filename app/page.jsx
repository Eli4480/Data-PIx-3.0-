"use client";

import { motion } from "framer-motion";
import { Database, ShieldCheck, Globe, CheckCircle } from "lucide-react";

function Card({ children }: any) {
  return <div className="bg-white rounded-2xl shadow-sm">{children}</div>;
}

function CardContent({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}

function Button({ children }: any) {
  return (
    <button className="bg-yellow-400 text-black font-semibold rounded-2xl px-8 py-6 hover:opacity-90 transition">
      {children}
    </button>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      <section className="bg-gradient-to-br from-teal-700 to-cyan-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold mb-6">
              Nationwide Property Data Intelligence
            </h1>
            <p className="mb-8">
              Verified property and homeowner data delivered nationwide.
            </p>
            <Button>Get Free Sample Data</Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
