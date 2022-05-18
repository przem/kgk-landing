import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";

export default function Team() {

    const data = useStaticQuery(graphql`
        query {
          allContentfulTeam(sort: {order: ASC, fields: index}) {
            nodes {
              name
              image {
                file {
                  url
                }
              }
              position
            }
          }
        }

      `)

    return (

        <div id="zespol" className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8  py-8 md:py-16">
            <h2 className="text-lg text-kgk-gold uppercase py-4">Nasi prawnicy</h2>
            <h3 className="text-3xl text-bold">Poznaj nasz zespół</h3>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
                {
                    data.allContentfulTeam.nodes.map((member: any, idx: number) => {
                        return (<PersonCard key={idx} image={member.image.file.url}
                                            name={member.name}
                                            title={member.position}
                                            link={`zespol/${member.slug}`}/>)
                    })
                }

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
