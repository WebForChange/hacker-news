import moment from "moment";

export default function News({ currentNews, apiResults }) {
  function dateChange(date) {
    const originalDate = moment(date);
    const newDate = originalDate.format("DD.MM.YYYY HH:mm");
    return newDate;
  }

  return (
    <a aria-label={currentNews?.title} href={currentNews?.url}>
      <li aria-label="news item" className={`bg-orange-50 p-4 hover:bg-orange-200 cursor-pointer transition ease-in-out h-20 flex flex-col justify-between ${!currentNews ? `bg-orange-100 animate-pulse` : "animate-opacity"}`}>
        <h2 className="font-semibold">{currentNews?.title}</h2>
        {currentNews && (
          <p aria-label="author and date created" className="text-sm">
            From: {currentNews?.author} on {dateChange(currentNews.created_at)}
          </p>
        )}
      </li>
    </a>
  );
}
