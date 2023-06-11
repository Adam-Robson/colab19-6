import React from 'react';

import { useGoogleContext } from '../context/GoogleContext';

import flat from '../assets/flat_logo_pal.svg';

import { FiMenu, FiSearch } from 'react-icons/fi';
import { LuLocate } from 'react-icons/lu';

import Portal from './Portal';

export default function Header() {
  const {
    search,
    setSearch
  } = useGoogleContext();

  return (
    <>
      <header 
        className="header min-w-full min-h-fit h-2/5 flex flex-col justify-evenly items-center mx-auto p-4"
      >
        <div className="absolute top-4 right-4 md:absolute md:top-8 md:right-8">
          <FiMenu size={ 24 } />
        </div>
        <div className="max-w-sm mx-auto md:max-w-md">
          <img
            src={ flat }
            alt="pantry pals logo"
            className="aspect-auto mx-auto max-w-xs md:max-w-md"
          />
          <div 
            className="w-full flex justify-evenly relative top-6 mb-4"
          >
            <label 
              htmlFor="search" 
              className="flex justify-start"
            >
              <input
                id="search"
                name="search"
                value={ search }
                type="text"
                className="search rounded-md w-72 h-14 pl-10 mr-2"
                placeholder="Enter zip code or address"
                onChange={ e => setSearch(e.target.value) }
              />
              <div className="absolute inset-y-0 left-0 pl-4 md:pl-8 flex items-center pointer-events-none">
                <FiSearch size={ 22 } />
              </div>

            </label>
            <button 
              className="location-btn rounded-md w-14 h-14 flex justify-center items-center" 
              onClick={ '#' }
            >
              <div><LuLocate size={ 22 } /></div>

            </button> 
          </div>
          <Portal />
        </div>
      </header>
    </>
  );
}
