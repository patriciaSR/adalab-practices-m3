
const Twitter = ({ cardUrl, tags, message }) => {
  const url = `${cardUrl}?tags=${tags}&message=${message}`;
  
  return (
    <a className="button-twitter" target="_blank" href={url}>
      <p className="text-link-twitter">Compartir en twitter</p>
    </a>
  );
}
