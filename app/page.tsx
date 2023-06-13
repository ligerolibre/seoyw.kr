'use client';
import React, { useEffect, useState } from "react";



export default function Home() {
  const [animationSetting, setAnimationSetting] = useState("false");

  useEffect(() => {
    if (typeof window === 'object') {
      const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("setting-Animation-Toggle-value="));
      if (cookieValue) {
        const value = cookieValue.split("=")[1];
        setAnimationSetting(value);
      }
    }
  }, []);
  return (
    <>
      <div className="hero md:h-72 h-96 bg-base-100 transition-all duration-1000 ease-in-out">
        <div className="hero-content text-center">
          <div className="max-w-md">
              <p className="group text-primary transition-all duration-1000 ease-in-out">
                <span className="font-serif text-5xl font-bold bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_8px] bg-no-repeat group-hover:bg-[length:100%_8px] transition-all duration-1000 ease-out">
                    Welcome
                </span>
              </p>
              <p className="py-6 font-serif">Fullstack Developer Seoyoungwoo</p>
          </div>
        </div>
      </div>
      <div className="xl:px-48 md:px-20 px-5 pb-20 grid gap-3 transiton-all duration-1000 ease-in-out">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="accordion-intro" defaultChecked/> 
          <div className="collapse-title text-xl font-semibold">
            보유한 기술
          </div>
          <div className="collapse-content grid gap-2">
            <p>프론트엔드 및 백엔드 기술</p>
            <li>Next.js</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
            <p>모바일 어플리케이션 개발</p>
            <li>Dart</li>
            <li>Flutter</li>
            <p>GUI 데스크탑 어플리케이션 개발</p>
            <li>Pyside6</li>
            <p>웹 개발</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>DaisyUI</li>
            <p>클라우드 컴퓨팅</p>
            <li>Firebase</li>
            <li>AWS</li>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="accordion-intro" /> 
          <div className="collapse-title text-xl font-semibold">
            참여한 프로젝트
          </div>
          <div className="collapse-content grid gap-2">
            <p>일부 프로젝트는 보안 또는 계약상의 이유로 표시되지 않습니다.</p>
            <li className="link link-hover"><a href="https://github.com/ligerolibre/randomtools">랜덤 노래 선정 시스템 (Python, Pyside6)</a></li>
            <li className="link link-hover"><a href="https://routinemath.page.link/kr">루틴수학 앱 개발 (Flutter, Firebase)</a></li>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="accordion-intro" /> 
          <div className="collapse-title text-xl font-semibold">
            사이트 정보
          </div>
          <div className="collapse-content grid gap-2">
            <p>기술스택</p>
            <li>프레임워크: Next.js</li>
            <li>CSS: Tailwind CSS, Daisy UI</li>
            <li>호스팅: Cloudflare Pages</li>
            <p>최근 업데이트 (2023.06.13.)</p>
            <li>다크모드 추가</li>
            <li>컨텐츠 추가</li>
            <li>애니메이션 효과 추가</li>
            <li>애니메이션 줄이기 모드 추가</li>
          </div>
        </div>
      </div>
      <div className='w-full grid justify-center p-24'>
        <div className={`mockup-code font-mono bg-base-200 text-base-content ${animationSetting=="true"?"":"hover:scale-125"} transition-all duration-1000 ease-in-out`}>
          <pre data-prefix="$"><code>me good -at</code></pre>
          <pre data-prefix=">" className='text-success'><code>Next.js</code></pre>
          <pre data-prefix=">" className='text-success'><code>Flutter</code></pre>
          <pre data-prefix=">" className='text-success'><code>Javascript</code></pre>
          <pre data-prefix=">" className='text-success'><code>Typescript</code></pre>
        </div>
      </div>
      <div className={`hero h-72 ${animationSetting=="true"?"":"hover:h-screen hover:bg-primary hover:text-primary-content hover:text-9xl"} bg-base-100 transition-all duration-1000 ease-in-out text-5xl`}>
        <div className="hero-content text-center">
          <div className="max-w-md">
              <h1 className="font-black">
                  도전적인
              </h1>
              <p className="py-6 text-xl">끊임없이 발전하기 위해서 도전하는</p>
          </div>
        </div>
      </div>
      <div className={`hero h-72 ${animationSetting=="true"?"":"hover:h-screen hover:bg-error hover:text-error-content hover:text-9xl"} bg-base-100 transition-all duration-1000 ease-in-out text-5xl`}>
        <div className="hero-content text-center">
          <div className="max-w-md">
              <h1 className="font-black">
                  열정적인
              </h1>
              <p className="py-6 text-xl">어떤 일이든 열정적으로</p>
          </div>
        </div>
      </div>
    </>
  )
}
