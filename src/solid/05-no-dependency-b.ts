import { LocalDataBaseService } from "./05-no-dependency-c";

interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor() {}


    //LocalDataBaseService se considera uand dependencia oculta, tengo que entrar en la funcion para verla,
    //ademas violenta open and close
    async getPosts() {
        const jsonDB = new LocalDataBaseService();
        this.posts = await jsonDB.getFakePosts();

        return this.posts;
    }
}