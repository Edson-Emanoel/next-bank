import React from "react";
import Image from "next/image";

import Card from "../../../../public/card.png";
import destakIcon from "../../../../public/Icons.png";
import eyeIcon from "../../../../public/eye-icon.png";
import infoIcon from "../../../../public/info-icon.png";
import emailIcon from "../../../../public/email-icon.png";
import profileIcon from "../../../../public/profile-icon.png";
import calendarIcon from "../../../../public/calendar-icon.png";
import arrowUpIcon from "../../../../public/arrow-up-icon.png";
import arrowDwIcon from "../../../../public/arrow-down-icon.png";
import balanceIcon from "../../../../public/balance-icon.png";
import historyIcon from "../../../../public/history-icon.png";

export default function Dashboard() {
  return (
    <div className="h-screen py-10 px-20 gap-20 flex">
      <div className="left flex-1">
        <div className="head flex flex-col px-5 py-2 rounded-t-[10px] bg-[#7645d8]">
          <div className="icons flex items-center justify-between">
            <div className="profile w-10 h-10 rounded-full flex items-center justify-center bg-[#814bee]">
              <Image src={profileIcon} alt="Icone de Perfil" />
            </div>

            <div className="flex items-center gap-5">
              <Image
                src={eyeIcon}
                className="w-[19.5px] h-[8.5px]"
                alt="Icone de Olho"
              />

              <Image
                src={emailIcon}
                className="w-[20px] h-[20px]"
                alt="Icone de Mensagem"
              />

              <Image
                src={infoIcon}
                className="w-[20px] h-[20px]"
                alt="Icone de Informações"
              />
            </div>
          </div>

          <h1 className="text-2xl font-medium text-center mt-10 mb-5">
            Edson Emanoel
          </h1>
        </div>
        <div className="body mx-10 mt-5 px-32">
          <div className="flex flex-col">
            <h2 className="text-lg">Conta</h2>

            <h2 className="text-xl font-medium text-left">R$ 15.538, 00</h2>

            <div className="infos mt-5 self-center">
              <div className="icons gap-5 flex items-center justify-center w-full">
                <div className="icon">
                  <div className="bg-[#7645d8] w-14 h-14 rounded-full flex items-center justify-center mt">
                    <Image
                      src={balanceIcon}
                      alt="Icone de Balança"
                      width={25}
                      height={25}
                    />
                  </div>

                  <h1>Simular</h1>
                </div>

                <div className="icon">
                  <div className="bg-[#7645d8] w-14 h-14 rounded-full flex items-center justify-center mt">
                    <Image
                      src={arrowUpIcon}
                      alt="Icone de Seta para cima"
                      width={25}
                      height={25}
                    />
                  </div>

                  <h1>Aportar</h1>
                </div>

                <div className="icon">
                  <div className="bg-[#7645d8] w-14 h-14 rounded-full flex items-center justify-center mt">
                    <Image
                      src={arrowDwIcon}
                      alt="Icone de Seta para cima"
                      width={25}
                      height={25}
                    />
                  </div>

                  <h1>Agendar</h1>
                </div>

                <div className="icon">
                  <div className="bg-[#7645d8] w-14 h-14 rounded-full flex items-center justify-center mt">
                    <Image
                      src={historyIcon}
                      alt="Icone de Histórico"
                      width={25}
                      height={25}
                    />
                  </div>

                  <h1>Histórico</h1>
                </div>
              </div>

              <Image src={Card} alt="Imagem do Cartão" width={480} />
            </div>
          </div>
        </div>
      </div>

      <div className="right flex-1 flex flex-col gap-2 rounded-[10px]">
        <div className="head flex flex-col px-5 py-2 rounded-t-[10px] bg-[#7645d8]">
          <div className="icons flex items-center justify-between">
            <div className="profile w-10 h-10 rounded-full flex items-center justify-center bg-[#814bee]">
              <Image src={profileIcon} alt="Icone de Perfil" />
            </div>

            <div className="flex items-center gap-5">
              <Image
                src={eyeIcon}
                className="w-[19.5px] h-[8.5px]"
                alt="Icone de Olho"
              />

              <Image
                src={emailIcon}
                className="w-[20px] h-[20px]"
                alt="Icone de Mensagem"
              />

              <Image
                src={infoIcon}
                className="w-[20px] h-[20px]"
                alt="Icone de Informações"
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-10">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-left mt-10">
                Edson Emanoel
              </h1>
              <small>Conta</small>

              <h2 className="text-xl font-medium text-left mt-2">
                R$ 15.538, 00
              </h2>
            </div>

            <div className="filter">
              <label className="mr-2">Saldo Anual: </label>

              <select className="w-28 outline-none border-none rounded-[3px] text-[#814bee]">
                <option value="2025">Em 2025</option>
                <option value="2024">Em 2024</option>
                <option value="2023">Em 2023</option>
                <option value="2022">Em 2022</option>
              </select>
            </div>
          </div>
        </div>

        <div className="body bg-[#7645d8] h-[730px] rounded-b-[10px] px-5 flex flex-col">
          <button className="mt-2 bg-[#21bc16] hover:bg-[#2ccf1d] duration-500 transition-colors text-[#FFFFFF] px-4 py-2 rounded-md text-[18px] self-end">
            Adicionar Pagamento
          </button>

          <div className="cardItem h-32 gap-8 rounded-md flex flex-col items-start justify-center bg-[#5935a3] border-[2px] border-white mt-3 px-5">
            <h5 className="text-left text-xl font-medium">R$ 12.000,00</h5>

            <div className="infos flex justify-between w-full">
              <span className="gap-2 flex">
                <Image src={destakIcon} width={20} height={8} alt="a" />
                Capital
              </span>

              <span className="gap-2 flex">
                <Image src={calendarIcon} width={20} height={5} alt="a" />
                12/12/2024
              </span>
            </div>
          </div>

          <div className="cardItem h-32 gap-8 rounded-md flex flex-col items-start justify-center bg-[#5935a3] border-[2px] border-white mt-3 px-5">
            <h5 className="text-left text-xl font-medium">R$ 12.000,00</h5>

            <div className="infos flex justify-between w-full">
              <span className="gap-2 flex">
                <Image src={destakIcon} width={20} height={8} alt="a" />
                Capital
              </span>

              <span className="gap-2 flex">
                <Image src={calendarIcon} width={20} height={5} alt="a" />
                12/12/2024
              </span>
            </div>
          </div>

          <div className="cardItem h-32 gap-8 rounded-md flex flex-col items-start justify-center bg-[#5935a3] border-[2px] border-white mt-3 px-5">
            <h5 className="text-left text-xl font-medium">R$ 12.000,00</h5>

            <div className="infos flex justify-between w-full">
              <span className="gap-2 flex">
                <Image src={destakIcon} width={20} height={8} alt="a" />
                Capital
              </span>

              <span className="gap-2 flex">
                <Image src={calendarIcon} width={20} height={5} alt="a" />
                12/12/2024
              </span>
            </div>
          </div>

          <div className="cardItem h-32 gap-8 rounded-md flex flex-col items-start justify-center bg-[#5935a3] border-[2px] border-white mt-3 px-5">
            <h5 className="text-left text-xl font-medium">R$ 12.000,00</h5>

            <div className="infos flex justify-between w-full">
              <span className="gap-2 flex">
                <Image src={destakIcon} width={20} height={8} alt="a" />
                Capital
              </span>

              <span className="gap-2 flex">
                <Image src={calendarIcon} width={20} height={5} alt="a" />
                12/12/2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
