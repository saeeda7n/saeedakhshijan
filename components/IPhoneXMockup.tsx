import React, { useMemo } from "react";

export function IPhoneXMockup({ src, ...props }: any) {
 const id = useMemo(
  () => crypto.randomUUID() + Math.random().toString(32).replace("0.", ""),
  [],
 );
 return (
  <svg
   data-name="iPhone X"
   xmlns="http://www.w3.org/2000/svg"
   xmlnsXlink="http://www.w3.org/1999/xlink"
   viewBox="0 0 435 868"
   {...props}
  >
   <defs>
    <pattern
     id={id}
     preserveAspectRatio="xMidYMid slice"
     width="100%"
     height="100%"
     viewBox="0 0 430 935"
    >
     <image width={430} height={935} xlinkHref={src} />
    </pattern>
   </defs>
   <rect width={435} height={868} fill="none" />
   <path
    d="M60,0H368a60,60,0,0,1,60,60V807a60,60,0,0,1-60,60H60A60,60,0,0,1,0,807V60A60,60,0,0,1,60,0Z"
    transform="translate(3.333 0.43)"
    fill="#444"
   />
   <path
    data-name="Shape"
    d="M56,0H362a56,56,0,0,1,56,56V801a56,56,0,0,1-56,56H56A56,56,0,0,1,0,801V56A56,56,0,0,1,56,0Z"
    transform="translate(8.333 5.43)"
    fill="#141414"
   />
   <rect
    width={7.333}
    height={6.667}
    transform="translate(424.333 83.764)"
    fill="#141414"
   />
   <rect
    data-name="Rectangle"
    width={7.333}
    height={6.667}
    transform="translate(3.333 83.764)"
    fill="#141414"
   />
   <rect
    data-name="Rectangle"
    width={7.333}
    height={6.667}
    transform="translate(424.333 777.097)"
    fill="#141414"
   />
   <rect
    data-name="Rectangle"
    width={7.333}
    height={6.667}
    transform="translate(3.333 777.097)"
    fill="#141414"
   />
   <path
    data-name="Shape"
    d="M4,8A4,4,0,1,0,0,4,4,4,0,0,0,4,8Z"
    transform="translate(169.333 32.43)"
    fill="#444"
   />
   <path
    data-name="Shape"
    d="M6.667,13.333A6.667,6.667,0,1,0,0,6.667a6.667,6.667,0,0,0,6.667,6.667Z"
    transform="translate(259.333 29.764)"
    fill="#444"
   />
   <path
    data-name="Shape"
    d="M2.666,0H47.333a2.667,2.667,0,1,1,0,5.333H2.666A2.667,2.667,0,0,1,2.666,0Z"
    transform="translate(192.667 33.764)"
    fill="#444"
   />
   <path
    data-name="Shape"
    d="M0,1.33A1.484,1.484,0,0,1,1.6,0H4V63.333H1.6A1.487,1.487,0,0,1,0,62V1.33Z"
    transform="translate(0 179.764)"
    fill="#444"
   />
   <path
    data-name="Shape"
    d="M0,1.33A1.484,1.484,0,0,1,1.6,0H4V63.333H1.6A1.487,1.487,0,0,1,0,62V1.33Z"
    transform="translate(0 258.764)"
    fill="#444"
   />
   <path
    data-name="Shape"
    d="M0,1.332A1.485,1.485,0,0,1,1.6,0H4V34.666H1.6A1.485,1.485,0,0,1,0,33.334v-32Z"
    transform="translate(0 117.764)"
    fill="#444"
   />
   <path
    data-name="Shape"
    d="M0,0H2A1.854,1.854,0,0,1,4,1.665v100a1.858,1.858,0,0,1-2,1.665H0V0Z"
    transform="translate(431 199.764)"
    fill="#444"
   />
   <path
    data-name="Shape"
    d="M36.666,0A36.643,36.643,0,0,0,0,36.622V774.378A36.643,36.643,0,0,0,36.666,811H338.334A36.643,36.643,0,0,0,375,774.378V36.622A36.643,36.643,0,0,0,338.334,0H298V.014Q297.835,0,297.667,0a4,4,0,0,0-4,4V5.993a24,24,0,0,1-24.035,23.97H105.368A24,24,0,0,1,81.333,5.993V4a4,4,0,0,0-4-4Q77.165,0,77,.014V0Z"
    transform="translate(30 27.43)"
    fill={`url(#${id})`}
   />
  </svg>
 );
}
