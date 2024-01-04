import moment from 'moment';

export default function News({ currentNews }) {
  function dateChange(date){
    const originalDate = moment(date);
    const newDate = originalDate.format('DD.MM.YYYY HH:mm');
    return newDate
  }

  return (
    <li className="bg-orange-50 p-2 hover:bg-orange-200 cursor-pointer">
      <a className="font-semibold" href={currentNews.url}>
        {currentNews.title}
      </a>
      <br />
      <p className="text-sm">
        From: {currentNews.author} on {dateChange(currentNews.created_at)}
      </p>
    </li>
  );
}
