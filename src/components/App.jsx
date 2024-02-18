import { Header } from './Header';
import { News } from './News';
import { Footer } from './Footer';

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
    <>
      <Header />
      <News token={tokenChecker()} />
      <Footer />
    </>
  );
};
