import { useRouter } from 'next/router';
import React from 'react'

export default function article() {

  const router = useRouter();

  console.log(router);
  console.log(router.route);
  console.log(router.asPath);
  console.log(router.query);

  const pushFunction = () => {
    router.push('/')
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>
      <button onClick={pushFunction}>Push to Home</button>
    </div>
  )
}
