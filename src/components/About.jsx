import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <Link to='/'>home</Link>
      <h1>This is the About page.</h1>
    </div>
  );
}
