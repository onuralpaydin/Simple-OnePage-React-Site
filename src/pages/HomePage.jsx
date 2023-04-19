
import { PackagingList } from "../components/ConditionalRendering";
import { Brands, FiltreDon, Meyveler } from "../components/RenderingLists";
import { SectionComponentsMemory } from "../components/State";


export function HomePage() {
    return (
        <>
            <h1>Anasayfa</h1>
            <section className="section">
                <h2>
                    Component Props
                </h2>
                <MyButton prop1="blue" children="button" />
                <MyButton prop1="red" children="Oğuz" prop2="white" prop3="20px" />
                <MyButton>BEN BİR BUTTONUM</MyButton>
                <MyButton prop1="purple" prop2="cyan" children="Cem Mert" ></MyButton>

            </section>
            <PackagingList />
            <Meyveler />
            <Brands />
            <FiltreDon meslek="software developer" />
            <SectionComponentsMemory />
        </>
    )
}
function MyButton({ prop1, prop2, prop3, children }) {
    const styles = {
        backgroundColor: prop1,
        color: prop2,
        borderRadius: prop3
    }
    console.log(styles);
    return <button style={{ ...styles }} onClick={(e) => { alert(children) }}>{children}</button>
}