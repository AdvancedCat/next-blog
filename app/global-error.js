'use client';

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <head></head>
            <body>
                <h2>Something went wrong!</h2>
                <p>{error.message}</p>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}
