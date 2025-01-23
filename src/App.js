// App.js
import './App.css';
import './index.css';
import Main from './pages/Main';
import Layout from './layout/Layout';

function App() {
  return (
    <div className='p-3'>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
