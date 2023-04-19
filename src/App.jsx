//componentler buraya import edilecek.
import { Logo } from "./components/Logo"
import { NavMain } from "./components/NavMain"
import { HomePage } from "./pages"
export default function App(){
    return(
        <>
<header>
<Logo />
<NavMain />
</header>
<main>
    <HomePage />
</main>
<footer>CopyRight Bilge Adam 2023</footer>
</>
    )
}
