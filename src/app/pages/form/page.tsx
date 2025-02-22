import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../../../../public/card.png";
import Logo from "../../../../public/logo.png";

export default function Form() {
  return (
    <div className="flex items-center justify-center h-screen text-white px-52 gap-20">
      <Image src={Card} alt="a" className="w-[500px]" />

      <div className="w-[1000]">
        <div className="flex gap-0 items-center">
          <Image src={Logo} alt="Logo" />
          <h1 className="relative right-2 text-3xl font-semibold">
            uper Conta
          </h1>
        </div>

        <form className="w-[300px] gap-2 flex flex-col items-center justify-center bg-[#7645d8] px-5 py-3 rounded-[7px] border border-white">
          <div className="flex gap-0 items-center justify-center mb-[-15px]">
            <Image src={Logo} alt="Logo" className="w-12 h-12" />
            <h1 className="relative right-2 text-lg font-medium">uper Conta</h1>
          </div>

          <div className="flex flex-col">
            <label>E-mail:</label>
            <input
              type="email"
              className="w-[250px] h-[30px] rounded-[5px] borde-none outline-none px-2 text-[#7645d8]"
            />
          </div>

          <div className="flex flex-col">
            <label>Senha:</label>
            <input
              type="passsword"
              className="w-[250px] h-[30px] rounded-[5px] borde-none outline-none px-2 text-[#7645d8]"
            />
          </div>

          <button className="w-[100px] rounded-[3px] bg-white text-[#7645d8] text-lg font-semibold">
            <Link href="/pages/dashboard">Entrar</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
