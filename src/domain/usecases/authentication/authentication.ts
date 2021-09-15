import { AccountModel } from '../../models/account-model';


type AuthenticationParameters = {
    email: string,
    password: string
}

export interface Authentication {
    auth(params: AuthenticationParameters): Promise<AccountModel>
}
