export class User {
    constructor(id: number,
        nom: string,
        description: string,
        categorie: TypeCategorieUser) { }
    id: number;
    nom: string;
    description: string;
    categorie: TypeCategorieUser;
}

export declare type TypeCategorieUser = 'Client' | 'Visiteur' | 'Administrateur';
