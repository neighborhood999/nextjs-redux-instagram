export const endPoint = (id, token, path = '') =>
  `https://api.instagram.com/v1/users/${id}/${path}?access_token=${token}`;

export const chunk = (array, size) =>
  array
    .map((e, i) => (i % size === 0 ? array.slice(i, i + size) : null))
    .filter(e => e);
