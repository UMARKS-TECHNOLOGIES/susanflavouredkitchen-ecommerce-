import { paymentLogos, socialIcons } from 'Data-center/footer.data';
import React from 'react';

const FooterPayments = () => {
  return (
    <div className="flex items-center gap-3 mt-4 lg:mt-0">
      {paymentLogos.map(logo => (
        <img key={logo.id} src={logo.src} alt="" className="w-10" />
      ))}

      {socialIcons.map(item => {
        const Icon = item.icon;
        return <Icon key={item.id} className="text-xl text-white" />;
      })}
    </div>
  );
};

export default FooterPayments;
