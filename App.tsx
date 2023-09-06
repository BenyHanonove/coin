import React, { useState } from 'react';
import RootStack from './src/navigation/RootStack';
import AppTab from './src/navigation/AppTab';

const App: React.FC = () => {

  //State to know if user is connected with a function to flip the state
  const [userConnected ,setUserConnected] = useState(true);
  const flipUser = () =>{setUserConnected(!userConnected)};

  return (
        userConnected ? <AppTab/> : <RootStack flipUser={flipUser}/>
    );
}

export default App;