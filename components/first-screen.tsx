import { Trophy, History, Heart, Ticket, LayoutGrid, Dice5, Zap, Flame, ShoppingBag, Sparkles, Search, ChevronDown, Dice6 } from 'lucide-react'

const topChips = [
  { label: 'Призовой пул', icon: Trophy },
  { label: 'История', icon: History },
  { label: 'Избранное', icon: Heart },
  { label: 'Промокод', icon: Ticket },
]

const cats = [
  { label: 'Все', icon: LayoutGrid, on: true },
  { label: 'Слоты', icon: Dice5, on: false },
  { label: 'Быстрые игры', icon: Zap, on: false },
  { label: 'Популярные', icon: Flame, on: false },
  { label: 'Покупка Бонуса', icon: ShoppingBag, on: false },
  { label: 'Новинки', icon: Sparkles, on: false },
]

const games = [
  { name: 'Gemstones Gold', provider: 'Pegasus', img: '/img/tile-gemstones.jpg', alt: 'Слот Gemstones Gold — золото и самоцветы' },
  { name: 'Devil Fire Bonus$ Coin', provider: 'BGaming', img: '/img/tile-devilfire.jpg', alt: 'Слот Devil Fire Bonus Coin — чертёнок с монетой' },
  { name: 'Anubis Wrath', provider: 'Evoplay', img: '/img/tile-anubis.jpg', alt: 'Слот Anubis Wrath — статуя Анубиса' },
  { name: 'Crown Coins', provider: 'Evoplay', img: '/img/tile-crown.jpg', alt: 'Слот Crown Coins — золотая монета с короной' },
  { name: 'Gates of Olympus Super Scatter', provider: 'Pragmatic', img: '/img/tile-olympus.jpg', alt: 'Слот Gates of Olympus Super Scatter — Зевс с молнией' },
  { name: 'Sweet Bonanza 2500', provider: 'Pragmatic', img: '/img/tile-sweet.jpg', alt: 'Слот Sweet Bonanza 2500 — леденец и сладости' },
  { name: 'Wild Bounty Showdown', provider: 'Pegasus', img: '/img/tile-bounty.jpg', alt: 'Слот Wild Bounty Showdown — ковбой в шляпе' },
]

export default function FirstScreen() {
  return (
    <>
      <header className="w7k2-topbar" id="w7k2-top">
        <div className="w7k2-chiprow">
          {topChips.map((chip) => (
            <button key={chip.label} type="button" className="w7k2-chip">
              <chip.icon size={16} aria-hidden="true" />
              {chip.label}
            </button>
          ))}
        </div>
        <a className="w7k2-auth" href="#w7k2-s5">
          Зарегистрироваться / Войти
        </a>
      </header>

      <section className="w7k2-herorow" aria-label="Акции Lucky Bear Casino">
        <div className="w7k2-hero">
          <img
            className="w7k2-heroart"
            src="/img/hero-olympus.jpg"
            alt="Баннер Gates of Olympus 2500 в Lucky Bear Casino — Зевс с молниями"
            width={1280}
            height={640}
            fetchPriority="high"
          />
          <div className="w7k2-heroveil" aria-hidden="true" />
          <div className="w7k2-herotext">
            <p className="w7k2-prov">
              <i aria-hidden="true" />
              Pragmatic Play
            </p>
            <h1 className="w7k2-h1">
              Максимальный выигрыш в Lucky Bear Casino — до <span>{'25\u00A0000x'}</span>
            </h1>
            <p className="w7k2-rtp">RTP: 96.52%</p>
            <p className="w7k2-scatter">4+ Scatter запускают одну из 4 бонусных игр с одиночным множителем до 2 500x</p>
          </div>
        </div>

        <div className="w7k2-promos">
          <article className="w7k2-promo">
            <img src="/img/promo-wheel.jpg" alt="Колесо фортуны и подарки акции Lucky Bonus" width={560} height={420} loading="lazy" />
            <p className="w7k2-promolabel">Ежедневно разыгрывается более</p>
            <p className="w7k2-promosum">5 000 000 ₽</p>
            <span className="w7k2-promotag">Акция Lucky Bonus</span>
          </article>
          <article className="w7k2-promo">
            <img src="/img/promo-fs.jpg" alt="Игрока Lucky Bear Casino ждут бесплатные фриспины" width={560} height={420} loading="lazy" />
            <h3>Твои FS уже ждут</h3>
            <p>Просто пополняй счёт — и получай бесплатные FS</p>
            <button type="button" className="w7k2-promobtn">
              Получить FS
            </button>
          </article>
        </div>
      </section>

      <nav className="w7k2-cats" aria-label="Категории игр">
        {cats.map((cat) => (
          <button key={cat.label} type="button" className="w7k2-cat" data-on={cat.on}>
            <cat.icon size={15} aria-hidden="true" />
            {cat.label}
          </button>
        ))}
        <span className="w7k2-caticon" role="img" aria-label="Поиск игр">
          <Search size={16} aria-hidden="true" />
        </span>
        <span className="w7k2-provsel">
          Провайдеры
          <ChevronDown size={15} aria-hidden="true" />
        </span>
      </nav>

      <p className="w7k2-gridhead">
        <Dice6 size={16} aria-hidden="true" />
        Слоты
      </p>
      <section className="w7k2-grid" aria-label="Популярные слоты Lucky Bear Casino">
        {games.map((game) => (
          <figure key={game.name} className="w7k2-tile">
            <img src={game.img} alt={game.alt} width={400} height={500} loading="lazy" />
            <figcaption>
              <b>{game.name}</b>
              <span className="w7k2-tileprov">{game.provider}</span>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  )
}
