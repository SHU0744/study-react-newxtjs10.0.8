export const fetcher = async (url) => {
  const res = await fetch(url);
  console.log("CSRページ");
  if (!res.ok) {
    throw new Error("エラーが発生したよ");
  }

  const json = res.json();

  return json;
};
