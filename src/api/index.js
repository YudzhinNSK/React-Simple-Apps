import { CHECK_PASSWORD_OR_LOGIN, LOG_IN_SUCCESS } from "./constants";

export const getUser = async ({password, userName}) =>  new Promise(resolve => {
  if(!password || !userName)
    setTimeout(() => resolve({error: CHECK_PASSWORD_OR_LOGIN}), 2000)

  if(userName !== "Admin" || password !== "12345")
    setTimeout(() => resolve({error: CHECK_PASSWORD_OR_LOGIN}), 2000)

  setTimeout(() => resolve({message: LOG_IN_SUCCESS}) , 2000)
})

export const getLatestNews = async (searchQuery) => {
  const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`);
  return await res.json();
};