import { Counter } from '../components/Counter/Counter';
import { ToggleBtn } from '../components/ToggleBtn/ToggleBtn';
import './App.css'

export const App = () => {
	return (
		<>
			<h1>Primera app en React</h1>

      <Counter/>

      <ToggleBtn />
		</>
	);
};

export default App
