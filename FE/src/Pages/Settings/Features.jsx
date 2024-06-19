import React from 'react';
import Seting from '../../Components/Elements/Setting/Setting';
import Feature from './Setting/Features';
// import Subscription from './Setting/Subscriptions';


const Features = () => {
  return (
     <div className="" style={{ minHeight: 'auto', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
      <div className='d-flex'>
        <Seting/>
          <Feature/>
          {/* <Subscription/> */}
      </div>
    </div>
  );
}

export default Features;
