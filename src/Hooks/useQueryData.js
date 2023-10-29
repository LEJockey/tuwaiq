import axios from 'axios'
import { useQuery } from 'react-query'
import useLangContext from './useLangContext'

const useQueryData = (url, method, key, body= null) => {

    const {lang} = useLangContext()

    let getData = () => {
        return axios({
            url: url,
            method: method,
            data: body
        })
    }

    const {isLoading, isError, data, isFetching} = useQuery(key, getData)
        
    const getName = (item) => {
        return JSON.parse(item?.name)[lang]
    };
    const  getTitle = (item) => {
        return JSON.parse(item?.title)[lang]
    };
    const getDesc = (item) => {
        return JSON.parse(item?.description)[lang]
    };

    return {isLoading, isError, isFetching, data, getName, getTitle, getDesc};
}

export default useQueryData





