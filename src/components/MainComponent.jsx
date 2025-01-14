import { CardComponent } from "./CardComponent"

export const MainComponent = () => {


    return (

        <main className="bg-dark h-100 w-100">
            <div className="container">
                <div className="row">
                    <h2 className="text-white my-3">Movies</h2>
                    <CardComponent />

                </div>
            </div>
        </main>

    )

}