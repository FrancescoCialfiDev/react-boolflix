import { HeaderComponent } from "./components/HeaderComponent" // Importiamo il componente Header dal path /components
import { MainComponent } from "./components/MainComponent"     // Importiamo il componente Main dal path /components

export const App = () => {

    return (
        <>                         {/* Fragment */}
            <HeaderComponent />    {/* Componente Header */}
            <MainComponent />      {/* Componente Main */}

        </>
    )

}


