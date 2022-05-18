import React, {useState} from "react";
import {ArrowCircleRightIcon} from "@heroicons/react/solid";
import {graphql, useStaticQuery} from "gatsby";

export default function Testimony() {

    const [showTestimoniesCount, setShowTestimoniesCount] = useState(3);

    const data = useStaticQuery(graphql`
        query {
          allContentfulTestimony(sort: {fields: index, order: DESC}) {
            nodes {
              author
              description {
                description
              }
            }
          }
        }

      `)



    return (

        <div className="bg-kgk-gold/10">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8  py-8 md:py-16">
                <h2 className="text-lg text-kgk-gold uppercase py-4">Referencje</h2>
                <h3 className="text-3xl text-bold">Co o nas mówią Klienci</h3>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-4 my-16">
                    {
                        // @ts-ignore
                        data.allContentfulTestimony.nodes.slice(0, showTestimoniesCount).map((value, key) => <Testimon key={key} text={value.description.description} author={value.author}/>)
                    }
                    { showTestimoniesCount < data.allContentfulTestimony.nodes.length &&
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
                        <h4 className="font-semibold text-xl">{props.author}</h4>
                    </div>
                </div>
            </div>
    )
}
