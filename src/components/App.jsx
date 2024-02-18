import { Header } from './Header';
import { News } from './News';
import { Footer } from './Footer';

export const App = () => {
  const token = localStorage.getItem('token');
  const parsedToken = JSON.parse(token).token;
  // console.log(parsedToken.token);

  return (
    <>
      <Header />
      <News token={parsedToken} />
      <Footer />
    </>
  );
};
