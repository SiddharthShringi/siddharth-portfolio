import * as motion from 'motion/react-client';
import { BookOpen, CircleSmall, Clapperboard, Dumbbell } from 'lucide-react';

import { StickyNote } from '@/components/now/StickyNote';
import { NoteItem, NoteSubsection, NoteLink } from '@/components/now/Note';
import Container from '@/components/ui/Container';

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
        chip: 'Curious logging',
        description: (
          <>
            Writing down anything interesting that feels worth remembering, as a blog post or a
            quick note. It&apos;s how I&apos;m doing the 100 Days to Offload challenge.
          </>
        ),
      },
      {
        chip: 'Technical writing',
        description: (
          <>
            Writing to understand how things work: Ruby, Rails, SQL, and database optimization. If
            I&apos;m reading about it, I try to write about it. Check out my{' '}
            <NoteLink href="https://siddharthshringi.com/blog" color="text-chart-2">
              blog
            </NoteLink>{' '}
            for more.
          </>
        ),
      },
      {
        chip: 'Journaling',
        description: (
          <>
            <NoteLink
              href="https://siddharthshringi.com/blog/2026-08-24-some-more-journaling-ideas"
              color="text-chart-2"
            >
              Free writing
            </NoteLink>{' '}
            to think things through.
          </>
        ),
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
        chip: 'Databases',
        description: 'Taking the CS50 SQL course, learning how to optimize and scale databases.',
      },
      {
        chip: 'Ruby & Rails internals',
        description:
          'Reading The Well-Grounded Rubyist and Ruby Deep Dive, and digging into how Rails works inside.',
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
        chip: '',
        description: (
          <>
            <NoteLink href="https://worknotes.app" color="text-chart-4">
              WorkNotes
            </NoteLink>{' '}
            is a productivity app I&apos;m building to track work sessions and take notes along the
            way. Every project keeps its own sessions, and a daily report shows the hours spent on
            each one with the notes beside them.
          </>
        ),
      },
      {
        chip: 'Currently working on',
        description: 'Building PDF export feature for the daily report.',
      },
      {
        chip: 'Next up',
        description:
          'AI integration to turn sessions and notes into a timesheet for a freelance project.',
      },
    ],
  },
];

const hobbies = [
  {
    title: 'Beyond the desk',
    tapePosition: 35,
    tilt: '-rotate-3',
    tapeTilt: 'rotate-2',
    tapeColor: 'bg-chart-3/70',
    iconColor: 'text-chart-3',
    subsections: [
      {
        title: 'Fitness',
        description:
          'Trying to stay consistent with 3-4 workouts a week. Experimenting with kettlebells and yoga.',
        icon: <Dumbbell className="h-4 w-4" />,
      },
      {
        title: 'Reading',
        description: (
          <>
            Reading more Hindi literature lately. Enjoying the works of{' '}
            <NoteLink
              href="https://www.goodreads.com/author/show/4615204.Harishankar_Parsai"
              color="text-chart-3"
            >
              Harishankar Parsai
            </NoteLink>{' '}
            and{' '}
            <NoteLink
              href="https://www.goodreads.com/author/show/6536265.Kashinath_Singh"
              color="text-chart-3"
            >
              Kashinath Singh
            </NoteLink>
            .
          </>
        ),
        icon: <BookOpen className="h-4 w-4" />,
      },
      {
        title: 'Watching',
        description: (
          <>
            Currently watching{' '}
            <NoteLink href="https://www.imdb.com/title/tt11280740/" color="text-chart-3">
              Severance
            </NoteLink>
            .
          </>
        ),
        icon: <Clapperboard className="h-4 w-4" />,
      },
    ],
  },
];

export default function NowPage() {
  return (
    <main className="my-6 sm:my-10">
      {/* Page introduction */}
      <Container>
        <header className="max-w-2xl space-y-5">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What I&apos;m Doing Now
            </h1>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground text-base">Last updated</span>

            <time dateTime="2026-11-06" className="font-medium text-base text-chart-2">
              November 7, 2026
            </time>
          </div>

          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            Right now, I&apos;m spending my time writing, understanding how things work under the
            hood, and building WorkNotes. I&apos;m also discovering new interests, staying active,
            and looking for my next professional opportunity.
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
        <section aria-label="Hobbies and interests" className="mt-12 w-full sm:mt-16">
          {hobbies.map((note, index) => (
            <motion.div
              key={note.title}
              className="relative w-full max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.08,
                y: -5,
                zIndex: 10,
              }}
              whileTap={{ scale: 0.995 }}
              style={{ transformOrigin: 'left center' }}
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
      </Container>
    </main>
  );
}
