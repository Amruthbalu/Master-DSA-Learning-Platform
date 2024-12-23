import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { motion } from "framer-motion";

const logos = [
  {
    image: images.htmlLogo,
    title: "Arrays",
    link: "https://www.google.com/search?q=Arrays"
  },
  {
    image: images.cssLogo,
    title: "Strings",
    link: "https://www.google.com/search?q=Strings"
  },
  {
    image: images.javascriptLogo,
    title: "Linked List",
    link: "https://www.google.com/search?q=Linked+List"
  },
  {
    image: images.gitLogo,
    title: "Stack",
    link: "https://www.google.com/search?q=Stack"
  },
  {
    image: images.githubLogo,
    title: "Queues",
    link: "https://www.google.com/search?q=Queues"
  },
  {
    image: images.reactLogo,
    title: "Trees",
    link: "https://www.google.com/search?q=Trees"
  },
  {
    image: images.nextLogo,
    title: "Heap",
    link: "https://www.google.com/search?q=Heap"
  },
  {
    image: images.hubspotLogo,
    title: "Hash",
    link: "https://www.google.com/search?q=Hash"
  },
  {
    image: images.tailwindLogo,
    title: "Graph",
    link: "https://www.google.com/search?q=Graph"
  },
  {
    image: images.tailwindLogo,
    title: "Matrix",
    link: "https://www.google.com/search?q=Matrix"
  },
];

const logos2 = [
  {
    image: images.htmlLogo,
    title: "Searching",
    link: "https://www.google.com/search?q=Searching"
  },
  {
    image: images.cssLogo,
    title: "Sorting",
    link: "https://www.google.com/search?q=Sorting"
  },
  {
    image: images.javascriptLogo,
    title: "Recursion",
    link: "https://www.google.com/search?q=Recursion"
  },
  {
    image: images.gitLogo,
    title: "Backtracking",
    link: "https://www.google.com/search?q=Backtracking"
  },
  {
    image: images.githubLogo,
    title: "Greedy",
    link: "https://www.google.com/search?q=Greedy"
  },
  {
    image: images.reactLogo,
    title: "Dynamic Programming",
    link: "https://www.google.com/search?q=Dynamic+Programming"
  },
  {
    image: images.nextLogo,
    title: "Pattern Searching",
    link: "https://www.google.com/search?q=Pattern+Searching"
  },
  {
    image: images.hubspotLogo,
    title: "Divide and Conquer",
    link: "https://www.google.com/search?q=Divide+and+Conquer"
  },
  {
    image: images.tailwindLogo,
    title: "Branch and Bound",
    link: "https://www.google.com/search?q=Branch+and+Bound"
  },
  {
    image: images.tailwindLogo,
    title: "Randomized",
    link: "https://www.google.com/search?q=Randomized"
  },
];

const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Tabs defaultIndex={0}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
        >
          <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
            <Tab className="text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
              Data Structures
            </Tab>
            <Tab className="text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
              Algorithms
            </Tab>
          </TabList>
        </motion.div>
        <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
          <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[550px]">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
            >
              {logos.map((logo, index) => (
                <a
                  key={index}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                >
                  <img
                    className="h-14 object-contain dark:filter dark:invert"
                    src={logo.image}
                    alt={logo.title}
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <h6 className="text-xl font-semibold text-primary dark:text-white">
                    {logo.title}
                  </h6>
                </a>
              ))}
            </motion.div>
          </div>
        </TabPanel>
        <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
          <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[550px]">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
            >
              {logos2.map((logo, index) => (
                <a
                  key={index}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                >
                  <img
                    className="h-14 object-contain dark:filter dark:invert"
                    src={logo.image}
                    alt={logo.title}
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <h6 className="text-xl font-semibold text-primary dark:text-white">
                    {logo.title}
                  </h6>
                </a>
              ))}
            </motion.div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabSection;
