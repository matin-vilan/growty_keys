"use client";
import Header from "@/shared/components/organism/Header";
import SinLine from "@/shared/components/molecules/SinLine";
import Circulars from "@/shared/animations/Circulars";
import IPhone3D from "@/shared/components/molecules/IPhone3D";
import TrustBanner from "@/shared/components/organisms/TrustBanner";
import Box from "@/shared/components/atoms/Box";
import FlipText from "@/shared/animations/FlipText";
import Button from "@/shared/components/atoms/Button";
import Typography from "@/shared/components/atoms/Typography";

export default function Home() {
  return (
    <div className="w-full! h-full! bg-gradient-primary">
      <Header />

      <SinLine className="absolute bottom-[10%] left-0 w-full z-0" />
      <Box className="flex justify-between items-center w-full h-[calc(100%-105px)]">
        <Box className="flex flex-col justify-center items-start w-full h-full my-auto pl-24 gap-10">
          <TrustBanner />
          <Box className="flex flex-col gap-8">
            <h1 className="text-6xl font-black text-charcoal leading-tight">
              <FlipText
                words={["ACTUALLY", "SERIOUSLY", "FINALLY"]}
                className="font-black"
                startDelay={0}
              />
              <br />
              <FlipText
                words={["RESULTS", "MARKETING", "STRATEGIES"]}
                className="font-black"
                startDelay={200}
              />
              &nbsp;THAT&nbsp;
              <FlipText
                words={["WORKS", "WORK", "DELIVER"]}
                className="font-black"
                startDelay={500}
              />
              &nbsp;
              <br />
              AS HARD AS YOU&nbsp;
              <FlipText
                words={["DO", "NEED", "DESERVE"]}
                className="font-black"
                startDelay={800}
              />
            </h1>
            <Typography className="text-xl text-gray-600 font-medium z-10">
              WE HELP BUSINESS GROW THEIR BOTTOM LINE. THAT&apos;S IT!
            </Typography>
            <Button
              variant="discover"
              size="large"
              rightIcon="arrow-right"
              className="w-fit mt-4"
            >
              Let&apos;s Discover Your Business
            </Button>
          </Box>
        </Box>

        {/* iPhone 3D Model */}

        <Box className="w-[50%] relative h-full z-10 overflow-y-hidden">
          <Box className=" w-full h-full z-10 flex justify-center items-center">
            <Circulars />
            <IPhone3D
              position={[0, 0.2, 0]}
              rotation={[0, 0, 0]}
              scale={1}
              autoRotate={true}
              enableZoom={true}
              enablePan={false}
              imageSource="/images/iphonePicCover.png"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
