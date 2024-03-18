import TabContent from "./TabContent";
import { Tabs } from "./ui/tabs";

const AboutDetails = () => {
  const info = {
    philosophy:
      "Music is more than just sound; it's a universal language that connects souls and expresses the inexpressible. At our music school, we believe in nurturing this connection through comprehensive education and immersive experiences.",
    journey:
      "Founded in 2024, Our music school began as a small community of passionate musicians. Today, we stand as a beacon for aspiring artists, offering a diverse range of courses and opportunities to master the art of music.",
    faculty:
      "Meet the maestros who will guide you through your musical voyage. Our instructors are accomplished musicians and educators, each with a unique style and a shared commitment to your growth.",
    facilities:
      "Explore our state-of-the-art facilities, including soundproof practice rooms, a recording studio, and a performance hall. These spaces are designed to inspire creativity and refine your talent.",
    community:
      "Join a vibrant community of music lovers. Collaborate, perform, and grow with peers who share your passion. Together, we celebrate every note on this incredible journey.",
  };

  const tabs = [
    {
      title: "Our Philosophy",
      value: "our philosophy",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Our Philosophy</p>
          <TabContent info={info.philosophy} />
        </div>
      ),
    },
    {
      title: "Our Journey",
      value: "our journey",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Our Journey</p>
          <TabContent info={info.journey} />
        </div>
      ),
    },
    {
      title: "Our Faculty",
      value: "our faculty",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Our Faculty</p>
          <TabContent info={info.faculty} />
        </div>
      ),
    },
    {
      title: "Our Facilities",
      value: "our facilities",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Our Facilities</p>
          <TabContent info={info.facilities} />
        </div>
      ),
    },
    {
      title: "Our Community",
      value: "our community",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Our Community</p>
          <TabContent info={info.community} />
        </div>
      ),
    },
  ];
  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default AboutDetails;
