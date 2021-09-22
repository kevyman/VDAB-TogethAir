export interface Person{

    name: string;
    surname: string;
    age: number;
    emailAddress: string;
    password: string;
    role: Role;
}

export enum Role {

  ADMIN , TOGETHAIR_EMPLOYEE  , AIRLINE_EMPLOYEE , CLIENT


}

