interface StateMessageProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void | Promise<void>;
}

export function StateMessage({title, description, actionLabel, onAction}: StateMessageProps) {
  return (
    <section className="state-panel">
      <h1 className="state-title">{title}</h1>
      <p className="state-text">{description}</p>
      {actionLabel && onAction ? (
        <button className="action-button" type="button" onClick={() => void onAction()}>
          {actionLabel}
        </button>
      ) : null}
    </section>
  );
}
