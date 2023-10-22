declare module "*.module.css";
declare module '*.mp4';
declare module '*.png';
declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>
}
/// <reference types="vite/client" />
