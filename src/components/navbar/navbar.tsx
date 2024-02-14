"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {  useState } from "react";
import { usePathname } from 'next/navigation';

import Logo from '@/app/favicon.ico';
import UserIco from '../../../public/assets/images/lixo1.jpg';

import { Button, buttonVariants } from '../buttons/Button';
import ActiveLink from '../activelink/ActiveLink';

import { ImHome3 } from "react-icons/im";
import { IoGrid,  IoChatbubblesSharp, IoCreate, IoSearch, IoClose  } from "react-icons/io5";
import { FaHouseChimney, FaBell  } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMapPin } from "react-icons/hi2";

const navbar = () => {
    const pathname = usePathname();
    const isLoginPage = pathname === '/login';
    const [isToggled, setIsToggled] = useState(false);

    const toggleButton = () => {
        setIsToggled(!isToggled);
    };


    
  return (
    <>
  <header id="desktop-header" className="hidden md:block" aria-labelledby="desktop-header-label">
  <nav aria-label="Navigação Secundária" className="flex flex-row w-full h-auto bg-rickblack font-semibold">
    <div className="flex flex-row w-full items-center py-2">
      
      {/* Logo and Thme section */}
      <figure className="flex flex-row items-center gap-3 lg:w-1/2">
        <Link className="px-3" href="/" aria-label="Ir para a página inicial">
          <Image src={Logo} alt='Logo clickTips' className='md:w-24 lg:w-28 h-auto' />
        </Link>

        <h1 className="hidden lg:block text-3xl">Clicktips</h1>
        <h2 className="hidden lg:block text-lg text-gray-500">Destrave Memórias com um click</h2>
      </figure>

      {/* Search and Navigation Section */}
      <div className="flex flex-row w-full">
        <form action="" className="flex items-center w-full">
          <label htmlFor="search-input" className="sr-only">Search:</label>
          <input type="text" id="search-input" className="h-12 lg:h-16 rounded-l-lg border-none w-full px-3 text-rickblack" placeholder="Procure no ClickTips..." />
          <Button variant='search' aria-label='Pesquisar Local' type='button'>
            <HiMapPin className='text-3xl'/>
            BA
            <MdKeyboardArrowDown className='text-rickblack text-lg lg:text-3xl'/>
          </Button>

          <Button className='rounded-r-lg border-l-0' variant='search' aria-label='Search' type='submit'>
            <IoSearch className='text-rickblack text-5xl  rounded-full  p-2'/>
          </Button>
        </form>

        {/* Navigation Links */}
        <div className="flex md:gap-3 lg:gap-6 w-1/3 justify-center items-center md:text-lg lg:text-2xl ">
          <Link href={'/login'} className={buttonVariants()} aria-label='Ir para o Login'>
            Login
          </Link>

          <Link href={'#'} className={buttonVariants()} aria-label='Ir para o Registrar'>
            Register
          </Link>
        </div>
      </div>
    </div>
  </nav>

  <nav aria-label="Navigação Primária" className="flex flex-row w-full h-auto justify-between text-center bg-Cerulean text-xl">
    <ul className="flex list-none gap-10 lg:gap-16 px-8 lg:px-12 items-center lg:py-3 md:whitespace-nowrap">
      <li className="p-2 hover:-translate-y-2 transition-all hover:text-PrussianBlue">
        <Link href="/myannounces" className="flex items-center gap-4" aria-label="Ir para a Meus Anúncios">
          <IoGrid className='text-2xl lg:text-4xl'/>
          <h2>Meus Anúncios</h2>
        </Link>
      </li>
      <li className="p-2 hover:-translate-y-2 transition-all hover:text-PrussianBlue ">
        <Link href="#" className="flex items-center gap-4" aria-label="Ir para a página Chat">
          <IoChatbubblesSharp className='text-2xl lg:text-4xl'/>
          <h2>Chat</h2>
        </Link>
      </li>
      <li className="p-2 hover:-translate-y-2 transition-all hover:text-PrussianBlue">
        <Link href="#" className="flex items-center gap-4" aria-label="Ir para a página Notificação">
          <FaBell className='text-2xl lg:text-4xl'/>
          <h2>Notificação</h2>
        </Link>
      </li>
      <li className="p-2 hover:-translate-y-2 transition-all hover:text-PrussianBlue ">
        <Link href="#" className="flex items-center gap-4" aria-label="Criar um novo Anúncio">
          <IoCreate className='text-2xl lg:text-4xl'/>
          <h2>Anúnciar</h2>
        </Link>
      </li>
    </ul>
  </nav>
</header>


<header className=" md:hidden fixed w-full h-auto" id="mobile-header" aria-labelledby="mobile-header-label">
    <nav  aria-label="Navigação Secundária" className={`${isLoginPage ? 'hidden' : 'bg-gradient-to-br from-Cerulean to-rickblack'}`}>

      <div className='w-full h-auto flex flex-row pt-6 px-8 items-center'>
        <figure className='rounded-full w-12 h-auto'>
          <div className='flex flex-row space-x-20'>
            <Image src={UserIco} alt='' className='rounded-full'/>{/* NEED TO REWORK BECAUSE IS THE USER IMAGE PROFILE */}
            <Button type='button' aria-label='Pesquisar Local' variant='secondary' size='sm'>
              <HiMapPin className='text-md'/>
              <h3 className="text-md ">Bahia</h3>
              <MdKeyboardArrowDown className='text-md '/>
            </Button>

          </div>
          <h3 className='whitespace-nowrap mt-3'>Olá, Paulo ! :&rang;</h3>
          <p className='whitespace-nowrap  text-xs'> Descubra o que existe, Clicktips o espera !</p>
        </figure>
      </div>

      <div className='mx-8 py-3'>
          <form action="" className="flex items-center justify-evenly w-full border-2 rounded-xl bg-white mx-auto   p-2">
              <label htmlFor="search-input" className="sr-only">Search:</label>
              <input type="text" id="search-input" className="text-sm border-none w-full" placeholder="Procure no ClickTips..."></input>
              <button type="submit" className="active:shadow-inner active:shadow-black active:rounded-xl flex items-center justify-center focus:outline-none focus:ring focus:ring-gray-300 px-3">
              <IoSearch className='text-rickblack text-3xl  rounded-full group-hover:bg-PrussianBlue group-hover:text-white'/>
              </button>
          </form>
      </div>
    </nav>

    <nav className="navigation fixed bottom-0 flex flex-row mx-auto w-full h-auto  bg-Cerulean rounded-t-3xl">
      <ul className="flex flex-row items-center px-6 justify-evenly text-lg w-full h-12 relative gap-6">
        <li className="items-start justify-center">
          <ActiveLink href="/myannounces" icon={<IoGrid/>} aria-label='Ir para Meus Anúncios' >
            Meus Anúncios
          </ActiveLink>
        </li>
        <li className="">
          <ActiveLink href="#" icon={<IoChatbubblesSharp/>} aria-label='Ir para o Chat'>
            Chat
          </ActiveLink>
        </li>
        <li className="">
          <ActiveLink href="/" icon={<ImHome3/>} aria-label='Ir para HomePage'>
            Início
          </ActiveLink>
        </li>
        <li className="">
          <ActiveLink href="#" icon={<FaBell/>} aria-label='Ver Notificações'>
            Notificações
          </ActiveLink>
        </li>
        <li className="">
          <ActiveLink href="#" icon={<IoCreate/>} aria-label='Criar um novo Anúncio' >
            Anúnciar
          </ActiveLink>
        </li>
      </ul>
    </nav>
    </header>
    </>
  )
}

export default navbar;