import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryUserDataService implements InMemoryDbService {
  createDb() {
    const users = [
        {
            id: 1,
            nom: 'Mr. Nice',
            description: "gentil",
            categorie: "Client"
        },
        {
            id: 2,
            nom: 'Bombasto',
            description: "bombadier fou",
            categorie: "Administrateur"
        },
        {
            id: 3,
            nom: 'Magneta',
            description: "aimant vivant",
            categorie: "Visiteur"
        },
    ];
    return {users};
  }
}