"use client"

import {useState} from "react";

const metadata = {
  title: "Recommend Nearest Destination for You!",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis libero arcu. Morbi sollicitudin tempor ultricies. Donec ut arcu leo"
}

const NearestDestinations = () => {
  return (
    <main className="w-full p-4 flex justify-center items-center">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center max-w-7xl">
        <div className="w-full lg:w-[468px]">
          <div className="flex justify-center items-start gap-2 flex-col">
            <h1 className="text-neutral text-xl font-bold">{metadata.title}</h1>
            <p className="text-neutral-400">{metadata.subtitle}</p>
          </div>
        </div>
        <div className="w-full lg:flex-1">
          <DesktopView />
        </div>
      </div>
    </main>
  )
}

const DesktopView = () => {
  const data = [
    {name: "Gianyar"},
    {name: "Badung"},
    {name: "Denpasar"},
    {name: "Jembrana"},
  ]

  const [wideView, setWideView] = useState(0)

  return (
    <div className="hidden w-full gap-2 lg:flex">
      {data.map((item, index) => {
          return (
              <div key={index} onMouseEnter={() => setWideView(index)} className={`h-72 w-1/4 ${index === wideView ? "w-2/4": ""} duration-300 ease-in-out rounded-3xl bg-neutral-100`}>
                <h1 className=""></h1>
              </div>
          )
      })}
    </div>
  )
}

export default NearestDestinations