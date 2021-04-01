import React from 'react'

function Banner() {
    return(
        <div class="bg-green-800 z-20">
            <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 flex items-center">
                    <p class="ml-3 font-sm text-white truncate">
                    <span class="hidden md:inline">
                        Free shipping on Orders Over $75
                    </span>
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Banner