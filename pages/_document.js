import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="de">
                <Head>
                    <body className="loader-on">
                        <Main/>
                        <NextScript/>
                        <div className='modal'>Hello World</div>
                    </body>
                </Head>
            </Html>
        )
    }
}

export default MyDocument;