import React from 'react';
import * as motion from 'motion/react-client';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import Socials from './Socials';
import Link from 'next/link';
import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row-reverse justify-between lg:justify-end items-center lg:items-start gap-10 sm:gap-12 mt-10 sm:mt-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="shrink-0"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 text-center rounded-full overflow-hidden bg-muted border border-border">
              <Image
                src="/profile.jpg"
                alt="Siddharth Shringi"
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex flex-col gap-8 sm:gap-10 max-w-2xl">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <h1 className="text-4xl md:text-6xl font-geist font-bold text-chart-2 leading-tight">
                Siddharth Shringi
              </h1>

              <p className="text-base md:text-lg text-muted-foreground font-medium tracking-wide uppercase">
                Software Engineer
              </p>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Software engineer with 5+ years building production web applications with Ruby on
                Rails and React. I have shipped features for e-commerce and logistics SaaS
                platforms, had articles featured in Ruby Weekly, and I write tests, set up CI/CD
                pipelines, and use AI tools as part of my everyday workflow.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                  <Download className="text-xl transition-transform group-hover:translate-y-1" />
                </Button>
              </Link>

              <Socials />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
