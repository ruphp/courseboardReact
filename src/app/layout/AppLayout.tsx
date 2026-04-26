import {Outlet} from 'react-router-dom';

import {Header} from '../../components/Header';

export function AppLayout() {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
