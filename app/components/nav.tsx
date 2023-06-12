'use client';
import Link from "next/link";


function openLoginModal() {
    const modal = document.getElementById("loginModal")
    modal?.click();
}

export default function Navbar() {
    
    return (
        <>
            <header className="navbar h-[64px] bg-base-100 shadow-md hover:shadow-lg transiton-all duration-300">
                <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Seoyw.kr</Link>
                </div>
                <div className="flex-none">
                <button className="btn btn-ghost" onClick={()=>openLoginModal()}>
                    로그인
                </button>
                </div>
            </header>
            <input type="checkbox" id="loginModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">앗, 이런!</h3>
                    <p className="py-4">이 기능은 아직 개발되지 않았습니다. 다음에 이용해주세요.</p>
                    <div className="modal-action">
                    <button className="btn" onClick={()=>openLoginModal()}>닫기</button>
                    </div>
                </div>
            </div>
        </>
    )
  }
  