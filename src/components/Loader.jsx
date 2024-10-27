import React from 'react';
import { Circles } from 'react-loader-spinner';

function Loader() {
  return (
    <div>
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loader;
