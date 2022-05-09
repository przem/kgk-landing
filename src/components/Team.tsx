import React from "react";
import {Link} from "gatsby";

// @ts-ignore
import GumulaKubicka from "../images/gumula-kubicka.jpg";
// @ts-ignore
import Minartowicz from "../images/minartowicz.jpg"
// @ts-ignore
import Radecka from "../images/radecka.jpg"
// @ts-ignore
import Stawecka from "../images/stawecka.jpg"
// @ts-ignore
import Dyrdul from "../images/dyrdul.jpg"


export default function Team() {

    return (

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-16">
            <h2 className="text-lg text-kgk-gold uppercase py-4">Nasi prawnicy</h2>
            <h3 className="text-3xl text-bold">Poznaj nasz zespół</h3>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
                <PersonCard image={GumulaKubicka}
                            name={'Katarzyna Gumula-Kubicka'}
                            title={'adwokat, założyciel Kancelarii'}
                            link={'zespol/katarzyna-gumula-kubicka'}/>
                <PersonCard image={Minartowicz}
                            name={'Paweł Minartowicz'}
                            title={'adwokat, partner Kancelarii'}
                            link={'zespol/pawel-minartowicz'}/>
                <PersonCard image={Radecka}
                            name={'Magdalena Radecka'}
                            title={'adwokat'}
                            link={'zespol/magdalena-radecka'}/>
                <PersonCard image={Stawecka}
                            name={'Ewa Stawecka'}
                            title={'adwokat'}
                            link={'zespol/ewa-stawecka'}/>
                <PersonCard image={Dyrdul}
                            name={'Paweł Dyrduł'}
                            title={'aplikant radcowski'}
                            link={'zespol/pawel-dyrdul'}/>
            </div>

            </div>


    )

}

function PersonCard(props: {image: string, name: string, title:string, link: string}) {
    return (
        <div title={props.link} className="relative">
            <img src={props.image}/>
            <div className="absolute bottom-0 w-full p-8 bg-kgk-green/80">
                <h4 className="text-white text-2xl text-semibold tracking-tight">{props.name}</h4>
                <div className="text-white/75">{props.title}</div>
            </div>
        </div>
    )
}
