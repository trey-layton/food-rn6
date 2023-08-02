import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useRestaurants()
    const filterResultsByPrice = (price) => {
        return results.filter(r => {
            return r.price === price
        })
    }
    return (
        <>
            <SearchBar 
                term={term}    
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ResultsList 
            results={filterResultsByPrice('$')} 
            title="Cheaper"/>
            <ResultsList 
            results={filterResultsByPrice('$$')} 
            title="So-so"/>
            <ResultsList 
            results={filterResultsByPrice('$$$')} 
            title="Damn Bill Gates"/>
        </>    
        )
}

const styles = StyleSheet.create({
})

export default SearchScreen