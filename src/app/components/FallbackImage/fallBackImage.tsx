import React from "react";
import Image from "next/image";

const FallBackImage: React.FC = () => {
  return (
    <div className="relative w-full h-[480px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background image */}
      <div className="absolute w-full h-full">
        <Image
          src="https://emirongorur.my.canva.site/blog/media/41b38cd851dfff6a9440981b275d8e7e.png"
          alt="Background"
          className="w-full h-full object-cover"
          width={600}
          height={400}
        />
      </div>

      {/* Foreground images */}
      <div className="absolute w-[467px] h-[384px] left-[-120px] top-[288px]">
        <Image
          src="https://emirongorur.my.canva.site/blog/media/250f9a1f1e3074758f163d5e749419d6.png"
          alt="Foreground Image 1"
          className="w-full h-full object-cover"
          width={600}
          height={400}
        />
      </div>
      <div className="absolute w-[225px] h-[196px] left-[152px] top-[-131px]">
        <Image
          src="https://emirongorur.my.canva.site/blog/media/c3f4eabfa6e1f3748cc169ac8fbc01d2.png"
          alt="Foreground Image 2"
          className="w-full h-full object-cover"
          width={600}
          height={400}
        />
      </div>
      <div className="absolute w-[467px] h-[384px] right-[160px] top-[-192px]">
        <Image
          src="https://emirongorur.my.canva.site/blog/media/250f9a1f1e3074758f163d5e749419d6.png"
          alt="Foreground Image 3"
          className="w-full h-full object-cover"
          width={600}
          height={400}
        />
      </div>
      <div className="absolute w-[220px] h-[188px] left-[214px] bottom-[86px]">
        <Image
          src="https://emirongorur.my.canva.site/blog/media/b1f66fa3c2df77f2da538dadf7ea2330.png"
          alt="Foreground Image 4"
          className="w-full h-full object-cover"
          width={600}
          height={400}
        />
      </div>

      {/* Text */}
      <div className="absolute text-center">
        <h1
          className="text-[64px] font-bold text-blue-500 uppercase tracking-wider"
          style={{
            textShadow:
              "0px 0px 6px rgba(38, 35, 228, 0.95), 0px 0px 33px rgba(85, 83, 228, 0.75), 0px 0px 100px rgba(85, 83, 228, 0.44)",
          }}
        >
          Emir Öngörür
        </h1>
        <p className="text-[24px] font-medium text-blue-500 mt-4">- Blog -</p>
      </div>
    </div>
  );
};
export default FallBackImage;
