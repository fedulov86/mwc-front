import axios, {AxiosError, AxiosResponse} from 'axios';
import Catalog from '@/models/Catalog'


export async function getCatalogs(): Promise<Catalog[]> {
    return new Promise<Catalog[]>((resolve, reject) => {
        axios
            .get<Catalog[]>('http://mwc2.socrat.loc/api/v1/admin/metadata/catalogs')
            .then((response: AxiosResponse<Catalog[]>) => resolve(response.data))
            .catch((error: AxiosError<string>) => reject(error));
    });
}