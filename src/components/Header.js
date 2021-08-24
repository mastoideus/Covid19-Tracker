import React,{useState, useEffect} from 'react'
import './Header.css' 
import {FormControl, MenuItem, Select} from '@material-ui/core'
import covidLogo from '../assets/images/covid.png'

const Header=({countries, onFetchCountry, scrollEffect})=>{
    const [selectedCountry, setSelectedCountry]=useState('Worldwide')
    
    const selectCountryHandler=(event)=>{
        const countryName=event.target.value

        setSelectedCountry(countryName)

        
    }

    useEffect(()=>{
     onFetchCountry(selectedCountry)
   

    },[selectedCountry])
   
    return (
        <header className={`header ${scrollEffect && 'header__scroll'}`}>
            <div className='header__logo'>
              <img className='header__image' src={covidLogo} alt=''/>
              <h1 className='header__title'>COVID 19-TRACKER</h1>
            </div>
            <FormControl>
                <Select variant='outlined' value={selectedCountry} onChange={selectCountryHandler}>
                 <MenuItem value='Worldwide'>Worldwide</MenuItem>
                 {countries.map(country=>{
                     return <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
                 })}
                  
                </Select>
            </FormControl>

        </header>
    )
}

export default Header