import { Main } from './Main';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'layouts/layout';
import { About } from './About';

export const App = () => {
  const tokenChecker = () => {
    try {
      const token = localStorage.getItem('token');
      const parsedToken = JSON.parse(token).token;
      return parsedToken;
    } catch (error) {
      localStorage.setItem('token', JSON.stringify({ token: '' }));
      const token = localStorage.getItem('token');
      const parsedToken = JSON.parse(token).token;
      return parsedToken;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout token={tokenChecker()} />}>
        <Route path="/" element={<Main token={tokenChecker()} />} />
        <Route path="/about" element={<About token={tokenChecker()} />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
};
