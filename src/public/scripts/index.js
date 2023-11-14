import { Spotify } from "./spotify.js";
const token = await getSession()

const spotify = new Spotify(token);

async function main() {
  await spotify.getUserProfile()
  console.log(spotify.userProfile)    
}

async function getSession() {
  try {

    const response = await fetch('/api/session');

    if(!response.ok) {
      throw new Error('No hay token'); 
    }

    const session = await response.json();

    const { token } = session;
    return token

  } catch(error) {
    console.error(error);
  }

}

document.getElementById("send").addEventListener("click", (e) => {
  main();

  e.preventDefault();
});