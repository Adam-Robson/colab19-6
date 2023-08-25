import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import Portal from './Portal';
import MenuList from './MenuList';
import '../styles/menu.css';

import { useGoogleContext } from '../context/GoogleContext';

export default function Menu() {
  const { isOpen, setIsOpen } = useGoogleContext();

  return (
    <>
      <section className="container w-screen p-2">
        {
          isOpen ?
            <>
              <button
                className="icon absolute top-4 right-4"
                onClick={ () => setIsOpen(false) }
              >
                <FiMenu size={ 24 } className={ ({ rotated }) => rotated ? 'rotated' : ''
                } />
              </button>
              <MenuList />
            </>
            :
            <button
              className="menu-link cursor-pointer"
              onClick={ () => setIsOpen(true) }
            >
              <FiMenu className="menu-link absolute top-0 right-2" size={ 24 } />
            </button>
        }
      </section>
      <div className="portal h-full w-full">
        <Portal />
      </div>
    </>
  );
}
