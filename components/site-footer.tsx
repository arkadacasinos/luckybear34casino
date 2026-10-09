const hashtags = [
  { tag: '#Lucky_Bear_Casino', href: '#w7k2-s1' },
  { tag: '#LuckyBearCasino', href: '#w7k2-s2' },
  { tag: '#LuckyBearCasinoЗеркало', href: '#w7k2-s3' },
  { tag: '#LuckyBearCasinoОфициальный', href: '#w7k2-s4' },
  { tag: '#LuckyBearCasinoОфициальныйСайт', href: '#w7k2-s5' },
  { tag: '#Lucky_Bear_Казино', href: '#w7k2-s6' },
  { tag: '#ЛакиБирКазино', href: '#w7k2-s7' },
  { tag: '#ЛакибирКазино', href: '#w7k2-s8' },
  { tag: '#ЛакиБирКазиноЗеркало', href: '#w7k2-s9' },
  { tag: '#ЛакиБирКазиноОнлайн', href: '#w7k2-s10' },
  { tag: '#ЛакиБирКазиноОфициальный', href: '#w7k2-s11' },
  { tag: '#ЛакиБирКазиноОфициальныйСайт', href: '#w7k2-s12' },
  { tag: '#ЛакибирКазиноОфициальныйСайт', href: '#w7k2-s13' },
  { tag: '#ЛакиБирКазиноСайт', href: '#w7k2-s14' },
]

export default function SiteFooter() {
  return (
    <footer className="w7k2-foot">
      <div className="w7k2-foothead">
        <a className="w7k2-logo" href="#w7k2-top" aria-label="Lucky Bear Casino — наверх">
          <img src="/icon.png" alt="" width={34} height={34} loading="lazy" />
          <span aria-hidden="true">
            <b>Lucky</b>Bear
          </span>
        </a>
        <span className="w7k2-age" aria-label="Только для совершеннолетних">
          18+
        </span>
      </div>
      <nav className="w7k2-tags" aria-label="Поиск по разделам страницы">
        {hashtags.map((item) => (
          <a key={item.tag} href={item.href}>
            {item.tag}
          </a>
        ))}
      </nav>
      <p className="w7k2-footnote">
        Информационная страница о платформе Lucky Bear Casino: lucky bear casino, luckybear casino, luckybear casino
        зеркало, luckybear casino официальный, luckybear casino официальный сайт, lucky bear казино, лаки бир казино,
        лакибир казино, лаки бир казино зеркало, лаки бир казино онлайн, лаки бир казино официальный, лаки бир казино
        официальный сайт, лакибир казино официальный сайт, лаки бир казино сайт. Азартные игры могут вызывать зависимость.
        Играйте ответственно и только на средства, которые готовы потратить. Материалы страницы не являются публичной
        офертой. © 2026 Lucky Bear Casino.
      </p>
    </footer>
  )
}
