import React from 'react';

export default function About() {
  return (
    <section className="my-6 sm:my-10 px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">What I&apos;m Doing Now</h1>
          <div className="flex flex-wrap items-center gap-2 my-4 font-semibold">
            <p className="text-muted-foreground italic">Last updated:</p>
            <p className="text-chart-2">August 7th, 2026</p>
          </div>
          <header className="space-y-4">
            <p className="text-base md:text-lg leading-7 sm:text-base">
              Right now, I&apos;m practicing being more visible. I&apos;m building projects, writing
              more often, applying for roles, and learning to share my work before it feels perfect.
            </p>
          </header>

          <div className="mt-10">
            <h2 className="mb-4 text-xl font-bold sm:text-2xl">Current Focus</h2>

            <ul className="space-y-2 pl-4 leading-7 marker:text-foreground text-base md:text-lg list-disc">
              <li className="">
                I&apos;m writing more lately - technical posts and personal essays both. Also been
                polishing this portfolio on the side, including a tag filter I just shipped on the
                blog page.
              </li>
              <li>
                Building <span className="font-medium">Work Notes</span> - a note-taking tool that
                also helps fill in the timesheet entries, with some early exploration into using AI
                to make that easier.
              </li>

              <li>
                Doing the{' '}
                <a
                  href="https://100daystooffload.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  100 Days to Offload
                </a>{' '}
                challenge - I overthink posts before publishing, so this is forcing me to just
                write.
              </li>

              <li>
                Trying to keep a simple daily rhythm: deep work, job hunting, exercise, repeat.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
