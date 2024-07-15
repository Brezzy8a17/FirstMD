import { Client, Account } from "appwrite";

export const client = new Client();

client
    .setEndpoint ('https://cloud.appwrite.io/v1')
    .setProject("6692b37f000b7e854b87");

export const account = new account(client);
export {ID} from "appwrite";
