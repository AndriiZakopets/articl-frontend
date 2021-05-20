import Header from 'components/layout/Header';
import AuthHeader from 'components/layout/AuthHeader';
import Main from 'components/layout/Main';

export default function AppLayout({ user, children }) {
  return (
    <>
      {user ? <Header user={user} /> : <AuthHeader />}
      <Main>{children}</Main>
    </>
  );
}
