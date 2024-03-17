
import React, { ReactElement, ReactNode } from 'react'

type LinkParameter = {
    link: string | null;
    text: string | ReactNode;
};

function Link(fn: LinkParameter): ReactElement {
    let link = (fn.link ? fn.link : "/");
    return (
        <a href={link} className="link">{fn.text}</a>
    );
}

function InputCustom(param: {type: string, name: string, id: string, placeholder: string, required: boolean}) {
    if (param.required)
        return (<input type={param.type} name={param.name} id={param.id} placeholder={param.placeholder} required className='my-2 bg-gray-200'/>);
    return (<input type={param.type} name={param.name} id={param.id} placeholder={param.placeholder} className='my-2 bg-gray-200'/>);
}

export default function page() {
    return (
        <>
            <main className='contact'>
                <section>
                    <article className='infos'>
                        <h2>GAUMART<br />Traiteur et Organisateur de Réception</h2>
                        <p>Depuis plus de 25 ans, nous organisons vos cocktails, buffets, réceptions, ...</p>
                        <p>Toutes nos propositions sont personnalisées pour répondre au mieux à vos attentes.<br />--</p>
                        <Link link="tel:+33145837878" text="Tél : 01 45 83 78 78" />
                        <Link link="mailto:gaumart75@orange.fr" text={<>Email :<span>gaumart75@orange.fr</span></>} />
                        <Link link="/contact/devis" text="Faire une demande de devis en ligne"/>
                    </article>
                    <form>
                        <InputCustom type={"text"} name={"name"} id={"name"} placeholder={"NOM"} required={false} />
                        <InputCustom type={"text"} name={"society"} id={"society"} placeholder={"SOCIETE *"} required={true} />
                        <InputCustom type={"email"} name={"mail"} id={"mail"} placeholder={"EMAIL *"} required={true} />
                        <InputCustom type={"tel"} name={"tel"} id={"tel"} placeholder={"TEL"} required={false} />
                        <textarea name="message" id="message" cols={30} rows={10} placeholder="MESSAGE *" required className='bg-gray-200'></textarea>
                        <div className="submit text-right my-4">
                            <input type="submit" value="Envoyer"/>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}
