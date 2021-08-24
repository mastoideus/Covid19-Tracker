import Header from './components/Header'
import './App.css';
import {useEffect, useState} from 'react'
import InfoBox from './InfoBox'
import Table from './components/Table'
import QuestionAnswers from './components/QuestionAnswers'
import CovidInfo from './components/CovidInfo'
import Spinner from './components/Spinner'
import 'leaflet/dist/leaflet.css'

function App() {
  const [countries, setCountries]=useState([])
  const [countryInfo, setCountryInfo]=useState({})
  const [tableInfo, setTableInfo]=useState([])
  const [vaccineCountries, setVaccineCountries]=useState([])
  const [scrollEffect, setScrollEffect]=useState(false)
  const [isLoading, setIsLoading]=useState(false)
  const [mapCenter, setMapCenter]=useState({lat:34.80746,lng:-40.4796})
  const [mapZoom, setMapZoom]=useState(3)
  const [mapCountries, setMapCountries]=useState([])

  
  useEffect(()=>{
     window.addEventListener('scroll', ()=>{
       if (window.scrollY > 150){
         setScrollEffect(true)
       } else if (window.scrollY<150){
         setScrollEffect(false)
       }
     })
     return ()=>{
       window.removeEventListener('scroll', ()=>{
         setScrollEffect(false)
       })
       
     }
  },[])

  useEffect(()=>{
     fetch('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30&fullData=false')
     .then(response=>response.json())
     .then(data=>{
       const transformedVaccineData= data.map((country)=>{ 
          const timeline=country.timeline 
          const timelineLastKey= Object.keys(timeline).pop()
          const timelineLastValue= timeline[timelineLastKey]

        
          return{
            cases: timelineLastValue,
            country: country.country
          }
          
         })
       
       console.log(transformedVaccineData)
       setVaccineCountries(transformedVaccineData)
     })
  },[])
  
  useEffect(()=>{
      setIsLoading(true)
      fetch('https://disease.sh/v3/covid-19/all')
      .then(response=>response.json())
      .then(data=> {
        
        setCountryInfo(data)
      })
      setIsLoading(false)
  },[])
  
  
  useEffect(()=>{
    
    const fetchCountries=async()=>{
       const response= await fetch('https://disease.sh/v3/covid-19/countries')
       const data= await response.json()
       
       const transformedCountries= data.map(country=>{
         return {
           name: country.country,
           value: country.countryInfo.iso2
         }
       })
       setCountries(transformedCountries)
       setTableInfo(data)
       setMapCountries(data)

    }

    fetchCountries()
  },[])

   
  const fetchCountryInfoHandler= (country)=>{
    setIsLoading(true)
        const url= country==='Worldwide'? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${country}`
        
       fetch(url)
       .then(response=> response.json())
       .then(data=> {
          setCountryInfo(data)
       })
       setIsLoading(false)
       console.log(countryInfo)
       
      }


  
  return (
    <div className="app">
      <Header countries={countries} scrollEffect={scrollEffect} onFetchCountry={fetchCountryInfoHandler}/>
      <div className='app__rows' >
       {isLoading? <Spinner/>:<InfoBox 
       title={countryInfo.country} 
       active={countryInfo.active} 
       cases={countryInfo.cases}
       recovered={countryInfo.recovered}
       deaths={countryInfo.deaths}
       
       />}
       <Table countries={tableInfo} title='Total Cases'/>
       <Table countries={vaccineCountries} title='Vaccine doses' titleColor='color' rowColor='rowColor'/>
       </div>
       <div className='down__content'>
         <QuestionAnswers/>
         <CovidInfo 
           countries={mapCountries}
           zoom={mapZoom}
           center={mapCenter}
         />
       </div>

    </div>
  );
}

export default App;
