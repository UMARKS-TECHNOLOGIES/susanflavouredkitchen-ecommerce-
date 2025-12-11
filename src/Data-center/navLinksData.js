const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Menu',
    dropdown: [
      { name: 'All', path: '/menu' },
      { name: 'Soups and Stew', path: '/menu' },
      { name: 'Rice', path: '/menu' },
      { name: 'Snacks & Pastries', path: '/menu' },
      { name: 'Drinks', path: '/menu' },
    ],
    href: '/menu',
  },
  {
    name: 'Event Catering',
    href: '/event',
  },
  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact-us',
  },
];

export default navLinks;
