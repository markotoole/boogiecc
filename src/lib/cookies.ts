export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export const defaultCookiePreferences: CookiePreferences = {
  necessary: true, // Always true - required for site functionality
  analytics: false,
  marketing: false,
  preferences: false,
};

const COOKIE_CONSENT_KEY = 'boogie-cookie-consent';
const COOKIE_PREFERENCES_KEY = 'boogie-cookie-preferences';

// Check if cookies have been configured
export function hasConsentBeenGiven(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) !== null;
}

// Get current cookie preferences
export function getCookiePreferences(): CookiePreferences {
  if (typeof window === 'undefined') return defaultCookiePreferences;
  
  const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!stored) return defaultCookiePreferences;
  
  try {
    const parsed = JSON.parse(stored);
    return { ...defaultCookiePreferences, ...parsed };
  } catch {
    return defaultCookiePreferences;
  }
}

// Save cookie preferences
export function setCookiePreferences(preferences: CookiePreferences): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
  
  // Dispatch a custom event to notify other components
  window.dispatchEvent(new CustomEvent('cookiePreferencesChanged', { 
    detail: preferences 
  }));
}

// Accept all cookies
export function acceptAllCookies(): void {
  setCookiePreferences({
    necessary: true,
    analytics: true,
    marketing: true,
    preferences: true,
  });
}

// Reject all non-essential cookies
export function rejectAllCookies(): void {
  setCookiePreferences({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
}

// Check if specific cookie type is allowed
export function isCookieTypeAllowed(type: keyof CookiePreferences): boolean {
  const preferences = getCookiePreferences();
  return preferences[type];
}

// Reset all cookie preferences (for testing)
export function resetCookiePreferences(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  localStorage.removeItem(COOKIE_PREFERENCES_KEY);
  
  // Dispatch event to notify components
  window.dispatchEvent(new CustomEvent('cookiePreferencesChanged', { 
    detail: defaultCookiePreferences 
  }));
}
