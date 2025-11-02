import baseCS from './cs/base.cs.json';
import homeCS from './cs/home.cs.json';
import menuCS from './cs/menu.cs.json';
import aboutusCS from './cs/aboutus.cs.json';
import deliveryCS from './cs/delivery.cs.json';
import adminCS from './cs/admin.cs.json';
import contactUsCS from './cs/contact-us.cs.json';
import rentingCS from './cs/renting.cs.json';
import contactCS from './cs/contact.cs.json';
import voucherCS from './cs/voucher.cs.json';

export const messages = {
  cs: {
    base: baseCS,
    home: homeCS,
    aboutus: aboutusCS,
    menu: menuCS,
    delivery: deliveryCS,
    admin: adminCS,
    contact_us: contactUsCS,
    renting: rentingCS,
    contact: contactCS,
    voucher: voucherCS,
  },
};

const PAGES_DEFINITION = {
  delivery: '/obedy-do-firem',
  voucher: '/darkovy-poukaz',
  aboutus: '/nas-tym',
  index: '/',
  contact: '/kontakt',
  login: '/login',
  menu: '/menu',
  renting: '/pronajem',
  'admin-home': '/admin/home',
  'admin-edit-post-[id]': '/admin/uprava/prispevek/[id]',
  '403': '/403',
  'blog-index': '/blog',
  'blog-[category]-index': '/blog/[category]',
  'blog-[category]-[seo-name]': '/blog/[category]/[seo-name]',
};

function* generatePages() {
  for (const [page, path] of Object.entries(PAGES_DEFINITION)) {
    yield [page, { cs: path }];
  }
}

export const pages = {
  ...Object.fromEntries(generatePages()),
};
