import Link from 'next/link';
import React from 'react'

export default function index(props) {
    console.log(props);
  return (
    <>
    <h1 className='my-4'>Les listes de vocabulaires</h1>
    <ul className="container list-group">
        {props.array.map((item, index) => (
            <li className="list-group-item" key={index}>
                <Link href={`/listes/${item.name}`}>
                {item.name}
                </Link>
                </li>
                    ))}
    </ul>
    </>
  )
}

export async function getStaticProps() {
    const data = await import(`/data/listes.json`);
    const array = data.englishList;

    return {
        props: {
            array
        }
    }
}
