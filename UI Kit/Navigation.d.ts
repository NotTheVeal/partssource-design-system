import * as React from 'react';

export interface TopNavProps {
  logoSrc?: string;
  searchPlaceholder?: string;
  cartCount?: number;
  facilityLabel?: string;
  facilityName?: string;
  heroTitle?: React.ReactNode;
  proAccountLogo?: string;
  onSearch?: (q: string) => void;
  onCartClick?: () => void;
  onHomeClick?: () => void;
  className?: string;
}

export interface LeftNavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
  hasChevron?: boolean;
}

export interface LeftNavProps {
  userInitials?: string;
  userName?: string;
  items: LeftNavItem[];
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  onLogout?: () => void;
  className?: string;
}

export declare const TopNav: React.FC<TopNavProps>;
export declare const LeftNav: React.FC<LeftNavProps>;
