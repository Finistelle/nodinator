export class User {
    id: number;
    firstName: string;
    lastName: string;
    roles: TypeCategorieUser;
    password: string;
    email:string;
    //TODO get real article
    articles: Array<string>[]
}

export declare type TypeCategorieUser = 'Client' | 'Visiteur' | 'Administrateur';
