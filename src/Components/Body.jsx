import React from "react"

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="lg:flex-1 lg:order-2">
        <img className="rounded-2xl md:h-90" src="/public/assets/Home_SocialCard.jpg" alt="hero-img"/>
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className=" text-white text-5xl font-bold font-playfair leading-tight">Listen your song !</h1>
        <p className="font-Lato mt-4 mb-4 text-gray-400">With spotify, listen to your favorite songs anytime anywhere</p>
        <form className="flex flex-col gap-4 md:flex-row">
          <input className="rounded-md px-4 py-3 placeholder:text-gray-400" type="email" placeholder="Enter email address" />
          <button className="rounded-md px-4 py-3 bg-green-400 hover:bg-green-600 text-black">Join Us</button>
        </form>
        <div className="flex gap-2 mt-2">
          <img src="/public/assets/checkmark.svg" alt="check" className="w-5"/>
          <p className="text-white font-Lato">No spam promotions, Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  )
}

export default Body
