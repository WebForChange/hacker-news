const apiLink = "https://hn.algolia.com/api/v1/search_by_date?&tags=front_page";

async function getData() {
  const response = await fetch(apiLink);
  const news = await response.json();
  console.log(news);
}

getData();
