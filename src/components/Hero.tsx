'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FiArrowUpRight, FiInstagram, FiMail, FiMapPin, FiPhone, FiStar } from 'react-icons/fi';

const heroItems = ['Lazer Epilasyon', 'Hydrafacial', 'Cilt Bakımı'];

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: 'easeOut' },
  },
};

const group: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--lale-cream)] px-4 pb-8 pt-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[rgba(223,167,69,0.24)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 left-0 h-80 w-80 rounded-full bg-[rgba(223,167,69,0.10)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="overflow-hidden rounded-[30px] bg-[var(--brand-panel)] text-white shadow-[0_26px_90px_rgba(223,167,69,0.20)]"
        >
          <div className="grid min-h-[690px] items-center gap-6 px-5 pb-8 pt-10 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pt-16">
            <motion.div
              variants={group}
              initial="hidden"
              animate="visible"
              className="relative z-10 max-w-[610px] py-8 lg:py-12"
            >
              <motion.div variants={reveal} className="inline-flex rounded-full bg-white px-4 py-2">
                <Image
                  src="/blackstar-logo.svg"
                  alt="Blackstar Beauty Center"
                  width={230}
                  height={76}
                  priority
                  className="h-10 w-auto"
                />
              </motion.div>

              <motion.h1
                variants={reveal}
                className="mt-9 max-w-[620px] font-serif text-[42px] font-normal leading-[1.08] tracking-[-0.02em] text-white sm:text-[58px] lg:text-[68px]"
              >
                Blackstar Beauty profesyonel güzellik merkezi
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-base leading-8 text-white/78 sm:text-lg"
              >
                Cildiniz, bedeniniz ve ruhunuz için modern, hijyenik ve kişiye
                özel bakım deneyimleri.
              </motion.p>

              <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/hizmetlerimiz" className="lale-gold-button gap-3">
                  Hizmetlerimizi Keşfet
                  <FiArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/iletisim" className="lale-outline-button gap-3">
                  Randevu Al
                  <FiPhone className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div variants={reveal} className="mt-11 max-w-lg border-t border-white/20 pt-6">
                <p className="text-sm text-white/68">Öne çıkan hizmetler</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {heroItems.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/86 ring-1 ring-white/12"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.18 }}
              className="relative min-h-[500px] lg:min-h-[630px]"
            >
              <div className="absolute left-0 top-8 z-20 hidden rounded-[24px] bg-white px-4 py-3 shadow-[0_18px_48px_rgba(223,167,69,0.20)] sm:flex sm:items-center sm:gap-3">
                <Image
                  src="/img/banu.avif"
                  alt="Blackstar misafir yorumu"
                  width={58}
                  height={58}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-[var(--dream-dark)]">Reviews</p>
                  <div className="mt-1 flex items-center gap-1 text-[#d9a76f]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FiStar key={index} className="h-3.5 w-3.5 fill-current" />
                    ))}
                    <span className="ml-1 text-xs text-[var(--dream-text)]">5.0</span>
                  </div>
                </div>
              </div>

              <div className="dream-float absolute inset-x-0 bottom-0 mx-auto h-[500px] max-w-[540px] overflow-hidden rounded-t-[280px] bg-[#eadfd6] lg:h-[650px]">
                <Image
                  src="/banner/blackstar-home-hero-v2.png"
                  alt="Blackstar Beauty Center ana sayfa görseli"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(95,89,108,0.18))]" />
              </div>

              <Link
                href="/iletisim"
                className="absolute bottom-[18%] left-4 z-30 flex h-[116px] w-[116px] items-center justify-center rounded-full bg-white text-[var(--dream-dark)] shadow-[0_20px_54px_rgba(223,167,69,0.20)] transition-transform hover:scale-105 sm:left-10"
                aria-label="Randevu al"
              >
                <svg className="dream-rotate absolute inset-2 h-[100px] w-[100px]" viewBox="0 0 100 100">
                  <path id="blackstar-circle-text" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                  <text className="fill-[var(--dream-dark)] text-[9px] font-medium tracking-[0.18em]">
                    <textPath href="#blackstar-circle-text">RANDEVU AL * BLACKSTAR BEAUTY *</textPath>
                  </text>
                </svg>
                <FiArrowUpRight className="h-7 w-7" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid gap-5 rounded-b-[30px] bg-[var(--lale-cream)] px-2 py-8 md:grid-cols-3">
          {[
            { icon: FiMail, title: 'İletişim', value: '@blackstarbeautyy' },
            { icon: FiMapPin, title: 'Konum', value: 'Esenler / İstanbul' },
            { icon: FiPhone, title: 'Randevu', value: '0546 906 4334' },
          ].map((detail, index) => {
            const Icon = detail.icon;

            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                className="flex items-start gap-4 border-[rgba(123,121,140,0.16)] px-2 md:border-r md:last:border-r-0"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--dream-dark)] shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-xl text-[var(--dream-dark)]">{detail.title}</p>
                  <p className="mt-1 text-sm text-[var(--dream-text)]">{detail.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
