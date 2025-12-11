import React from 'react';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterPayments from './FooterPayments';

const Footer = () => {
  return (
    <section className="bg-[#ff6e00]">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-center flex-col py-10">
          <FooterLinks />
          <FooterContact />
          <FooterPayments />
        </div>

        <p className="text-white text-sm lg:text-lg font-medium text-center pb-6 lg:pb-0">
          © 2025 Susanflavouredkitchen. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
