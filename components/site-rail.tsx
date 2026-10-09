import { Home, Dice5, Zap, Flame, ShoppingBag, Sparkles, Video, UserPlus, Gift, Wallet, User } from 'lucide-react'

const navItems = [
  { label: 'Главная', icon: Home, current: true },
  { label: 'Слоты', icon: Dice5, current: false },
  { label: 'Быстрые игры', icon: Zap, current: false },
  { label: 'Популярные', icon: Flame, current: false },
  { label: 'Покупка Бонуса', icon: ShoppingBag, current: false },
  { label: 'Новинки', icon: Sparkles, current: false },
  { label: 'Live-игры', icon: Video, current: false },
]

const footItems = [
  { label: 'Пригласить', icon: UserPlus },
  { label: 'Бонусы', icon: Gift },
  { label: 'Пополнить', icon: Wallet },
  { label: 'Профиль', icon: User },
]

export default function SiteRail() {
  return (
    <aside className="w7k2-rail">
      <div className="w7k2-railtop">
        <a className="w7k2-logo" href="#w7k2-top" aria-label="Lucky Bear Casino — на главную">
          <img src="/icon.png" alt="" width={34} height={34} />
          <span aria-hidden="true">
            <b>Lucky</b>Bear
          </span>
        </a>
        <span className="w7k2-lang">RU</span>
      </div>
      <div className="w7k2-seg" role="group" aria-label="Раздел площадки">
        <button type="button" data-on="true">
          Казино
        </button>
        <button type="button">Спорт</button>
      </div>
      <nav className="w7k2-nav" aria-label="Основное меню">
        {navItems.map((item) => (
          <a key={item.label} href="#w7k2-top" aria-current={item.current ? 'page' : undefined}>
            <item.icon size={16} aria-hidden="true" />
            {item.label}
          </a>
        ))}
      </nav>
      <div className="w7k2-railfoot">
        {footItems.map((item) => (
          <a key={item.label} className="w7k2-navlink" href="#w7k2-top" style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 12px', borderRadius: 10, color: 'var(--w7k2-dim)', fontSize: 13.5, fontWeight: 600, textDecoration: 'none' }}>
            <item.icon size={16} aria-hidden="true" />
            {item.label}
          </a>
        ))}
        <div className="w7k2-railsocial">
          <a className="w7k2-social" href="#w7k2-top" aria-label="Lucky Bear Casino во ВКонтакте">
            VK
          </a>
          <a className="w7k2-social" href="#w7k2-top" aria-label="Lucky Bear Casino в X">
            X
          </a>
          <a className="w7k2-social" href="#w7k2-top" aria-label="Lucky Bear Casino в Instagram">
            IG
          </a>
        </div>
      </div>
    </aside>
  )
}
