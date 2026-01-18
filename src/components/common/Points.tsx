import Image from "next/image";
import React from "react";

function Points() {
  return (
    <div className="relative w-5 h-5 bg-primary rounded-full flex items-center justify-center">
      <img
        src="/assets/images/logo/pennywort_logo_point.png"
        alt="Workwear"
        className="object-cover"
      />
    </div>
  );
}

export default Points;
