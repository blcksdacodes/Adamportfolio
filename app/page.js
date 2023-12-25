import Image from 'next/image'
import photo from "../public/images/photo.png"
import skills from "../public/images/skills.png"
import xp from "../public/images/experience.png"
import cert from "../public/images/cert.png"
import background from "../public/images/background.jpeg"
import Head from 'next/head'


function Home() {
  return (
    <body>
      <div className="bg-custom-image z-1 bg-fixed bg-cover bg-no-repeat">
        <div className='navbar w-full h-[50px] bg-yellow-500'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='text-center'>
                
              </div>
              <div className='text-center'>
                <h1 className='font-custom ml-10 mt-2 font-bold text-2xl text-zinc-950 text-shadow'>My Portfolio</h1>
              </div>
              <div className='text-center'>
                
              </div>
            </div>
          </div>
        <div className='mt-2 w-full h-[10px] bg-zinc-950 bg-opacity-60'></div>
        <div className='adamintro'>
        <section className='w-full'>
          <div className='h-[500px] mt-20 mr-10 ml-10 grid grid-cols-3 gap-10 rounded-lg content-center'>
              <div>
                <div className="ml-10 w-[400px] h-[400px]">
                  <Image  alt="photoimage" className = 'object-contain bg-zinc-950 bg-opacity-60 border-8 border-yellow-500 rounded-full w-[400px] h-[400px] shadow-2xl' src ={photo}></Image>
                </div>
              </div>
              <div className='w-[700px] border-8 border-yellow-500 bg-zinc-950 bg-opacity-60 backdrop-blur-md col-span-2 rounded-lg shadow-2xl justify-center mr-10'>
                <h1 className='ml-5 mt-5 font-silk text-2xl font-bold text-yellow-500'>MEET FACHRI ADAM!</h1>
                <p className='ml-5 mt-5 font-sc-code mr-20 text-slate-50'>
                  Fresh graduated from Universitas Bina Nusantara with 1 year of working experience as a
                  coding teacher and graphic designer for Kodekiddo. Intermediate in programming
                  language such as Java, Javascript, C, Python, HTML & CSS. Worked on several programming
                  projects such as creating website and game as well as graphics design projects. Does
                  drawing/designing and gaming as hobbies. Interested in front end programming, Unity
                  game development and graphics design. Always improving and eager to learn new things
                </p>
              </div>
          </div>
        </section>
        <section className="h-[600px] w[600px] mr-10 mt-20 ml-10 grid grid-cols-3 gap-15 justify-center items-center rounded-[5%]">
          <div className="group hover:border-8  h-[550px] w-[550px] bg-zinc-950 bg-opacity-60 backdrop-blur-md rounded-[5%] shadow-2xl hover:ease-out hover:bg-yellow-500 hover:border-zinc-950 hover:bg-opacity-60 transition-all duration-150">
            <div className="items-center ml-5 mt-5 mb-5 mr-5">
              <h1 className="font-silk text-5xl text-center text-slate-50 group-hover:text-zinc-950 transition-all duration-300">SKILLS</h1>
              <div className="transition-all duration-100 group-hover:ease-out group-hover:opacity-0 absolute h-[350px] w-[350px] ml-20 mt-10">
                <Image alt="skillimage" src ={skills}></Image>
              </div>
              <p className="text-center group-hover:visible invisible mt-10 font-sc-code font-bold mb-10 mr-10 ml-10 transition-all">Skills are obtained through characters progression. It is very valuable to
                help a character go thorugh obstacles in the future, as well as solving some problems that a character might face. It is not always
                easy to obtain as a character has to go through a lot of training and hard work. You can view the sets of skills Adam has by clicking the View button below.
              </p>
              <div className="flex justify-center items-center">
                <a href="#skillsection">
                <button className="mt-20 invisible group-hover:ease-out group-hover:visible transition-all items-center bg-zinc-950 hover:bg-slate-50 hover:text-zinc-950 text-yellow-500 font-bold py-2 px-6 rounded-lg z-50">VIEW</button>
                </a>
              </div>
            </div>
          </div >
          <div className="group hover:border-8  h-[550px] w-[550px] bg-zinc-950 bg-opacity-60 backdrop-blur-md rounded-[5%] shadow-2xl hover:ease-out hover:bg-yellow-500 hover:border-zinc-950 hover:bg-opacity-60 transition-all duration-150">
            <div className="ml-5 mt-5 mb-5 mr-5">
              <h1 className="justify-center items-center font-silk text-5xl text-center text-slate-50 group-hover:text-zinc-950 transition-all duration-300">EXPERIENCE</h1>
              <div className="transition-all duration-100 group-hover:ease-out group-hover:opacity-0 absolute z-1 h-[350px] w-[350px] ml-20 mt-10">
                <Image alt="experienceimage" src ={xp}></Image>
              </div>
              <p className="text-center group-hover:visible invisible mt-10 font-sc-code font-bold mb-10 mr-10 ml-10 transition-all">
                Experience is a result of knowledge, skills, and abilities gained through journey and challenges, which helps a character grow stronger and more capable as they progress.
                Adam has got some experience in the past that you can view by clicking the View button below.
              </p>
              <div className="flex justify-center items-center">
                <button className="mt-20 invisible group-hover:ease-out group-hover:visible transition-all items-center bg-zinc-950 hover:bg-slate-50 hover:text-zinc-950 text-yellow-500 font-bold py-2 px-6 z-50 rounded-lg">VIEW</button>
              </div>
            </div>
          </div>
          <div className="group hover:border-8  h-[550px] w-[550px] bg-zinc-950 bg-opacity-60 backdrop-blur-md rounded-[5%] shadow-2xl hover:ease-out hover:bg-yellow-500 hover:border-zinc-950 hover:bg-opacity-60 transition-all duration-150">
            <div className="ml-5 mt-5 mb-5 mr-5">
              <h1 className="font-silk text-5xl text-center text-slate-50 group-hover:text-zinc-950 transition-all duration-300">CERTIFICATES</h1>
              <div className="transition-all duration-100 group-hover:ease-out group-hover:opacity-0 absolute z-1 h-[350px] w-[350px] ml-20 mt-10">
                <Image alt="certimage" src ={cert}></Image>
              </div>
              <p className="text-center group-hover:visible invisible mt-10 font-sc-code font-bold mb-10 mr-10 ml-10 transition-all">Skills are obtained through characters progression. It is very valuable to
                tackle some obstacles in the future, as well as solving some problems that a character might face. It is not always
                easy to obtain as a character has to go through a lot of training and hard work. Adam has learned
                sets of skills through his journey. You can click on the View button below to check out all of his
                skills
              </p>
              <div className="flex justify-center items-center">
                <button className="mt-20 invisible group-hover:ease-out group-hover:visible transition-all items-center bg-zinc-950 hover:bg-slate-50 hover:text-zinc-950 text-yellow-500 font-bold py-2 px-6 z-50 rounded-lg">VIEW</button>
              </div>
            </div>
          </div>
        </section>
        <section id="skillsection" className="backdrop-blur-lg bg-zinc-950 bg-opacity-[70%] ml-5 mr-5 shadow-2xl mt-20 rounded-[5%]">
          <div className='mt-20'>
            <br/>
            <h1 className='mb-5 ml-20 mr-40 font-silk text-9xl font-bold text-yellow-500'>SKILLS</h1>
            <div className='rounded-lg mb-10 ml-20 mr-20 bg-yellow-500 h-[10px]'>
            </div>
            <p className='italic w-[900px] ml-20 mr-40 font-sc-code text-2xl font-bold text-slate-50'>"Skills are the threads that weave the fabric of mastery, stitched together by dedication and honed through relentless practice."</p>
            <div className="mr-10 ml-10 mt-10 h-[400px] grid grid-cols-2 gap-8">
              <div className="">
                <h1 className="ml-10 mb-5 text-left font-silk text-5xl font-bold text-yellow-500">PROGRAMMING SKILLS</h1>
                <p className="text-slate-50 text-left justify-left font-sc-code mb-10 mr-10 ml-10 transition-all">
                  Being a computer science graduate, Adam learned programming technical skills. He started learning
                  programming by learning C++ and C language in his first semester of college year. Adam then got more hooked
                  and more interested, he got into learning Java and Python. He also has a passion for designs and started
                  combining his design skills and programming skills by learning front-end programming through HTML & CSS as well as Javascript while
                  using different kinds of frameworks along the way. Additionally, he also gained database skills while learning to manage his project database using SQL. These are the summaries of his 
                  programming skills proficiency.
              </p>
              </div>
              <div className="w-[700px] bg-yellow-500 bg-opacity-50 rounded-lg">
                <div className="left-10">
                  <h1 className="mt-5 ml-10 text-left font-silk text-3xl font-bold text-zinc-950">PROFICIENCY:</h1>
                  <ul className="mr-10 ml-10 mt-5 list-indside">
                    <li>
                      <div className="grid grid-cols-2 gap-20 h-[100px]">
                        <div className="bg-slate-50 h-[50px]">
                        <h1>ini buat Java</h1>
                        </div>
                        <div className="bg-slate-500 h-[50px]">
                        <h1>ini buat Python</h1>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="grid grid-cols-2 gap-20 h-[100px]">
                        <div className="bg-slate-50 h-[50px]">
                        <h1>ini buat HTML</h1>
                        </div>
                        <div className="bg-slate-500 h-[50px]">
                        <h1>ini buat CSS</h1>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="grid grid-cols-2 gap-20 h-[100px]">
                        <div className="bg-slate-50 h-[50px]">
                        <h1>ini buat Javascript</h1>
                        </div>
                        <div className="bg-slate-500 h-[50px]">
                        <h1>ini buat C</h1>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mr-10 ml-10 mt-10 h-[400px] grid grid-cols-2 gap-8">
              <div className="">
                <h1 className="ml-10 mb-5 text-left font-silk text-5xl font-bold text-yellow-500">DESIGN SKILLS</h1>
                <p className="text-slate-50 text-left justify-left font-sc-code mb-10 mr-10 ml-10 transition-all">
                  Being a computer science graduate, Adam learned programming technical skills. He started learning
                  programming by learning C++ and C language in his first semester of college year. Adam then got more hooked
                  and more interested, he got into learning Java and Python. He also has a passion for designs and started
                  combining his design skills and programming skills by learning front-end programming through HTML & CSS as well as Javascript while
                  using different kinds of frameworks along the way. Additionally, he also gained database skills while learning to manage his project database using SQL. These are the summaries of his 
                  programming skills proficiency.
              </p>
              </div>
              <div className="w-[700px] bg-yellow-500 bg-opacity-50 rounded-lg">
                <div className="left-10">
                  <h1 className="mt-5 ml-10 text-left font-silk text-3xl font-bold text-zinc-950">PROFICIENCY:</h1>
                  <ul className="mr-10 ml-10 mt-5 list-indside">
                    <li>
                      <div className="grid grid-cols-2 gap-20 h-[100px]">
                        <div className="bg-slate-50 h-[50px]">
                        <h1>ini buat Java</h1>
                        </div>
                        <div className="bg-slate-500 h-[50px]">
                        <h1>ini buat Python</h1>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="grid grid-cols-2 gap-20 h-[100px]">
                        <div className="bg-slate-50 h-[50px]">
                        <h1>ini buat HTML</h1>
                        </div>
                        <div className="bg-slate-500 h-[50px]">
                        <h1>ini buat CSS</h1>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="grid grid-cols-2 gap-20 h-[100px]">
                        <div className="bg-slate-50 h-[50px]">
                        <h1>ini buat Javascript</h1>
                        </div>
                        <div className="bg-slate-500 h-[50px]">
                        <h1>ini buat C</h1>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              

            </div>
            <div className="mr-10 ml-10 mt-10 h-[400px] grid grid-cols-2 gap-8">
              <div className="">
                <h1 className="ml-10 mb-5 text-left font-silk text-5xl font-bold text-yellow-500">PROGRAMMING SKILLS</h1>
                <p className="text-slate-50 text-left justify-left font-sc-code mb-10 mr-10 ml-10 transition-all">
                  Being a computer science graduate, Adam learned programming technical skills. He started learning
                  programming by learning C++ and C language in his first semester of college year. Adam then got more hooked
                  and more interested, he got into learning Java and Python. He also has a passion for designs and started
                  combining his design skills and programming skills by learning front-end programming through HTML & CSS as well as Javascript while
                  using different kinds of frameworks along the way. Additionally, he also gained database skills while learning to manage his project database using SQL. These are the summaries of his 
                  programming skills proficiency.
              </p>
              </div>
              <div className="w-[700px] bg-yellow-500 bg-opacity-50 rounded-lg">
                <div className="left-10">
                  <h1 className="mt-5 ml-10 text-left font-silk text-3xl font-bold text-zinc-950">PROFICIENCY:</h1>
                  <ul className="mr-10 ml-10 mt-5 list-indside">
                    <li>
                      <div className="grid grid-cols-2 gap-20 h-[100px]">
                        <div className="bg-slate-50 h-[50px]">
                        <h1>ini buat Java</h1>
                        </div>
                        <div className="bg-slate-500 h-[50px]">
                        <h1>ini buat Python</h1>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="grid grid-cols-2 gap-20 h-[100px]">
                        <div className="bg-slate-50 h-[50px]">
                        <h1>ini buat HTML</h1>
                        </div>
                        <div className="bg-slate-500 h-[50px]">
                        <h1>ini buat CSS</h1>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="grid grid-cols-2 gap-20 h-[100px]">
                        <div className="bg-slate-50 h-[50px]">
                        <h1>ini buat Javascript</h1>
                        </div>
                        <div className="bg-slate-500 h-[50px]">
                        <h1>ini buat C</h1>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              

            </div>
            <br/>
            <br/>
          </div>
        </section>
        <section id="skillsection" className="bg-blue-500 h-[1000px] ml-10 mr-10 shadow-2xl mt-20">
          <div>
            
          </div>
        </section>
        <section id="skillsection" className="bg-blue-500 h-[1000px] ml-10 mr-10 shadow-2xl mt-20">
          <div>
            
          </div>
        </section>
        {/* <div>
        <div className="circlePosition w-[490px] h-[400px] bg-pink-500 rounded-[100%] z-1 top-[50%] left-[50%] translate-x-[50%] translate-y-[50%] blur-[90px]">

        </div>
        </div> */}
        </div>
      </div>
    </body>







    //ini beda
    // <div>
    //   <div className="circlePosition w-[490px] h-[400px] bg-pink-500 rounded-[100%] z-1 top-[50%] left-[50%] translate-x-[50%] translate-y-[50%] blur-[90px]">

    //   </div>
    // </div>
  )
    
}

export default Home;

