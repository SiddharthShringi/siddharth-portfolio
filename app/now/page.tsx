import * as motion from 'motion/react-client';
import { CircleSmall } from 'lucide-react';

import { StickyNote } from '@/components/now/StickyNote';
import { NoteItem, NoteFooter } from '@/components/now/Note';

const notes = [
  {
    title: 'Writing',
    tapePosition: 25,
    tilt: '-rotate-2',
    tapeTilt: '-rotate-3',
    tapeColor: 'bg-chart-2/70',
    iconColor: 'text-chart-2',
    items: [
      {
        chip: '8 / 100 posts',
        description: 'Continuing my 100 Days to Offload challenge.',
      },
      {
        chip: 'Drafting · SQLite in WebAssembly',
        description: 'Write at least 2 technical articles this month.',
      },
    ],
    footer: {
      left: 'Field Journal',
      right: '4.2k words',
    },
  },
  {
    title: 'Learning',
    tapePosition: 40,
    tilt: 'rotate-1',
    tapeTilt: 'rotate-2',
    tapeColor: 'bg-chart-1/70',
    iconColor: 'text-chart-1',
    items: [
      {
        chip: 'Currently reading',
        description: 'The Well-Grounded Rubyist and Ruby Deep Dive.',
      },
      {
        chip: 'Technical practice',
        description: 'Strengthening my understanding of SQL and backend systems.',
      },
    ],
  },
  {
    title: 'WorkNotes',
    tapePosition: 70,
    tilt: '-rotate-2',
    tapeTilt: '-rotate-2',
    tapeColor: 'bg-chart-4/70',
    iconColor: 'text-chart-4',
    items: [
      {
        chip: 'Current focus',
        description: 'Building the daily report experience.',
      },
      {
        chip: 'Next up',
        description: 'Implementing PDF export with background jobs.',
      },
    ],
  },
];

const notes2 = [
  {
    title: 'WorkNotes-2',
    tapePosition: 70,
    tilt: '-rotate-2',
    tapeTilt: '-rotate-3',
    tapeColor: 'bg-chart-3/70',
    iconColor: 'text-chart-3',
    items: [
      {
        chip: 'Current focus',
        description: 'Building the daily report experience.',
      },
      {
        chip: 'Next up',
        description: 'Implementing PDF export with background jobs.',
      },
    ],
  },
  {
    title: 'DAS Score',
    tapePosition: 70,
    tilt: 'rotate-1',
    tapeTilt: '-rotate-2',
    tapeColor: 'bg-chart-5/70',
    iconColor: 'text-chart-5',
    items: [
      {
        chip: 'Current focus',
        description: 'Building the daily report experience.',
      },
      {
        chip: 'Next up',
        description: 'Implementing PDF export with background jobs.',
      },
    ],
  },
];

export default function NowPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      {/* Page introduction */}
      <header className="max-w-2xl space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            A little life update
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What I&apos;m Doing Now
          </h1>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Last updated</span>
          <time dateTime="2026-09-09" className="font-medium text-chart-2">
            September 9, 2026
          </time>
        </div>

        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          Right now, I&apos;m focused on writing, reading, building WorkNotes, staying active, and
          finding my next role. I&apos;m trying to keep things simple: learn, write, build, and
          share the work.
        </p>
      </header>

      {/* Sticky notes */}
      <section
        aria-label="Things I'm currently working on"
        className="mt-14 grid grid-cols-1 items-stretch gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7"
      >
        {notes.map((note, index) => (
          <motion.div
            key={note.title}
            className="relative h-full"
            initial={{ opacity: 0, y: 12, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.1,
              y: -10,
              zIndex: 10,
            }}
            whileFocus={{
              scale: 1.12,
            }}
            whileTap={{
              scale: 0.99,
            }}
            style={{ transformOrigin: 'center center' }}
          >
            <StickyNote
              tapePosition={note.tapePosition}
              tilt={note.tilt}
              tapeTilt={note.tapeTilt}
              tapeColor={note.tapeColor}
              className="h-full min-h-92"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-semibold tracking-tight">{note.title}</h2>
              </div>

              <ul className="flex-1 space-y-6">
                {note.items.map((item) => (
                  <NoteItem
                    key={item.chip}
                    icon={<CircleSmall className="mt-0.5 h-4 w-4" aria-hidden="true" />}
                    iconColor={note.iconColor}
                    chip={item.chip}
                  >
                    {item.description}
                  </NoteItem>
                ))}
              </ul>

              {note.footer && <NoteFooter left={note.footer.left} right={note.footer.right} />}
            </StickyNote>
          </motion.div>
        ))}
      </section>

      {/* Sticky notes grid - 2 */}

      <section
        aria-label="Things I'm currently working on"
        className="mt-14 grid grid-cols-1 items-stretch gap-x-8 gap-y-12 sm:grid-cols-2"
      >
        {notes2.map((note, index) => (
          <motion.div
            key={note.title}
            className="relative h-full"
            initial={{ opacity: 0, y: 12, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.1,
              y: -10,
              zIndex: 10,
            }}
            whileFocus={{
              scale: 1.12,
            }}
            whileTap={{
              scale: 0.99,
            }}
            style={{ transformOrigin: 'center center' }}
          >
            <StickyNote
              tapePosition={note.tapePosition}
              tilt={note.tilt}
              tapeTilt={note.tapeTilt}
              tapeColor={note.tapeColor}
              className="h-full min-h-92"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-semibold tracking-tight">{note.title}</h2>
              </div>

              <ul className="flex-1 space-y-6">
                {note.items.map((item) => (
                  <NoteItem
                    key={item.chip}
                    icon={<CircleSmall className="mt-0.5 h-4 w-4" aria-hidden="true" />}
                    iconColor={note.iconColor}
                    chip={item.chip}
                  >
                    {item.description}
                  </NoteItem>
                ))}
              </ul>
            </StickyNote>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
