import React from 'react';
import './headerComponent.css';

export const HeaderComponent = () => {
  return (
    <div className="headerComponent container-fluid">

      <div className="row">
        <div className="col-md-3">
          <a href="https://itpa-sigtac.com/inicioW.php" className='iconBack'>
            <img src="/assets/back.png" alt="Go back" />
          </a>
        </div>
      </div>

    </div>
  );
};
