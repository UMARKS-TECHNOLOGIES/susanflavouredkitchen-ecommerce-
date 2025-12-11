import { MdOutlineMail } from 'react-icons/md';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { LuInstagram } from 'react-icons/lu';
import MasterCard from '../assets/mastercard-transparent.png';
import Visa from '../assets/visaimg-transparent.png';

export const footerLinks = [
  { id: 1, label: 'Menu', url: '/' },
  { id: 2, label: 'Event Catering', url: '/event-catering' },
  { id: 3, label: 'About Us', url: '/about' },
  { id: 4, label: 'Contact', url: '/contact' },
];

export const footerContacts = [
  {
    id: 1,
    icon: HiOutlineDevicePhoneMobile,
    text: '07387044524',
  },
  {
    id: 2,
    icon: MdOutlineMail,
    text: 'Susanflavouredkitchen@gmail.com',
  },
];

export const paymentLogos = [
  { id: 1, src: MasterCard },
  { id: 2, src: Visa },
];

export const socialIcons = [{ id: 1, icon: LuInstagram }];
