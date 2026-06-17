'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';

const services = [
  {
    title: 'Lazer Epilasyon',
    description: 'Modern cihazlarla konforlu, hijyenik ve düzenli takip edilen pürüzsüzlük deneyimi.',
    image: '/hizmetler/lazer-epilasyon.png',
  },
  {
    title: 'Hydrafacial',
    description: 'Cildi arındıran, nemlendiren ve daha canlı bir görünüm kazandıran profesyonel bakım.',
    image: '/hizmetler/hydrafacial.png',
  },
  {
    title: 'Cilt Bakımı',
    description: 'Cilt tipinize göre analiz edilen, kişisel ve sonuç odaklı bakım protokolleri.',
    image: '/hizmetler/cilt-bakimi.png',
  },
  {
    title: 'Kalıcı Makyaj',
    description: 'Yüz ifadenize uyumlu, zarif ve günlük rutininizi kolaylaştıran kalıcı dokunuşlar.',
    image: '/hizmetler/kalici-makyaj.png',
  },
  {
    title: 'Kaş ve Kirpik',
    description: 'Doğal bakışları belirginleştiren kaş tasarımı, lifting ve kirpik bakım uygulamaları.',
    image: '/hizmetler/kas-ve-kirpik.png',
  },
  {
    title: 'Protez Tırnak',
    description: 'Bakımlı eller için estetik, dayanıklı ve kişisel stile uygun tırnak uygulamaları.',
    image: '/hizmetler/protez-tirnak.png',
  },
] as const;

const Services = () => {
  return (
    <section id="hizmetler" className="relative overflow-hidden bg-[var(--lale-cream)] py-20 sm:py-24">
      <div className="pointer-events-none absolute right-10 top-20 h-60 w-60 rounded-full bg-white/70 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <div className="lale-kicker">Hizmetlerimiz</div>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl font-normal leading-tight tracking-[-0.02em] text-[var(--lale-emerald-deep)] sm:text-4xl lg:text-5xl">
              Blackstar Beauty profesyonel güzellik hizmetleri
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[var(--dream-text)] sm:text-base">
            Cildiniz, bedeniniz ve ruhunuz için en iyi çözümleri sunan, modern
            cihazlar ve hijyenik uygulama alanlarıyla planlanan bakım seçenekleri.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.62, delay: index * 0.06, ease: 'easeOut' }}
              className="group relative min-h-[430px] overflow-hidden rounded-[30px] bg-white shadow-[0_22px_70px_rgba(28,73,66,0.12)]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,73,66,0.02)_28%,rgba(28,73,66,0.82)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white/16 px-4 py-2 text-xs backdrop-blur">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Link
                    href="/hizmetlerimiz"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--lale-emerald-deep)] transition-transform group-hover:rotate-45"
                    aria-label={`${service.title} detayları`}
                  >
                    <FiArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
                <h3 className="font-serif text-2xl font-normal">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/76">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-[30px] bg-[var(--lale-emerald-deep)] p-5 text-white md:grid-cols-[1fr_auto] md:items-center md:p-7">
          <div className="flex flex-wrap gap-3">
            {['Uzman ekip', 'Hijyenik ortam', 'Kişiye özel bakım'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <FiCheck className="h-4 w-4" />
                {item}
              </span>
            ))}
          </div>
          <Link href="/iletisim" className="lale-gold-button gap-3 justify-self-start md:justify-self-end">
            Randevu Al
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
