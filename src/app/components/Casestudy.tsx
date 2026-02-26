import clsx from "clsx";
import { Link } from "react-router";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-nh1slv3y2e";
import imgV4Media1 from "figma:asset/0df76cf99bb5d88edf32f3068c222898c99dd809.png";
import imgTelaSobreNosMedia1 from "figma:asset/ad2f9a3bfd96e7b3d74fe04a127a20cc3207cf38.png";
import imgTelaNoticiasMedia1 from "figma:asset/0d25ebaeeb741e4bf859340709c8f6fbbf7180b6.png";
import imgTelaProjetosMedia2 from "figma:asset/77274876f8901c906bdbbb6ef0e062e4d2c32a4b.png";
import imgTelaCursosMediaPresencial1 from "figma:asset/64964b7f6be25284106a4704620765650a00b298.png";
import img1200PxAdobePhotoshopMobileIcon1 from "figma:asset/f278bfd1add28b4148b48b173985b4d5730cd2aa.png";
import imgAdobeIllustratorCcLogo1024X9993 from "figma:asset/50e1c36ceb11011aaa8a3ee6d8043e6b91727187.png";
import imgImage69 from "figma:asset/c8614c59cf4a8af2015075ff0e59bf88ad3b01ae.png";
import imgImage70 from "figma:asset/2b1d92fac47bfc98e28d62a62bf6f1b46c42dcac.png";
import imgImage71 from "figma:asset/b6b05186b8dcb1cbe1167fb3bea60b1baea92dc6.png";
import imgImage72 from "figma:asset/653ae7e55d371cefcfa229baf96f4d86938a65c7.png";
import imgPrototipoBaixaV41 from "figma:asset/75827883b4bdce0552f6f8805e61d557075e3006.png";
import imgDigitalizado202602091050021 from "figma:asset/cf3a2c7956976d575968719894e5066889fd07e2.png";
import imgHomeGif1 from "../../assets/gifs/Home.gif";
import imgCopy3224B06AD1E149B89Bdc2Bbb28Fd5A081 from "../../assets/gifs/Projetos.gif";
import imgAdminGif1 from "../../assets/gifs/Admin.gif";

type BackgroundImage9Props = {
  additionalClassNames?: string;
};

