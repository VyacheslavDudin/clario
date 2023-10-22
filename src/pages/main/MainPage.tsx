import { Layout } from "src/layouts";
import { IntroSection, FeaturesSection } from "./containers";

export function MainPage() {
  return (
    <Layout>
      <IntroSection />
      <FeaturesSection />
    </Layout>
  );
}
