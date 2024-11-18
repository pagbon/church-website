import Icon from "@/components/common/Icon.vue";
import PageHeader from "@/components/common/PageHeader.vue";
import AboutAbout2Contact from "@/components/about/about-2/Contact.vue";
import BlocksAboutFeatures6 from "@/components/blocks/about/Features6.vue";
import BlocksPortfolioPortfolio9 from "@/components/blocks/portfolio/Portfolio9.vue";
import ContactContact2ContactInfo from "@/components/contact/contact-2/ContactInfo.vue";
import CommonScrolltop from "@/components/common/Scrolltop.vue";
import BlocksAboutFeatures5 from "@/components/blocks/about/Features5.vue";
import FootersFooter25 from "@/components/footers/Footer25.vue";
import FootersComponentsSocials from "@/components/footers/components/Socials.vue";
import HeadersHeader16 from "@/components/headers/Header16.vue";
import HeadersHeader1 from "@/components/headers/Header1.vue";
import HomesHome15Hero from "@/components/homes/home-15/Hero.vue";
import HomesHome15Contact from "@/components/homes/home-15/Contact.vue";
import HomesHome15Count from "@/components/homes/home-15/Count.vue";
import HomesHome15Features from "@/components/homes/home-15/Features.vue";
import HomesHome15Team from "@/components/homes/home-15/Team.vue";
import HomesHome15Steps from "@/components/homes/home-15/Steps.vue";
import HomesHome15Testimonials from "@/components/homes/home-15/Testimonials.vue";




export const globalRegisTrationComponents = (app) => {
  app
    .component("Icon", Icon)
    .component("PageHeader", PageHeader)
    .component("AboutAbout2Contact", AboutAbout2Contact)
    .component("BlocksAboutFeatures6", BlocksAboutFeatures6)
    .component("BlocksPortfolioPortfolio9", BlocksPortfolioPortfolio9)
    .component("BlocksAboutFeatures5", BlocksAboutFeatures5)
    .component("ContactContact2ContactInfo", ContactContact2ContactInfo)
    .component("CommonScrolltop", CommonScrolltop)
    .component("FootersFooter25", FootersFooter25)
    .component("FootersComponentsSocials", FootersComponentsSocials)
    .component("HeadersHeader1", HeadersHeader1)
    .component("HeadersHeader16", HeadersHeader16)
    .component("HomesHome15Hero", HomesHome15Hero)
    .component("HomesHome15Contact", HomesHome15Contact)
    .component("HomesHome15Count", HomesHome15Count)
    .component("HomesHome15Steps", HomesHome15Steps)
    .component("HomesHome15Team", HomesHome15Team)
    .component("HomesHome15Testimonials", HomesHome15Testimonials)
    .component("HomesHome15Features", HomesHome15Features) 
};















