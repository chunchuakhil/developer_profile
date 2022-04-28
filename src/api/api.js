export const fetchingDevelopersApi = () => {
  return fetch('/api/developers/');
};

export const postDeveloperApi = (body) => {
  return fetch('/api/developers/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body,
  });
};
