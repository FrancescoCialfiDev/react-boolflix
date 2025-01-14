import { HeaderComponent } from "./components/HeaderComponent" // Importiamo il componente Header dal path /components
import { MainComponent } from "./components/MainComponent"     // Importiamo il componente Main dal path /components
import { GlobalProvider } from "./contexts/GlobalContext"      // Importiamo il GlobalProvider dal GlobalContext

export const App = () => {

    return (
        <>                             {/* Fragment */}
            <GlobalProvider>
                <HeaderComponent />    {/* Componente Header */}
                <MainComponent />      {/* Componente Main */}
            </GlobalProvider>
        </>
    )

}

// App lo creiamo con una variabile al quale passiamo una funzione anonima e poi lo esportiamo con il metodo export
