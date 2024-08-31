declare type RootLayoutProps = Readonly<React.PropsWithChildren>;
declare type SkillsProps = {
 name: string;
 backgroundColor: string;
 textColor: string;
 miniIcon?: string;
 data: {
  percent: number;
 };
};

declare type CodeBoxProps = {
 onComplete: (id: string) => void;
 top: number;
 left: number;
 id: string;
} & React.PropsWithChildren;

declare type ProjectProps = {
 name: string;
 body: string;
 mobileScreen: string;
 desktopScreen: string;
 links: Array<{ name: "GIT" | "WEBSITE"; url: string }>;
 techs: Array<
  | "Next Js"
  | "React"
  | "TailwindCss"
  | "HTML"
  | "Css"
  | "Gsap"
  | "Framer Motion"
  | "TypeScript"
  | "JavaScript"
  | "PWA"
  | "Headless Wix"
  | "Zustand"
  | "Redux"
  | "React Query"
  | "React Context"
  | string
 >;
};
