# Detecting-router-change

This project allow you to detect user leaving page  (react-router-dom v6.0.2)

## Installation

```shell
yarn add detecting-router-change
```

or 
```shell
npm i detecting-router-change
```

## Usage

```jsx

import { useCallbackPrompt } from 'detecting-router-change';

const App = () => {
    const [showDialog, setShowDialog] = useState<boolean>(false);
 const [showPrompt, confirmNavigation, cancelNavigation] =
				useCallbackPrompt(showDialog);

    const toggleDarkMode = (checked: boolean) => {
       setDarkMode(checked);
    };

   return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<input onChange={() => setShowDialog(true)}></input>
			</header>
		</div>
	);
};
```

#### Props

| Name                | Type                         | Default Value                   | Description                               |
| ------------------- | ---------------------------- | ------------------------------- | ----------------------------------------- |
| showDialog          | boolean                      |     false                       | if value=true,useCallbackPrompt start     |
|                     |                              |                                 | detecting                                 |
| cancelNavigation    | function                     |                                 | cancel the change                         |
| confirmNavigation   | function                     |                                 | valid the change                          |
| showPrompt          | number                       |     false                       | check routing change                      |

