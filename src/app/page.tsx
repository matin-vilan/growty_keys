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
import Stats from "@/shared/components/molecules/Stats";

export default function Home() {
  return (
    <div className="w-full! h-full! max-lg:overflow-y-auto">
      <Header />

      <SinLine className="absolute lg:bottom-[10%] max-lg:top-[10%] left-0 w-full z-0" />
      <Box className="lg:flex max-lg:flex-col justify-between items-center w-full h-[calc(100%-105px)]">
        <Box className="flex flex-col lg:justify-center max-lg:justify-start lg:items-start max-lg:items-center w-full lg:h-full lg:my-auto lg:pl-24 pl-0 lg:gap-10 max-lg:gap-6">
          <TrustBanner />
          <Box className="flex flex-col lg:gap-8 max-lg:gap-2 max-lg:justify-center max-lg:items-start">
            <h1 className="lg:text-6xl max-lg:text-2xl font-black text-charcoal leading-tight z-10">
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
            <Typography className="lg:text-xl max-lg:text-base max-lg:text-center max-lg:text-gray-600 lg:font-black max-lg:font-medium z-10">
              WE HELP BUSINESS GROW THEIR BOTTOM LINE. THAT&apos;S IT!
            </Typography>
            <Box className="w-full flex max-lg:flex-col-reverse lg:flex-col">
              <Button
                variant="discover"
                size="large"
                rightIcon="arrow-right"
                className="w-fit mt-4 max-lg:mx-auto"
              >
                Let&apos;s Discover Your Business
              </Button>
              <Stats
                stats={[
                  {
                    number: "+25M",
                    label: "Revenue\nGenerated",
                  },
                  {
                    number: "+3M",
                    label: "Ad Campaigns\nManaged",
                  },
                ]}
                className="mt-8"
              />
            </Box>
          </Box>
        </Box>

        {/* iPhone 3D Model */}

        <Box className="lg:w-[50%] w-full relative h-full z-10 lg:overflow-y-hidden">
          <Box className=" w-full h-full z-10 flex justify-center items-center">
            <Circulars className="max-lg:top-[20%]" />
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
