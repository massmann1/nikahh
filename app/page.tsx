import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { ArrowUpRight, Clock3, HeartHandshake, MapPin, MoonStar, Shirt, Sparkles } from 'lucide-react';
import { NikahCountdown } from '@/components/nikah-countdown';

const schedule: Array<{
  time: string;
  title: string;
  note: string;
  address: string;
}> = [
  {
    time: '15:30',
    title: 'Никах в мечети Алтан',
    note: 'Просим приехать немного заранее, чтобы спокойно занять места к началу церемонии.',
    address: 'ул. Дубравная, 2В, Казань'
  },
  {
    time: '17:30',
    title: 'Банкет в кафе «Эмиз»',
    note: 'После никаха продолжим вечер за праздничным столом, в тёплой и семейной атмосфере.',
    address: 'улица Сафиуллина, 29, Казань'
  }
];

const locations: Array<{
  title: string;
  subtitle: string;
  address: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}> = [
  {
    title: 'Мечеть Алтан',
    subtitle: 'Церемония никаха',
    address: 'ул. Дубравная, 2В, Казань',
    href: 'https://yandex.ru/maps/?text=%D0%BC%D0%B5%D1%87%D0%B5%D1%82%D1%8C%20%D0%90%D0%BB%D1%82%D0%B0%D0%BD%2C%20%D1%83%D0%BB.%20%D0%94%D1%83%D0%B1%D1%80%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%2C%202%D0%92%2C%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C',
    imageSrc: '/nikah/altan.png',
    imageAlt: 'Мечеть Алтан'
  },
  {
    title: 'Кафе «Эмиз»',
    subtitle: 'Праздничный банкет',
    address: 'улица Сафиуллина, 29, Казань',
    href: 'https://yandex.ru/maps/?text=%D0%BA%D0%B0%D1%84%D0%B5%20%D0%AD%D0%BC%D0%B8%D0%B7%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A1%D0%B0%D1%84%D0%B8%D1%83%D0%BB%D0%BB%D0%B8%D0%BD%D0%B0%2C%2029%2C%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C',
    imageSrc: '/nikah/emiz.png',
    imageAlt: 'Кафе Эмиз'
  }
];

const dressCodeItems: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: 'Закрытая одежда',
    text: 'Спокойный, сдержанный и аккуратный образ, подходящий для мечети и семейного торжества.',
    icon: Shirt
  },
  {
    title: 'Тюбетейка и платок',
    text: 'Для мужчин обязательна тюбетейка, для женщин платок. Это важная часть атмосферы и уважения к традиции.',
    icon: MoonStar
  }
];

function SectionKicker({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <div className="olive-kicker">
      <Icon className="h-4 w-4" />
      <span>{children}</span>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="olive-divider" aria-hidden="true">
      <div className="olive-divider-line" />
      <div className="olive-divider-dot" />
      <div className="olive-divider-line" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="olive-scene">
      <div className="olive-scene-glow olive-scene-glow-left" />
      <div className="olive-scene-glow olive-scene-glow-right" />

      <div className="olive-wrap">
        <section className="olive-paper fade-up">
          <div className="olive-paper-inner">
            <header className="olive-topline">
              <span>Никах</span>
              <span>Казань</span>
            </header>

            <div className="olive-hero">
              <p className="olive-hero-place">Казань · Мечеть Алтан</p>
              <h1 className="olive-hero-names">
                <span>Ильнур</span>
                <span className="olive-hero-ampersand">&amp;</span>
                <span>Камилла</span>
              </h1>
              <p className="olive-hero-text">
                С благословением Всевышнего приглашаем вас разделить с нами светлый день нашего никаха.
              </p>

              <div className="olive-date-block">
                <p className="olive-date-main">05 июня 2026</p>
                <p className="olive-date-note">Пятница · начало в 15:30</p>
              </div>

              <div className="olive-hero-photo image-drift">
                <Image
                  src="/nikah/start.jpg"
                  alt="Начало приглашения на никах"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 464px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="olive-countdown-band">
              <div className="olive-countdown-copy">
                <p className="olive-countdown-label">До начала</p>
                <h2>Осталось</h2>
              </div>
              <NikahCountdown />
            </div>

            <div className="olive-intro-note">
              <p>
                Нам будет очень радостно видеть вас рядом в этот особенный день, наполненный молитвой,
                теплом семьи и красивыми воспоминаниями.
              </p>
            </div>

            <SectionDivider />

            <section className="olive-section">
              <SectionKicker icon={HeartHandshake}>Для вас</SectionKicker>
              <h2 className="olive-section-title">Дорогие гости</h2>
              <p className="olive-section-text">
                Спасибо, что разделяете с нами этот важный этап жизни. Очень хотим провести его рядом с
                близкими людьми, в спокойной, тёплой и уважительной атмосфере.
              </p>
            </section>

            <SectionDivider />

            <section id="timing" className="olive-section">
              <SectionKicker icon={Clock3}>Тайминг</SectionKicker>
              <h2 className="olive-section-title">План дня</h2>
              <div className="olive-timeline">
                {schedule.map(({ time, title, note, address }) => (
                  <article key={time} className="olive-timeline-item">
                    <div className="olive-timeline-rail" aria-hidden="true">
                      <span className="olive-timeline-dot" />
                    </div>
                    <div className="olive-timeline-time">{time}</div>
                    <div className="olive-timeline-copy">
                      <h3>{title}</h3>
                      <p>{note}</p>
                      <p className="olive-timeline-address">{address}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <SectionDivider />

            <section id="locations" className="olive-section">
              <SectionKicker icon={MapPin}>Локации</SectionKicker>
              <h2 className="olive-section-title">Где пройдёт наш день</h2>
              <div className="olive-location-list">
                {locations.map(({ title, subtitle, address, href, imageSrc, imageAlt }, index) => (
                  <article key={title} className="olive-location-item">
                    <div className="olive-location-head">
                      <span className="olive-location-number">0{index + 1}</span>
                      <div>
                        <p className="olive-location-subtitle">{subtitle}</p>
                        <h3>{title}</h3>
                      </div>
                    </div>

                    <div className="olive-location-photo image-drift">
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, 464px"
                        className="object-cover"
                      />
                    </div>

                    <p className="olive-location-address">{address}</p>
                    <a href={href} target="_blank" rel="noreferrer" className="olive-link">
                      <span>Открыть маршрут</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <SectionDivider />

            <section className="olive-section">
              <SectionKicker icon={MoonStar}>Дресс-код</SectionKicker>
              <h2 className="olive-section-title">Просим поддержать стиль дня</h2>
              <p className="olive-section-text">
                Будем признательны, если вы выберете спокойные природные оттенки и закрытые силуэты,
                уместные для мечети и семейного праздника.
              </p>

              <div className="olive-dress-list">
                {dressCodeItems.map(({ title, text, icon: Icon }) => (
                  <article key={title} className="olive-dress-item">
                    <div className="olive-dress-icon">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <SectionDivider />

            <footer className="olive-footer">
              <SectionKicker icon={Sparkles}>С любовью</SectionKicker>
              <p className="olive-footer-text">
                Будем ждать вас 05 июня 2026 года и будем счастливы разделить с вами красоту этого дня.
              </p>
              <p className="olive-footer-sign">Ильнур и Камилла</p>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
