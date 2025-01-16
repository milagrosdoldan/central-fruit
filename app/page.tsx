'use client'
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import Header from './ui/home/header';
import Navbar from './ui/home/navbar';
import OurProducts from './ui/home/ourProducts';
import AboutUs from './ui/home/aboutUs';
import Services from './ui/home/services';
import ContactUs from './ui/home/contactUs';
import { useEffect } from 'react';
import { useState } from 'react';
import Clients from './ui/home/clients';
import ContactBanner from './ui/home/contactBanner';

export default function Page() {
    const [isScrolled, setIsScrolled] = useState<Boolean>(false);

    useEffect(() => {
        const main = document.querySelector("main");
        main?.addEventListener("scroll", () => {
            if (main.scrollTop > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });

    }, [])


    return (
        <main id="main" className="w-full h-full overflow-x-hidden overflow-y-auto ">
            <Navbar
                isScrolled={isScrolled}
            />
            <div className="flex-1 flex flex-col items-center overflow-x-hidden overflow-y-auto">
                <Header />

                <Services />
                <Clients />
                <ContactBanner />
                <AboutUs />
                <ContactUs
                />
            </div>
        </main>
    );
}
