// App.js
import './App.css';
import './index.css';
import Main from './pages/Main';
import Layout from './layout/Layout';

function App() {
  return (
    <div className='p-3 max-w-screen-2xl mx-auto px-4'>
      <Layout>
        <Main/>
      </Layout>
    </div>
  );
}

export default App;
