export const postData = async (data) => {
  const response = await fetch("/post/data", {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (response.ok) return await response.json();
  else throw new Error(response.statusText);
};
