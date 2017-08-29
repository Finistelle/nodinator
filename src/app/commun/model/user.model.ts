export class User {
    id: number;
    nom: string;
    description: string;
    categorie: TypeCategorieUser;
    prix: number;
}

export declare type TypeCategorieUser = 'Client' | 'Visiteur' | 'Administrateur';
