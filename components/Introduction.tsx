import React from 'react';
import * as motion from 'motion/react-client';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import Socials from './Socials';

export default function Introduction() {
  return (
    <section className="flex flex-col justify-center items-center gap-2 sm:gap-4">
      <div className="mt-10 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-geist font-bold text-chart-2 leading-tight mb-6">
            Siddharth Shringi
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl mb-6 font-sans text-muted-foreground">
            A software engineer specializing in <strong>Ruby on Rails, React, and SQL</strong>. I
            build clean, scalable web applications — from idea to deployment.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <Button className="group uppercase flex items-center gap-2" size="lg">
            <span>Download Resume</span>

            <Download className="text-xl transition-transform group-hover:translate-y-1" />
          </Button>

          <div className="mb-8 sm:mb-0">
            <Socials />
          </div>
        </motion.div>
      </div>
      <div className="prose dark:prose-invert font-geist tracking-normal text-foreground">
        <div>
          <h2>Hi, I’m Siddharth 👋</h2>
          <p>
            I’m a software engineer who loves building clean, scalable web applications. My main
            stack is Ruby on Rails, React, Next.js, and PostgreSQL, but I’m always exploring new
            tools that make development faster and smarter.
          </p>
          <p>
            For me, coding isn’t just about solving problems — it’s about crafting experiences that
            feel intuitive and delightful.
          </p>
        </div>
        <div>
          <h2>What I’m Working On</h2>
          <ul>
            <li>✨ Building my personal portfolio and blog (the site you’re on now).</li>
            <li>📚 Brushing up Rails + React projects to strengthen my product-building skills.</li>
            <li>🧠 Exploring algorithms and system design to improve problem-solving depth.</li>
          </ul>
        </div>
        <div>
          <h2>Beyond Code</h2>
          <ul>
            <li>🏋️ At the gym working on strength and functional fitness.</li>
            <li>📖 Reading about philosophy, psychology, and self-growth.</li>
            <li>
              📝 Journaling and experimenting with frameworks like CBT and IFS to understand the
              mind better.
            </li>
          </ul>
        </div>
        <div>
          <h2>Why This Site?</h2>
          <p>
            This space is my digital playground — a place to share what I learn, what I build, and
            sometimes what I think about life beyond tech.
          </p>
          <p>
            If you’re curious about my work, check out my Projects and Blog . And if you’d like to
            connect, feel free to reach out on LinkedIn or drop me a message.
          </p>
        </div>
      </div>
    </section>
  );
}
