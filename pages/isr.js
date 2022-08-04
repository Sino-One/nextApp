import React from 'react'

export default function contact(props) {
    console.log(props);

  return (
    <>
      <h1>{props.data.quotes[0].text}</h1>
    </>
  )
}

export async function getStaticProps() {
    const quote = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
    const data = await quote.json();

    return {
        props: {
            data
        },
        revalidate: 20 // secondes before refetch
    }
}