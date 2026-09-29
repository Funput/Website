import { FUNPUT_CONSTANTS } from './constants';

export type PlatformId = 'macos' | 'windows' | 'linux' | 'ios' | 'android';

export type Platform = {
  id: PlatformId;
  name: string;
  blurb: string;
  bullets: string[];
  badge: string;
  iconSrc: string;
  iconAlt: string;
  screenshotSrc: string;
  screenshotAlt: string;
  screenshotWidth: number;
  screenshotHeight: number;
  /** Narrow phone-style screenshot framing */
  phoneFrame?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

export const PLATFORMS: Platform[] = [
  {
    id: 'macos',
    name: 'macOS',
    blurb: 'Tích hợp vào nguồn nhập của macOS, với kiểu gõ Telex và VNI quen thuộc.',
    bullets: [
      'Cần macOS 26 (Tahoe) trở lên',
      'Chạy trên Mac Apple Silicon và Intel',
      'Bản .app.zip không cần quyền admin',
    ],
    badge: 'Sẵn sàng',
    iconSrc: '/apple.svg',
    iconAlt: 'Apple',
    screenshotSrc: '/brand/screenshots/macos.png',
    screenshotAlt: 'Giao diện Funput trên macOS',
    screenshotWidth: 960,
    screenshotHeight: 756,
    ctaLabel: 'Xem bản Mac trên GitHub',
    ctaHref: FUNPUT_CONSTANTS.RELEASES_URL,
  },
  {
    id: 'windows',
    name: 'Windows',
    blurb: 'Đã có trên Microsoft Store. Cài dễ dàng, mở lên là gõ tiếng Việt ngay.',
    bullets: [
      'Cần Windows 10 phiên bản 1809 trở lên · Windows 11',
      'Cài đặt và cập nhật qua Microsoft Store',
      'Giao diện làm riêng cho Windows',
    ],
    badge: 'Microsoft Store',
    iconSrc: '/windows.svg',
    iconAlt: 'Windows',
    screenshotSrc: '/brand/screenshots/windows.png',
    screenshotAlt: 'Giao diện Funput trên Windows',
    screenshotWidth: 960,
    screenshotHeight: 756,
    ctaLabel: 'Tải trên Microsoft Store',
    ctaHref: FUNPUT_CONSTANTS.WINDOWS_STORE_URL,
  },
  {
    id: 'linux',
    name: 'Linux',
    blurb: 'Dùng được với Fcitx5 hoặc IBus — cùng một cách gõ tiếng Việt quen thuộc.',
    bullets: [
      'Tương thích Fcitx5 và IBus',
      'Bản phát hành cho máy x86-64',
      'Có gói cài riêng cho từng bộ gõ hệ thống',
    ],
    badge: 'Sẵn sàng',
    iconSrc: '/linux.svg',
    iconAlt: 'Linux',
    screenshotSrc: '/brand/screenshots/linux.png',
    screenshotAlt: 'Giao diện Funput trên Linux',
    screenshotWidth: 960,
    screenshotHeight: 878,
    ctaLabel: 'Xem hướng dẫn cài đặt',
    ctaHref: FUNPUT_CONSTANTS.LINUX_DOCS_URL,
  },
  {
    id: 'ios',
    name: 'iOS',
    blurb: 'Bàn phím tiếng Việt cho iPhone và iPad.',
    bullets: [
      'Gõ Telex và VNI',
      'Cần iOS 18.6 trở lên',
      'Liquid Glass trên iOS 26; vẫn dùng tốt từ iOS 18.6',
    ],
    badge: 'Sẵn sàng',
    iconSrc: '/ios.svg',
    iconAlt: 'iOS',
    screenshotSrc: '/brand/screenshots/ios.png',
    screenshotAlt: 'Bàn phím Funput trên iOS',
    screenshotWidth: 420,
    screenshotHeight: 884,
    phoneFrame: true,
    ctaLabel: 'Tải trên App Store',
    ctaHref: FUNPUT_CONSTANTS.IOS_APP_STORE_URL,
  },
  {
    id: 'android',
    name: 'Android',
    blurb: 'Bàn phím tiếng Việt cho điện thoại và máy tính bảng Android.',
    bullets: [
      'Cần Android 8.0 (API 26) trở lên',
      'Gõ Telex và VNI',
      'Giao diện làm riêng cho Android',
    ],
    badge: 'Sẵn sàng',
    iconSrc: '/android.svg',
    iconAlt: 'Android',
    screenshotSrc: '/brand/screenshots/android.png',
    screenshotAlt: 'Bàn phím Funput trên Android',
    screenshotWidth: 420,
    screenshotHeight: 884,
    phoneFrame: true,
    ctaLabel: 'Tải trên Google Play',
    ctaHref: FUNPUT_CONSTANTS.ANDROID_PLAY_STORE_URL,
  },
];
