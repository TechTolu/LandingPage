import React from 'react'

const WaitList = () => {

    return (
        <div className="items-center px-8 sm:px-4 mt-24 justify-center flex flex-col gap-8">
            <p className="content-center font-semibold text-xl text-[#0432B7] font-quicksand">Join our waitlist to learn more...</p>
            <div className="bg-white rounded-lg p-10 pt-3 w-3/5 h-60 items-center justify-center gap-8 sm:gap-24 flex sm:flex-row flex-col">
                <div className="md:max-w-[391px] w-2/3">
                    <p className="font-medium text-center sm:text-left text-xl text-[#0432B7] font-quicksand font-medium">Enter your e-mail to join the waitlist, and stay up to speed on all updates from our end.</p>
                </div>
                <div className="sm:items-end items-center mt-4 sm:mt-0 flex flex-col w-2/3">
                    <div className="w-full">
                        <input type='email' placeholder='E-mail' className="ring-2 p-2 rounded-sm min-w-full text-[#8395FF] block w-full"/>
                    </div>
                    <div className="w-full justify-self-end">
                        <button className="p-2  mt-4 bg-[#304FFE] text-md rounded-md text-gray-50 min-w-full font-quicksand font-semibold border-hidden">Keep me Posted</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WaitList