import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useCallbackPrompt } from './components/useCallback';

function App() {
    const [showDialog, setShowDialog] = useState<boolean>(false);
      const [showPrompt, confirmNavigation, cancelNavigation] =
				useCallbackPrompt(showDialog);
    
  return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<input onChange={() => setShowDialog(true)}></input>
			</header>
		</div>
	);
}

export default App;
