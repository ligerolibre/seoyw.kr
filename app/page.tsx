
export default function Home() {
  return (
    <>
      <div className="hero h-72 bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
              <a className="group text-primary transition-all duration-300 ease-in-out">
              <span className="text-5xl font-bold bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_8px] bg-no-repeat group-hover:bg-[length:100%_8px] transition-all duration-500 ease-out">
                  Welcome
              </span>
              </a>
              <p className="py-6">Fullstack Developer Seoyoungwoo</p>
          </div>
        </div>
      </div>
      <div className="p-20 grid gap-3">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-1" defaultChecked/> 
          <div className="collapse-title text-xl font-bold">
            보유한 기술
          </div>
          <div className="collapse-content grid gap-2">
            <a>프론트엔드 및 백엔드 기술</a>
            <li>Next.js</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
            <a>모바일 어플리케이션 개발</a>
            <li>Dart</li>
            <li>Flutter</li>
            <a>웹 개발</a>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>DaisyUI</li>
            <a>클라우드 컴퓨팅</a>
            <li>Firebase</li>
            <li>AWS</li>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-1" /> 
          <div className="collapse-title text-xl font-bold">
            참여한 프로젝트
          </div>
          <div className="collapse-content grid gap-2">
            <a>일부 프로젝트는 보안 또는 계약상의 이유로 표시되지 않습니다.</a>
            <li className="link link-hover"><a href="https://github.com/ligerolibre/randomtools">랜덤 노래 선정 시스템</a></li>
            <li className="link link-hover"><a href="https://routinemath.page.link/kr">루틴수학 앱 개발 (Flutter, Firebase)</a></li>
          </div>
        </div>
      </div>
    </>
  )
}
