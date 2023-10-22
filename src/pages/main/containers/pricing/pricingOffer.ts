import { ReactComponent as Devices } from "src/assets/images/devices.svg";
import { ReactComponent as AntiSpy } from "src/assets/images/anti-spy.svg";
import { ReactComponent as Unlimited } from "src/assets/images/unlimited.svg";
import { ReactComponent as Messages } from "src/assets/images/messages.svg";
import { ReactComponent as Downloads } from "src/assets/images/100k-downloads.svg";
import { ReactComponent as MoneyBack } from "src/assets/images/money-back.svg";

export const pricingFeatures = [
  {
    text: "Protection for 3 devices",
    icon: Devices,
  },
  {
    text: "Anti-spy checkup",
    icon: AntiSpy,
  },
  {
    text: "Unlimited access to anti-spying tools",
    icon: Unlimited,
  },
  {
    text: "24/7 help from security experts",
    icon: Messages,
  },
];

export const smallOffers = [
  {
    text: "30-day money-back guarantee",
    icon: MoneyBack,
  },
  {
    text: "100.000 + downloads",
    icon: Downloads,
  },
];
