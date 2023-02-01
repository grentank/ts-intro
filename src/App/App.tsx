import logo from './logo.svg';
import './App.css';
import { sum, mul } from './utils';
import Counter from '../Counter/Counter';
import Cocktails from '../Cocktails/Cocktails';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Cocktails />
      </header>
    </div>
  );
}

// мы экспортируем главную сущность файла
export default App;

export function createApp(): string {
  return 'something';
}
