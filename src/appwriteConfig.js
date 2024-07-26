import { Account, Client, ID } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6692b37f000b7e854b87"); //Project ID for FirstMD Appwrite Project

export const account = new Account(client);

export default client;

export const result = await account.get();

export { ID };
