
import conf from '../conf/conf.js'
import { Client, Databases, Query } from 'appwrite';

export class ConfigService {

    client = new Client();
    databases;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);


    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )

        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,  //we are using slug instead of ID.unique() as the id for updating a post
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )

        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
            return false;
        }
    }

    async deletePost(slug) { //slug is the id to delete a post
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,

            )
            return true;

        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {  //slug is the id to delete a post
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )


        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )


        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

}


const configService = new ConfigService()

export default configService;