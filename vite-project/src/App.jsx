import './App.css';

import Button from './components/Button';
import Form from './components/Form';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Hello Dev Queen 👑</h1>

      <h2>Like Button</h2>
      <Button />

      <hr />

      <h2>Simple Form</h2>
      <Form />
    </div>
  );
}

export default App;
