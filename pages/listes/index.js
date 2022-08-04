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
                <Link href={'/listes/' + Object.keys(item)[0]}>
                {Object.keys(item)[0]}
                </Link>
                </li>
                    ))}
    </ul>
    </>
  )
}

export async function getStaticProps() {
    const data = await import(`/data/pathsvoc.json`);
    const array = data.englishList;

    return {
        props: {
            array
        }
    }
}
