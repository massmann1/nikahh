import Image from 'next/image';
import { ArrowUpRight, Leaf, MapPin, MoonStar, Shirt, Sparkles } from 'lucide-react';
import { NikahCountdown } from '@/components/nikah-countdown';

const schedule = [
  {
    time: '15:30',
    title: 'Никах',
    note: 'Мечеть Алтан'
  },
  {
    time: '17:30',
    title: 'Банкет',
    note: 'Кафе «Эмиз»'
  }
];

const venueItems = [
  {
    title: 'Мечеть Алтан',
    label: 'Никах',
    address: 'ул. Дубравная, 2В, Казань',
    href: 'https://yandex.ru/maps/?text=%D0%BC%D0%B5%D1%87%D0%B5%D1%82%D1%8C%20%D0%90%D0%BB%D1%82%D0%B0%D0%BD%2C%20%D1%83%D0%BB.%20%D0%94%D1%83%D0%B1%D1%80%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%2C%202%D0%92%2C%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C',
    imageSrc: '/nikah/altan.png',
    imageAlt: 'Мечеть Алтан'
  },
  {
    title: 'Кафе «Эмиз»',
    label: 'Банкет',
    address: 'улица Сафиуллина, 29, Казань',
    href: 'https://yandex.ru/maps/?text=%D0%BA%D0%B0%D1%84%D0%B5%20%D0%AD%D0%BC%D0%B8%D0%B7%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A1%D0%B0%D1%84%D0%B8%D1%83%D0%BB%D0%BB%D0%B8%D0%BD%D0%B0%2C%2029%2C%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C',
    imageSrc: '/nikah/emiz.png',
    imageAlt: 'Кафе Эмиз'
  }
];

const dressCodePalette = [
  { name: 'Кремовый', hex: '#eff0df' },
  { name: 'Тёплый бежевый', hex: '#dbd8c6' },
  { name: 'Серый тауп', hex: '#b8b2a5' },
  { name: 'Оливковый', hex: '#76805b' },
  { name: 'Глубокий хаки', hex: '#4a513b' }
];

function BotanicalSprigs() {
  return (
    <>
      <div className="sprig sprig-top-left" aria-hidden="true">
        <Leaf className="sprig-leaf sprig-leaf-lg" />
        <Leaf className="sprig-leaf sprig-leaf-md" />
        <Leaf className="sprig-leaf sprig-leaf-sm" />
      </div>
      <div className="sprig sprig-bottom-right" aria-hidden="true">
        <Leaf className="sprig-leaf sprig-leaf-lg" />
        <Leaf className="sprig-leaf sprig-leaf-md" />
        <Leaf className="sprig-leaf sprig-leaf-sm" />
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <main className="version-two-shell">
      <div className="version-two-glow version-two-glow-left" />
      <div className="version-two-glow version-two-glow-right" />

      <section className="version-two-board fade-rise">
        <header className="version-two-header fade-rise delay-1">
          <p className="version-two-caption">Версия 2</p>
          <h1>Сайт-приглашение на никах</h1>
        </header>

        <div className="version-two-grid">
          <div className="version-two-column">
            <article className="v2-card v2-card-light v2-hero-card fade-rise delay-2">
              <BotanicalSprigs />

              <div className="v2-hero-copy">
                <p className="v2-hero-date">05.06.2026</p>
                <h2 className="v2-hero-names">
                  <span>Ильнур</span>
                  <span className="v2-ampersand">&amp;</span>
                  <span>Камилла</span>
                </h2>
                <p className="v2-hero-text">
                  Дорогие родные и друзья, будем счастливы разделить с вами день нашего никаха.
                </p>
              </div>

              <div className="v2-hero-photo photo-float">
                <Image
                  src="/nikah/start.jpg"
                  alt="Начало приглашения на никах"
                  fill
                  priority
                  sizes="(max-width: 640px) 50vw, 280px"
                  className="object-cover"
                />
              </div>
            </article>

            <article className="v2-card v2-card-light v2-venue-card fade-rise delay-4">
              <div className="v2-card-heading">
                <p className="v2-section-label">Локации</p>
                <h2>Место торжества</h2>
              </div>

              <div className="v2-venue-photos">
                {venueItems.map((item) => (
                  <div key={item.title} className="v2-venue-photo photo-float">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 24vw, 150px"
                      className="object-cover"
                    />
                    <div className="v2-venue-badge">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="v2-venue-list">
                {venueItems.map((item) => (
                  <article key={item.title} className="v2-venue-item">
                    <p className="v2-venue-name">{item.title}</p>
                    <p>{item.address}</p>
                    <a href={item.href} target="_blank" rel="noreferrer" className="v2-text-link">
                      <span>Открыть маршрут</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </article>
                ))}
              </div>
            </article>
          </div>

          <div className="version-two-column">
            <article className="v2-card v2-card-olive v2-program-card fade-rise delay-3">
              <div className="v2-card-heading v2-card-heading-light">
                <p className="v2-section-label">05.06.2026</p>
                <h2>Программа торжества</h2>
              </div>

              <div className="v2-program-list">
                {schedule.map((item) => (
                  <div key={item.time} className="v2-program-row">
                    <p className="v2-program-time">{item.time}</p>
                    <div>
                      <p className="v2-program-title">{item.title}</p>
                      <p className="v2-program-note">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="v2-card v2-card-cream v2-countdown-card fade-rise delay-5">
              <BotanicalSprigs />
              <div className="v2-card-heading">
                <p className="v2-section-label">До начала</p>
                <h2>Осталось</h2>
              </div>
              <NikahCountdown />
            </article>

            <article className="v2-card v2-card-light v2-dress-card fade-rise delay-6">
              <div className="v2-card-heading">
                <p className="v2-section-label">Дресс-код</p>
                <h2>Просим поддержать стиль дня</h2>
              </div>

              <div className="v2-detail-line">
                <Shirt className="h-4 w-4" />
                <p>Закрытая одежда, спокойные благородные оттенки.</p>
              </div>
              <div className="v2-detail-line">
                <MoonStar className="h-4 w-4" />
                <p>Обязательно тюбетейка для мужчин и платок для женщин.</p>
              </div>
              <div className="v2-detail-line">
                <MapPin className="h-4 w-4" />
                <p>Формат дня уважительный и семейный, в атмосфере никаха.</p>
              </div>

              <div className="v2-palette">
                {dressCodePalette.map((item, index) => (
                  <div
                    key={item.name}
                    className="v2-swatch scale-in"
                    style={{ backgroundColor: item.hex, animationDelay: `${0.7 + index * 0.08}s` }}
                    title={item.name}
                  />
                ))}
              </div>

              <div className="v2-closing">
                <Sparkles className="h-4 w-4" />
                <p>Будем счастливы разделить с вами этот красивый день.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
