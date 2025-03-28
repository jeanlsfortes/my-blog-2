import IntroductionAboutMe from "@/components/about/introduction/IntroductionAboutMe";
import MyTrajectory from "@/components/about/myTrajectory/MyTrajectory";
import React from "react";

export default function About(): React.ReactElement {
  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <IntroductionAboutMe />
      <MyTrajectory />
    </main>
  );
}