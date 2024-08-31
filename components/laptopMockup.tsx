import React, { useMemo } from "react";

type MockupProps = {
 className?: string;
 src: string;
};

export function LaptopMockup({ src, ...props }: MockupProps) {
 const id = useMemo(() => crypto.randomUUID(), []);
 return (
  <svg
   data-name="Macbook"
   xmlns="http://www.w3.org/2000/svg"
   xmlnsXlink="http://www.w3.org/1999/xlink"
   viewBox="0 0 1874 1060"
   {...props}
  >
   <defs>
    <pattern
     id={id}
     preserveAspectRatio="xMidYMid slice"
     width="100%"
     height="100%"
     viewBox="0 0 2542 1311"
    >
     <image width={2542} height={1311} xlinkHref={src} />
    </pattern>
   </defs>
   <rect width={1874} height={1060} fill="none" />
   <path
    d="M44,0H1474a44,44,0,0,1,44,44v956a44,44,0,0,1-44,44H44a44,44,0,0,1-44-44V44A44,44,0,0,1,44,0Z"
    transform="translate(177 0.428)"
    fill="#444"
   />
   <path
    data-name="Shape"
    d="M40,0H1470a40,40,0,0,1,40,40V996a40,40,0,0,1-40,40H40A40,40,0,0,1,0,996V40A40,40,0,0,1,40,0Z"
    transform="translate(181 4.428)"
    fill="#141414"
   />
   <path
    data-name="Shape"
    d="M0,8A8,8,0,0,1,8,0H1866a8,8,0,0,1,8,8V30H0V8Z"
    transform="translate(0 1013.43)"
    fill="#444"
   />
   <path
    data-name="Shape"
    d="M0,4A4,4,0,0,1,4,0H1862a4,4,0,0,1,4,4V22H0V4Z"
    transform="translate(4 1017.43)"
    fill="#141414"
   />
   <path
    data-name="Shape"
    d="M0,0H1874l-7.94,4.24A100.055,100.055,0,0,1,1819,16H55A100.047,100.047,0,0,1,7.941,4.24L0,0Z"
    transform="translate(0 1043.43)"
    fill="#444"
   />
   <path
    data-name="Shape"
    d="M0,0H1862l-9.13,3.91a99.93,99.93,0,0,1-39.4,8.09H48.526A99.91,99.91,0,0,1,9.134,3.91L0,0Z"
    transform="translate(6 1043.43)"
    fill="#141414"
   />
   <path
    data-name="Shape"
    d="M0,0H269V1a19.994,19.994,0,0,1-20,20H20A20,20,0,0,1,0,1V0Z"
    transform="translate(803 1013.43)"
    fill="#444"
   />
   <rect
    width={1440}
    height={900}
    transform="translate(216 63.43)"
    fill={`url(#${id})`}
   />
  </svg>
 );
}
