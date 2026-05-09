import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { ArrowUpRight, Clock3, HeartHandshake, Leaf, MapPin, MoonStar, Shirt, Sparkles } from 'lucide-react';
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
    text: 'Будем признательны за спокойный и сдержанный образ, подходящий для мечети и семейного праздника.',
    icon: Shirt
  },
  {
    title: 'Тюбетейка и платок',
    text: 'Для мужчин обязательна тюбетейка, для женщин платок. Это важная часть атмосферы и уважения к традиции.',
    icon: MoonStar
  }
];

const dressPalette = ['#edf0e4', '#d7d9c9', '#b8baa8', '#7d8661', '#4d5540'];

function BotanicalCorners() {
  return (
    <>
      <div className="botanical botanical-top" aria-hidden="true">
        <Leaf className="botanical-leaf botanical-leaf-lg" />
        <Leaf className="botanical-leaf botanical-leaf-md" />
        <Leaf className="botanical-leaf botanical-leaf-sm" />
      </div>
      <div className="botanical botanical-bottom" aria-hidden="true">
        <Leaf className="botanical-leaf botanical-leaf-lg" />
        <Leaf className="botanical-leaf botanical-leaf-md" />
        <Leaf className="botanical-leaf botanical-leaf-sm" />
      </div>
    </>
  );
}

function SectionKicker({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <div className="v2-kicker">
      <Icon className="h-4 w-4" />
      <span>{children}</span>
    </div>
  );
}

function Divider() {
  return (
    <div className="v2-divider" aria-hidden="true">
      <div className="v2-divider-line" />
      <div className="v2-divider-dot" />
      <div className="v2-divider-line" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="v2-shell">
      <div className="v2-glow v2-glow-left" />
      <div className="v2-glow v2-glow-right" />

      <div className="v2-stage">
        <section className="v2-sheet fade-rise">
          <div className="v2-sheet-topline fade-rise delay-1">
            <span>Никах</span>
            <span>Казань</span>
          </div>

          <div className="v2-hero-card fade-rise delay-2">
            <BotanicalCorners />

            <div className="v2-hero-copy">
              <p className="v2-hero-seal">05 · 06 · 2026</p>
              <p className="v2-hero-place">Казань · Мечеть Алтан</p>
              <h1 className="v2-hero-names">
                <span>Ильнур</span>
                <span className="v2-hero-ampersand">&amp;</span>
                <span>Камилла</span>
              </h1>
              <p className="v2-hero-text">
                С благословением Всевышнего приглашаем вас разделить с нами светлый день нашего никаха.
              </p>
            </div>

            <div className="v2-date-block fade-rise delay-3">
              <div className="v2-date-plaque">
                <p className="v2-date-main">05 июня 2026</p>
                <p className="v2-date-note">Пятница · начало в 15:30</p>
              </div>
            </div>

            <div className="v2-hero-photo-wrap fade-rise delay-4">
              <div className="v2-photo-chip">05 / 06</div>
              <div className="v2-hero-photo photo-float">
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
          </div>

          <div className="v2-countdown-card fade-rise delay-5">
            <BotanicalCorners />
            <div className="v2-countdown-head">
              <p className="v2-card-label">До начала</p>
              <h2>Осталось</h2>
              <p className="v2-countdown-subtitle">Скоро увидимся на нашем светлом празднике</p>
            </div>
            <NikahCountdown />
          </div>

          <div className="v2-hero-footnote fade-rise delay-6">
            <p>
              Нам будет очень радостно видеть вас рядом в этот особенный день, наполненный молитвой,
              теплом семьи и красивыми воспоминаниями.
            </p>
          </div>
        </section>

        <section className="v2-sheet fade-rise delay-2">
          <div className="v2-section fade-rise delay-3">
            <SectionKicker icon={HeartHandshake}>Для вас</SectionKicker>
            <h2 className="v2-section-title">Дорогие гости</h2>
            <p className="v2-section-text">
              Спасибо, что разделяете с нами этот важный этап жизни. Очень хотим провести его рядом с
              близкими людьми, в спокойной, тёплой и уважительной атмосфере.
            </p>
          </div>

          <Divider />

          <div id="timing" className="v2-section fade-rise delay-4">
            <SectionKicker icon={Clock3}>Тайминг</SectionKicker>
            <h2 className="v2-section-title">План дня</h2>
            <div className="v2-program-list">
              {schedule.map(({ time, title, note, address }) => (
                <article key={time} className="v2-program-item">
                  <div className="v2-program-line" aria-hidden="true">
                    <span className="v2-program-dot" />
                  </div>
                  <div className="v2-program-time">{time}</div>
                  <div className="v2-program-copy">
                    <h3>{title}</h3>
                    <p>{note}</p>
                    <p className="v2-program-address">{address}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Divider />

          <div id="locations" className="v2-section fade-rise delay-5">
            <SectionKicker icon={MapPin}>Локации</SectionKicker>
            <h2 className="v2-section-title">Где пройдёт наш день</h2>
            <div className="v2-location-list">
              {locations.map(({ title, subtitle, address, href, imageSrc, imageAlt }, index) => (
                <article key={title} className="v2-location-card">
                  <div className="v2-location-photo photo-float">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 464px"
                      className="object-cover"
                    />
                    <div className="v2-location-overlay" aria-hidden="true" />
                    <div className="v2-location-caption">
                      <span className="v2-location-serial">0{index + 1}</span>
                      <div>
                        <p className="v2-location-badge">{subtitle}</p>
                        <h3>{title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="v2-location-copy">
                    <p>{address}</p>
                    <a href={href} target="_blank" rel="noreferrer" className="v2-link">
                      <span>Открыть маршрут</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Divider />

          <div className="v2-section fade-rise delay-6">
            <SectionKicker icon={Sparkles}>Дресс-код</SectionKicker>
            <h2 className="v2-section-title">Просим поддержать стиль дня</h2>
            <div className="v2-dress-note">
              Выбирайте спокойные природные оттенки и закрытые силуэты, уместные для мечети и семейного
              торжества.
            </div>
            <div className="v2-detail-list">
              {dressCodeItems.map(({ title, text, icon: Icon }) => (
                <article key={title} className="v2-detail-item">
                  <div className="v2-detail-icon">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="v2-palette-caption">Рекомендуемая палитра</p>
            <div className="v2-palette">
              {dressPalette.map((color, index) => (
                <div
                  key={color}
                  className="v2-palette-swatch scale-in"
                  style={{ backgroundColor: color, animationDelay: `${0.75 + index * 0.08}s` }}
                />
              ))}
            </div>
          </div>

          <Divider />

          <div className="v2-section v2-section-center fade-rise delay-6">
            <SectionKicker icon={HeartHandshake}>С любовью</SectionKicker>
            <p className="v2-section-text v2-section-text-center">
              Будем ждать вас 05 июня 2026 года и будем счастливы разделить с вами красоту этого дня.
            </p>
            <p className="v2-signoff">Ильнур и Камилла</p>
          </div>
        </section>
      </div>
    </main>
  );
}
