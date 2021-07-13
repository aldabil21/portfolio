export interface WorkCard {
  id: number;
  title: string;
  description: string;
  tags: string;
  site: string;
  faved?: boolean;
  bg: string;
}

export const workCards: Record<string, WorkCard[]> = {
  en: [
    {
      id: 1,
      title: "Bayader Aljazeera E-commerce & Quotation System",
      description:
        "Custom developed e-commerce platform for a packaging & printing company in Saudi Arabia. The company used to issue quotations to their clients manually by calculating the specification of each package, which was tedius and error prone. So an automated system was developed to calculate & issue quotations to clients automatically with accurate pricing. The system also includes an appointment/calendar system for the company employees to arrange for thier client visits and tracking, as well as a job order tracking system to track each order between sales, package designers, package production and management.",
      tags: "E-commerce, Web-service, Full-stack, Nextjs",
      site: "https://bayaderpack.com",
      faved: true,
      bg: "/images/work/bayader-packaging.jpg",
    },
    {
      id: 2,
      title: "Puhua International Hostpital",
      description:
        "Wordpress website for an international hospital in Beijing. Nothing so special about it quite frankly, I used to work here fulltime in IT dept. Where I also helped in website dev & management and some e-marketing stuff.",
      tags: "Wordpress, portfolio",
      site: "http://beijingpuhua.com",
      bg: "/images/work/beijing-puhua.jpg",
    },
    {
      id: 3,
      title: "React Scheduler Component",
      description:
        "Simplified Scheduler componenet for React, easy to use & customize, more light/simplified than other react scheduler libs out there. I created this for one of my projects that used calendar/event system, I check some of the most famous components out there and thought that It doesn't fit my use case and I needed my own implementations to fit more perfectly in the current project.",
      tags: "React, NPM, Webpack, Custom",
      site: "https://github.com/aldabil21/react-scheduler",
      faved: true,
      bg: "/images/work/react-scheduler.jpg",
    },
  ],
  ar: [],
};
