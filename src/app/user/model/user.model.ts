export class User {
    id: number;
    firstname: string;
    lastname: string;
    role:Role
 
}

export declare type Role = 'Administrateur' | 'Client' | 'Visiteur';
