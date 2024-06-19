import React from 'react';
import Seting from '../../Components/Elements/Setting/Setting';
// import Feature from './Setting/Features';
import SubscriptionCard from './Setting/Subscription';
// import Subscription from './Setting/Subscriptions';


const Subscription = () => {
  return (
     <div className="" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
      <div className='d-flex'>
        <Seting/>
          <SubscriptionCard/>
          {/* <Subscription/> */}
      </div>
    </div>
  );
}

export default Subscription;
