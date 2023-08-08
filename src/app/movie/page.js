
import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';
import Styles from '@/app/styles/common.module.css'

const Movie = async () => {

  // await new Promise((res)=>setTimeout(res,1000));

  const url = process.env.RAPID_KEY;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd9086bab38mshcb8fc3662855f5ep18416bjsn9aadbbcfbbde',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data=data.titles;


  return (
    <>
      <section className={Styles.movieSection}>
        <div className={Styles.container}>
            <h1>Series & Movies</h1>
            <div className={Styles.card_section}>
              {
                main_data.map((curElement)=>{
                  return <MovieCard key={curElement.id} {...curElement}/>
                })
              }   
            </div>
            
        </div>
      </section>
      
    </>
  )
}

export default Movie

export function generateMetadata(){
  return{
    title:"movie page"
  }
}