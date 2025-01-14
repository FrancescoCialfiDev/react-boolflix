import { HeaderComponent } from "./components/HeaderComponent" // Importiamo il componente Header dal path /components
import { MainComponent } from "./components/MainComponent"     // Importiamo il componente Main dal path /components
import { GlobalProvider } from "./contexts/GlobalContext"

export const App = () => {

    return (
        <>                         {/* Fragment */}
            <GlobalProvider>
                <HeaderComponent />    {/* Componente Header */}
                <MainComponent />      {/* Componente Main */}
            </GlobalProvider>
        </>
    )

}


