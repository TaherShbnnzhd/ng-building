/* بسم الله الرحمن الرحیم */

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    avatar: string;
    address: {
        country: string;
        city: string;
        street: string;
        alley: string;
        number: number;
        geo: {
            lat: string;
            lng: string
        }
    };
    phone: string;
    website: string;
    company: string;
}