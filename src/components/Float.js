import React from 'react';
import { createPortal } from 'react-dom';
import Info from './Info';

/**
 *
 * React will put the DOM nodes for the JSX passed into createPortal, inside of the DOM node the
 * createPortal is called within. Below, without the call for the portal, the second <p> would be
 * placed inside the parent <div>, but the call for the portal “teleported” the second <p> into the
 * document.body:
 *
 * @export Portal component
 * @return {*} DOM node containing the Portal
 */

export default function Float() {
  return (
    <div className="">
      {createPortal(
        <Info />,
        document.body
      )}
    </div>
  );
}