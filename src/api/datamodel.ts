/*

API Structures are defined here

*/

export interface UserInfo {
    sub: string,
    given_name: string,
    family_name: string|null,
    nickname: string,
    name: string,
    picture: string|null,
    email: string,
    locale: string|null,
    updated_at: string|null,
  }


