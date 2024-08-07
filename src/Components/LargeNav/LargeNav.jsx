/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { LiaIdCard } from 'react-icons/lia';
import { GrDocumentUser } from 'react-icons/gr';
import { RiContactsBookLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import NavBlocks from '../NavBlocks/NavBlocks';
import { setActivePage } from '../../store/pageSlice';

function LargeNav() {
  const dispatch = useDispatch();
  const handleMenuItemClick = (page) => {
    dispatch(setActivePage(page));
  };
  const activePage = useSelector((state) => state.page.activePage);
  return (
    <div className="bg-white dark:bg-gray-800 flex px-10 py-4 items-center justify-between w-[40em] rounded-2xl shadow-lg">
      <div onClick={() => handleMenuItemClick('About')}>
        {activePage === 'About' ? (
          <NavBlocks icon={<LiaIdCard />} linkName="About" active />
        ) : (
          <NavBlocks icon={<LiaIdCard />} linkName="About" />
        )}
      </div>
      <div onClick={() => handleMenuItemClick('Resume')}>
        {activePage === 'Resume' ? (
          <NavBlocks icon={<GrDocumentUser />} linkName="Resume" active />
        ) : (
          <NavBlocks icon={<GrDocumentUser />} linkName="Resume" />
        )}
      </div>
      <div onClick={() => handleMenuItemClick('Contact')}>
        {activePage === 'Contact' ? (
          <NavBlocks icon={<RiContactsBookLine />} linkName="Contact" active />
        ) : (
          <NavBlocks icon={<RiContactsBookLine />} linkName="Contact" />
        )}
      </div>
    </div>
  );
}

export default LargeNav;
