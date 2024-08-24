declare type RootLayoutProps = Readonly<React.PropsWithChildren>;
declare type SkillsProps = {
 name: string;
 backgroundColor: string;
 textColor: string;
 icon?: string;
 miniIcon?: string;
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
