import React from 'react';
import logo from './logo.svg';
import { TapAuthButton, DialogMode,PageMode,AnimationType} from '@tap-payments/js-connect'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <TapAuthButton
          publicKey= 'pk_test_OxCj0DhX9EyTLpGqsu2wHMon'
          dialogMode={DialogMode.POPUP}
          pageMode={PageMode.CONNECT}
          buttonText={'Connect'}
          countryCode={'965'}
          animationType={AnimationType.SLIDEUP}
          animationDuration={500}
          closeOnOutsideClick={true}
          hideInitialLoader={true}
          onSuccess={()=>console.log("yesss")}
          theme={{
            direction: 'ltr',
          }}
        />

        
      </header>
    </div>
  );
}

export default App;
