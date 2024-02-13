"use client"
import React, { useState } from 'react';
import { Button } from '../buttons/Button';
import Link from 'next/link';

const FormLogin = () => {
    const [inputFocusState, setInputFocusState] = useState({
        email: false,
        password: false,
    });

    const handleInputFocus = (inputName: string) => {
        setInputFocusState((prevState) => ({
            ...prevState,
            [inputName]: true,
        }));
    };

    const handleInputBlur = (inputName: string, e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setInputFocusState((prevState) => ({
                ...prevState,
                [inputName]: false,
            }));
        }
    };

    return (
        <section className='flex flex-row w-auto h-auto justify-center m-28 rounded-3xl' aria-labelledby='Formulário de Login'>
            <div className='w-1/2 h-auto flex flex-col text-center space-y-2 items-center rounded-l-3xl py-24 text-rickblack shadow-md shadow-Cerulean/20 border-t-2'>
                <h1 className='text-3xl line-clamp-3 text-PrussianBlue '>Faça Login para Anunciar</h1>
                <p className='whitespace-nowrap leading-9 text-xs items-center'>
                    Faça Login na sua Conta Click Tips <span className='text-xl'>😉</span>
                </p>

                <div className='py-6 w-full space-y-6  drop-shadow-2xl'>
                    <form action='' className='flex items-center border-2 rounded-xl bg-white mx-auto w-1/2 h-12 p-2 relative'>
                        <label htmlFor='email-input'>
                            <small
                                className={`absolute font-semibold text-md  duration-700 transition-all ${
                                    inputFocusState.email ? '-translate-y-12 text-lg text-PrussianBlue' : 'translate-y-0 text-gray-400 text-md'
                                }`}
                            >
                                Email:
                            </small>
                        </label>
                        <input
                            type='text'
                            id='email-input'
                            className='text-sm focus:outline-none w-full'
                            onFocus={() => handleInputFocus('email')}
                            onBlur={(e) => handleInputBlur('email', e)}
                        />
                    </form>

                    <form action='' className='flex items-center border-2 rounded-xl bg-white mx-auto w-1/2 h-12 p-2 relative'>
                        <label htmlFor='password-input'>
                            <small
                                className={`absolute font-semibold   duration-700 transition-all ${
                                    inputFocusState.password ? '-translate-y-12 text-lg text-PrussianBlue' : 'translate-y-0 text-gray-400 text-md'
                                }`}
                            >
                                Senha:
                            </small>
                        </label>
                        <input
                            type='password'
                            id='password-input'
                            className='text-sm focus:outline-none w-full'
                            onFocus={() => handleInputFocus('password')}
                            onBlur={(e) => handleInputBlur('password', e)}
                        />
                    </form>

                    <div className='flex flex-row justify-between  items-center whitespace-nowrap  text-sm w-1/2 mx-auto '>
                        <button className='space-x-2'>
                            <input type='checkbox' id='checkmarkCheckbox'></input>
                            <label htmlFor='checkmarkCheckbox'>Lembrar Minha Senha</label>
                        </button>

                        <Link href={'#'} className='flex hover:text-Cerulean'>
                            Esqueceu sua Senha?{' '}
                        </Link>
                    </div>
                </div>
                <Button className='' size='md' aria-label='Search' type='submit'>
                    Login in
                </Button>

                <span className='flex flex-row space-x-3 py-6 leading-10 '>
                    <p className='text-sm'>Não Tem Uma Conta? </p>
                    <Link href={'#'} className='text-sm hover:text-Cerulean '>
                        Criar Conta{' '}
                    </Link>
                </span>
            </div>
            <aside className='flex flex-col w-1/3 h-auto text-center py-28  space-y-10 items-center px-10 rounded-r-3xl border-l-[1px] border-Cerulean bg-gradient-to-r from-PrussianBlue to-Cerulean drop-shadow-2xl '>
                <h2 className='text-3xl line-clamp-3'>Bem Vindo de Volta !</h2>
                <p>
                    Lorem incididunt sint veniam mollit voluptate. Sunt sint tempor ad magna non do culpa ex laboris Lorem
                    occaecat esse. Esse irure id non elit pariatur ad quis et duis anim ipsum aliqua ea.
                </p>
            </aside>
        </section>
    );
};

export default FormLogin;
