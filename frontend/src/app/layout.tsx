import Sidebar from "../components/Sidebar";
import './globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <body>
              <div style={{ display: "flex", height: "100vh" }}>
                  <Sidebar />
                  <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
              </div>
          </body>
      </html>
  );
}