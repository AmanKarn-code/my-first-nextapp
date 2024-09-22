import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressContentEditableWarning>

        {children}
      </body>
    </html>
  );
}
