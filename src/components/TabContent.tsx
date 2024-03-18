import { TextGenerateEffect } from "./ui/text-generate-effect";

const TabContent = ({ info }: any) => {
  return (
    <>
      <TextGenerateEffect words={info} />
    </>
  );
};

export default TabContent;
