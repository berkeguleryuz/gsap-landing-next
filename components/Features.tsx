"use client";

import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
}

interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");

  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * 5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform: transformStyle }}>
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-sm:text- max-w-64 text-xs md:text-base drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            wibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>

        <div className="grid h-[124vh] w-full grid-cols-2 gap-7">
          <div className="flex h-full flex-col gap-7">
            <BentoTilt className="bento-tilt_1 flex-1">
              <BentoCard
                src="/videos/feature-2.mp4"
                title={
                  <>
                    <b>B</b>eta
                  </>
                }
                description={
                  "An anime and gaming-inspired NFT collection - the IP primed for expansion"
                }
              />
            </BentoTilt>
            <div className="bento-tilt_2 h-1/3">
              <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                <h1 className="bento-title special-font max-w-64 text-black">
                  M<b>o</b>re comi<b>n</b>g soon
                </h1>
                <TiLocationArrow className="m-5 scale-[5] self-end" />
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-7">
            <BentoTilt className="bento-tilt_1 flex-1">
              <BentoCard
                src="/videos/feature-3.mp4"
                title={
                  <>
                    <b>N</b>exus
                  </>
                }
                description={
                  "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                }
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_1 flex-1">
              <BentoCard
                src="/videos/feature-4.mp4"
                title={
                  <>
                    <b>az</b>ere
                  </>
                }
                description={
                  "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                }
              />
            </BentoTilt>
            <BentoTilt className="bento-tilt_2 h-1/3">
              <video
                src={"videos/feature-5.mp4"}
                loop
                muted
                autoPlay
                className="size-full object-cover object-center"
              />
            </BentoTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
