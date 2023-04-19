//Rendering Lists
export function Meyveler() {
    const myItems = [<p key="0">Elma</p>, <p key="1">Armut</p>, <p key="2">Karpuz</p>]
    return(
        <section>
            <h2>Rendering Lists Meyveler</h2>
            {myItems}
        </section>
    )
}

const Data_Brands=["Adidas","Nike","Puma","Gucci","Armani","Prada"]

export function Brands(){
    const brandLists=Data_Brands.map((brand,index)=><li key={index}>{brand}</li>)

    return(
        <section>
            <h2>Markalarım</h2>
            <ul>{brandLists}</ul>
        </section>
    )
}

const Data_Ogrenciler=[
    {name:"Abdulkadir", meslek:"software developer"},
    {name:"Buse", meslek:"ogrenci"},
    {name:"Fatih", meslek:"fenerli"},
    {name:"Furkan", meslek:"ogrenci"},
    {name:"Hakan", meslek:"developer"}
]

export function FiltreDon({meslek}){
    const peopleList=Data_Ogrenciler.filter((person)=>person.meslek.toLowerCase()===meslek.toLowerCase()).map((person)=>(<li>{person.name}: {person.meslek}</li>))

    return(
        <section>
            <h2>Meslekleri Listele</h2>
            <ol>{peopleList}</ol>
        </section>
    )
}