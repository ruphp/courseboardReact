import {Outlet} from 'react-router-dom';

import {Header} from '../../components/Header';

export function AppLayout() {
  return (
    <div className="layout-shell">
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
}
