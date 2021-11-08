import IVSPlayer from 'amazon-ivs-player';

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.svg';

declare global {
  interface Window {
    IVSPlayer;
  }
}
