import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FadeIn, Eyebrow, Button } from '../components/Layout';

export default function HowItWorks() {
  useEffect(() => {
    document.title = "How SolarReclaim Works | 10-Touch Lead Reactivation";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "See exactly how SolarReclaim reactivates aged solar leads through a structured 10-touch calling, SMS, and email cadence.");
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?q=80&w=2560&auto=format&fit=crop" 
            alt="Solar infrastructure" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <FadeIn>
            <Eyebrow className="bg-white/10 border-white/20 text-white">
              THE PROCESS
            </Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              A System Built to Reopen Conversations That Went Cold.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              Every touch is intentional. Every follow-up is timed. Every response is logged.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Phase 1 */}
      <section className="py-24 px-6 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>PHASE 1</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900">Onboarding. (Days 1–5)</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-bold text-dark-900 mb-6">What we do:</h3>
              <ul className="space-y-4 text-dark-600">
                <li className="flex gap-3"><span className="text-solar-500 font-bold">•</span> Sign your NDA and agent designation agreement</li>
                <li className="flex gap-3"><span className="text-solar-500 font-bold">•</span> Pull aged leads from your CRM (30–365 days old)</li>
                <li className="flex gap-3"><span className="text-solar-500 font-bold">•</span> Segment leads by age tier: 30–90 / 90–180 / 180–365 days</li>
                <li className="flex gap-3"><span className="text-solar-500 font-bold">•</span> DNC-scrub the entire batch</li>
                <li className="flex gap-3"><span className="text-solar-500 font-bold">•</span> Verify EBR (Existing Business Relationship) coverage per lead</li>
                <li className="flex gap-3"><span className="text-solar-500 font-bold">•</span> Configure CNAM so your company name appears on caller ID</li>
                <li className="flex gap-3"><span className="text-solar-500 font-bold">•</span> Set up weekly reporting cadence</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-dark-900 p-8 rounded-2xl border border-dark-700 text-white">
              <h3 className="text-xl font-bold mb-6">What you do:</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex gap-3"><span className="text-solar-500 font-bold">•</span> Provide CRM access or CSV export</li>
                <li className="flex gap-3"><span className="text-solar-500 font-bold">•</span> Sign the commission agreement</li>
                <li className="flex gap-3"><span className="text-solar-500 font-bold">•</span> Brief us on your current financing options and closer schedule</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Phase 2 */}
      <section className="py-24 px-6 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>PHASE 2</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900 mb-4">The 10-Touch Cadence. (Days 5–40)</h2>
            <p className="text-dark-600 text-sm">2026 pitch angles that work: TX and FL electricity rates are up 18–31% since 2021, and $0-down financing is available today. Most aged leads were never told either.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { day: "Day 1", touch: "Touch 1", desc: "Warm intro call referencing original inquiry" },
              { day: "Day 2", touch: "Touch 2", desc: "Follow-up call if no answer" },
              { day: "Day 3", touch: "Touch 3", desc: "SMS — short, direct, non-pushy" },
              { day: "Day 5", touch: "Touch 4", desc: "Second call — different time of day" },
              { day: "Day 7", touch: "Touch 5", desc: "Email — electricity cost angle" },
              { day: "Day 10", touch: "Touch 6", desc: "Call — $0-down financing angle" },
              { day: "Day 14", touch: "Touch 7", desc: "SMS — urgency or social proof angle" },
              { day: "Day 21", touch: "Touch 8", desc: "Email — \"still thinking about it?\"" },
              { day: "Day 28", touch: "Touch 9", desc: "Final call attempt" },
              { day: "Day 35", touch: "Touch 10", desc: "Breakup email — 'closing your file' (industry benchmark: drives 15–20% of reactivations).", disclaimer: "Benchmark estimate — unvalidated per client." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="bg-light-bg p-6 rounded-xl border border-neutral-200 relative overflow-hidden">
                <div className="text-solar-500 text-xs font-bold uppercase tracking-wider mb-1">{item.touch}</div>
                <div className="font-display text-xl font-bold text-dark-900 mb-3">{item.day}</div>
                <p className="text-dark-600 text-sm">{item.desc}</p>
                {item.disclaimer && <p className="text-xs text-gray-500 italic mt-2">{item.disclaimer}</p>}
                <div className="absolute -bottom-4 -right-4 text-6xl font-display font-bold text-neutral-200/50 select-none pointer-events-none">
                  {i + 1}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 3 */}
      <section className="py-24 px-6 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>PHASE 3</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900">Appointment Handoff.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-bold text-dark-900 mb-6">What qualifies as a show:</h3>
              <ul className="space-y-4 text-dark-600">
                <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Homeowner confirmed 24 hours before</li>
                <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Homeowner shows at scheduled time</li>
                <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Verified decision-maker for the property</li>
                <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Has not already signed with a competitor</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-bold text-dark-900 mb-6">What you receive at handoff:</h3>
              <ul className="space-y-4 text-dark-600">
                <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Homeowner name, address, confirmed time</li>
                <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Lead age tier and original inquiry date</li>
                <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Objections raised and how they were handled</li>
                <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Full reactivation conversation notes</li>
              </ul>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <p className="text-xs text-gray-500 italic text-center">Estimated contact rate: 22–28% of aged leads reached. Estimated show rate from confirmed appointments: 65–70%. All figures are unvalidated benchmarks — actual results depend on CRM quality and lead age.</p>
          </FadeIn>
        </div>
      </section>

      {/* Phase 4 */}
      <section className="py-24 px-6 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>PHASE 4</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900">Reporting & Commission.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1} className="bg-light-bg p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-bold text-dark-900 mb-4">Weekly report includes —</h3>
              <p className="text-dark-600 leading-relaxed">
                Total dials, contact rate, callbacks, appointments booked, appointments confirmed, no-shows, pipeline value.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-dark-900 p-8 rounded-2xl border border-dark-700 text-white">
              <h3 className="text-xl font-bold mb-4">Payment —</h3>
              <p className="text-white/80 leading-relaxed">
                $75/show invoiced weekly Net 7. Commission invoiced on install confirmation Net 14. ACH, wire, or Wise accepted.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-dark-900 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to Run the System on Your Leads?</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button to="/contact">Book a Free Lead Audit</Button>
            <Button to="/services" variant="ghost">See Our Services</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
