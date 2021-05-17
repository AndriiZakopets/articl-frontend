import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';

export default function RootRouter() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
