import "../styles/globals.css";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex flex-col">
          <TopNav />
          <div className="flex">
            <Sidebar />
            <div className="flex w-screen items-center justify-center">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
