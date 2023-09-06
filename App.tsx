import React from 'react';
import ReactDOM from 'react-dom';
interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default App;

ReactDOM.render(<App name="Prem" />, document.getElementById('root'));
