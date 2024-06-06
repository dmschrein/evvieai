import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface SliderProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  list: string[];
  peopleJoined: string;
}

const SliderSlot = ({backgroundImage, title, subtitle, list, peopleJoined }: SliderProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-pink-500 p-4">
        <div className="flex flex-col gap-1">
        <h4 className="bold-52 text-white px-5">{title}</h4>
        <p className="regular-20 text-white px-10">{subtitle}</p>
          {/* <Image
            src="/assets/images/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          /> */}
        </div>
        
          
        </div>
        <div className="flex flex-col gap-1 py-10">
        
          <ul className="bold-20 text-white list-disc ml-5">{list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}</ul>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Slider = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <SliderSlot 
          backgroundImage="bg-bg-img-1"
          title="1. Stop Guessing, Start Growing"
          subtitle="Our AI analyses your business and identifies where you should start your social growth journey"
          list={["Analyze your current social media presence", "Identify key growth opportunities", "Develop a targeted content strategy"]}
          peopleJoined="50+ Joined"
        />
        <SliderSlot 
          backgroundImage="bg-bg-img-2"
          title="2. Maximize Your Impact"
          subtitle="Harness the power of AI to transform your social media strategy"
          list={["Start creating instantly", "Generate onbrand content", "Grow your community"]}
          peopleJoined="50+ Joined"
        />
         {/* <SliderSlot 
          backgroundImage="bg-bg-img-3"
          title="FILL IN"
          subtitle="FILL IN"
          list={["test"]}
          peopleJoined="50+ Joined"
        /> */}
         <SliderSlot 
          backgroundImage="bg-bg-img-4"
          title="3. Transform Your Social Media Presence"
          subtitle="Leverage AI to connect, engage, and grow like never before"
          list={["Convert engagement into sales", "Find new customers", "Go viral"]}
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-purple-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-20 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of growing a business and creating content, branding, and social media management, the possibility of getting lost is very large. That's why we are here for those of you who have embarked on a startup adventure.
          </p>
          <Image 
            src="/assets/images/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Slider