import React from 'react';

export default function Now() {
  return (
    <section className="my-6 sm:my-10 px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">What I&apos;m Doing Now</h1>

          <div className="flex flex-wrap items-center gap-2 my-4 font-semibold">
            <p className="text-muted-foreground italic">Last updated:</p>
            <p className="text-chart-2">September 9th, 2026</p>
          </div>

          <header className="space-y-4">
            <p className="text-base md:text-lg leading-7 sm:text-base">
              Right now, I&apos;m focused on writing, reading, building WorkNotes, and finding my
              next role. I&apos;m trying to keep things simple: learn, write, build, and share the
              work.
            </p>
          </header>

          <div className="mt-10">
            <h2 className="mb-4 text-xl font-bold sm:text-2xl">Writing</h2>

            <ul className="space-y-2 pl-4 leading-7 text-base md:text-lg list-disc marker:text-foreground">
              <li>
                Continuing my{' '}
                <a
                  href="https://100daystooffload.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  100 Days to Offload
                </a>{' '}
                challenge — wrote 8 blogs last month.
              </li>
              <li>Write at least 2 technical articles this month.</li>
              <li>Continue journaling through free writing.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-xl font-bold sm:text-2xl">Reading</h2>

            <ul className="space-y-2 pl-4 leading-7 text-base md:text-lg list-disc marker:text-foreground">
              <li>
                Currently reading <em>The Well-Grounded Rubyist</em>, <em>Ruby Deep Dive</em>, and{' '}
                <em>The Bed of Procrustes</em>.
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-xl font-bold sm:text-2xl">WorkNotes App</h2>

            <ul className="space-y-2 pl-4 leading-7 text-base md:text-lg list-disc marker:text-foreground">
              <li>
                <span className="font-medium">WorkNotes</span> is a productivity tool for tracking
                work sessions and keeping notes for each session.
              </li>
              <li>
                This month, I&apos;m working on a <span className="font-medium">Reports</span>{' '}
                feature for daily and weekly summaries.
              </li>
              <li>
                Experimenting with AI to generate a daily timesheet from work-session notes and
                associate entries with projects.
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-xl font-bold sm:text-2xl">Job Hunting</h2>

            <ul className="space-y-2 pl-4 leading-7 text-base md:text-lg list-disc marker:text-foreground">
              <li>Learning how to write effective cold emails.</li>
              <li>Refining my job application strategy.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
