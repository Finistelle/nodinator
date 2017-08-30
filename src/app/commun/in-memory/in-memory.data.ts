import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryUserDataService implements InMemoryDbService {
    createDb() {
        const users = [
            {
                id: 1,
                lastName: 'Mr. Nice',
                firstName: "gentil",
                roles: "Client",
                email: "nice@gmail.com",
                articles: ["test"]
            },
            {
                id: 2,
                lastName: 'Bombasto',
                firstName: "bombadier fou",
                roles: "Administrateur",
                email: "bombadier@gmail.com",
                articles: ["test"]
            },
            {
                id: 3,
                lastName: 'Magneta',
                firstName: "aimant vivant",
                roles: "Visiteur",
                email: "aimant@gmail.com",
                articles: ["test"]
            },
        ];
        return { users };
    }
}