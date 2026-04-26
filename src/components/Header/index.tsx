import {Navigation} from '../Navigation';

export function Header() {
  return (
    <header className="header-shell">
      <div className="header-inner">
        <strong className="brand-mark">Courseboard React</strong>
        <Navigation />
      </div>
    </header>
  );
}
