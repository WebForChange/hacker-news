export default function News({ currentNews }) {
  return (
    <li>
      <a href={currentNews.url}>{currentNews.title}</a>
      <br />
      <p>
        From: {currentNews.author} on {currentNews.date}
      </p>
    </li>
  );
}
