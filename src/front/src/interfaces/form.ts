export interface DataEstablishmentForm {

    name: string,
    district: string,
    neighborhood: string,
    number: number,
    phone: string,
    product: [
        string
    ],
    score: true,
    cep: number,
    latitude: number,
    longitude: number

}
export interface DataClientForm {
    profile_name: string,
    full_name: string,
    email: string,
    username: string,
    district: string,
    number: number,
    complement: string,
    phone: string,
    status: true,
    password: string,
    cep: number,
    latitude: number,
    longitude: number
}
