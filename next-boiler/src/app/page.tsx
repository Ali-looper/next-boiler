import Heading from "@/components/Heading";
import Typography from "@/components/Typography";

export default function Home() {
  return (
    <div className="flex flex-col gap-[32px]">
      {/* First Typography Block */}
      <Typography className="w-[390px] h-[140px]">
        <Heading level="h1" weight="bold">Headline Bold - 25 Poppins</Heading>
        <Heading level="h2" weight="bold">Headline Bold - 20 Poppins</Heading>
      </Typography>

      {/* Second Typography Block */}
      <Typography className="w-[272px] h-[126px]">
        <Heading level="h2" weight="bold">Title - Bold 18 Poppins</Heading>
        <Heading level="h2" weight="regular">Title - Regular 18 Poppins</Heading>
      </Typography>

      {/* Third Typography Block with 5 New Headings */}
      <Typography className="w-[311px] h-[264px]">
        <Heading level="h3" weight="regular">Body - Regular 20 Poppins</Heading>
        <Heading level="h4" weight="regular">Body - Regular 18 Poppins</Heading>
        <Heading level="h5" weight="regular">Body - Regular 16 Poppins</Heading>
        <Heading level="h5" weight="regular">Body - Regular 14 Poppins</Heading>
        <Heading level="h5" weight="regular">Body - Regular 12 Poppins</Heading>
      </Typography>

      <Typography  className="w-[258px] h-[75px]">
       <Heading level="h2" weight="bold">Label - Bold 18 Poppins</Heading>
      </Typography>
    </div>
  );
}
