import { Accordion, AccordionItem, AccordionTrigger } from 'components/UI_reusables/ui/accordion';
import { footerLinks } from 'Data-center/footer.data';
import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterLinks = () => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 text-white text-base lg:text-lg font-medium">
      {footerLinks.map(link =>
        link.label === 'Menu' ? (
          <li key={link.id}>
            <Accordion
              type="single"
              collapsible
              className="w-20"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="text-white hover:text-[#343333] hover-no-underline px-4 py-2">
                  <NavLink to={link.url}>{link.label}</NavLink>
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </li>
        ) : (
          <li key={link.id}>{link.label}</li>
        )
      )}
    </ul>
  );
};

export default FooterLinks;
