import "../styles/global.css";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";


const noAuthRequire = ["/", "/login", "/signup"];

const App = ({ Component, pageProps }) => {

  const router = useRouter()

  return (
    <>
      <AuthContextProvider>
        {noAuthRequire.includes(router.pathname) ? (
           <Component {...pageProps} />
        ) : (
          <ProtectedRoute> 
             <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </AuthContextProvider>
    </>
  );
};

export default App;
