import { SPHttpClient } from '@microsoft/sp-http'; 

export interface IHelloWorldProps {
  //description: string;
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
}
