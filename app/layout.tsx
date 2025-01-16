import "./ui/global.css";
import { poppis } from "./ui/fonts";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${poppis.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
