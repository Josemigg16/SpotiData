//import {a} from './spotify';
//console.log(a);
fetch('/api/session')
.then(res => res.json())
.then(session => {
  const { token } = session;
  console.log(token);
});