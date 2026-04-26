interface LoaderProps {
  label?: string;
}

export function Loader({label = 'Загрузка данных...'}: LoaderProps) {
  return (
    <div className="loader-panel">
      <div className="loader-spinner" aria-hidden="true" />
      <p className="m-0">{label}</p>
    </div>
  );
}
