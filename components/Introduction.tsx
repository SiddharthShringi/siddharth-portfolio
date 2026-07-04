import React from 'react';
import * as motion from 'motion/react-client';
import { Button } from './ui/button';
import { Download, RadioTower } from 'lucide-react';
import Socials from './Socials';
import Link from 'next/link';
import Image from 'next/image';

const stack = ['Ruby', 'Ruby on Rails', 'PostgreSQL', 'RSpec', 'React', 'Next.js', 'TypeScript'];

export default function Introduction() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 mt-10 sm:mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 sm:gap-20 lg:gap-32">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-8 sm:gap-10 max-w-2xl">
            {/* Mobile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:hidden"
            >
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border border-border bg-muted shadow-lg">
                <Image
                  src="/profile.webp"
                  alt="Siddharth Shringi"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-chart-2 leading-tight">
                Siddharth Shringi
              </h1>

              <p className="text-base md:text-lg text-muted-foreground font-medium tracking-wide uppercase">
                Software Engineer
              </p>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Software engineer with 5+ years building production web applications with{' '}
                <span className="font-medium text-foreground">Ruby on Rails</span> and{' '}
                <span className="font-medium text-foreground">React</span>. I have shipped features
                for e-commerce and logistics SaaS platforms, had articles featured in{' '}
                <span className="font-medium text-foreground">Ruby Weekly</span>, and have
                experience with testing, CI/CD, and AI-assisted development workflows.
              </p>
            </motion.div>

            {/* Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-wrap gap-2"
            >
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs md:text-sm px-3 py-1 rounded-full border border-border tracking-wide text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Link
                href="/Siddharth_Shringi_Resume.pdf"
                download="Siddharth_Shringi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group flex items-center gap-2" size="lg">
                  <span>Resume / CV</span>

                  <Download className="transition-transform group-hover:translate-y-1" />
                </Button>
              </Link>

              <Socials />
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col gap-2 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-1.5">
                <RadioTower className="h-4 w-4" />
                <span>#OpenToWork</span>
              </div>
            </motion.div>
          </div>

          {/* Desktop Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex shrink-0 self-start -ml-4"
          >
            <div className="w-72 h-72 xl:w-72 xl:h-72 rounded-full overflow-hidden border border-border bg-muted shadow-md">
              <Image
                src="/profile.webp"
                alt="Siddharth Shringi"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
