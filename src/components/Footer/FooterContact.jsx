import { footerContacts } from 'Data-center/footer.data';
import React from 'react';

const FooterContact = () => {
  return (
    <div className="flex flex-col lg:flex-row text-center justify-center items-center leading-relaxed my-4 tracking-wider text-white text-base lg:text-lg font-medium gap-2 lg:gap-0">
      {footerContacts.map((item, index) => {
        const Icon = item.icon;
        return (
          <React.Fragment key={item.id}>
            <span className="flex items-center gap-2">
              <Icon />
              {item.text}
            </span>

            {index === 0 && <span className="hidden lg:block mx-1">|</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default FooterContact;
