import SpywareDetector from "src/assets/images/spyware-detector.png";
import TrackerDetector from "src/assets/images/tracker-detector.png";
import SocialProtection from "src/assets/images/social-protection.png";
import CallRecorderBlocker from "src/assets/images/call-recorder.png";
import ScreenRecordingBlocker from "src/assets/images/screen-recording.png";

import { ReactComponent as Circles } from "src/assets/images/circles.svg";
import { ReactComponent as Bell } from "src/assets/images/bell.svg";
import { ReactComponent as ThreDots } from "src/assets/images/three-dots.svg";
import { ReactComponent as Eye } from "src/assets/images/eye.svg";
import { ReactComponent as Location } from "src/assets/images/location.svg";
import { ReactComponent as Compass } from "src/assets/images/compass.svg";
import { ReactComponent as Observe } from "src/assets/images/observe.svg";
import { ReactComponent as Antivirus } from "src/assets/images/antivirus.svg";
import { ReactComponent as Device } from "src/assets/images/device.svg";
import { ReactComponent as Widget } from "src/assets/images/widget.svg";
import { ReactComponent as Alert } from "src/assets/images/alert.svg";
import { ReactComponent as Anonymous } from "src/assets/images/anonymous.svg";
import { ReactComponent as StopRecording } from "src/assets/images/stop-recording.svg";

export const featuresList = [
  {
    bg: "main.1",
    imgSrc: SpywareDetector,
    title: "Spyware detector",
    subtitle: "Find apps secretly spying on you and your data.",
    featurePoints: [
      {
        icon: Circles,
        text: "Full background anti-spyware scan",
      },
      {
        icon: Bell,
        text: "Instant spyware detection alerts",
      },
      {
        icon: ThreDots,
        text: "Immediate threat quarantining",
      },
    ],
  },
  {
    bg: "#F6EDFA",
    imgSrc: TrackerDetector,
    title: "Tracker detector",
    subtitle: "Discover who tracks your location to spy on you.",
    featurePoints: [
      {
        icon: Eye,
        text: "Stop being secretly tracked",
      },
      {
        icon: Location,
        text: "Protect your real location",
      },
      {
        icon: Compass,
        text: "Control who sees your location",
      },
    ],
  },
  {
    bg: "main.3",
    imgSrc: SocialProtection,
    title: "Social media protection",
    subtitle: "Easily prevent social media account hacks.",
    featurePoints: [
      {
        icon: Observe,
        text: "See who uses your accounts",
      },
      {
        icon: Antivirus,
        text: "Revoke access for other users",
      },
      {
        icon: Bell,
        text: "Get unauthorized login alerts",
      },
    ],
  },
  {
    bg: "main.2",
    imgSrc: CallRecorderBlocker,
    title: "Call recorder blocker",
    subtitle: "Discover if someone records your calls and chats.",
    featurePoints: [
      {
        icon: Device,
        text: "See who uses your accounts",
      },
      {
        icon: Widget,
        text: "Revoke access for other users",
      },
      {
        icon: Alert,
        text: "Get unauthorized login alerts",
      },
    ],
  },
  {
    bg: "main.1",
    imgSrc: ScreenRecordingBlocker,
    title: "Screen recording detector",
    subtitle: "Don’t let anyone access your phone screen.",
    featurePoints: [
      {
        icon: Anonymous,
        text: "Find out if your screen is being recorded",
      },
      {
        icon: StopRecording,
        text: "Immediately stop silent recordings",
      },
      {
        icon: Bell,
        text: "Get alerts if your camera is in use",
      },
    ],
  },
];
