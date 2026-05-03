import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupSense – Track Team Mood from Daily Standups",
  description: "Analyze daily standup transcripts for team sentiment, burnout signals, and collaboration issues. Built for engineering managers and scrum masters."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="22f2fd21-09b8-4bd8-9cc5-aa835896dbae"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
