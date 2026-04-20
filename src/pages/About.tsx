import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FadeIn, Eyebrow, Button } from '../components/Layout';
import { Phone, Shield, Building2 } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = "About SolarReclaim | Who We Are and Why We Built This";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "SolarReclaim is a commission-only solar lead reactivation agency built around one gap the industry ignores.");
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
            alt="Office building" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <FadeIn>
            <Eyebrow className="bg-white/10 border-white/20 text-white">
              ABOUT
            </Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Built to Recover Revenue That Agencies Leave Behind.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              Every other solar agency targets fresh leads. We built SolarReclaim for the leads everyone else ignores.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-24 px-6 bg-light-bg">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Eyebrow>WHY WE EXIST</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900 mb-8">The Gap Nobody Was Filling.</h2>
            <div className="space-y-6 text-dark-600 text-lg leading-relaxed">
              <p>
                Every solar lead generation agency targets fresh leads. Google ads, Facebook campaigns, exclusive lead packages — all competing for the same new homeowners.
              </p>
              <p>
                Meanwhile, installers have accumulated years of leads who expressed genuine interest, got quoted, then went cold. Those leads cost $150–$400 each to generate. Most were followed up on once or twice. Then written off.
              </p>
              <p>
                70–80% of those homeowners didn't say "never." They said "not right now." Their electricity bills kept rising. Financing got better. Life moved on. And nobody called them back with the right message.
              </p>
              <p className="text-xs text-gray-500 italic mt-1">Industry benchmark estimate — unvalidated per client.</p>
              <p className="font-bold text-dark-900 text-xl pt-4">
                SolarReclaim calls them back. Systematically. At scale. With zero upfront risk to the installer.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How We Operate Section */}
      <section className="py-24 px-6 bg-dark-bg text-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>HOW WE RUN</Eyebrow>
            <h2 className="font-display text-4xl font-bold">Lean. Remote. Specialized.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1} className="bg-dark-900 p-8 rounded-2xl border border-dark-700">
              <div className="w-12 h-12 bg-solar-500/20 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-solar-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Not a Call Center</h3>
              <p className="text-white/70 leading-relaxed">
                Every dial is made by a dedicated, US-based specialist under direct supervision — not a call center rep reading from a generic script. Not a bot.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-dark-900 p-8 rounded-2xl border border-dark-700">
              <div className="w-12 h-12 bg-solar-500/20 rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-solar-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Manual Dialing Only</h3>
              <p className="text-white/70 leading-relaxed">
                No auto-dialers. No ATDS. Every call is manual — TCPA compliant from the first touch.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-dark-900 p-8 rounded-2xl border border-dark-700">
              <div className="w-12 h-12 bg-solar-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-solar-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Your Brand, Our Operations</h3>
              <p className="text-white/70 leading-relaxed">
                We operate as an agent of your business. Your company name shows on caller ID. We represent your brand professionally on every call.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-32 h-fit">
            <FadeIn>
              <Eyebrow>HOW WE THINK</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-6">Three Principles. No Exceptions.</h2>
            </FadeIn>
          </div>

          <div className="relative border-l-2 border-neutral-200 pl-8 space-y-16">
            {[
              { title: "Performance or Nothing", desc: "We don't charge retainers. Commission on results only. If we don't perform, you pay nothing." },
              { title: "Compliance Is Non-Negotiable", desc: "One TCPA violation costs $500–$1,500 per call. Manual dialing, DNC scrubbing, consent verification — built into every batch." },
              { title: "Transparency Over Everything", desc: "Weekly reports. Full call logs. Contact rates, show rates, conversion rates — all visible. Always." }
            ].map((chapter, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-neutral-200" />
                <div className="absolute -top-6 right-0 text-8xl font-display font-bold text-neutral-100 select-none -z-10">
                  0{i + 1}
                </div>
                <div className="text-solar-500 text-sm font-bold uppercase tracking-wider mb-2">Chapter {i + 1}</div>
                <h3 className="text-2xl font-bold text-dark-900 mb-3">{chapter.title}</h3>
                <p className="text-dark-600 leading-relaxed">{chapter.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 bg-light-bg border-t border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <Eyebrow>WHO'S BEHIND SOLARRECLAIM</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900">Built by an Insider.</h2>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2} className="space-y-6 text-lg text-dark-600 leading-relaxed text-center">
              <p>
                <strong>SolarReclaim was built by Pranjay</strong>, a founder who saw a massive inefficiency in the solar industry: every lead gen agency was chasing fresh leads, while installers were sitting on hundreds of aged leads they'd already paid for.
              </p>
              <p>
                "I kept seeing installers burn thousands of dollars on new ad campaigns while ignoring the goldmine sitting right in their CRM. When I asked why, the answer was always the same: <em>'We don't have the time or the right system to call them back.'</em>"
              </p>
              <p>
                SolarReclaim exists to recover that revenue. We operate on a commission-only basis because we know the system works. Zero upfront risk to the installer. We only win when you get an install.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-dark-900 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to Work Together?</h2>
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
