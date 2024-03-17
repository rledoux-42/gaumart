"use client"
import React, { useEffect } from 'react'
import { useState } from "react";

function Checkbox(param: {name: string, label: string}) {
  return (
    <div>
      <input type="checkbox" name={param.name} id={param.name} className='my-2 bg-blueGray-200 rounded-lg' />
      <label htmlFor={param.name} className='mx-2'>{param.label}</label>
    </div>
  );
}

function FirstField() {
  const [show, setShow] = useState(true);
  const showCB = () => {
    if (show)
      setShow(false);
    else
      setShow(true);
  }
  const field = (<fieldset className='flex flex-col bg-gray-200 rounded-lg px-5 py-3'>
  <label className='mt-2'>Type de prestation :</label>
  <Checkbox name="prestation1" label="Cocktail apératifs"/>
  <Checkbox name="prestation2" label="Cocktail déjeunatoire/diantaire"/>
  <Checkbox name="prestation3" label="Buffet debout"/>
  <Checkbox name="prestation4" label="Buffet assis"/>
  <Checkbox name="prestation5" label="Repas servi à l'assiette"/>
  <Checkbox name="prestation6" label="Petit déjeuner"/>
  <label htmlFor="other">Autres :</label><input type="text" name='other' id='other' />
  <label htmlFor="reception" className='mt-6'>Lieu de réception :</label><input type="text" name='reception' id='reception' />
  <label htmlFor="date">Date de réception :</label><input type="date" name='date' id='date'/>
  <label htmlFor="hourStart">Heure de début :</label><input type="time" name='hourStart' id='hourStart'/>
  <label htmlFor="hourEnd">Heure de début :</label><input type="time" name='hourEnd' id='hourEnd'/>
  <label htmlFor="convives">Nombre de convives :</label><input type="number" min="5" max="200" step="1" name='convives' id='convives'/>
  <label>Personnel souhaité :</label>
    <div className="radio flex flex-row flex-nowrap">
      <input type="radio" id="yes" name="personnel" value="yes" />
      <label htmlFor="yes">Oui</label>
      <input type="radio" id="no" name="personnel" value="no" className='ml-4'/>
      <label htmlFor="no">Non</label>
    </div>
</fieldset>);

  return (
    <div className="">
          <legend className='w-full text-center bg-black rounded-lg text-white' onClick={showCB}>Réception</legend>
          {show ? field : ""}
      </div>
  );
}

function SecondField() {
  const [show, setShow] = useState(false);
  const showCB = () => {
    if (show)
      setShow(false);
    else
      setShow(true);
  }
  const field = (<fieldset className='flex flex-col bg-gray-200 rounded-lg px-5 py-3'>
  <label className='mt-2'>Boissons alcolisées :</label>
  <Checkbox name="alcool1" label="Vin rouge"/>
  <Checkbox name="alcool2" label="Vin blanc"/>
  <Checkbox name="alcool3" label="Vin rosé"/>
  <Checkbox name="alcool4" label="Champagne"/>
  <Checkbox name="alcool5" label="Crémant"/>
  <Checkbox name="alcool6" label="Kir"/>
  <Checkbox name="alcool7" label="Alcool fort"/>
  <label className='mt-4'>Boissons non alcolisées :</label>
  <Checkbox name="soft1" label="Eaux minerales plate et gazeuse"/>
  <Checkbox name="soft2" label="Café"/>
  <Checkbox name="soft3" label="Softs (jus de fruits et sodas)"/>
  <label className='mt-4'>Boissons complémentaires :</label>
  <Checkbox name="complementaire1" label="Matériel jetable"/>
  <Checkbox name="complementaire2" label="Matériel de reception à louer"/>
  <Checkbox name="complementaire3" label="Personnel de service"/>
  <Checkbox name="complementaire4" label="Décoration de service"/>
  <Checkbox name="complementaire5" label="Décoration de buffet"/>
  <Checkbox name="complementaire6" label="Décoration florale"/>
  <Checkbox name="complementaire7" label="Centre de table en fleurs fraiches"/>
  <Checkbox name="complementaire8" label="Nappage"/>
  <Checkbox name="complementaire9" label="Salles de rececption"/>
  <label htmlFor="other2">Autres :</label><input type="text" name='other2' id='other2'/>
</fieldset>);

  return (
  <div className="mt-5">
    <legend className='w-full text-center bg-black rounded-lg text-white' onClick={showCB}>Services</legend>
    {show ? field : ""}
  </div>
  );
}

function ThirdField() {
  const [price, setPrice] = useState(5000);
  const [show, setShow] = useState(false);
  const showCB = () => {
    if (show)
      setShow(false);
    else
      setShow(true);
  }
  const field = (<fieldset className='flex flex-col bg-gray-200 rounded-lg px-5 py-3'>
  <label className='mt-2'>Budget par personne :</label>
  <div className="flex flex-row flex-nowrap w-full justify-center">
    <label htmlFor="price">300€</label>
    <input type="range" id="price" name="price" min="300" max="10000" step="100" className='w-4/6' onChange={(e) => setPrice(Number(e.target.value))}/>
    <label htmlFor="price">10 000€</label>
  </div>
  <p className='w-full text-center'>{price}€</p>
</fieldset>);

  return (
  <div className="mt-5">
    <legend className='w-full text-center bg-black rounded-lg text-white' onClick={showCB}>Votre budget</legend>
    {show ? field : ""}
  </div>
  );
}

function FourthField() {
  const [show, setShow] = useState(false);
  const showCB = () => {
    if (show)
      setShow(false);
    else
      setShow(true);
  }
  const field = (<fieldset className='flex flex-col bg-gray-200 rounded-lg px-5 py-3'>
  <label className='mt-2'>Nom :</label><input type="text" name='name' id='name'/>
  <label >Prénom :</label><input type="text" name='firstname' id='fristname'/>
  <label >Société :</label><input type="text" name='society' id='society'/>
  <label >Adresse :</label><input type="text" name='location' id='location'/>
  <label >Téléphone :</label><input type="tel" name='tel' id='tel'/>
  <label >Email :</label><input type="mail" name='mail' id='mail'/>
</fieldset>);

  return (
  <div className="mt-5">
    <legend className='w-full text-center bg-black rounded-lg text-white' onClick={showCB}>Vos coordonnés</legend>
    {show ? field : ""}
  </div>
  );
}

export default function page() {
  const sendForm = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    window.alert(JSON.stringify(value));
    
  }
  return (
    <main className='flex justify-center items-center'>
      <form action="" className='w-3/6' onSubmit={sendForm}>
        <FirstField />
        <SecondField />
        <ThirdField />
        <FourthField />
        <div className="submit flex justify-end">
          <input type="submit" value="Envoyer le devis" className='mt-5 bg-black text-white p-1.5 rounded-lg'/>
        </div>
      </form>
    </main>
  )
}
