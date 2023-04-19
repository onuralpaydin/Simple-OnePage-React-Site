import { IconCheck } from "./icons/Icons";
//Conditional Rendering

export function PackagingList(){
    return (
        <section>
            <h2>Conditional Rendering-Tatil ihtiyaclarim</h2>
        <ul>
<ItemPackagingList isPacked={true} name="Havlu" />
<ItemPackagingList isPacked={false} name="Klavye" />
<ItemPackagingList isPacked={false} name="Mouse" />
<ItemPackagingList isPacked={true} name="Güneş Gözlüğü" />
<ItemPackagingList isPacked={true} name="Güneş Kremi" />
        </ul>
        </section>

    )
}
function ItemPackagingList({isPacked,name}){
return <li>{name} {isPacked && <IconCheck fillColor="red" width="15px"/>}</li>
}