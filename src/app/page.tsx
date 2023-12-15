"use client";
import CoverImg from "@/components/coverImg";
import Welcome from "@/components/welcome";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import Academics from "@/components/academics";
import Campuslife from "@/components/campuslife";
import Popular from "@/components/popular";
import Student from "@/components/student";
import Upcoming from "@/components/upcoming";
export default function HomePage() {
  return (
    <>
      <CoverImg />
      <Welcome />
      <Academics />
      <Popular />
      <Campuslife />
      <Upcoming />
      <Student />
    </>
  );
}
