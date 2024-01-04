import moment from "moment";

export default function News({ currentNews }) {
  function dateChange(date) {
    const originalDate = moment(date);
    const newDate = originalDate.format("DD.MM.YYYY HH:mm");
    return newDate;
  }

  return (
    <a aria-label={currentNews.title} className="font-semibold" href={currentNews.url}>
    <li aria-label="news item" className="bg-orange-50 p-2 hover:bg-orange-200 cursor-pointer transition ease-in-out">
        <h2>{currentNews.title}</h2>
      <br />
      <p aria-label="author and date created" className="text-sm">
        From: {currentNews.author} on {dateChange(currentNews.created_at)}
      </p>
    </li>
    </a>
  );
}
