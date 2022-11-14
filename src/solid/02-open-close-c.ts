import axios from 'axios';

// se puede cambiar entre axios y fetch (o XHR, ajax, etc) 
// comun modificando solo esta clase

export class HttpClient {


    async get( url: string ) {
        const { data, status } = await axios.get(url);
        return { data, status };
    }

    // async get( url: string ) {

    //     const resp = await fetch( url );
    //     const data = await resp.json();

    //     return { data, status: resp.status };
    // }

}