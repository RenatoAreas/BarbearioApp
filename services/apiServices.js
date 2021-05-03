import axios from 'axios';

export const getApiUrl = () => {
    return 'http://barbeariareact-001-site1.htempurl.com';
}

export const getServico = () => {
    return axios.get(getApiUrl() + '/api/servicos')
        .then(
            response => {
                return response.data;
            }
        )
}
