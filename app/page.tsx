import SiteRail from '@/components/site-rail'
import FirstScreen from '@/components/first-screen'
import SeoArticle from '@/components/seo-article'
import SiteFooter from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <div className="w7k2-shell">
        <SiteRail />
        <div className="w7k2-col">
          <FirstScreen />
          <SeoArticle />
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
