const BREAKPOINT_MOBILE = 768;

const COLORS = {
  rosePink: '#BA5A87',
  'primary-darken-1': '#894163',
  secondary: '#7A5969',
  success: '#526552',
  'success-lighten-1': '#5A825A',
  error: '#301622',
  background: '#FFFFFF',
  info: '#BA5A87',
  'black-pearl': '#221C1F',
  lightPink: '#FFCDE4',
  lighterPink: '#FFEDF5',
  darkPink: '#C69BAF',
  softGreen: '#7E8F7E',
  footer: '#9F426E',
  BOLT: '#34BB78',
  FOODORA: '#D60265',
  WOLT: '#00C4E7',
};

type COLORS_NAME_TYPE = keyof typeof COLORS;

// 7 days
const SESSION_VALIDITY = 1000 * 60 * 60 * 24 * 7;
const AUTH_COOKIE_NAME = 'auth';

const STATIC_LINKS = {
  FACEBOOK: 'https://www.facebook.com/',
  INSTAGRAM: 'https://www.instagram.com/',
  TIKTOK: 'https://www.tiktok.com/',
  LOCATION: 'https://maps.app.goo.gl/Zd9HnQiWhVfxvsYd7',
  PHONE: 'tel:+420123456789',
  EMAIL: 'mailto:mail@placeholder.com',
  DELIVERY: {
    BOLT: 'https://food.bolt.eu/',
    FOODORA: 'https://www.foodora.cz/',
    WOLT: 'https://wolt.com/',
  },
  NAVIGATION: {
    GOOGLE_MAPS: 'https://maps.app.goo.gl/Zd9HnQiWhVfxvsYd7',
    MAPY_CZ: 'https://maps.app.goo.gl/Zd9HnQiWhVfxvsYd7',
  },
};

const STATIC_INFO = {
  ADDRESS: 'street 11, 123 45 CityName',
  PHONE: '+420 123 456 789',
  EMAIL: 'mail@placeholder.com',
  CIN: '123 45 678',
  RESPONSIBLE_PERSON: 'NAME SURNAME',
  COMPANY_NAME: 'BISTRO NAME',
};

export {
  BREAKPOINT_MOBILE,
  COLORS,
  SESSION_VALIDITY,
  AUTH_COOKIE_NAME,
  STATIC_LINKS,
  STATIC_INFO,
};
export type { COLORS_NAME_TYPE };
