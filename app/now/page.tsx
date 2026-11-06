import * as motion from 'motion/react-client';
import { BookOpen, CircleSmall, Clapperboard, Dumbbell } from 'lucide-react';

import { StickyNote } from '@/components/now/StickyNote';
import { NoteItem, NoteSubsection, NoteLink } from '@/components/now/Note';

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
        chip: '100 Days to Offload',
        description: 'Writing and publishing about anything that catches my curiosity.',
      },
      {
        chip: 'Technical writing',
        description: 'Writing about Ruby and Rails topics as I learn and explore their internals.',
      },
      {
        chip: 'Journaling',
        description: 'Making time for 10-thought dumps and free writing.',
      },
    ],
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
        chip: 'System design',
        description: 'Exploring system design and software architecture.',
      },
      {
        chip: 'Ruby & Rails internals',
        description: 'Going deeper into how Ruby and Rails work under the hood.',
      },
      {
        chip: 'Open source',
        description:
          'Looking to get involved in open-source projects and make my first contributions.',
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
        chip: 'Done',
        description:
          'Nearly done with the MVP of WorkNotes. Recently completed the daily reports feature.',
      },
      {
        chip: 'Current focus',
        description: 'Implementing PDF report exports using background jobs.',
      },
      {
        chip: 'Next up',
        description: 'Exploring ways to integrate AI into WorkNotes.',
      },
    ],
  },
];

const hobbies = [
  {
    title: 'Beyond the desk',
    tapePosition: 35,
    tilt: 'rotate-3',
    tapeTilt: '-rotate-2',
    tapeColor: 'bg-chart-3/70',
    iconColor: 'text-chart-3',
    subsections: [
      {
        title: 'Fitness',
        description:
          'Staying consistent with 3-4 workouts a week, experimenting with kettlebells and making room for yoga.',
        icon: <Dumbbell className="h-4 w-4" />,
      },
      {
        title: 'Reading',
        description:
          'Exploring Hindi literature. Currently reading works by Harishankar Parsai and Kashinath Singh.',
        icon: <BookOpen className="h-4 w-4" />,
      },
      {
        title: 'Watching',
        description: 'Just started watching Severance.',
        icon: <Clapperboard className="h-4 w-4" />,
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

          <time dateTime="2026-11-06" className="font-medium text-chart-2">
            November 6, 2026
          </time>
        </div>

        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          Right now, I&apos;m focused on writing, learning, building WorkNotes, and finding my next
          role. Outside of that, I&apos;m trying to stay active, explore new interests, and make
          time for things that have nothing to do with work.
        </p>
      </header>

      {/* First row: Writing, Learning, WorkNotes */}
      <section
        aria-label="Things I'm currently working on"
        className="mt-14 grid grid-cols-1 items-stretch gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7"
      >
        {notes.map((note, index) => (
          <motion.div
            key={note.title}
            className="relative h-full"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.08,
              y: -10,
              zIndex: 10,
            }}
            whileTap={{ scale: 0.99 }}
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
                {note.items?.map((item) => (
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

      {/* Hobbies and interests */}
      <section aria-label="Hobbies and interests" className="mt-16 flex justify-center">
        {hobbies.map((note, index) => (
          <motion.div
            key={note.title}
            className="relative mx-auto w-full max-w-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.03,
              y: -5,
              zIndex: 10,
            }}
            whileTap={{ scale: 0.99 }}
            style={{ transformOrigin: 'center center' }}
          >
            <StickyNote
              tapePosition={note.tapePosition}
              tilt={note.tilt}
              tapeTilt={note.tapeTilt}
              tapeColor={note.tapeColor}
              className="h-fit w-full"
            >
              <div className="mb-6">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{note.title}</h2>
              </div>

              <ul className="space-y-6 sm:space-y-7">
                {note.subsections.map((item) => (
                  <NoteSubsection
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    headingColor={note.iconColor}
                    icon={item.icon}
                  />
                ))}
              </ul>
            </StickyNote>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
