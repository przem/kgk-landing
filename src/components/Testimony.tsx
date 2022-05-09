import React, {useState} from "react";
import {ArrowCircleRightIcon} from "@heroicons/react/solid";

export default function Testimony() {

    const [showTestimoniesCount, setShowTestimoniesCount] = useState(3);

    const data = [
        { author: 'FHU Polimer', text: 'Usługi świadczone przez Kancelarię charakteryzuje bardzo profesjonalne podejście do realizowanych zadań'},
        { author: 'Vproject sp. z o.o.', text: 'Przez kilka lat Pani Mecenas Katarzyna Gumula-Kubicka dała się poznać jako zaangażowany i elastyczny współpracownik'},
        { author: 'Dyrektor finansowy W.K.', text: 'Współpracuję z Mecenas Gumulą-Kubicką m.in. w zakresie optymalizacji prawno-podatkowej firmy oraz opiniowania i sporządzania umów i kontraktów. Praca świadczona przez Panią Adwokat spełnia wszystkie moje wymagania i oczekiwania.'},
        { author: 'Elżbieta Nowak', text: 'Profesjonalizm,wiedza i ogromne zaangażowanie z jakim spotkałam się w tej kancelarii adwokackiej to rzadkość .Pani Mecenas Katarzyna Gumula-Kubicka polecam '},
        { author: 'Magdalena Zawadzka', text: 'Polecam niezawodna, profesjonalna, doświadczona i punktualna;-)'},
        { author: 'Drogi i Ulice', text: 'Usługi Mecenas Gumuli-Kubickiej polecam przede wszystkim przedsiębiorcom chcącym zabezpieczyć swoje interesy'},
        { author: 'Elżbieta', text: 'Adw. Katarzyna Gumula-Kubicka przygotowywała dokumenty dla mojej spółki oraz umowy o współpracy. Pełen profesjonalizm i idealne wyważenie interesów obu stron umowy. Rekomenduję współpracę z Kancelarią Adwokacką Katarzyna Gumula-Kubicka'},
        { author: 'Maja Drexler', text: 'Mec. Gumula-Kubicka jest prawdziwym ekspertem, osobą bardzo wiarygodną i zaangażowaną we wszystko co wykonuje. Prawdziwie oddana swojej pracy i osobom z jakimi współpracuje.'},
        { author: 'Roman Gavlo', text: 'Jestem bardzo zadowolony z korzystania usług danej kancelarii. Pani adw. Katarzyna Gumula Kubicka profesjonalnie podchodzi do każdej sprawy. Chciałbym podziękować za współpracę w przygotowaniu umowy dystrybutorskiej, Pani adwokat przygotowała najlepszą umowę z możliwych.'},
        { author: 'J.H.', text: 'Szybkość działania i ogromne zaangażowanie. Dziękuję'},
        { author: 'E.N.', text: 'Profesjonalizm, wiedza i ogromne zaangażowanie z jakim spotkałam się w tej kancelarii adwokackiej to rzadkość. Pani Mecenas Katarzyna Gumula-Kubicka polecam'},
        { author: 'Elżbieta', text: 'Adw. Katarzyna Gumula-Kubicka przygotowywała dokumenty rejestracyjne i umowy dla mojej spółki. Pełen profesjonalizm i idealne wyważenie interesów.'},
        { author: 'Agnieszka Czykieta', text: 'Obsługa prawna, świadczona przez Kancelarię, jest zawsze na najwyższym poziomie.\n'},
    ]

    return (

        <div className="bg-kgk-gold/10">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-16">
                <h2 className="text-lg text-kgk-gold uppercase py-4">Referencje</h2>
                <h3 className="text-3xl text-bold">Co o nas mówią Klienci</h3>

                <div className="grid gap-4 grid-cols-2 md:grid-cols-4 my-16">
                    {data.slice(0, showTestimoniesCount).map((value, key) => <Testimon key={key} text={value.text} author={value.author}/>)}
                    { showTestimoniesCount < data.length &&
                        <div className="w-full flex items-center justify-center flex-col cursor-pointer " onClick={() => setShowTestimoniesCount(showTestimoniesCount + 4)}>
                            <ArrowCircleRightIcon className="w-16 h-16 text-kgk-gold"></ArrowCircleRightIcon>
                            <span className="text-kgk-gold text-sm" >Pokaż kolejne</span>
                        </div>
                    }
                </div>

            </div>

        </div>



    )

}


const Testimon = (props: {text: string, author: string}) => {

    return (
            <div className="relative w-full p-8 ml-auto bg-kgk-green rounded-2xl">
                <div className="flex flex-col text-white">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-kgk-gold-light fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/></svg>
                    </div>
                    <p className="text-white my-5 px-2 text-sm">
                        {props.text}
                    </p>
                    <div className="flex justify-between pl-2">
                        <h4 className="font-bold text-xl">{props.author}</h4>
                    </div>
                </div>
            </div>
    )
}
