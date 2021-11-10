export interface WorkCard {
  id: number;
  title: string;
  description: string;
  tags: string;
  site: string;
  bg: string;
  faved?: boolean;
  bgPosition: "right" | "left" | "center";
}

export const workCards: Record<string, WorkCard[]> = {
  en: [
    {
      id: 1,
      title: "Push Notification & PWA for OpenCart 3.x",
      description:
        "First fully owned, no limitation, no API requests push notification extension for OpenCart e-commerce platform. This is actualy made due to a request from a friend, I'm not a PHP guy, but hey, anything can be done! .",
      tags: "Push Notifications, PWA, OpenCart, PHP, MySQL",
      site: "https://github.com/aldabil21/opencart-easywebpush",
      faved: true,
      bg: "/images/work/webpush_dashboard.png",
      bgPosition: "center",
    },
    {
      id: 2,
      title: "Future Pack E-commerce & Quotation System",
      description:
        "E-commerce platform for a packaging & printing company in Saudi Arabia. The main request of the company for this website is to have the ability to make a complicated & flexible pricing for each product item, also ability to request quotation with custom requirements for the same product. SEO efforts were taking care of nicely in this project, such as product carousels snippets and other JSON+ld scripts.",
      tags: "E-commerce, SEO, Web-service, Full-stack, Next",
      site: "https://future-pack.com",
      faved: true,
      bg: "/images/work/future-pack.jpg",
      bgPosition: "right",
    },
    {
      id: 3,
      title: "Bayader Aljazeera E-commerce & Quotation System",
      description:
        "Custom developed e-commerce platform for a packaging & printing company in Saudi Arabia. The company used to issue quotations to their clients manually by calculating the specification of each package, which was tedius and error prone. So an automated system was developed to calculate & issue quotations to clients automatically with accurate pricing. The system also includes an appointment/calendar system for the company employees to arrange for thier client visits and tracking, as well as a job order tracking system to track each order between sales, package designers, package production and management.",
      tags: "E-commerce, Web-service, Full-stack, Nextjs",
      site: "https://bayaderpack.com",
      faved: true,
      bg: "/images/work/bayader-packaging.jpg",
      bgPosition: "right",
    },
    {
      id: 4,
      title: "Unayzah.com e-commerce web & mobile app",
      description:
        "E-commerce website using opencart with custom developed functionality to allow sellers to open stores and have their own sales dashboard. Also developed a mobile app using Flutter and pubilshed successfully to the app store.",
      tags: "Opencart, Flutter, Mobile, E-commerce",
      site: "https://play.google.com/store/apps/details?id=com.wakaed.unayzah_shopping",
      bg: "/images/work/unayzah.jpg",
      bgPosition: "center",
      faved: true,
    },
    {
      id: 5,
      title: "React Scheduler Component",
      description:
        "Simplified Scheduler componenet for React, easy to use & customize, more light/simplified than other react scheduler libs out there. I created this for one of my projects that used calendar/event system, I check some of the most famous components out there and thought that It doesn't fit my use case and I needed my own implementations to fit more perfectly in the current project.",
      tags: "React, NPM, Webpack, Custom",
      site: "https://github.com/aldabil21/react-scheduler",
      bg: "/images/work/react-scheduler.jpg",
      bgPosition: "left",
      faved: true,
    },
    {
      id: 6,
      title: "Wakaed for IT website",
      description:
        "A porfolio for Wakaed IT company, I used be working here for a short period of time as I was transitioning for one city to another. This is made with mostly a plain vanilla JS, no modren JS lib been used",
      tags: "JS, Portfolio",
      site: "https://wakaed.sa",
      bg: "/images/work/wakaed.jpg",
      bgPosition: "left",
    },
    {
      id: 7,
      title: "Puhua International Hostpital",
      description:
        "Wordpress website for an international hospital in Beijing. Nothing so special about it quite frankly, I used to work here fulltime in IT dept. Where I also helped in website dev & management and some e-marketing stuff.",
      tags: "Wordpress, portfolio",
      site: "http://beijingpuhua.com",
      bg: "/images/work/beijing-puhua.jpg",
      bgPosition: "center",
    },
  ],
  ar: [],
};
