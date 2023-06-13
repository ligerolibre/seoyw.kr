'use client';
import Link from "next/link";
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import NavModals from "./setting";


function openSettingModal() {
    const modal = document.getElementById("settingModal")
    modal?.click();
}

export default function Navbar() {
    
    
    return (
        <>
            <header className="navbar h-[64px] bg-base-100 shadow-md dark:shadow-none transiton-all duration-300">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-xl font-mono">Seoyw.kr</Link>
                </div>
                    <div className="flex-none">
                    <button className="btn btn-square btn-ghost" onClick={()=>openSettingModal()}>
                        <Cog6ToothIcon className="w-6 h-6" />
                    </button>
                </div>
            </header>
            <NavModals/>
        </>
    )
  }
  