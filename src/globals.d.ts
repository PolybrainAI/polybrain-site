/*

Typescript hack to allow typed global constants

*/
interface Window {
  user_info: UserInfo | null;
  last_updated: Date;
}
