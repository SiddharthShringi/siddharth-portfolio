interface NowSectionProps {
  title: string;
  children: React.ReactNode;
}

function NowSection({ title, children }: NowSectionProps) {
  return (
    <section className="rounded-xl border-l-2 border-accent-foreground/20 p-4 dark:border-accent sm:p-5">
      <h2 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 text-base leading-7 sm:text-lg sm:leading-8">
        {children}
      </ul>
    </section>
  );
}

export default function Now() {
  return (
    <section className="my-6 px-4 sm:my-10 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {/* Header */}
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            What I&apos;m Doing Now
          </h1>

          <div className="my-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold sm:my-4 sm:text-base">
            <p className="italic text-muted-foreground">Last updated:</p>
            <p className="text-chart-2">September 9th, 2026</p>
          </div>

          <header>
            <p className="text-base leading-7 sm:text-lg sm:leading-8">
              Right now, I&apos;m focused on writing, reading, building WorkNotes, staying active,
              and finding my next role. I&apos;m trying to keep things simple: learn, write, build,
              and share the work.
            </p>
          </header>

          {/* Sections */}
          <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            <NowSection title="Writing">
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
                challenge; wrote 8 blogs last month.
              </li>
              <li>Write at least 2 technical articles this month.</li>
              <li>Continue journaling through free writing.</li>
            </NowSection>

            <NowSection title="Learning">
              <li>
                Currently reading <em>The Well-Grounded Rubyist</em>, <em>Ruby Deep Dive</em>.
              </li>
              <li>Taking a SQL course to sharpen my database fundamentals.</li>
              <li>Working through system design concepts and case studies.</li>
            </NowSection>

            <NowSection title="WorkNotes">
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
            </NowSection>
          </div>
        </div>
      </div>
    </section>
  );
}
