/*

API Structures are defined here

*/

export interface UserInfo {
  created_at: string;
  email: string;
  name: string;
  nickname: string;
  user_id: string;
  username: string;
  last_ip: string;
  last_login: string;
}

export interface UserUploadRequest {
  onshape_access: string | null;
  onshape_secret: string | null;
  openai_api: string | null;
}

export interface UserCredentialPreview {
  has_onshape_access: boolean;
  has_onshape_secret: boolean;
  has_openai_api: boolean;
}
