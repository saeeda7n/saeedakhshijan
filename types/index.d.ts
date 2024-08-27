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

declare type SoftSkills = {
 name: string;
 backgroundColor: string;
 textColor: string;
};

declare type CodeBoxProps = {
 onComplete: (id: string) => void;
 top: number;
 left: number;
 id: string;
} & React.PropsWithChildren;
