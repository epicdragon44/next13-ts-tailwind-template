export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <title>NextJS App</title>
            </head>
            <body>
                <nav>Navbar</nav>
                <main>{children}</main>
            </body>
        </html>
    );
}
