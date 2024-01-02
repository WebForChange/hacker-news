export default function News({ currentNews }) {
  return (
    <li className="bg-slate-100 p-2 hover:bg-slate-200 cursor-pointer">
      <a className="font-semibold" href={currentNews.url}>
        {currentNews.title}
      </a>
      <br />
      <p className="text-sm">
        From: {currentNews.author} on {currentNews.date}
      </p>
    </li>
  );
}
