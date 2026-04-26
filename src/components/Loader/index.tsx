import './loader.css';

interface LoaderProps {
  label?: string;
}

export function Loader({label = 'Загрузка данных...'}: LoaderProps) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true" />
      <p className="label">{label}</p>
    </div>
  );
}
