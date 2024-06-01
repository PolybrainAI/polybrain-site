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


export interface UserUploadRequest{
  onshape_access: string|null,
  onshape_secret: string|null,
  openai_api: string|null,
}

export interface UserCredentialPreview{
  has_onshape_access: boolean,
  has_onshape_secret: boolean,
  has_openai_api: boolean
}