function BackgroundImage9({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage9Props>) {
  return (
    <div className={clsx("bg-[rgba(230,199,255,0.34)] relative rounded-[20px] shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start px-[15px] py-[6px] relative min-h-full w-full">{children}</div>
    </div>
  );
}

function BackgroundImage8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[26px] top-[131px]">
      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[0] not-italic relative shrink-0 text-[#0a0614] text-[16px] w-[208px] whitespace-pre-wrap">{children}</p>
    </div>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    // Aumentei a largura de w-[313px] para w-[380px] (você pode ajustar esse número se quiser mais ou menos largo)
    <div className="bg-[#e6c7ff] h-[186px] relative rounded-[24px] shrink-0 w-[380px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#cad9ec] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}
type Frame1899BackgroundImage1Props = {
  additionalClassNames?: string;
};

function Frame1899BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<Frame1899BackgroundImage1Props>) {
  return (
    <div className={clsx("relative rounded-[30px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">{children}</div>
    </div>
  );
}
type Frame1899BackgroundImageProps = {
  additionalClassNames?: string;
};

function Frame1899BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<Frame1899BackgroundImageProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19.5" } as React.CSSProperties} className={clsx("absolute flex h-[849.856px] items-center justify-center w-[675.994px]", additionalClassNames)}>
      <div className="-rotate-30 flex-none">{children}</div>
    </div>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Aspas de abertura */}
      <div className="flex items-start gap-1">
        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 16.5C2.83333 16.5 0 13.6667 0 10C0 6.33333 2.83333 3.5 6.5 3.5V6.5C4.5 6.5 3 8 3 10C3 12 4.5 13.5 6.5 13.5V16.5ZM17.5 16.5C13.8333 16.5 11 13.6667 11 10C11 6.33333 13.8333 3.5 17.5 3.5V6.5C15.5 6.5 14 8 14 10C14 12 15.5 13.5 17.5 13.5V16.5Z" fill="#CC98F6" stroke="#CC98F6" strokeWidth="3" />
        </svg>
      </div>
      {/* Linha horizontal */}
      <div className="h-px bg-[#D7B3F2] w-full" />
      {/* Texto da quote */}
      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">{children}</p>
    </div>
  );
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundImage4Props = {
  text: string;
  text1: string;
};

function BackgroundImage4({ text, text1 }: BackgroundImage4Props) {
  return (
    <div className="content-stretch flex font-['Inter:Thin',sans-serif] font-thin gap-[9px] items-start leading-[35px] not-italic relative shrink-0 text-[#0a0614] w-full whitespace-pre-wrap">
      <p className="h-[29px] relative shrink-0 text-[20px] w-[12px]">{text}</p>
      <p className="h-[102px] relative shrink-0 text-[16px] w-[261px]">{text1}</p>
    </div>
  );
}
type BackgroundImage3Props = {
  text: string;
};

function BackgroundImage3({ text }: BackgroundImage3Props) {
  return (
    <BackgroundImage6>
      {text}
    </BackgroundImage6>
  );
}

function GroupBackgroundImage() {
  return (
    <div className="absolute inset-[8.33%_12.5%_8.34%_12.5%]">
      <div className="absolute inset-[-5.45%_-6.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 20.3329">
          <g id="Group">
            <path d={svgPaths.pe357b00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p14ac8e00} id="Vector_2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p180f4a00} id="Vector_3" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage2() {
  return (
    <div className="col-1 h-0 ml-0 mt-[157.5px] relative row-1 w-[352.5px]">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352.5 1">
          <path d="M0 0.5H352.5" id="Vector 30" stroke="var(--stroke-0, #D7B3F2)" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full">
      <FrameBackgroundImage />
      <p className="font-['Inter:Thin',sans-serif] font-thin h-[59px] leading-[35px] not-italic relative shrink-0 text-[#0a0614] text-[16px] w-[284px] whitespace-pre-wrap">{text}</p>
    </div>
  );
}

function FrameBackgroundImage() {
  return (
    <BackgroundImage5>
      <path d={svgPaths.p3064a300} fill="var(--fill-0, black)" id="Vector" />
    </BackgroundImage5>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <BackgroundImage5>
        <path d={svgPaths.p3c688700} fill="var(--fill-0, black)" id="Vector" />
      </BackgroundImage5>
      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] not-italic relative shrink-0 text-[#0a0614] text-[16px] w-[23px] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BackgroundImage1({ text, text1, additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start leading-[40px] relative shrink-0", additionalClassNames)}>
      <p className="relative shrink-0 text-[#c27cfa] text-[16px]">{text}</p>
      <p className="relative shrink-0 text-[#0a0614] text-[32px]">{text1}</p>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
  text2: string;
};

function BackgroundImage({ text, text1, text2 }: BackgroundImageProps) {
  return (
    <ul className="block font-['Inter:Thin',sans-serif] font-thin leading-[0] list-disc min-w-full not-italic relative shrink-0 text-[#0a0614] text-[18px] w-[min-content] whitespace-pre-wrap">
      <li className="mb-0 ms-[27px]">
        <span className="leading-[35px]">{text}</span>
      </li>
      <li className="mb-0 ms-[27px]">
        <span className="leading-[35px]">{text1}</span>
      </li>
      <li className="ms-[27px]">
        <span className="leading-[35px]">{text2}</span>
      </li>
    </ul>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={clsx("content-stretch flex items-center relative shrink-0", additionalClassNames)}>
      <div className="relative shrink-0 size-[13px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <circle cx="6.5" cy="6.5" fill="#C27CFA" id="Ellipse 577" r="6.5" />
        </svg>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] not-italic relative shrink-0 text-[#0a0614] text-[32px]">{text}</p>
    </div>
  );
}

export default function Casestudy() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden" data-name="Casestudy-1">
      <div className="bg-gradient-to-b from-[13.915%] from-[rgba(255,255,255,0.05)] h-[600px] overflow-clip relative to-[96.959%] to-[rgba(255,255,255,0.2)] w-full">
        <div className="absolute h-[861.948px] left-[-217px] top-[-168px] w-[1917px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1917 861.948">
            <g id="Frame 1244" opacity="0.5">
              <path d={svgPaths.p1c295b40} fill="url(#paint0_linear_1_625)" id="Rectangle 1140" />
              <path d={svgPaths.p246d3880} fill="url(#paint1_linear_1_625)" id="Rectangle 1142" />
              <path d={svgPaths.p30310200} fill="url(#paint2_linear_1_625)" id="Rectangle 1141" />
              <path d={svgPaths.p23f85e80} fill="url(#paint3_linear_1_625)" id="Rectangle 1143" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_625" x1="555.973" x2="199.015" y1="119.23" y2="770.521">
                <stop stopColor="#F5EAFF" />
                <stop offset="1" stopColor="#F3F6F8" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_625" x1="1855.21" x2="1549.72" y1="233.516" y2="808.057">
                <stop stopColor="#F5EAFF" stopOpacity="0.05" />
                <stop offset="1" stopColor="#F5EAFF" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_625" x1="1707.21" x2="1371.93" y1="155.907" y2="786.49">
                <stop stopColor="#F5EAFF" stopOpacity="0.2" />
                <stop offset="1" stopColor="#F5EAFF" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_625" x1="1512.1" x2="1176.81" y1="155.907" y2="786.49">
                <stop stopColor="#F5EAFF" stopOpacity="0.2" />
                <stop offset="0.9999" stopColor="#F5EAFF" stopOpacity="0.197656" />
                <stop offset="1" stopColor="#F5EAFF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[128px] not-italic text-[#0a0614] text-[96px] top-[calc(50%-134px)] w-[643px] whitespace-pre-wrap">Instituto Universidade Virtual</p>
        <div className="absolute top-[50px] left-0 right-0 px-[128px]">
          <div className="flex justify-between items-center">
            <Link to="/" className="leading-[normal] not-italic text-[#0a0614] text-[32.278px] no-underline" style={{ fontFamily: 'Anton, sans-serif' }}>Lia Aires</Link>
            <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
              <Link to="/about" className="font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px] no-underline hover:underline transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>Sobre</Link>
              <Link
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById('projetos-section');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px] no-underline hover:underline transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Projetos
              </Link>
              {/* <div className="bg-[#aa4dff] content-stretch flex items-center justify-center px-[30px] py-[15px] relative rounded-[100px] shrink-0">
                <p className="font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Contato</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
     {/* Banner Roxo */}
{/* Banner Roxo */}
      <div className="h-[600px] overflow-clip relative w-full" style={{ backgroundImage: "linear-gradient(-60.5694deg, rgb(64, 0, 255) 1.1632%, rgb(142, 0, 255) 91.152%)" }}>
        {/* Mudei o h-[800px] para h-full aqui para ficar dinâmico */}
        <div className="absolute bg-[rgba(255,255,255,0.3)] blur-[25px] h-full left-0 top-0 w-full pointer-events-none" />
        
        {/* WRAPPER CENTRALIZADOR */}
        <div className="relative w-full max-w-[1440px] h-full mx-auto">
          
          <div className="absolute flex h-[938.642px] items-center justify-center left-[-152.9px] top-[60.77px] w-[727.362px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19.5" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none">
              <Frame1899BackgroundImage1 additionalClassNames="h-[898.413px] w-[321.186px]">
                <img alt="" className="absolute h-[258.26%] left-0 max-w-none top-[-26.54%] w-full" src={imgV4Media1} />
              </Frame1899BackgroundImage1>
            </div>
          </div>
          
          <div className="absolute flex h-[654.492px] items-center justify-center left-[274px] top-[87px] w-[563.201px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19.5" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none">
              <Frame1899BackgroundImage1 additionalClassNames="h-[570.413px] w-[321px]">
                <img alt="" className="absolute h-[173.05%] left-[-0.04%] max-w-none top-0 w-[100.07%]" src={imgTelaSobreNosMedia1} />
              </Frame1899BackgroundImage1>
            </div>
          </div>
          
          <div className="absolute flex h-[607.315px] items-center justify-center left-[547px] top-[-160px] w-[535.963px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19.5" } as React.CSSProperties}>
            <div className="-rotate-30 flex-none">
              <Frame1899BackgroundImage1 additionalClassNames="h-[515.938px] w-[321px]">
                <img alt="" className="absolute h-[265.6%] left-[-0.01%] max-w-none top-0 w-[100.02%]" src={imgTelaNoticiasMedia1} />
              </Frame1899BackgroundImage1>
            </div>
          </div>
          
          <Frame1899BackgroundImage additionalClassNames="left-[815px] top-[316px]">
            <div className="h-[796px] relative rounded-[71px] w-[321px]" data-name="tela projetos média 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[71px] size-full" src={imgTelaProjetosMedia2} />
            </div>
          </Frame1899BackgroundImage>
          
          <Frame1899BackgroundImage additionalClassNames="left-[901px] top-[-256px]">
            <div className="h-[796px] relative rounded-[71px] w-[321px]" data-name="tela cursos média presencial 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[71px] size-full" src={imgTelaCursosMediaPresencial1} />
            </div>
          </Frame1899BackgroundImage>
          
        </div>
      </div>
      <motion.div
        className="bg-white py-20 relative w-full"
        data-name="about project"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Container com largura máxima, ancorado à esquerda com padding consistente */}
        <div className="w-full px-[128px] flex flex-col lg:flex-row gap-20">
          
          {/* Coluna da Esquerda (menor) */}
          <div className="flex flex-col gap-12 shrink-0 min-w-[250px]">
            <div className="flex flex-col gap-4 items-start text-[#0a004b]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px]">Papel</p>
              <p className="font-['Inter:Thin',sans-serif] font-thin text-[18px]">UI/UX Design</p>
            </div>
            
            <div className="flex flex-col gap-4 items-start text-[#0a004b]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px]">Data</p>
              <p className="font-['Inter:Thin',sans-serif] font-thin text-[18px]">Ago 2025</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0a004b] text-[16px]">Ferramentas Utilizadas</p>
              <div className="flex gap-[20px] items-center">
                <div className="relative size-[65px] bg-[#f0e7fc] rounded-[10px] flex items-center justify-center">
                  <div className="w-[17.55px] h-[26.65px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.55 26.65">
                      <path d={svgPaths.p19acc00} fill="#0ACF83" />
                      <path d={svgPaths.p3ad15500} fill="#A259FF" />
                      <path d={svgPaths.p3a38d880} fill="#F24E1E" />
                      <path d={svgPaths.p2c8b8a00} fill="#FF7262" />
                      <path d={svgPaths.p3476bf00} fill="#1ABCFE" />
                    </svg>
                  </div>
                </div>
                <div className="relative size-[65px] bg-[#d0f3ff] rounded-[10px] flex items-center justify-center">
                  <img alt="Photoshop" className="w-[24.7px] h-[24.05px]" src={img1200PxAdobePhotoshopMobileIcon1} />
                </div>
                <div className="relative size-[65px] bg-[#fff0d9] rounded-[10px] flex items-center justify-center">
                  <img alt="Illustrator" className="w-[25px] h-[25px] rounded-[4px]" src={imgAdobeIllustratorCcLogo1024X9993} />
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita (maior) */}
          <div className="flex flex-col gap-12 flex-1">
            <div className="flex flex-col gap-4 items-start text-[#0a004b]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px]">Contexto</p>
              <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[18px] whitespace-pre-wrap">O Instituto Universidade Virtual atua de forma integrada nas áreas de graduação, pós-graduação e ensino à distância (EaD) dentro da Universidade Federal do Ceará. Assim, busca-se reforçar sua imagem institucional como um centro dinâmico de formação, pesquisa e extensão.</p>
            </div>
            
            <div className="flex flex-col gap-4 items-start text-[#0a004b]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px]">Time</p>
              <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[18px] whitespace-pre-wrap">Lia Aires, Yasmin Neves, João Pedro Oliveira, Ártemis Castelo, Sabrina Lopes, Ana Carolina Furtado</p>
            </div>
          </div>
        </div>
      </motion.div>
     <motion.div
        className="bg-white py-20 relative w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full px-[128px] flex flex-col md:flex-row gap-20">
          <div className="flex flex-col gap-[15px] items-start flex-1">
            <BackgroundImageAndText text="Problema" />
            <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[18px] whitespace-pre-wrap">O Instituto contava com uma identidade visual genérica, fazendo com que as pessoas não o distinguissem do curso de SMD; arquitetura da informação confusa, baixa previsibilidade de navegação e conteúdo mal segmentado.</p>
          </div>
          <div className="flex flex-col gap-[15px] items-start flex-1">
            <BackgroundImageAndText text="Solução" />
            <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[18px] whitespace-pre-wrap">Reestruturação de interface para eliminar confusões de identidade, organizar fluxos de informações, e sanar falhas críticas de usabilidade e navegação.</p>
          </div>
        </div>
      </motion.div>
{/* Processo de Design - Alinhamento Grid Final */}
      <div className="bg-[#fff9f3] py-20 relative w-full" data-name="design process">
        <div className="w-full px-[128px]">
          {/* Título Centralizado */}
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[#0a0614] text-[50px] mb-20 w-full text-center">
            Processo de Design
          </p>
          
          {/* GRID: Divide o espaço em 4 colunas iguais ocupando a largura total */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            
            {/* Bloco 01 - Descoberta */}
            <div className="flex flex-col gap-6">
              <BackgroundImageAndText1 text="Descoberta" additionalClassNames="gap-[6px]" />
              <div className="flex flex-col gap-2">
                <BackgroundImage text="Definição do Problema" text1="Pesquisa com Usuário" text2="Análise de soluções similares" />
              </div>
            </div>
            
            {/* Bloco 02 - Definição */}
            <div className="flex flex-col gap-6">
              <BackgroundImageAndText1 text="Definição" additionalClassNames="gap-[4px]" />
              <div className="flex flex-col gap-2">
                <BackgroundImage text="Perfis e Personas" text1="Mapa Conceitual" text2="User Journey Map" />
              </div>
            </div>
            
            {/* Bloco 03 - Ideação */}
            <div className="flex flex-col gap-6">
              <BackgroundImageAndText1 text="Ideação" additionalClassNames="gap-[5px]" />
              <div className="flex flex-col gap-2">
                <BackgroundImage text="Teste de Usabilidade" text1="Avaliação de Heurísticas" text2="Arquitetura da Informação" />
              </div>
            </div>
            
            {/* Bloco 04 - Design */}
            <div className="flex flex-col gap-6">
              <BackgroundImageAndText1 text="Design" additionalClassNames="gap-[7px]" />
              <div className="flex flex-col gap-2">
                <BackgroundImage text="Design de baixa-fidelidade" text1="Wireframe" text2="Protótipo Final" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="h-auto pb-20 relative w-full">
        <div className="px-[128px] pt-[100px]">
          <div className="content-stretch flex flex-col gap-[15px] items-start not-italic">
            <BackgroundImage1 text="01" text1="Pesquisa com Usuários" />
            <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] relative shrink-0 text-[#0a0614] text-[18px] max-w-[1184px] whitespace-pre-wrap mb-[-80px]">Realizei um questionário misto para conseguir insights de usuários majoritariamente jovens em contato com a Universidade Federal do Ceará.</p>
          </div>

         <div className="mt-[180px] w-full flex justify-between items-center gap-8">
            
            <BackgroundImage7>
              <div className="flex flex-col justify-between h-full p-[26px]">
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[#0a0614] text-[76px] leading-none m-0">56%</p>
                <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[16px] leading-tight m-0">
                  <span className="font-['Inter:Bold',sans-serif] font-bold">Conheciam</span> o Instituto
                </p>
              </div>
            </BackgroundImage7>

            <BackgroundImage7>
              <div className="flex flex-col justify-between h-full p-[26px]">
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[#0a0614] text-[76px] leading-none m-0">60%</p>
                <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[16px] leading-tight m-0">
                  <span className="font-['Inter:Bold',sans-serif] font-bold">Não encontravam informações</span> facilmente
                </p>
              </div>
            </BackgroundImage7>

            <BackgroundImage7>
              <div className="flex flex-col justify-between h-full p-[26px]">
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[#0a0614] text-[76px] leading-none m-0">57%</p>
                <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[16px] leading-tight m-0">
                  <span className="font-['Inter:Bold',sans-serif] font-bold">Não sabiam</span> sobre projetos do Instituto
                </p>
              </div>
            </BackgroundImage7>

          </div>

          <div className="mt-[100px] content-stretch flex flex-col font-['Inter:Thin',sans-serif] font-thin gap-[15px] items-start not-italic text-[#0a0614] text-[18px] max-w-[1184px] whitespace-pre-wrap">
            <p className="leading-[35px] min-w-full relative shrink-0">Os interesses dos usuários com relação ao Instituto eram majoritariamente sobre:</p>
            <div className="leading-[35px] relative">
              <p className="mb-0">
                <span>•</span>
                <span className="font-['Inter:Bold',sans-serif] font-bold">Projetos</span>
                <span>{` em andamento e resultados`}</span>
              </p>
              <p className="mb-0">
                <span>{`•Informações sobre `}</span>
                <span className="font-['Inter:Bold',sans-serif] font-bold">laboratórios</span>
                <span>{` e `}</span>
                <span className="font-['Inter:Bold',sans-serif] font-bold">grupos de pesquisa</span>
              </p>
              <p className="mb-0">
                <span>•</span>
                <span className="font-['Inter:Bold',sans-serif] font-bold">Reconhecimento</span>
                <span>{` e `}</span>
                <span className="font-['Inter:Bold',sans-serif] font-bold">Premiações</span>
              </p>
              <p>
                <span>•</span>
                <span className="font-['Inter:Bold',sans-serif] font-bold">Linha do tempo</span>
                <span>{` de marcos importantes`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 02 - Personas */}
      <div className="bg-[#fcfbfb] py-20 relative w-full">
        <div className="px-[128px]">
          <div className="content-stretch flex flex-col gap-[15px] items-start not-italic w-full">
            <BackgroundImage1 text="02" text1="Personas de Usuários" />
            
            {/* Troquei max-w-[1184px] por w-full neste <p> */}
            <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] relative shrink-0 text-[#0a0614] text-[18px] w-full whitespace-pre-wrap">
              Baseado nas pesquisas com os usuários, elaboramos personas com suas preferências, metas e frustrações para representar os perfis médios dos usuários do site, o que nos auxiliou a alinhar os requisitos do site às necessidades do usuário.
            </p>
          </div>

          <div className="mt-20 flex gap-8 justify-center items-stretch">
            {/* Persona 1 - Amanda */}
            <div className="border border-[#c27cfa] border-solid rounded-[20px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] w-[353px] flex flex-col min-h-[1101px]">
              <div className="rounded-tl-[20px] rounded-tr-[20px] w-full h-[353px] flex-shrink-0">
                <img alt="Amanda Rodrigues" className="w-full h-full object-cover rounded-tl-[20px] rounded-tr-[20px]" src={imgImage69} />
              </div>
              <div className="p-6 flex flex-col gap-8 flex-1 justify-between">
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="h-px bg-[#D7B3F2] mb-4" />
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[35px] text-[#0a0614] text-[20px]">Amanda Rodrigues</p>
                    <div className="flex gap-2 items-center mt-2">
                      <BackgroundImage5>
                        <path d={svgPaths.p3c688700} fill="var(--fill-0, black)" id="Vector" />
                      </BackgroundImage5>
                      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">21</p>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <FrameBackgroundImage />
                      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">Estudante de Ciências Contábeis na UFC</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <BackgroundImage9 additionalClassNames="h-auto">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1 items-center">
                          <div className="relative size-[22px]">
                            <GroupBackgroundImage />
                          </div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[35px] text-[#0a0614] text-[16px]">METAS</p>
                        </div>
                        <div className="flex gap-2">
                          <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[20px]">•</p>
                          <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">Interesse em desenvolver aplicações mobile para ajudar em um projeto de extensão</p>
                        </div>
                      </div>
                    </BackgroundImage9>

                    <BackgroundImage9 additionalClassNames="h-auto">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1 items-center">
                          <div className="relative size-[22px]">
                            <GroupBackgroundImage />
                          </div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[35px] text-[#0a0614] text-[16px]">FRUSTRAÇÕES</p>
                        </div>
                        <div className="flex gap-2">
                          <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[20px]">•</p>
                          <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">Não conhece nenhum polo na Universidade que ofereça suporte para desenvolvimento de apps</p>
                        </div>
                      </div>
                    </BackgroundImage9>
                  </div>
                </div>

                <BackgroundImage3 text="A dificuldade lhe gera uma sensação de que seu potencial está sendo limitado pela falta de orientação e de recursos claros dentro do ambiente universitário." />
              </div>
            </div>

            {/* Persona 2 - Lucas */}
            <div className="border border-[#c27cfa] border-solid rounded-[20px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] w-[353px] flex flex-col min-h-[1101px]">
              <div className="rounded-tl-[20px] rounded-tr-[20px] w-full h-[353px] flex-shrink-0">
                <img alt="Lucas Oliveira" className="w-full h-full object-cover rounded-tl-[20px] rounded-tr-[20px]" src={imgImage70} />
              </div>
              <div className="p-6 flex flex-col gap-8 flex-1 justify-between">
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="h-px bg-[#D7B3F2] mb-4" />
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[35px] text-[#0a0614] text-[20px]">Lucas Oliveira</p>
                    <div className="flex gap-2 items-center mt-2">
                      <BackgroundImage5>
                        <path d={svgPaths.p3c688700} fill="var(--fill-0, black)" id="Vector" />
                      </BackgroundImage5>
                      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">23</p>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <FrameBackgroundImage />
                      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">Estudante de Sistemas e Mídias Digitais na UFC</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <BackgroundImage9 additionalClassNames="h-auto">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1 items-center">
                          <div className="relative size-[22px]">
                            <GroupBackgroundImage />
                          </div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[35px] text-[#0a0614] text-[16px]">METAS</p>
                        </div>
                        <div className="flex gap-2">
                          <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[20px]">•</p>
                          <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">Deseja saber mais sobre os cursos de pós-graduação em tecnodocência</p>
                        </div>
                      </div>
                    </BackgroundImage9>

                    <BackgroundImage9 additionalClassNames="h-auto">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1 items-center">
                          <div className="relative size-[22px]">
                            <GroupBackgroundImage />
                          </div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[35px] text-[#0a0614] text-[16px]">FRUSTRAÇÕES</p>
                        </div>
                        <div className="flex gap-2">
                          <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[20px]">•</p>
                          <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">Sente-se inseguro quanto às novidades do instituto, pois costuma descobrir só por alunos</p>
                        </div>
                      </div>
                    </BackgroundImage9>
                  </div>
                </div>

                <BackgroundImage3 text="Gostaria de conseguir projetar seu futuro acadêmico dentro do Instituto, considerando a possibilidade de cursar uma pós-graduação," />
              </div>
            </div>

            {/* Persona 3 - Sara */}
            <div className="border border-[#c27cfa] border-solid rounded-[20px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] w-[353px] flex flex-col min-h-[1101px]">
              <div className="rounded-tl-[20px] rounded-tr-[20px] w-full h-[353px] flex-shrink-0">
                <img alt="Sara Almeida" className="w-full h-full object-cover rounded-tl-[20px] rounded-tr-[20px]" src={imgImage71} />
              </div>
              <div className="p-6 flex flex-col gap-8 flex-1 justify-between">
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="h-px bg-[#D7B3F2] mb-4" />
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[35px] text-[#0a0614] text-[20px]">Sara Almeida</p>
                    <div className="flex gap-2 items-center mt-2">
                      <BackgroundImage5>
                        <path d={svgPaths.p3c688700} fill="var(--fill-0, black)" id="Vector" />
                      </BackgroundImage5>
                      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">20</p>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <FrameBackgroundImage />
                      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">Estudante de Arquitetura e Urbanismo na UFC</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <BackgroundImage9 additionalClassNames="h-auto">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1 items-center">
                          <div className="relative size-[22px]">
                            <GroupBackgroundImage />
                          </div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[35px] text-[#0a0614] text-[16px]">METAS</p>
                        </div>
                        <div className="flex gap-2">
                          <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[20px]">•</p>
                          <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">Gostaria de conhecer sobre projetos relacionados a jogos presentes no Instituto</p>
                        </div>
                      </div>
                    </BackgroundImage9>

                    <BackgroundImage9 additionalClassNames="h-auto">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1 items-center">
                          <div className="relative size-[22px]">
                            <GroupBackgroundImage />
                          </div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[35px] text-[#0a0614] text-[16px]">FRUSTRAÇÕES</p>
                        </div>
                        <div className="flex gap-2">
                          <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[20px]">•</p>
                          <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[16px]">Conhece o Instituto, mas percebe que não é fácil encontrar informações sobre ele</p>
                        </div>
                      </div>
                    </BackgroundImage9>
                  </div>
                </div>

                <BackgroundImage3 text="Sabe sobre algumas ações do Instituto, como pesquisa e extensão. Mas, apesar disso, Sara não sabe onde encontrar um portfólio de todos os seus projetos." />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 03 - Mapa Conceitual */}
      <div className="py-20 relative w-full">
        <div className="px-[128px]">
          
          {/* TEXTO ESTICADO: Adicionado w-full na div pai e no parágrafo */}
          <div className="content-stretch flex flex-col gap-[15px] items-start not-italic w-full">
            <BackgroundImage1 text="03" text1="Mapa Conceitual de Jornada do Usuário" />
            <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] relative shrink-0 text-[#0a0614] text-[18px] w-full whitespace-pre-wrap">Desenvolvi um modelo conceitual de interação que delineia os fluxos de navegação e mapeia as principais possibilidades de uso da aplicação, considerando as necessidades, objetivos e contextos dos usuários.</p>
          </div>

          {/* IMAGEM E LISTA CENTRALIZADOS: Adicionado justify-center e w-full */}
          <div className="mt-20 flex justify-center gap-16 items-center w-full">
            
            <div className="rounded-[18px] w-[460px] h-[499px] shrink-0">
              <img alt="Mapa conceitual" className="w-full h-full object-cover rounded-[18px]" src={imgImage72} />
            </div>

            <ul className="block font-['Inter:Thin',sans-serif] font-thin leading-[0] list-disc not-italic text-[#0a0614] text-[18px] max-w-[443px]">
              <li className="mb-0 ms-[27px]">
                <span className="leading-[35px]">Redefinimos a</span>
                <span className="font-['Inter:Bold',sans-serif] font-bold leading-[35px] not-italic">{` estrutura de fluxo principal`}</span>
                <span className="leading-[35px]">{` do site`}</span>
              </li>
              <li className="mb-0 ms-[27px]">
                <span className="leading-[35px]">Fizemos um</span>
                <span className="font-['Inter:Bold',sans-serif] font-bold leading-[35px] not-italic">{` agrupamento lógico`}</span>
                <span className="leading-[35px]">{` com menus de dropdown`}</span>
              </li>
              <li className="mb-0 ms-[27px]">
                <span className="leading-[35px]">{`Gerenciamos a complexidade dos menus em categorias, `}</span>
                <span className="font-['Inter:Bold',sans-serif] font-bold leading-[35px] not-italic">{`evitando cliques desnecessários `}</span>
              </li>
              <li className="ms-[27px]">
                <span className="font-['Inter:Thin',sans-serif] font-thin leading-[35px]">{`Acrescentamos a função de o próprio usuário `}</span>
                <span className="font-['Inter:Bold',sans-serif] font-bold leading-[35px]">enviar o seu projeto</span>
                <span className="font-['Inter:Thin',sans-serif] font-thin leading-[35px]">, alimentando o site de maneira comunitária</span>
              </li>
            </ul>
            
          </div>
        </div>
      </div>

{/* Section 04 - Ideação */}
      <div className="bg-[#fcfbfb] py-20 relative w-full">
        <div className="w-full px-[128px]">
          
          {/* Título e Subtítulo Agrupados */}
          <div className="flex flex-col items-start w-full">
            <BackgroundImage1 text="04" text1="Ideação" additionalClassNames="not-italic" />
            <p className="font-['Inter:Thin',sans-serif] font-thin leading-[normal] mt-1 text-[#999999] text-[18px]">
              Protótipo de Baixa Fidelidade
            </p>
          </div>

          {/* Container: mt-6 faz com que as imagens comecem logo abaixo do subtítulo */}
          <div className="mt-6 flex flex-col lg:flex-row justify-between gap-16 items-start w-full">
            
            {/* Coluna do Texto: lg:mt-16 empurra APENAS o texto para baixo para manter o design */}
            <div className="flex flex-col gap-8 flex-1 max-w-[519px] lg:mt-16">
              <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[18px]">
                <span>Comecei elaborando rascunhos para estabelecer uma página inicial que fosse mais </span>
                <span className="font-['Inter:Bold',sans-serif] font-bold">chamativa</span>
                <span> e que representasse mais os feitos do Instituto logo na homepage, além de prototipar também as novas seções que constariam no site: Projetos, Cursos, Notícias e Sobre Nós</span>
              </p>

              <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[18px]">
                Também idealizamos uma página que permite os administradores autorizarem o cadastro de novas notícias e de projetos
              </p>
            </div>

            {/* Coluna das Imagens: Como não tem margem extra, fica ancorada no topo da div (abaixo do subtítulo) */}
            <div className="flex flex-row gap-6 shrink-0">
              <div className="w-[269px] h-[686px]">
                <img alt="Protótipo baixa fidelidade" className="w-full h-full object-cover" src={imgPrototipoBaixaV41} />
              </div>
              <div className="w-[297px] h-[686px]">
                <img alt="Protótipo digitalizado" className="w-full h-full object-cover" src={imgDigitalizado202602091050021} />
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Section 05 - Solução Final */}
      <div className="py-20 relative w-full">
        <div className="w-full px-[128px]">
          
          {/* TEXTO ESTICADO: w-full na div e no p */}
          <div className="content-stretch flex flex-col gap-[15px] items-start not-italic w-full">
            <BackgroundImage1 text="05" text1="Solução Final" />
            <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] relative shrink-0 text-[#0a0614] text-[18px] w-full whitespace-pre-wrap">Por fim, aplicamos uma Avaliação Heurística e um Teste de Usabilidade com a solução final em busca de um refinamento de elementos</p>
          </div>

          {/* GIFs CENTRALIZADOS: Adicionado items-center e w-full nesta div */}
          <div className="mt-20 flex flex-col items-center gap-8 w-full">
            
            {/* GIF Principal */}
            <div className="w-full max-w-[1052px] h-[640px]">
              <img alt="Homepage animada" className="w-full h-full object-cover" src={imgHomeGif1} />
            </div>

            {/* GIFs Secundários lado a lado */}
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
              <div className="w-full max-w-[500px] h-[305px]">
                <img alt="Página de projetos" className="w-full h-full object-cover" src={imgCopy3224B06AD1E149B89Bdc2Bbb28Fd5A081} />
              </div>
              <div className="w-full max-w-[500px] h-[305px]">
                <img alt="Página do administrador" className="w-full h-full object-cover" src={imgAdminGif1} />
              </div>
            </div>

            {/* Legenda (Centralizada para acompanhar os GIFs) */}
            <p className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] text-[#0a0614] text-[18px] text-center mt-4">
              Homepage, Página de Projetos, Página do Administrador
            </p>

          </div>
        </div>
      </div>

      {/* Footer - Entre em contato */}
      <div className="bg-[#fcfbfb] py-20 relative w-full">
        <div className="px-[128px]">
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[70px] text-black">Entre em contato</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] mt-4 text-[30px] text-black">aires.lia@alu.ufc.br</p>
            </div>

            <div className="h-px bg-[#CCCCCC] my-8" />

            <div className="flex justify-between items-center">
              <p className="font-thin leading-[normal] not-italic text-[#888] text-[12px]" style={{ fontFamily: 'Inter, sans-serif' }}>©2026 Lia Aires</p>
              <a href="https://www.linkedin.com/in/lia-aires-221000272/" target="_blank" rel="noopener noreferrer" className="leading-[normal] not-italic text-[#888] text-[12px] hover:text-[#0A66C2] transition-colors duration-200 cursor-pointer" style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 300 }}>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}