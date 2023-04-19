import { useState } from "react";


export const SectionComponentsMemory = () => {
    return (
        <section>
            <h1>State , Bir componentin hafızasıdır.</h1>
            <MyButton />
            <MyButton1 />
            <ResimGalerisi/>
        </section>
    )
}

function MyButton() {
    let counter = 0;

    function handleClick(e) {
        counter++;
        console.log(counter);
    }
    return (
        <button type="button" onClick={handleClick}> Hello {counter}</button>
    )
}
//component rendering

function MyButton1() {
    //rendering
    const [counter, setCounter] = useState(0)

    function handleClick(e) {
        setCounter(counter + 1)//trigger rerender
    }
    return (
        <button type="button" onClick={handleClick}> Hello {counter}</button>
    )
}

const verilerim = [
    {
        ad: "Cem Mert",
        imgUrl: "https://i.imgur.com/MK3eW3As.jpg",
        soyad: "Şimşek"
    },
    {
        ad: "Abdulkadir",
        imgUrl: "https://i.imgur.com/QIrZWGIs.jpg",
        soyad: "Dilmen"
    },
    {
        ad: "Fatih",
        imgUrl: "https://i.imgur.com/yXOvdOSs.jpg",
        soyad: "Çetin"
    },
    {
        ad: "Muhammed Furkan",
        imgUrl: "https://i.imgur.com/7vQD0fPs.jpg",
        soyad: "Türkmen"
    }, {
        ad: "Onur Alp",
        imgUrl: "https://pbs.twimg.com/media/Dn4yK8NWsAY9iSb.jpg:large",
        soyad: "Aydın"
    }
];

function ResimGalerisi(){
    const [galeriIndex, setIndex]=useState(0);
    function NextClick(e){
if (galeriIndex===verilerim.length-1) {
    setIndex(0);
} else {
    setIndex(galeriIndex+1)
}
    }

    return(
        <div className="gallery-cards">
            <button type="button" onClick={NextClick}>Next</button>
            <div className="card">
                <figure>
<img src={verilerim[galeriIndex].imgUrl} alt={verilerim[galeriIndex].ad}></img>
<figcaption>{verilerim[galeriIndex].ad}</figcaption>
<figcaption>{verilerim[galeriIndex].soyad}</figcaption>

                </figure>
            </div>
        </div>
    )
}