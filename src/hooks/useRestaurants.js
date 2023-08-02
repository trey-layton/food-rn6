import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

 export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async searchTerm => {
        console.log("Hi")
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "houston"
                }
            })
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage("something went wrong")
        }
    }
    useEffect(() => {
        searchApi('cookies')
    },[])
    return [searchApi, results, errorMessage]
 }