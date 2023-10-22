import { Layout } from "src/layouts";
import { IntroSection, FeaturesSection, StepsSection } from "./containers";

export function MainPage() {
  return (
    <Layout>
      <IntroSection />
      <FeaturesSection />
      <StepsSection />
    </Layout>
  );
}
