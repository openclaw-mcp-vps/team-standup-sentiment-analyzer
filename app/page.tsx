export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers &amp; Scrum Masters
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Team Mood from{" "}
          <span className="text-[#58a6ff]">Daily Standups</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste or upload your standup transcripts. Get instant sentiment scores, burnout alerts, and collaboration health — before small issues become big problems.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="text-white font-semibold mb-1">Mood Dashboard</h3>
            <p className="text-sm text-[#8b949e]">Visual sentiment trends across your team over days and sprints.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔥</div>
            <h3 className="text-white font-semibold mb-1">Burnout Alerts</h3>
            <p className="text-sm text-[#8b949e]">Automatic flags when language patterns signal stress or disengagement.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤝</div>
            <h3 className="text-white font-semibold mb-1">Collaboration Health</h3>
            <p className="text-sm text-[#8b949e]">Detect silos and blockers from how your team talks about their work.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Team Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per workspace</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited standup submissions</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time sentiment dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Burnout &amp; stress alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Up to 20 team members</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 7-day free trial</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the sentiment analysis work?</h3>
            <p className="text-sm text-[#8b949e]">You paste or upload your standup text. Our API processes the language patterns and returns mood scores, flagged phrases, and trend data — all within seconds.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Is our standup data private and secure?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Each team gets an isolated workspace. Data is encrypted in transit and at rest, and is never used to train models or shared with third parties.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Cancel from your billing portal with one click. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} StandupSense. All rights reserved.
      </footer>
    </main>
  );
}
