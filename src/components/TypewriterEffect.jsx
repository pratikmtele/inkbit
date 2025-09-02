"use client";

import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <h1 className="text-center lg:w-2/3 h-22 md:h-26" id="typewriter">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "Write, share, and inspire — because every story deserves to be heard."
            )
            .callFunction(() => {
              const cursor = document.querySelector(".Typewriter__cursor");
              if (cursor) cursor.style.display = "none";
            })
            .start();
        }}
        options={{
          autoStart: true,
          loop: false,
          delay: 60,
        }}
      />
    </h1>
  );
}
