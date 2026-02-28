import clsx from "clsx";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-ufhbzbxhic";
import imgRectangle361 from "figma:asset/4653fd3e4612bf043cf9babd21443b951408a7dd.png";
import imgImage71 from "figma:asset/bbddd34f39166e7a179e268b1420ae0670c1cfa2.png";
import img5105STfNoNl2 from "figma:asset/27d2eb7ff002063e3c4bf552cb1508d774fb33dd.png";
import img768PxSquareFlagOfTheUnitedKingdom1 from "figma:asset/5310e25c44fdd5f00c85f832c0b4bd970fe8d3ff.png";
import img768PxSquareFlagOfTheUnitedKingdom2 from "figma:asset/6fbece8c782868b2c5c73f0f7a7624c8a0f14610.png";
import imgAdobePhotoshopCcPngLogo1024X9994 from "figma:asset/8c5041ad8a61e5ab6c11236662560309f1f4eb24.png";
import imgAdobeIllustratorCcLogo1024X9993 from "figma:asset/50e1c36ceb11011aaa8a3ee6d8043e6b91727187.png";
import { img5105STfNoNl1 } from "../../imports/svg-q4hxr";

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
      <circle cx="27.5" cy="27.5" fill="white" id="Ellipse 587" r="27" stroke="#CAD9EC" />
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
      <p className="font-['Inter:Thin',sans-serif] font-thin leading-[normal] not-italic relative flex-1 text-[#0a0614] text-[16px] whitespace-pre-wrap">{text}</p>
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
      <p className="font-['Inter:Thin',sans-serif] font-thin not-italic relative flex-1 text-[16px] whitespace-pre-wrap">{text2}</p>
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
      <p className="font-['Inter:Thin',sans-serif] font-thin relative flex-1 min-w-[500px] text-[16px]">{text1}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white min-h-screen overflow-x-scroll" data-name="About">
      
      {/* SEÇÃO HERO (MENU + TÍTULO + FOTO) */}
      <div className="relative w-full min-h-[800px] bg-white overflow-hidden">
        
       {/* Background SVG (Fundo abstrato - Listras azuis removidas) */}
        <div className="absolute h-[861.948px] left-[-217px] top-[-168px] w-[1917px] pointer-events-none">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1917 861.948">
            <g id="Frame 1244" opacity="0.5">
              <path d={svgPaths.p1c295b40} fill="url(#paint0_linear_7_193)" id="Rectangle 1144" />
              {/* Formas azuis (Rectangle 1142, 1141, 1143) removidas daqui */}
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_193" x1="555.973" x2="199.015" y1="119.23" y2="770.521">
                <stop stopColor="#F5EAFF" />
                <stop offset="1" stopColor="#F3F6F8" />
              </linearGradient>
              {/* Definições de gradiente azul removidas para limpar o código */}
            </defs>
          </svg>
        </div>
        
        {/* Menu do Topo (Navbar) */}
        <div className="absolute top-[50px] left-0 right-0 px-[128px] z-20">
          <div className="flex justify-between items-center w-full">
            <Link to="/" className="leading-[normal] not-italic text-[#0a0614] text-[32.278px] no-underline" style={{ fontFamily: 'Anton, sans-serif' }}>Lia Aires</Link>
            <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
              <Link to="/about" className="font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px] no-underline hover:underline transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>Sobre</Link>
              <Link to="/" className="font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px] no-underline hover:underline transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>Projetos</Link>
            </div>
          </div>
        </div>

        {/* CONTEÚDO PRINCIPAL: Alinhado com Flexbox */}
        <div className="relative z-10 w-full px-[128px] pt-[220px] pb-20 flex flex-col lg:flex-row justify-between items-center gap-16 min-h-[800px]">
          
          {/* COLUNA ESQUERDA: Texto */}
          <div className="flex flex-col gap-10 items-start shrink-0 w-full max-w-[612px]">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic text-[#0a0614] text-[96px] m-0 whitespace-pre-wrap">
              Olá! Meu{'\n'}nome é Lia
            </p>
            <div className="font-['Inter:Thin',sans-serif] font-thin leading-[35px] not-italic text-[#0a0614] text-[18px] w-full flex flex-col gap-6 m-0">
              <p className="m-0">Sou estudante de Sistemas e Mídias Digitais na Universidade Federal do Ceará e Designer UI/UX.</p>
              <p className="m-0">{`Aspirante a pesquisadora em Interação Humano-Computador, compreender a forma em que as pessoas interagem com as TICs é o que mais me motiva a planejar designs cada vez mais centrados nas necessidades dos usuários.`}</p>
            </div>
          </div>

          {/* COLUNA DIREITA: Foto */}
          {/* Reduzi o tamanho de w-[490px] h-[552px] para w-[400px] h-[450px] */}
          <div className="relative shrink-0 w-[400px] h-[450px] rounded-[30px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
              <img alt="Lia Aires" className="absolute h-[183.75%] left-[-0.04%] max-w-none top-[-64.33%] w-[143.56%]" src={imgRectangle361} />
            </div>
          </div>

        </div>
      </div>

      {/* --- CONTEÚDO PRINCIPAL (GRID 2 COLUNAS) --- */}
      <div className="w-full px-[128px] py-16 flex flex-col lg:flex-row gap-20 items-start">
        
        {/* --- COLUNA ESQUERDA (Maior) --- */}
        <div className="flex flex-col gap-16 flex-1">
          
          {/* Experiências */}
          <div className="flex flex-col gap-6 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] text-[#6a6f8e] text-[25px] m-0">Experiências</p>
            <div className="border border-[#cad9ec] border-solid rounded-[24px] p-8 flex flex-col gap-4">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-normal text-[#0a0614] text-[20px] m-0">Bolsista PIBITI/PIBIC</p>
              <div className="flex gap-[5px] items-start text-[#6a6f8e]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] m-0">Célula Multimídia</p>
                <p className="font-['Heebo:Regular',sans-serif] font-normal text-[14px] m-0 tracking-[0.3px]">|</p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] m-0">Ago 2025 - Atualmente</p>
              </div>
              <Helper text="-" text1="Desenvolvimento e Prototipagem de uma Plataforma de Apoio à Prática do Design Ético em Interfaces Digitais" />
              <Helper text="-" text1="O projeto visa fornecer a designers e desenvolvedores recursos metodológicos e ferramentas para a implementação de padrões de design positivos em interfaces digitais interativas." />
            </div>
          </div>

          {/* Formação Acadêmica */}
          <div className="flex flex-col gap-6 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] text-[#6a6f8e] text-[25px] m-0">Formação Acadêmica</p>
            <div className="border border-[#cad9ec] border-solid rounded-[24px] p-8 flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0a0614] text-[20px] m-0">Bacharelado em Sistemas e Mídias Digitais</p>
                <div className="flex flex-col font-['Inter:Thin',sans-serif] font-thin gap-1 text-[#6a6f8e] text-[16px]">
                  <p className="m-0">Universidade Federal do Ceará</p>
                  <p className="m-0">2024 - 2027 (previsto)</p>
                </div>
              </div>
              <div className="h-[64px] w-[52px] shrink-0">
                <img alt="Brasão UFC" className="object-cover size-full" src={imgImage71} />
              </div>
            </div>
          </div>

          {/* Certificados */}
          <div className="flex flex-col gap-6 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] text-[#6a6f8e] text-[25px] m-0">Certificados</p>
            
            {/* Grid Interno para os certificados ficarem lado a lado */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              
              {/* Cert 1 */}
              <div className="border border-[#cad9ec] border-solid rounded-[24px] p-6 flex flex-col justify-center gap-4 h-[160px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0a0614] text-[20px] m-0">Introdução a UI/UX Design</p>
                <div className="flex gap-[5px] items-start text-[#6a6f8e]">
                  <p className="font-['Inter:Thin',sans-serif] font-thin text-[16px] m-0">2025</p>
                  <p className="font-['Heebo:Regular',sans-serif] font-normal text-[14px] m-0 tracking-[0.3px]">|</p>
                  <p className="font-['Inter:Thin',sans-serif] font-thin text-[16px] m-0">Prefeitura de Fortaleza</p>
                </div>
              </div>

              {/* Cert 2 */}
              <div className="border border-[#cad9ec] border-solid rounded-[24px] p-6 flex flex-col justify-center gap-4 h-[160px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0a0614] text-[20px] m-0">Língua Inglesa</p>
                <Helper1 text="2013 - 2017" text1="|" text2="Hilpro Idiomas" />
              </div>

              {/* Cert 3 */}
              <div className="border border-[#cad9ec] border-solid rounded-[24px] p-6 flex flex-col justify-center gap-4 h-[160px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0a0614] text-[20px] m-0">Língua Japonesa</p>
                <Helper1 text="2024 - 2026" text1="|" text2="Universidade Estadual do Ceará" />
              </div>

            </div>
          </div>

        </div>

        {/* --- COLUNA DIREITA (Menor) --- */}
        <div className="flex flex-col gap-16 w-full lg:w-[410px] shrink-0">
          
          {/* Design Skills */}
          <div className="flex flex-col gap-6 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] text-[#6a6f8e] text-[25px] m-0">Design Skills</p>
            <div className="bg-white border border-[#cad9ec] border-solid rounded-[24px] p-8 flex flex-col gap-5">
              <Text text="Design de Experiência do Usuário (UX)" />
              <Text text="Design de Interface do Usuário (UI)" />
              <Wrapper2>Web Design</Wrapper2>
              <Text text="Design System" />
              <Text text="Design Thinking" />
              <Text1 text="Aplicação de Testes de Usabilidade e Avaliação Heurística" />
            </div>
          </div>

          {/* Ferramentas */}
          <div className="flex flex-col gap-6 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] text-[#6a6f8e] text-[25px] m-0">Ferramentas</p>
            <div className="bg-white border border-[#cad9ec] border-solid rounded-[24px] py-8 px-6 flex justify-around items-center">
              
              {/* Figma */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <Wrapper>
                  <circle cx="27.5" cy="27.5" fill="white" id="Ellipse 586" r="27" stroke="#CAD9EC" />
                  <g id="Frame 2080">
                    <path d={svgPaths.p21347640} fill="#0ACF83" />
                    <path d={svgPaths.p1f6dde00} fill="#A259FF" />
                    <path d={svgPaths.p35839f00} fill="#F24E1E" />
                    <path d={svgPaths.pde43900} fill="#FF7262" />
                    <path d={svgPaths.pdccb200} fill="#1ABCFE" />
                  </g>
                </Wrapper>
                <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[16px] m-0">Figma</p>
              </div>

              {/* Photoshop */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <div className="relative shrink-0 size-[55px]">
                  <Helper2 />
                  <div className="absolute left-[15.5px] size-[25px] top-[15px]">
                    <img alt="Photoshop" className="absolute inset-0 max-w-none object-cover size-full" src={imgAdobePhotoshopCcPngLogo1024X9994} />
                  </div>
                </div>
                <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[16px] m-0">Photoshop</p>
              </div>

              {/* Illustrator */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <div className="relative shrink-0 size-[55px]">
                  <Helper2 />
                  <div className="absolute left-[15px] size-[25px] top-[15px]">
                    <img alt="Illustrator" className="absolute inset-0 max-w-none object-cover rounded-[4px] size-full" src={imgAdobeIllustratorCcLogo1024X9993} />
                  </div>
                </div>
                <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[16px] m-0">Illustrator</p>
              </div>

            </div>
          </div>

          {/* Idiomas */}
          <div className="flex flex-col gap-6 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] text-[#6a6f8e] text-[25px] m-0">Idiomas</p>
            <div className="bg-white border border-[#cad9ec] border-solid rounded-[24px] p-6 flex flex-col gap-6">
              
              {/* Português */}
              <div className="flex gap-[15px] items-center">
                <div className="relative shrink-0 size-[55px]">
                  <Helper2 />
                  <div className="absolute contents left-[15px] top-[15px]">
                    <div className="absolute left-[12.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.5px_2.5px] mask-size-[25px_25px] size-[30px] top-[12.5px]" style={{ maskImage: `url('${img5105STfNoNl1}')` }}>
                      <img alt="BR Flag" className="absolute inset-0 max-w-none object-cover size-full" src={img5105STfNoNl2} />
                    </div>
                  </div>
                </div>
                <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[16px] m-0">Português (Nativo)</p>
              </div>

              {/* Inglês */}
              <div className="flex gap-[15px] items-center">
                <div className="relative shrink-0 size-[55px]">
                  <Helper2 />
                  <MaskGroup>
                    <img alt="UK Flag" className="absolute inset-0 max-w-none object-cover size-full" src={img768PxSquareFlagOfTheUnitedKingdom1} />
                  </MaskGroup>
                </div>
                <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[16px] m-0">Inglês (Avançado)</p>
              </div>

              {/* Japonês */}
              <div className="flex gap-[15px] items-center">
                <div className="relative shrink-0 size-[55px]">
                  <Helper2 />
                  <MaskGroup>
                    <img alt="JP Flag" className="absolute inset-0 max-w-none object-cover size-full" src={img768PxSquareFlagOfTheUnitedKingdom2} />
                  </MaskGroup>
                </div>
                <p className="font-['Inter:Thin',sans-serif] font-thin text-[#0a0614] text-[16px] m-0">Japonês (Básico)</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="w-full px-[128px] pb-10">
        <div className="w-full border-t border-[#CCCCCC] pt-6 flex justify-between items-center">
          <p className="font-['Inter:Thin',sans-serif] font-thin leading-[normal] not-italic text-[#888] text-[12px] m-0">
            {`(CC)2026 Lia Aires (Modified Template made by M. Ali)`}
          </p>
          <a href="https://www.linkedin.com/in/lia-aires-221000272/" target="_blank" rel="noopener noreferrer" className="leading-[normal] not-italic text-[#888] text-[12px] hover:text-[#0A66C2] transition-colors duration-200 cursor-pointer no-underline" style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 300 }}>
            LinkedIn
          </a>
        </div>
      </div>

    </div>
  );
}
