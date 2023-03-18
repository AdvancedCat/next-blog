import './globals.css';
import MainNavigation from '../components/ui/MainNavigarion';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <MainNavigation></MainNavigation>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
