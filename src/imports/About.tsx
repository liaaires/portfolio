import clsx from "clsx";
import svgPaths from "./svg-ufhbzbxhic";
import imgRectangle361 from "figma:asset/4653fd3e4612bf043cf9babd21443b951408a7dd.png";
import imgImage71 from "figma:asset/bbddd34f39166e7a179e268b1420ae0670c1cfa2.png";
import img5105STfNoNl2 from "figma:asset/27d2eb7ff002063e3c4bf552cb1508d774fb33dd.png";
import img768PxSquareFlagOfTheUnitedKingdom1 from "figma:asset/5310e25c44fdd5f00c85f832c0b4bd970fe8d3ff.png";
import img768PxSquareFlagOfTheUnitedKingdom2 from "figma:asset/6fbece8c782868b2c5c73f0f7a7624c8a0f14610.png";
import imgAdobePhotoshopCcPngLogo1024X9994 from "figma:asset/8c5041ad8a61e5ab6c11236662560309f1f4eb24.png";
import imgAdobeIllustratorCcLogo1024X9993 from "figma:asset/50e1c36ceb11011aaa8a3ee6d8043e6b91727187.png";
import { img5105STfNoNl1 } from "./svg-q4hxr";

function MaskGroup({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents left-[15px] top-[15px]">
      <div className="absolute left-[15px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[25px_25px] size-[25px] top-[15px]" data-name="768px-Square_Flag_of_the_United_Kingdom 1" style={{ maskImage: `url('${img5105STfNoNl1}')` }}>
        {children}
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <AkarIconsCircle />
      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px]">{children}</p>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("size-[55px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0">
      <g id="Frame 2081">{children}</g>
    </Wrapper1>
  );
}

function Helper2() {
  return (
    <Wrapper1 additionalClassNames="absolute left-0 top-0">
      <circle cx="27.5" cy="27.5" fill="var(--fill-0, white)" id="Ellipse 587" r="27" stroke="var(--stroke-0, #CAD9EC)" />
    </Wrapper1>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AkarIconsCircle />
      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px] w-[291px] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return <Wrapper2>{text}</Wrapper2>;
}

