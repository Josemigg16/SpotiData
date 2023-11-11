export const a = "hiiiii"

fetch('/api/session')
  .then(res => res.json())
  .then(session => {
    const { token } = session;
    console.log(token);
  });