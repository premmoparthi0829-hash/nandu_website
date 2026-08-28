export type DesignTheme = 'mint' | 'peach' | 'coral' | 'cream';

export interface ThemeConfig {
  id: DesignTheme;
  name: string;
  badge: string;
  bgHex: string;
  btnDark: string;
  headline: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  statBadge: string;
  badgeBg: string;
  description: string;
  deliverables: string[];
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  subtitle?: string;
  iconName: string;
  glowColor?: string;
  badgeBg?: string;
  textColor?: string;
  accentColor?: string;
}

export interface InquiryForm {
  name: string;
  email: string;
  serviceType: string;
  message: string;
}
