import {Navigation} from '../Navigation';
import './header.css';

export function Header() {
  return (
    <header className="header">
      <div className="inner">
        <strong className="brand">Courseboard React</strong>
        <Navigation />
      </div>
    </header>
  );
}
