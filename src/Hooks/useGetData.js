import axios from 'axios'
import { useEffect, useState } from 'react'


const useGetData = (url, method) => {

    const [dataList, setDataList] = useState([])

    async function getData() {
        
        try {

          const {data} = await axios({
            url: url,
            method: method,
            
          })
            if (data.status === 'success') {
              setDataList(data)
              return data
            }
            else return false
        } 
        catch (error) {
          console.log ('Error: ', error)
        }
    }

    useEffect(()=> {
        getData()
    })

    return {dataList}
}

export default useGetData

//  try{
//   const {data} =  await axios.delete(`${baseURL}/api/v1/cart`, {
//     headers: token
// }) 
//     setcartData(null)
//     return data;    
// }catch(error) {
//     return error
// }