import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-6">
            <a href="/" className="flex items-center space-x-1 mt-4 mb-6">
              {/* <BarChart2 className="h-6 w-6 text-[#03a9f4]" /> */}
              <img src="/main-logo.svg" alt="" className='h-6 w-6' />
              <span className="font-semibold text-base">Starter</span>
            </a>
            <nav className="flex flex-wrap justify-center gap-10">
              <a href="/" className="text-sm hover:text-[#2d3748]">
                Home
              </a>
              <a href="/about" className="text-sm hover:text-[#2d3748]">
                About
              </a>
              <a href="/docs" className="text-sm hover:text-[#2d3748]">
                Docs
              </a>
              <a href="https://github.com" className="text-sm hover:text-[#2d3748]">
                GitHub
              </a>
            </nav>
            <div className="flex items-center justify-center space-x-3 mt-6">
              <a href="#" aria-label="Search">
                <img src="/Githug.svg" alt="" height={16} width={16} />
                {/* <Search className="h-5 w-5 text-[#718096] hover:text-[#2d3748]" /> */}
              </a>
              <a href="#" aria-label="Facebook">
                {/* <Facebook className="h-5 w-5 text-[#718096] hover:text-[#2d3748]" /> */}
                <img src="/Icons/Facebook.svg" alt="" height={16} width={16} />
              </a>
              <a href="#" aria-label="Twitter">
                {/* <Twitter className="h-5 w-5 text-[#718096] hover:text-[#2d3748]" /> */}
                <img src="/Icons/Twitter.svg" alt="" height={16} width={16} />
              </a>
              <a href="#" aria-label="LinkedIn">
                {/* <aedin className="h-5 w-5 text-[#718096] hover:text-[#2d3748]" /> */}
                <img src="/Icons/Youtube.svg" alt="" height={16} width={16} />
              </a>
              <a href="#" aria-label="Instagram">
                {/* <Instagram className="h-5 w-5 text-[#718096] hover:text-[#2d3748]" /> */}
                <img src="/Icons/Linkedin.svg" alt="" height={16} width={16} />
              </a>
              <a href="#" aria-label="RSS">
                {/* <Rss className="h-5 w-5 text-[#718096] hover:text-[#2d3748]" /> */}
                <img src="/Icons/At.svg" alt="" height={16} width={16} />
              </a>
              <a href="#" aria-label="RSS">
                {/* <Rss className="h-5 w-5 text-[#718096] hover:text-[#2d3748]" /> */}
                <img src="/Icons/Wifi.svg" alt="" height={16} width={16} />
              </a>
            </div>
          </div>
          <div className="text-center text-[10px] text-[#718096]">
            © Copyright 1623 Nextjs Starter. Powered with ♥ by <span className='text-[#03a9f4]'>CreativeDesignsGuru</span> 
          </div>
        </div>
      </footer>
  )
}

export default Footer