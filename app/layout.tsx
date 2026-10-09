import { Manrope, Unbounded } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-manrope',
})

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '700', '800'],
  variable: '--font-unbounded',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${unbounded.variable}`}>
      <head>
        <meta name="yandex-verification" content="6c139574a1d45923" />
        <title>Lucky Bear Casino — LuckyBear Casino официальный сайт: зеркало, вход, бонусы</title>
        <meta
          name="description"
          content="LuckyBear Casino официальный сайт — Лаки Бир Казино онлайн: рабочее зеркало, регистрация и вход, бонусы и промокоды. Слоты Lucky Bear Casino с быстрыми выплатами на ПК и телефоне, поддержка 24/7."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://luckybear34casino.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luckybear34casino.vercel.app/" />
        <meta property="og:title" content="Lucky Bear Casino — LuckyBear Casino официальный сайт: зеркало, вход, бонусы" />
        <meta
          property="og:description"
          content="LuckyBear Casino официальный сайт — Лаки Бир Казино онлайн: рабочее зеркало, регистрация и вход, бонусы и промокоды. Слоты Lucky Bear Casino с быстрыми выплатами на ПК и телефоне, поддержка 24/7."
        />
        <meta property="og:image" content="https://luckybear34casino.vercel.app/img/hero-olympus.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Lucky Bear Casino" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lucky Bear Casino — LuckyBear Casino официальный сайт: зеркало, вход, бонусы" />
        <meta
          name="twitter:description"
          content="LuckyBear Casino официальный сайт — Лаки Бир Казино онлайн: рабочее зеркало, регистрация и вход, бонусы и промокоды. Слоты Lucky Bear Casino с быстрыми выплатами на ПК и телефоне, поддержка 24/7."
        />
        <meta name="twitter:image" content="https://luckybear34casino.vercel.app/img/hero-olympus.jpg" />
        <meta name="theme-color" content="#0a0e14" />
      </head>
      <body>{children}</body>
    </html>
  )
}
