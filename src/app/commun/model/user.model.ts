export class User {
    id: number;
    nom: string;
    description: string;
    categorie: TypeCategorieUser;

}

export declare type TypeCategorieUser = 'Client' | 'Visiteur' | 'Administrateur';
