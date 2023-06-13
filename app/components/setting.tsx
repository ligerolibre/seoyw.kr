import React, { useEffect, useState } from "react";
import { GetServerSideProps } from 'next';
import { serialize } from 'cookie';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const testCookieValue = req.cookies.test;

  console.log(testCookieValue); // 쿠키 값 출력

  return { props: {} };
};

function openSettingModal() {
  const modal = document.getElementById("settingModal");
  modal?.click();
}

function saveSetting(animationToggleValue: boolean) {
  const modal = document.getElementById("settingModal");
  document.cookie = serialize(
    'setting-Animation-Toggle-value',
    String(animationToggleValue)
  );
  modal?.click();
  window.location.reload();
}

export default function NavModals() {
  const [animationToggle, setAnimationToggle] = useState<boolean>(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("setting-Animation-Toggle-value="));
    return cookieValue ? cookieValue.split("=")[1] === "true" : false;
  });

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("setting-Animation-Toggle-value="));
    if (cookieValue) {
      const value = cookieValue.split("=")[1];
      setAnimationToggle(value === "true");
    }
  }, []);
    
    return (
        <>
            <input type="checkbox" id="settingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-semibold text-lg">설정</h3>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">애니메이션 줄이기</span>
                            <input type="checkbox" className="toggle" id="settingAnimationToggle" checked={animationToggle} onChange={(e) => setAnimationToggle(e.target.checked)} />
                        </label>
                    </div>
                    <div className="modal-action w-full">
                        <button className="btn md:w-auto w-1/2" onClick={()=>openSettingModal()}>취소</button>
                        <button className="btn btn-primary md:w-auto w-1/2" onClick={()=>saveSetting(animationToggle)}>설정 저장</button>
                    </div>
                </div>
            </div>
        </>
    )
  }
  