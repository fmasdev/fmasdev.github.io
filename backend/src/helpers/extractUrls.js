// src/helpers/extractUrl.js


export const extractMediaUrls = (data, urls = []) => {
  if (Array.isArray(data)) {
    data.forEach((item) => extractMediaUrls(item, urls));
  } else if (data && typeof data === "object") {
    for (const key in data) {
      const value = data[key];
      // if is object Strapi Media
      if (key === 'media') {
        urls.push(value);
      } else {
        extractMediaUrls(value, urls);
      }
    }
  }


  return urls;
}


