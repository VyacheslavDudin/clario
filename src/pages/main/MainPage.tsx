import { Layout } from "src/layouts";
import {
  IntroSection,
  FeaturesSection,
  StepsSection,
  PricingSection,
} from "./containers";

export function MainPage() {
  return (
    <Layout>
      <IntroSection />
      <FeaturesSection />
      <StepsSection />
      <PricingSection />
    </Layout>
  );
}
