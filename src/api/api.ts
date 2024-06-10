/*

API Utility functions. Helps interface with the Polybrain server

*/

import {
  UserCredentialPreview,
  UserInfo,
  UserUploadRequest,
} from "./datamodel";

// export const API_BASE = "http://polybrain.xyz/";
export const API_BASE = "http://localhost:8000/";

window.user_info = null;
window.last_updated = new Date();

/**
 * Gets a cookie from the browser
 * @param name The name of the cookie
 * @returns The value of the cookie
 */
function getCookie(name: string): string | null {
  var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) {
    const cookie = match[2];
    return cookie;
  } else {
    return null;
  }
}

/**
 * Checks if a user is logged in
 * @returns true if the user is logged in, false otherwise
 */
export async function isLoggedIn(): Promise<boolean> {
  const response = await getUserInfo();
  return response !== null;
}

/**
 * Gets the info about a logged in user. Caches response in window.user_info
 * @returns a UserInfo object, or null if the user is not logged in
 */
export async function getUserInfo(): Promise<UserInfo | null> {
  const time_elapsed = new Date().getTime() - window.last_updated.getTime();

  if (window.user_info === null || time_elapsed > 3600) {
    const jwt = getCookie("polybrain-session");

    if (jwt == null) {
      console.debug("no JWT found");
      return null;
    } else {
      const user_response = await fetch(`${API_BASE}auth0/user-data`, {
        method: "GET",
        credentials: "include",
      });

      if (user_response.status === 403) {
        console.debug("user is not logged in");
      } else {
        window.user_info = await user_response.json();
        window.last_updated = new Date();
      }
    }
  } else {
    console.log("using local cache");
  }

  return window.user_info;
}

export async function getCredentialPreview(): Promise<UserCredentialPreview | null> {
  const response = await fetch(`${API_BASE}credentials/preview`, {
    method: "GET",
    credentials: "include",
  });

  if (response.ok) {
    return await response.json();
  } else {
    const raw_text = await response.text();
    console.warn(`Failed to fetch credential preview:\n${raw_text}`);
    return null;
  }
}

/**
 * Uploads credentials to the server
 * @param credentials The credentials to upload
 */
type CallbackMessage = (message: string) => void;
export async function uploadCredentials(
  credentials: UserUploadRequest,
  error_callback: CallbackMessage,
  success_callback: CallbackMessage,
): Promise<object> {
  // Filter out any placeholder values
  if (
    credentials.onshape_access !== null &&
    /^0+$/.test(credentials.onshape_access)
  ) {
    console.warn("Removing placeholder onshape_access for upload");
    credentials.onshape_access = null;
  }
  if (
    credentials.onshape_secret !== null &&
    /^0+$/.test(credentials.onshape_secret)
  ) {
    console.warn("Removing placeholder onshape_secret for upload");
    credentials.onshape_secret = null;
  }
  if (credentials.openai_api !== null && /^0+$/.test(credentials.openai_api)) {
    console.warn("Removing placeholder openai for upload");
    credentials.openai_api = null;
  }

  const response = await fetch(`${API_BASE}credentials/upload`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const response_json = await response.json();

  console.log(`Got response from server:`);
  console.log(response_json);

  if (response_json.error_type === "BadRequest") {
    error_callback(response_json.message);
  } else if (response_json.error_type !== undefined) {
    error_callback(`Unhandled Error: ${response_json.message}`);
  } else if (response_json.success) {
    success_callback("Successfully updated credentials");
  }

  return response_json;
}

/**
 * Logs out of the current user
 */
export async function logOut(): Promise<boolean> {
  if (!(await isLoggedIn())) {
    console.error("Cannot log out; the user is not logged in");
    return false;
  }

  window.location.replace(`${API_BASE}auth0/logout`);

  return true;
}
