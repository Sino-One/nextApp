import React from 'react'

export default function cours(props) {
  return (
    <div className='container'>
      <h1>Le BTC est à : {props.results.bpi.EUR.rate} Eur</h1>
    </div>
  )
}

export async function getServerSideProps() {
    const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")

    const results = await data.json();

    return {
        props: {
            results
        }
    }
}