function AkarIconsCircle() {
  return (
    <div className="relative shrink-0 size-[10px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_7_199)" id="akar-icons:circle">
          <path d={svgPaths.p3391c00} id="Vector" stroke="var(--stroke-0, #0A0614)" />
        </g>
        <defs>
          <clipPath id="clip0_7_199">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
  text2: string;
};

function Helper1({ text, text1, text2 }: Helper1Props) {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0 text-[#6a6f8e] w-full">
      <p className="font-['Inter:Thin',sans-serif] font-thin not-italic relative shrink-0 text-[16px]">{text}</p>
      <p className="font-['Heebo:Regular',sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.3px]">{text1}</p>
      <p className="font-['Inter:Thin',sans-serif] font-thin not-italic relative shrink-0 text-[16px] w-[218px] whitespace-pre-wrap">{text2}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-start not-italic relative shrink-0 text-[#0a0614] w-full whitespace-pre-wrap">
      <p className="font-['Museo_Sans_Cyrl:300',sans-serif] relative shrink-0 text-[14px] w-[5px]">{text}</p>
      <p className="font-['Inter:Thin',sans-serif] font-thin relative shrink-0 text-[16px] w-[608px]">{text1}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white relative size-full" data-name="About">
      <div className="absolute h-[779px] left-0 top-0 w-[1440px]">
        <div className="absolute bg-white h-[779px] left-0 overflow-clip top-0 w-[1440px]">
          <div className="absolute h-[861.948px] left-[-217px] top-[-168px] w-[1917px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1917 861.948">
              <g id="Frame 1244" opacity="0.5">
                <path d={svgPaths.p1c295b40} fill="url(#paint0_linear_7_193)" id="Rectangle 1144" />
                <path d={svgPaths.p246d3880} fill="url(#paint1_linear_7_193)" id="Rectangle 1142" />
                <path d={svgPaths.p30310200} fill="url(#paint2_linear_7_193)" id="Rectangle 1141" />
                <path d={svgPaths.p23f85e80} fill="url(#paint3_linear_7_193)" id="Rectangle 1143" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_193" x1="555.973" x2="199.015" y1="119.23" y2="770.521">
                  <stop stopColor="#F5EAFF" />
                  <stop offset="1" stopColor="#F3F6F8" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_7_193" x1="1855.21" x2="1549.72" y1="233.516" y2="808.057">
                  <stop stopColor="#BEDEFD" stopOpacity="0.05" />
                  <stop offset="1" stopColor="#BEDEFD" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_7_193" x1="1707.21" x2="1371.93" y1="155.907" y2="786.49">
                  <stop stopColor="#BEDEFD" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#BEDEFD" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_7_193" x1="1512.1" x2="1176.81" y1="155.907" y2="786.49">
                  <stop stopColor="#BEDEFD" stopOpacity="0.2" />
                  <stop offset="0.9999" stopColor="#BEDEFD" stopOpacity="0.197656" />
                  <stop offset="1" stopColor="#BEDEFD" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[128px] not-italic text-[#0a0614] text-[96px] top-[calc(50%-223.5px)] w-[612px] whitespace-pre-wrap">Olá! Meu nome é Lia</p>
          <div className="-translate-x-1/2 absolute left-[calc(50%-4.5px)] top-[50px]">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[668px] items-center relative">
                <p className="font-['Anton:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[32.278px]">Lia Aires</p>
                <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px]">Sobre</p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px]">Projetos</p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px]">Currículo</p>
                  <div className="bg-[#aa4dff] content-stretch flex items-center justify-center px-[30px] py-[15px] relative rounded-[100px] shrink-0">
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white">Contato</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute font-['Inter:Thin',sans-serif] font-thin leading-[35px] left-[128px] not-italic text-[#0a0614] text-[18px] top-[434px] w-[572px] whitespace-pre-wrap">
          <p className="mb-0">Sou estudante de Sistemas e Mídias Digitais na Universidade Federal do Ceará e Designer UI/UX.</p>
          <p className="mb-0">&nbsp;</p>
          <p>{`Aspirante a pesquisadora em Interação Humano-Computador, compreender a forma em que as pessoas interagem com as TICs é o que mais me motiva a planejar designs cada vez mais centrados nas necessidades dos usuários. `}</p>
        </div>
        <div className="absolute h-[552px] left-[813px] rounded-[30px] top-[259px] w-[490px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
            <img alt="" className="absolute h-[183.75%] left-[-0.04%] max-w-none top-[-64.33%] w-[143.56%]" src={imgRectangle361} />
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-[128px] not-italic text-[#6a6f8e] text-[25px] top-[947px]">Experiências</p>
      <div className="absolute border border-[#cad9ec] border-solid h-[257px] left-[128px] overflow-clip rounded-[24px] top-[1017px] w-[730px]">
        <div className="absolute content-stretch flex flex-col gap-[14px] items-start leading-[normal] left-[30px] top-[39px] w-[621px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full not-italic relative shrink-0 text-[#0a0614] text-[16px] w-[min-content] whitespace-pre-wrap">Bolsista PIBITI/PIBIC</p>
          <div className="content-stretch flex gap-[5px] items-start relative shrink-0 text-[#6a6f8e]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[16px]">Célula Multimídia</p>
            <p className="font-['Heebo:Regular',sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.3px]">|</p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[16px]">Ago 2025 - Atualmente</p>
          </div>
          <Helper text="-" text1="Desenvolvimento e Prototipagem de uma Plataforma de Apoio à Prática do Design Ético em Interfaces Digitais" />
          <Helper text="-" text1="O projeto visa fornecer a designers e desenvolvedores recursos metodológicos e ferramentas para a implementação de padrões de design positivos em interfaces digitais interativas." />
        </div>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-[128px] not-italic text-[#6a6f8e] text-[25px] top-[1337px]">Formação Acadêmica</p>
      <div className="absolute left-[128px] rounded-[24px] top-[1407px] w-[720px]">
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[30px] pt-[29px] px-[18px] relative rounded-[inherit] w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[17px] items-start leading-[normal] not-italic relative shrink-0 w-[410px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#0a0614] text-[20px] w-[min-content] whitespace-pre-wrap">Bacharelado em Sistemas e Mídias Digitais</p>
              <div className="content-stretch flex flex-col font-['Inter:Thin',sans-serif] font-thin gap-[5px] items-start relative shrink-0 text-[#6a6f8e] text-[16px]">
                <p className="relative shrink-0">Universidade Federal do Ceará</p>
                <p className="relative shrink-0">2024 - 2027 (previsto)</p>
              </div>
            </div>
            <div className="h-[64px] relative shrink-0 w-[52px]" data-name="image 71">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage71} />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#cad9ec] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-[128px] not-italic text-[#6a6f8e] text-[25px] top-[1586px]">Certificados</p>
      <div className="absolute border border-[#cad9ec] border-solid h-[186px] left-[128px] overflow-clip rounded-[24px] top-[1653px] w-[354px]">
        <div className="absolute content-stretch flex flex-col gap-[15px] items-start leading-[normal] left-[16px] top-[55px] w-[250px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full not-italic relative shrink-0 text-[#0a0614] text-[20px] w-[min-content] whitespace-pre-wrap">Introdução a UI/UX Design</p>
          <div className="content-stretch flex gap-[5px] items-start relative shrink-0 text-[#6a6f8e]">
            <p className="font-['Inter:Thin',sans-serif] font-thin not-italic relative shrink-0 text-[16px]">2025</p>
            <p className="font-['Heebo:Regular',sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.3px]">|</p>
            <p className="font-['Inter:Thin',sans-serif] font-thin not-italic relative shrink-0 text-[16px]">Prefeitura de Fortaleza</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#cad9ec] border-solid h-[186px] left-[128px] overflow-clip rounded-[24px] top-[1856px] w-[354px]">
        <div className="absolute content-stretch flex flex-col gap-[6px] items-start leading-[normal] left-[13px] top-[58px] w-[326px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#0a0614] text-[20px] w-full whitespace-pre-wrap">Língua Japonesa</p>
          <Helper1 text="2024 - 2026" text1="|" text2="Universidade Estadual do Ceará" />
        </div>
      </div>
      <div className="absolute border border-[#cad9ec] border-solid h-[186px] left-[494px] overflow-clip rounded-[24px] top-[1653px] w-[354px]">
        <div className="absolute content-stretch flex flex-col gap-[6px] items-start leading-[normal] left-[13px] top-[58px] w-[326px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#0a0614] text-[20px] w-full whitespace-pre-wrap">Língua Inglesa</p>
          <Helper1 text="2013 - 2017" text1="|" text2="Hilpro Idiomas" />
        </div>
      </div>
      <div className="absolute h-[1006px] left-[896px] top-[947px] w-[409px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-0 not-italic text-[#6a6f8e] text-[25px] top-0">Design Skills</p>
        <div className="absolute bg-white border border-[#cad9ec] border-solid h-fit pb-[30px] pt-[18px] left-0 rounded-[24px] top-[70px] w-[409px]">
          <div className="content-stretch flex flex-col gap-[19px] items-start px-[16px] w-[359px]">
            <Text text="Design de Experiência do Usuário (UX)" />
            <Text text="Design de Interface do Usuário (UI)" />
            <Wrapper2>{`Web Design `}</Wrapper2>
            <Text text="Design System" />
            <Text text="Design Thinking" />
            <Text1 text="Aplicação de Testes de Usabilidade" />
          </div>
        </div>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-[4px] not-italic text-[#6a6f8e] text-[25px] top-[639px]">Idiomas</p>
        <div className="absolute bg-white border border-[#cad9ec] border-solid h-[253px] left-[4px] overflow-clip rounded-[24px] top-[706px] w-[405px]">
          <div className="absolute content-stretch flex gap-[15px] items-center justify-center left-[14px] top-[14px]">
            <div className="relative shrink-0 size-[55px]">
              <Helper2 />
              <div className="absolute contents left-[15px] top-[15px]" data-name="Mask Group">
                <div className="absolute left-[12.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.5px_2.5px] mask-size-[25px_25px] size-[30px] top-[12.5px]" data-name="5105sTFNoNL 1" style={{ maskImage: `url('${img5105STfNoNl1}')` }}>
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5105STfNoNl2} />
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Thin',sans-serif] font-thin justify-center leading-[0] not-italic relative shrink-0 text-[#0a0614] text-[16px] whitespace-nowrap">
              <p className="leading-[normal]">Português (Nativo)</p>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[15px] items-center justify-center left-[14px] top-[99px]">
            <div className="relative shrink-0 size-[55px]" data-name="English">
              <div className="absolute left-0 size-[55px] top-0">
                <Helper2 />
                <MaskGroup>
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img768PxSquareFlagOfTheUnitedKingdom1} />
                </MaskGroup>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Thin',sans-serif] font-thin justify-center leading-[0] not-italic relative shrink-0 text-[#0a0614] text-[16px] whitespace-nowrap">
              <p className="leading-[normal]">Inglês (Avançado)</p>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[15px] items-center justify-center left-[14px] top-[184px]">
            <div className="relative shrink-0 size-[55px]" data-name="English">
              <div className="absolute left-0 size-[55px] top-0">
                <Helper2 />
                <MaskGroup>
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img768PxSquareFlagOfTheUnitedKingdom2} />
                </MaskGroup>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Thin',sans-serif] font-thin justify-center leading-[0] not-italic relative shrink-0 text-[#0a0614] text-[16px] whitespace-nowrap">
              <p className="leading-[normal]">Japonês (Básico)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[898px] top-[1337px] w-[409px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] not-italic relative shrink-0 text-[#6a6f8e] text-[25px] w-full whitespace-pre-wrap">Ferramentas</p>
        <div className="h-[139px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start px-[35px] py-[30px] relative size-full">
            <div className="absolute bg-white h-[144px] left-0 rounded-[24px] top-0 w-[409px]">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute h-[79px] left-[36px] top-[30px] w-[55px]" />
              </div>
              <div aria-hidden="true" className="absolute border border-[#cad9ec] border-solid inset-0 pointer-events-none rounded-[24px]" />
            </div>
            <div className="content-stretch flex gap-[68px] items-center relative shrink-0">
              <div className="content-stretch flex flex-col gap-[5px] items-center justify-center relative shrink-0">
                <Wrapper>
                  <circle cx="27.5" cy="27.5" fill="var(--fill-0, white)" id="Ellipse 586" r="27" stroke="var(--stroke-0, #CAD9EC)" />
                  <g id="Frame 2080">
                    <path d={svgPaths.p21347640} fill="var(--fill-0, #23C881)" id="path0 fill" />
                    <path d={svgPaths.p1f6dde00} fill="var(--fill-0, #9C5DF4)" id="path1 fill" />
                    <path d={svgPaths.p35839f00} fill="var(--fill-0, #F04F2B)" id="path1 fill 1" />
                    <path d={svgPaths.pde43900} fill="var(--fill-0, #FD7366)" id="path2 fill" />
                    <path d={svgPaths.pdccb200} fill="var(--fill-0, #2AB3EE)" id="path3 fill" />
                  </g>
                </Wrapper>
                <div className="flex flex-col font-['Inter:Thin',sans-serif] font-thin justify-center leading-[0] not-italic relative shrink-0 text-[#0a0614] text-[16px] whitespace-nowrap">
                  <p className="leading-[normal]">Figma</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                <div className="content-stretch flex flex-col gap-[5px] items-center justify-center relative shrink-0">
                  <div className="relative shrink-0 size-[55px]">
                    <Helper2 />
                    <div className="absolute left-[15.5px] size-[25px] top-[15px]" data-name="Adobe-Photoshop-CC-PNG-Logo-1024x999 4">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAdobePhotoshopCcPngLogo1024X9994} />
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Thin',sans-serif] font-thin justify-center leading-[0] not-italic relative shrink-0 text-[#0a0614] text-[16px] whitespace-nowrap">
                    <p className="leading-[normal]">Photoshop</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 content-stretch flex flex-col gap-[5px] items-center justify-center ml-0 mt-0 relative row-1">
                  <Wrapper>
                    <circle cx="27.5" cy="27.5" fill="var(--fill-0, white)" id="Ellipse 586" r="27" stroke="var(--stroke-0, #CAD9EC)" />
                  </Wrapper>
                  <div className="flex flex-col font-['Inter:Thin',sans-serif] font-thin justify-center leading-[0] not-italic relative shrink-0 text-[#0a0614] text-[16px] whitespace-nowrap">
                    <p className="leading-[normal]">Illustrator</p>
                  </div>
                </div>
                <div className="col-1 ml-[21px] mt-[15px] relative rounded-[4px] row-1 size-[25px]" data-name="adobe-illustrator-cc-Logo-1024x999 3">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgAdobeIllustratorCcLogo1024X9993} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-start left-[128px] top-[2198px]">
        <p className="font-['Inter:Thin',sans-serif] font-thin leading-[normal] not-italic relative shrink-0 text-[#888] text-[12px] w-[99px] whitespace-pre-wrap">{`©2026 Lia Aires `}</p>
      </div>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-3.5px)] top-[2174px] w-[1177px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1177 1">
            <line id="Line 9" stroke="var(--stroke-0, #CCCCCC)" x2="1177" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex items-start left-[1258px] top-[2189px]">
        <p className="font-['Buenos_Aires:Book',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#888] text-[12px]">LinkedIn</p>
      </div>
    </div>
  );
}