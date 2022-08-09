export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postRequest = ( { long_url, title } ) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      long_url: long_url ,
      title: title
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch((error) => {
    console.log('error');
  });
}