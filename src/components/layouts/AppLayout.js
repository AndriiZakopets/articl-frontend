import Header from 'components/layout/Header';
import Main from 'components/layout/Main';

export default function AppLayout({ user, children }) {
  return (
    <>
      <Header user={user} />
      <Main>{children}</Main>
    </>
  );
}
