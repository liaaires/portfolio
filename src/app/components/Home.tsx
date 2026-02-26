import clsx from "clsx";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-xk1xx3b6mn";
import imgScreenChangeMe1 from "figma:asset/6eb422702da92dfb9342c62512abd49f6c005f19.png";
import imgRectangle3124 from "figma:asset/c10ddd2906ba18fd1de5449fdb4f861bf5efda84.png";
import { imgScreenChangeMe } from "../../imports/svg-x5gv1";

type CircleBackgroundImageProps = {
  additionalClassNames?: string;
};

function CircleBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<CircleBackgroundImageProps>) {
  return (
    <div className={clsx("-translate-y-1/2 absolute size-[586px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 586 586">
        {children}
      </svg>
    </div>
  );
}

type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("bg-[#aa4dff] content-stretch flex items-center justify-center px-[30px] py-[15px] relative rounded-[100px] shrink-0 transition-colors duration-300 hover:bg-[#bb6fff] cursor-pointer", additionalClassNames)}>
      <p className="font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative min-h-screen w-full" data-name="Home">
      <div className="absolute bg-[#190a46] h-[750px] left-0 top-0 w-full">
        <div className="absolute h-[750px] left-0 top-0 w-full">
          <div className="absolute h-[700px] left-0 top-0 w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 700\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(4.4087e-15 35 -72 2.1431e-15 720 350)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.4375\\'/><stop stop-color=\\'rgba(238,223,255,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
          <div className="absolute contents inset-[-42.8%_-9.23%_26.71%_-14.92%]">
            <div className="absolute inset-[-42.8%_-9.23%_26.71%_-14.92%] opacity-2" data-name="Capa 1">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1789.57 871.558">
                <g id="Capa 1">
                  <path d={svgPaths.p23e71a80} id="Vector" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p30e7d780} id="Vector_2" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p31864650} id="Vector_3" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p17bba70} id="Vector_4" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p33ea3400} id="Vector_5" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p1e194700} id="Vector_6" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.pd0a9040} id="Vector_7" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p19e85f00} id="Vector_8" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p33093280} id="Vector_9" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p25c9180} id="Vector_10" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p1af21280} id="Vector_11" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p26d62400} id="Vector_12" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p63fa780} id="Vector_13" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p3544ee80} id="Vector_14" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p3477d752} id="Vector_15" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p32589c00} id="Vector_16" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.pab59680} id="Vector_17" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p29abc800} id="Vector_18" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.pdf3bac8} id="Vector_19" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p8fc7a80} id="Vector_20" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p2cee1d80} id="Vector_21" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                  <path d={svgPaths.p3500abc0} id="Vector_22" stroke="var(--stroke-0, #2349FF)" strokeMiterlimit="10" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[30px] items-center left-1/2 top-[calc(50%+19px)]">
          <div className="content-stretch flex flex-col items-center leading-[normal] not-italic relative shrink-0 text-[#0a0614]">
            <p className="font-bold relative shrink-0 text-[96px]" style={{ fontFamily: 'Inter, sans-serif' }}>Lia Aires</p>
            <p className="font-extralight relative shrink-0 text-[30px] text-center w-[583px] whitespace-pre-wrap" style={{ fontFamily: 'Inter, sans-serif' }}>Estudante e Designer UI/UX projetando experiências com intenção e pesquisa</p>
          </div>
          <div className="content-stretch flex gap-[30px] items-center justify-center relative shrink-0">
            <div onClick={() => document.getElementById('projetos-section')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer">
              <BackgroundImageAndText text="Projetos" />
            </div>
            <a href="https://www.linkedin.com/in/lia-aires-221000272/" target="_blank" rel="noopener noreferrer" className="h-[49px] relative shrink-0 w-[48px]">
              <div className="absolute bg-white h-[49px] left-0 rounded-[100px] top-[-0.5px] w-[48px] hover:bg-gray-50 transition-colors duration-200" data-name="ri:behance-fill">
                <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[20px] relative rounded-[inherit] size-full">
                  <div className="relative shrink-0 size-[24px]" data-name="ri:linkedin-fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="ri:linkedin-fill">
                        <path d={svgPaths.p2c13d80} fill="#0A66C2" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.25)]" />
              </div>
            </a>
          </div>
        </div>
        <div className="absolute top-[50px] left-0 right-0 px-[128px]">
          <div className="flex justify-between items-center">
            <Link to="/" className="leading-[normal] not-italic text-[#0a0614] text-[32.278px] no-underline" style={{ fontFamily: 'Anton, sans-serif' }}>Lia Aires</Link>
            <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
              <Link to="/about" className="font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px] no-underline hover:underline transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>Sobre</Link>
              <p onClick={() => document.getElementById('projetos-section')?.scrollIntoView({ behavior: 'smooth' })} className="font-semibold leading-[normal] not-italic relative shrink-0 text-[#0a0614] text-[16px] no-underline hover:underline transition-all duration-200 cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>Projetos</p>
              {/* <BackgroundImageAndText text="Contato" /> */}
            </div>
          </div>
        </div>
      </div>
      <div id="projetos-section" className="absolute bg-[#190a46] h-[750px] left-0 overflow-clip top-[750px] w-full">
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[16px] items-start justify-center left-[832px] top-[calc(50%-0.5px)]">
          <p className="font-bold leading-[normal] not-italic relative shrink-0 text-[50px] text-white w-[459px] whitespace-pre-wrap" style={{ fontFamily: 'Inter, sans-serif' }}>Instituto Universidade Virtual</p>
          <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>UI/UX Design</p>
          <Link to="/casestudy/instituto-universidade-virtual" onClick={() => window.scrollTo(0, 0)} className="bg-[#f26a2c] content-stretch flex h-[35px] items-center justify-center p-[15px] relative rounded-[20px] shrink-0 w-[143px] no-underline">
            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Leia Mais</p>
          </Link>
        </div>
        <CircleBackgroundImage additionalClassNames="left-[137px] top-[calc(50%+29px)]">
          <circle cx="293" cy="293" fill="#C27CFA" id="Circle" r="293" />
        </CircleBackgroundImage>
        <div className="absolute h-[365px] left-[114px] top-[222px] w-[633px]" data-name="Devices / MacBook Pro">
          <div className="absolute inset-[97.93%_4.23%_0.35%_4.28%]" data-name="Shadow">
            <div className="absolute inset-[-237.95%_-2.59%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 609.174 36.304">
                <g filter="url(#filter0_f_1_241)" id="Shadow">
                  <path d={svgPaths.p2b36c500} fill="var(--fill-0, black)" fillOpacity="0.4" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.304" id="filter0_f_1_241" width="609.174" x="-7.69721e-08" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_241" stdDeviation="7.5" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute contents inset-[0_9.5%_3.45%_9.5%]" data-name="Screen">
            <div className="absolute inset-[0_9.5%_3.45%_9.5%]" data-name="Outside Casing">
              <div className="absolute inset-[-0.57%_-0.78%_-1.7%_-0.78%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520.758 360.392">
                  <g filter="url(#filter0_dd_1_250)" id="Outside Casing">
                    <path d={svgPaths.p161ffb00} fill="var(--fill-0, #3A4245)" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="360.392" id="filter0_dd_1_250" width="520.758" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0823529 0 0 0 0 0.25098 0 0 0 0.14 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_250" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0823529 0 0 0 0 0.25098 0 0 0 0.05 0" />
                      <feBlend in2="effect1_dropShadow_1_250" mode="normal" result="effect2_dropShadow_1_250" />
                      <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_250" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[0.35%_9.7%_3.8%_9.7%]" data-name="Rubber Edging">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 510.24 349.87">
                <path d={svgPaths.p375e9800} fill="var(--fill-0, #262C2D)" id="Rubber Edging" />
              </svg>
            </div>
            <div className="absolute inset-[0.69%_9.9%_4.15%_9.9%]" data-name="Screen Black Border">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 507.722 347.349">
                <path d={svgPaths.p147f0900} fill="var(--fill-0, #121515)" id="Screen Black Border" />
              </svg>
            </div>
            <div className="absolute bg-[#262c2d] inset-[91.28%_9.9%_6.13%_9.9%]" />
            <div className="absolute contents inset-[5.7%_11.59%_10.88%_11.59%]" data-name="Screen">
              <div className="absolute inset-[5.7%_11.59%_10.88%_11.59%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[1545px_966px]" data-name="Screen [CHANGE ME]" style={{ maskImage: `url('${imgScreenChangeMe}')` }}>
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenChangeMe1} />
              </div>
            </div>
            <div className="absolute inset-[2.94%_49.73%_96.11%_49.73%]" data-name="Camera">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d={svgPaths.p30769300} fill="var(--fill-0, #262C2D)" fillRule="evenodd" id="Oval" />
              </svg>
              <div className="absolute inset-[18.75%]" data-name="Oval">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                  <path clipRule="evenodd" d={svgPaths.p46c6500} fill="var(--fill-0, #121515)" fillRule="evenodd" id="Oval" />
                </svg>
              </div>
              <div className="absolute inset-[31.25%_43.75%_56.25%_43.75%]" data-name="Oval">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
                  <path clipRule="evenodd" d={svgPaths.p39bde000} fill="var(--fill-0, #636F73)" fillRule="evenodd" id="Oval" opacity="0.4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute inset-[93.87%_0_1.04%_0]" data-name="Bottom Casing (Space Gray)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 633 18.5969">
              <g id="Bottom Casing (Space Gray)">
                <g id="Group">
                  <path d={svgPaths.p3b711b00} fill="url(#paint0_linear_1_223)" id="Rectangle 2.1" />
                  <path d={svgPaths.p2662f700} fill="url(#paint1_linear_1_223)" id="Rectangle 2.2" />
                </g>
                <path d={svgPaths.p39090d00} fill="var(--fill-0, #4E4F53)" id="Rectangle 3" />
                <path d={svgPaths.p39090d00} fill="url(#paint2_linear_1_223)" id="Rectangle 3.1" />
                <path d={svgPaths.p2e3c0f00} fill="url(#paint3_linear_1_223)" id="Union" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_223" x1="-5.44643e-07" x2="316.5" y1="5.04274" y2="5.04272">
                  <stop stopColor="#303135" />
                  <stop offset="0.0218797" stopColor="#535458" />
                  <stop offset="0.0363004" stopColor="#4D4E52" />
                  <stop offset="0.05818" stopColor="#333438" />
                  <stop offset="0.0865241" stopColor="#35363A" />
                  <stop offset="0.135753" stopColor="#4E4F53" />
                  <stop offset="0.756906" stopColor="#818286" />
                  <stop offset="1" stopColor="#818286" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_223" x1="632.843" x2="316.343" y1="5.04274" y2="5.04272">
                  <stop stopColor="#303135" />
                  <stop offset="0.0218797" stopColor="#535458" />
                  <stop offset="0.0363004" stopColor="#4D4E52" />
                  <stop offset="0.05818" stopColor="#333438" />
                  <stop offset="0.0865241" stopColor="#35363A" />
                  <stop offset="0.135753" stopColor="#4E4F53" />
                  <stop offset="0.756906" stopColor="#818286" />
                  <stop offset="1" stopColor="#818286" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_223" x1="271.331" x2="361.669" y1="3.46719" y2="3.46719">
                  <stop stopOpacity="0.5" />
                  <stop offset="0.139373" stopColor="#818487" stopOpacity="0" />
                  <stop offset="0.860627" stopColor="#818487" stopOpacity="0" />
                  <stop offset="1" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_223" x1="316.5" x2="316.5" y1="9.77069" y2="18.5969">
                  <stop stopColor="#303135" />
                  <stop offset="1" stopColor="#08090D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <p className="absolute font-bold leading-[normal] left-[132px] not-italic text-[40px] text-white top-[16px] w-[211px] whitespace-pre-wrap" style={{ fontFamily: 'Inter, sans-serif' }}>Projetos</p>
      </div>
      <div className="absolute h-[656px] left-1/2 -translate-x-1/2 top-[2272px] w-[1137px] max-w-[90%]">
        <div className="-translate-x-1/2 absolute h-[523px] left-1/2 top-0 w-[1137px]">
          <div className="-translate-y-1/2 absolute h-[352px] left-0 top-[calc(50%+11.5px)] w-[619px]">
            <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
              <p className="font-bold leading-[normal] not-italic relative shrink-0 text-[70px] text-black" style={{ fontFamily: 'Inter, sans-serif' }}>Obrigada!</p>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-0 top-[127px] w-[1103px]">
              <p className="font-thin leading-[35px] min-w-full not-italic relative shrink-0 text-[#0a0614] text-[18px] w-[min-content] whitespace-pre-wrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="leading-[normal]">{`Sendo estudante de Sistemas e Mídias Digitais, `}</span>
                <span className="font-bold leading-[normal]">projetar experiências baseadas em pesquisa que façam sentido para as pessoas</span>
                <span className="leading-[normal]">{` é o que me trouxe para o Design UI/UX`}</span>
              </p>
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                <BackgroundImageAndText text="Saiba mais sobre" additionalClassNames="h-[60px] w-[250px]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex items-start left-0 top-[647px]">
          <p className="font-thin leading-[normal] not-italic relative shrink-0 text-[#888] text-[12px] w-[99px] whitespace-pre-wrap" style={{ fontFamily: 'Inter, sans-serif' }}>{`©2026 Lia Aires `}</p>
        </div>
        <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+20px)] top-[623px] w-[1177px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1177 1">
              <line id="Line 9" stroke="var(--stroke-0, #CCCCCC)" x2="1177" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-start left-[1258px] top-[2910px]">
        <a href="https://www.linkedin.com/in/lia-aires-221000272/" target="_blank" rel="noopener noreferrer" className="leading-[normal] not-italic relative shrink-0 text-[#888] text-[12px] hover:text-[#0A66C2] transition-colors duration-200 cursor-pointer" style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 300 }}>LinkedIn</a>
      </div>
      <div className="absolute h-[750px] left-0 top-[1500px] w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\\'0 0 1440 750\\\\' xmlns=\\\\'http://www.w3.org/2000/svg\\\\' preserveAspectRatio=\\\\'none\\\\'><rect x=\\\\'0\\\\' y=\\\\'0\\\\' height=\\\\'100%\\\\' width=\\\\'100%\\\\' fill=\\\\'url(%23grad)\\\\' opacity=\\\\'1\\\\'/><defs><radialGradient id=\\\\'grad\\\\' gradientUnits=\\\\'userSpaceOnUse\\\\' cx=\\\\'0\\\\' cy=\\\\'0\\\\' r=\\\\'10\\\\' gradientTransform=\\\\'matrix(4.4087e-15 37.5 -72 2.2962e-15 720 375)\\\\'><stop stop-color=\\\\'rgba(255,250,249,1)\\\\' offset=\\\\'0\\\\'/><stop stop-color=\\\\'rgba(224,213,209,0.5)\\\\' offset=\\\\'1\\\\'/></radialGradient></defs></svg>')" }}>
        <div className="absolute bg-[rgba(255,255,255,0.3)] blur-[25px] h-[750px] left-0 top-0 w-full" />
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[128px] not-italic text-[#0a0614] top-1/2">
          <div className="font-bold relative shrink-0 text-[50px] whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="mb-0">Catálogo Radiant</p>
            <p>Patterns</p>
          </div>
          <p className="font-normal relative shrink-0 text-[20px]" style={{ fontFamily: 'Inter, sans-serif' }}>UI Design</p>
          <p className="font-normal relative shrink-0 text-[20px]" style={{ fontFamily: 'Inter, sans-serif' }}>{`Página em construção `}</p>
        </div>
        <CircleBackgroundImage additionalClassNames="left-[687px] top-[calc(50%+37px)]">
          <circle cx="293" cy="293" fill="#FEDE64" id="Circle" r="293" />
        </CircleBackgroundImage>
        <div className="absolute h-[496px] left-[642px] pointer-events-none rounded-[24px] top-[164px] w-[676px]">
          <div className="absolute inset-0 overflow-hidden rounded-[24px]">
            <img alt="" className="absolute h-[387.6%] left-[-0.08%] max-w-none top-[-0.05%] w-full" src={imgRectangle3124} />
          </div>
          <div aria-hidden="true" className="absolute border border-[#a22af2] border-solid inset-0 rounded-[24px]" />
        </div>
      </div>
    </div>
  );
}