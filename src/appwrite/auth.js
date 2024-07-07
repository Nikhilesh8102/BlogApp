/* eslint-disable no-useless-catch */
import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                //call login method
                return this.login({ email, password });

            }
            return null;
        }
        catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
            throw new Error('A user with the same id, email, or phone already exists')
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();

        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            return this.account.deleteSessions(); // If we were to delete a single session we need to use deleteSession method and we have to provide the sesisonId

        } catch (error) {
            console.log("Appwrite serivce :: logout :: error", error);

        }
    }
}

const authService = new AuthService()

export default authService; 