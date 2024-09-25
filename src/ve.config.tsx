import type { Config } from "@measured/puck";
import {
  HeroComponent as FinProHero,
  HeroProps as FinProHeroProps,
} from "./components/financial-professional/FinProHero";

import "@yext/visual-editor/style.css";
import {
  ServicesProps,
  ServicesComponent as Services,
} from "./components/financial-professional/Services";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {
  SocialPostsProps,
  SocialPostsComponent as SocialPosts,
} from "./components/SocialPosts";
import {
  LeadFormProps,
  LeadFormComponent as LeadForm,
} from "./components/financial-professional/LeadForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDocument } from "@yext/pages/util";
import { FinancialprofessionalStream } from "./types/autogen";
import {
  SectionBlockProps,
  SectionBlock as Section,
} from "./components/atoms/section";
import {
  ContainerProps,
  ContainerComponent as Container,
} from "./components/Container";
import {
  ColumnsProps,
  ColumnsComponent as Columns,
} from "./components/Columns";
import {
  HeadingBlockProps,
  HeadingBlock as Heading,
} from "./components/atoms/heading";
import { CTABlock as CTA, CTABlockProps } from "./components/atoms/cta";

import "@yext/visual-editor/style.css";

type FinancialProfessionalProps = {
  FinProHero: FinProHeroProps;
  Services: ServicesProps;
  SocialPosts: SocialPostsProps;
  LeadForm: LeadFormProps;
  Section: SectionBlockProps;
  Container: ContainerProps;
  Columns: ColumnsProps;
  Heading: HeadingBlockProps;
  CTA: CTABlockProps;
};

const queryClient = new QueryClient();

export const financialProfessionalConfig: Config<FinancialProfessionalProps> = {
  categories: {
    layout: {
      title: "Layout",
      components: ["Section", "Container", "Columns"],
    },
    text: {
      title: "Text",
      components: ["Heading"],
    },
    buttons: {
      title: "Buttons",
      components: ["CTA"],
    },
    content: {
      title: "Content",
      components: ["FinProHero", "Services", "SocialPosts", "LeadForm"],
    },
  },
  components: {
    Heading,
    FinProHero,
    Services,
    SocialPosts,
    LeadForm,
    Section,
    Container,
    Columns,
    CTA,
  },
  root: {
    render: ({ children }) => {
      const document = useDocument<FinancialprofessionalStream>();

      return (
        // <AnalyticsProvider
        //   apiKey={YEXT_PUBLIC_EVENTS_API_KEY}
        //   templateData={{ document }}
        //   productionDomains={["readily-sweeping-collie.sbx.pgsdemo.com"]}
        //   currency="USD"
        //   enableDebugging={YEXT_PUBLIC_ENV !== "prod"}
        // >
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <Footer />
        </QueryClientProvider>
        // </AnalyticsProvider>
      );
    },
    fields: {},
  },
};

export const componentRegistry = new Map<string, Config<any>>([
  ["Financial Professional", financialProfessionalConfig],
]);
