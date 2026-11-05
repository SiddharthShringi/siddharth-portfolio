import * as motion from 'motion/react-client';
import { StickyNote } from '@/components/now/StickyNote';
import { NoteItem, NoteFooter } from '@/components/now/NoteHeader';
import { CircleSmall } from 'lucide-react';

export default function NowPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        What I&apos;m Doing Now
      </h1>
      <p className="italic text-muted-foreground">Last updated:</p>
      <p className="text-chart-2">September 9th, 2026</p>
      <p className="text-base leading-7 sm:text-lg sm:leading-8">
        Right now, I&apos;m focused on writing, reading, building WorkNotes, staying active, and
        finding my next role. I&apos;m trying to keep things simple: learn, write, build, and share
        the work.
      </p>

      {/* 3 tall notes */}
      <div className="mt-12 grid grid-cols-1 gap-9 md:grid-cols-3">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            y: -10,
            zIndex: 10,
            x: -10,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 18,
          }}
        >
          <StickyNote
            tapePosition={25}
            tilt="-rotate-2"
            tapeTilt="-rotate-3"
            tapeColor="bg-chart-2/70"
            className="min-h-104"
          >
            <h2 className="mb-4 text-2xl font-semibold">Writing</h2>
            <ul className="space-y-4">
              <NoteItem
                icon={<CircleSmall className="h-4 w-4 text-chart-2" />}
                chip="8 / 100 posts"
              >
                Continuing my 100 Days to Offload challenge.
              </NoteItem>
              <NoteItem
                icon={<CircleSmall className="h-4 w-4 text-chart-2" />}
                chip="Drafting #1 · SQLite in WebAssembly"
              >
                Write at least 2 technical articles this month.
              </NoteItem>
            </ul>
            <NoteFooter left="Format: Field Journal" right="4.2k words" />
          </StickyNote>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            y: -10,
            zIndex: 10,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 18,
          }}
        >
          <StickyNote
            tapePosition={40}
            tilt="rotate-1"
            tapeTilt="rotate-2"
            tapeColor="bg-chart-1/70"
            className="min-h-104"
          >
            {/* Learning content goes here */}
            <h2 className="mb-4 text-2xl font-semibold">Learning</h2>
            <ul className="space-y-4">
              <NoteItem
                icon={<CircleSmall className="h-4 w-4 text-chart-1" />}
                chip="8 / 100 posts"
              >
                Currently reading &quot;The Well-Grounded Rubyist and Ruby Deep Dive.
              </NoteItem>
              <NoteItem
                icon={<CircleSmall className="h-4 w-4" />}
                chip="Drafting #1 · SQLite in WebAssembly"
              >
                Write at least 2 technical articles this month.
              </NoteItem>
            </ul>
          </StickyNote>
        </motion.div>

        <motion.div
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            y: -10,
            zIndex: 10,
            x: 10,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 18,
          }}
        >
          <StickyNote
            tapePosition={70}
            tilt="-rotate-3"
            tapeTilt="-rotate-2"
            tapeColor="bg-chart-4/70"
            className="min-h-104"
          >
            {/* WorkNotes content goes here */}
            <h2 className="mb-4 text-2xl font-semibold">WorkNotes</h2>
            <ul className="space-y-4">
              <NoteItem
                icon={<CircleSmall className="h-4 w-4 text-chart-1" />}
                chip="8 / 100 posts"
              >
                Currently reading &quot;The Well-Grounded Rubyist and Ruby Deep Dive.
              </NoteItem>
              <NoteItem
                icon={<CircleSmall className="h-4 w-4" />}
                chip="Drafting #1 · SQLite in WebAssembly"
              >
                Write at least 2 technical articles this month.
              </NoteItem>
            </ul>
          </StickyNote>
        </motion.div>
      </div>
    </main>
  );
}
