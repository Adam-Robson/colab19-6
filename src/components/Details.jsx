import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleContext } from '../context/GoogleContext';
import { FiX } from 'react-icons/fi';
import stillshot_map from '../assets/images/stillshot_map.png';
export default function Details() {
  const navigate = useNavigate();
  const {
    activeMarkerId,
    organizations,
  } = useGoogleContext();
  
  const organization = organizations[activeMarkerId];
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: Details.jsx:14 ~ Details ~ organization:', organization);

  return (
    <>
      <section className="h-full flex flex-col justify-start items-center">
        <div className="md:w-1/3">
          <img src={ stillshot_map } alt="map" className="w-full mx-auto" />
        
          <div onClick={ () => navigate('/') } className="absolute top-0 m-4">
            <FiX size={ 22 } />
          </div>
        </div>
        <div className="md:w-1/3 p-2 text-left">
          { organization.image_url !== null ? <img className="h-40" src={ organization.image_url } alt="image" /> : null }
          <h1 className="text-3xl md:text-5xl font-bold subpixel-antialiased">{ organization.name }</h1>
         
          <div className="">
            <h2 className="text-2xl md:text-3xl subpixel-antialiased">{ organization.address }</h2>
            <p className="text-xl md:text-2xl subpixel-antialiased">
              { organization.city + ' ' + organization.state + ' ' + organization.zip_code }
            </p> 
            <p className="text-xl md:text-2xl subpixel-antialiased">{ organization.phone_num }</p>
          </div>
          <div className="">
            <h2 className="text-xl md:text-2xl subpixel-antialiased font-semibold">Description</h2>
            <p className="text-lg md:text-xl subpixel-antialiased">{ organization.desc }</p>
          </div>
          <div className="h-full w-full flex justify-evenly items-center">
            <button className="float-btn px-10 py-4 m-2">Directions</button>
            <button className="float-btn px-10 py-4 m-2">Call</button>
          </div>
        </div>
      </section>
    </>
  );
}
