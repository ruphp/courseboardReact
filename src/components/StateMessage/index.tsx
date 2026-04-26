import './state-message.css';

interface StateMessageProps {
  title: string;
  description: string;
}

export function StateMessage({title, description}: StateMessageProps) {
  return (
    <section className="message">
      <h1 className="title">{title}</h1>
      <p className="text">{description}</p>
    </section>
  );
}
