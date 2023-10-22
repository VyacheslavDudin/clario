import { Layout } from "src/layouts";
import {
  IntroSection,
  FeaturesSection,
  StepsSection,
  PricingSection,
  CarouselSection,
  FooterActionSection,
} from "./containers";

export function MainPage() {
  return (
    <Layout>
      <IntroSection />
      <FeaturesSection />
      <StepsSection />
      <PricingSection />
      <CarouselSection />
      <FooterActionSection />
    </Layout>
  );
}
