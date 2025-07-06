import { Counter } from '../components/Counter/Counter';
import { ToggleBtn } from '../components/ToggleBtn/ToggleBtn';
import { TextBox } from '../components/TextBox/TextBox';
import './App.css'
import { ShowHide } from '../components/ShowHide/ShowHide';
import { ChangeColor } from '../components/ChangeColor/ChangeColor';
import { Add } from '../components/Add/Add';
import { WebTabs } from '../components/WebTabs/WebTabs';
import { CheckBox } from '../components/CheckBox/CheckBox';
import { ChangeImg } from '../components/ChangeImg/ChangeImg';
import { LikeBtn } from '../components/LikeBtn/LikeBtn';
import { EditText } from '../components/EditText/EditText';
import { TemporaryMessage } from '../components/TemporaryMessage/TemporaryMessage';

export const App = () => {
	return (
		<>
			<h1>Primera app en React</h1>

      <Counter/>

      <ToggleBtn />

      <TextBox />

      <ShowHide/>

      <ChangeColor/>

      <Add/>

      <WebTabs/>

      <CheckBox/>

      <ChangeImg />

      <LikeBtn />

      <EditText />

      <TemporaryMessage />
		</>
	);
};

export default App
