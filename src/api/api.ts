
import { json } from "stream/consumers";
import {UserInfo} from "./datamodel"


export const API_BASE = "http://localhost:8000/"

/**
 * Gets a cookie from the browser
 * @param name The name of the cookie
 * @returns The value of the cookie
 */
function getCookie(name: string) : string|null{
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    const cookie = match[2];
    return cookie
  }
  else{
    return null
  }
  }
  

/**
 * Checks if a user is logged in
 * @returns true if the user is logged in, false otherwise
 */
export async function isLoggedIn(): Promise<boolean>{
  const response = await getUserInfo();
  return (response !== null)
}


/**
 * Gets the info about a logged in user
 * @returns a UserInfo object, or null if the user is not logged in
 */
export async function getUserInfo(): Promise<UserInfo|null> {
  const jwt = getCookie("polybrain-session")

  if (jwt == null){
    console.debug("no JWT found")
    return null
  }
  else {

    const user_response = await fetch(`${API_BASE}auth0/user-data`, {
      method: "GET",
      credentials: 'include'
    })

    if (user_response.status === 403){
      console.debug("user is not logged in")
    }
    else{
      console.debug("user is logged in")
      const user_info: UserInfo = await user_response.json();
      return user_info

    }

  }

  return null
}
