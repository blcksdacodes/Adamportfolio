import Image from 'next/image'
import photo from "../public/images/photo.png"
import skills from "../public/images/skills.png"
import xp from "../public/images/experience.png"
import cert from "../public/images/cert.png"
import java from "../public/images/java.png"
import python from "../public/images/python.png"
import html from "../public/images/html.png"
import css from "../public/images/css.png"
import js from "../public/images/js.png"
import c from "../public/images/c.png"
import sql from "../public/images/sql.png"
import next from "../public/images/nextjs.png"
import three from "../public/images/threejs.png"
import background from "../public/images/background.jpeg"
import Head from 'next/head'


function Home() {
  return (
    <body>
      <div className="max-[768px]:bg-center bg-custom-image z-1 bg-fixed bg-cover bg-no-repeat">
        <div className='navbar pt-2 w-full h-[50px] bg-yellow-500'>
              <div className='w-full text-center'>
                <h1 className='font-custom font-bold text-2xl text-zinc-950 text-shadow'>My Portfolio</h1>
              </div>
          </div>
        <div className='mt-2 w-full h-[10px] bg-zinc-950 bg-opacity-60'></div>
        <div className='adamintro'>

        {/*INI SECTION 1  */}

        <section className='w-full flex flex-cols flex-wrap mt-20 gap-20 rounded-lg justify-center'>
              <div>
                <div className="w-[400px] h-[400px] max-[768px]:w-[250px] max-[768px]:h-[250px] max-[470px]:w-[200px] max-[470px]:h-[200px] overflow-hidden object-contain bg-zinc-950 bg-opacity-60 border-8 border-yellow-500 rounded-full shadow-2xl">
                  <Image  alt="photoimage" className = '' src ={photo}></Image>
                </div>
              </div>
              <div className='p-5 w-full mx-20 max-[470px]:mx-5 max-[768px]:mx-8 border-8 border-yellow-500 bg-zinc-950 bg-opacity-60 backdrop-blur-lg rounded-lg shadow-2xl justify-center max-[768px]:w-[500px]'>
                <h1 className='font-silk text-2xl font-bold text-yellow-500 mb-5'>MEET FACHRI ADAM!</h1>
                <p className='font-sc-code text-slate-50 text-justify max-[470px]:text-left text-xl max-[768px]:text-md'>
                  Fresh graduated from Universitas Bina Nusantara with 1 year of working experience as a
                  coding teacher and graphic designer for Kodekiddo. Intermediate in programming
                  language such as Java, Javascript, C, Python, HTML & CSS. Worked on several programming
                  projects such as creating website and game as well as graphics design projects. Does
                  drawing/designing and gaming as hobbies. Interested in front end programming, Unity
                  game development and graphics design. Always improving and eager to learn new things
                </p>
              </div>
        </section>

        {/*INI SECTION 2  */}

        <section className="pb-20 w-full mt-20 flex flex-cols flex-wrap justify-center gap-10 rounded-[5%]">
          
           {/*SKILLS */}

          <div className="max-[340px]:mb-10 max-[470px]:w-[350px] max-[340px]:w-[300px] group hover:border-8  h-[420px] w-[420px] bg-zinc-950 bg-opacity-60 backdrop-blur-md rounded-[5%] shadow-2xl hover:ease-out hover:bg-yellow-500 hover:border-zinc-950 hover:bg-opacity-60 transition-all duration-150">
            <div className="items-center ml-5 mt-5 mb-5 mr-5">
              <h1 className="max-[340px]:text-3xl max-[470px]:text-4xl font-silk text-5xl text-center text-slate-50 group-hover:text-zinc-950 transition-all duration-300">SKILLS</h1>
              <div className="max-[340px]:mt-5 transition-all duration-100 group-hover:ease-out group-hover:opacity-0 max-w-[350px] max-h-[350px] ml-6">
                <Image alt="skillimage" src ={skills}></Image>
              </div>
              <p className="max-[340px]:-mt-[230px] max-[470px]:-mt-[250px] max-[470px]:text-left pr-4 absolute -mt-[300px] text-lg text-justify group-hover:visible invisible font-sc-code font-bold transition-all">Skills are obtained through characters progression. It is very valuable to
                help a character go thorugh obstacles in the future, as well as solving some problems that a character might face.
              </p>
              <div className="flex justify-center items-center">
                <a href="#skillsection" className="max-[340px]:mt-[50px] max-[470px]:-mt-[10px] -mt-[100px] invisible group-hover:ease-out group-hover:visible transition-all items-center bg-zinc-950 hover:bg-slate-50 hover:text-zinc-950 text-yellow-500 font-bold py-2 px-6 rounded-lg z-50">
                  VIEW
                </a>
              </div>
            </div>
          </div >

             {/*XP  */}

          <div className="max-[340px]:mb-10 max-[470px]:w-[350px] max-[340px]:w-[300px] group hover:border-8 h-[420px] w-[420px] bg-zinc-950 bg-opacity-60 backdrop-blur-md rounded-[5%] shadow-2xl hover:ease-out hover:bg-yellow-500 hover:border-zinc-950 hover:bg-opacity-60 transition-all duration-150">
            <div className="items-center ml-5 mt-5 mb-5 mr-5">
              <h1 className="max-[340px]:text-3xl max-[470px]:text-4xl font-silk text-5xl text-center text-slate-50 group-hover:text-zinc-950 transition-all duration-300">EXPERIENCES</h1>
              <div className="max-[340px]:mt-10 max-[470px]:ml-[10px] max-[470px]:mr-[10px] mt-5 ml-[32px] transition-all duration-100 group-hover:ease-out group-hover:opacity-0 max-w-[320px] max-h-[320px]">
                <Image alt="skillimage" src ={xp}></Image>
              </div>
              <p className="max-[340px]:-mt-[230px] max-[470px]:-mt-[250px] max-[470px]:text-left pr-4 absolute -mt-[280px] text-lg text-justify group-hover:visible invisible font-sc-code font-bold transition-all">
                A result of knowledge, skills, and abilities gained through journey and challenges, which helps a character grow stronger and more capable as they progress.
                
              </p>
              <div className="flex justify-center items-center">
                <a href="#skillsection" className="max-[340px]:mt-[20px] max-[470px]:-mt-[30px] -mt-[50px] invisible group-hover:ease-out group-hover:visible transition-all items-center bg-zinc-950 hover:bg-slate-50 hover:text-zinc-950 text-yellow-500 font-bold py-2 px-6 rounded-lg z-50">
                  VIEW
                </a>
              </div>
            </div>
          </div >

            {/*CERT */}

          <div className="max-[340px]:mb-10 max-[470px]:w-[350px] max-[340px]:w-[300px] group hover:border-8  h-[420px] w-[420px] bg-zinc-950 bg-opacity-60 backdrop-blur-md rounded-[5%] shadow-2xl hover:ease-out hover:bg-yellow-500 hover:border-zinc-950 hover:bg-opacity-60 transition-all duration-150">
            <div className="items-center ml-5 mt-5 mb-5 mr-5">
              <h1 className="max-[340px]:text-3xl max-[470px]:text-4xl font-silk text-5xl text-center text-slate-50 group-hover:text-zinc-950 transition-all duration-300">CERTIFICATES</h1>
              <div className="max-[340px]:mt-10 max-[470px]:mt-5 max-[470px]:ml-[10px] max-[470px]:mr-[10px] ml-[15px] transition-all duration-100 group-hover:ease-out group-hover:opacity-0 max-w-[350px] max-h-[350px]">
                <Image alt="skillimage" src ={cert}></Image>
              </div>
              <p className="max-[340px]:-mt-[230px] max-[470px]:-mt-[250px] max-[470px]:text-left pr-4 absolute -mt-[320px] text-lg text-justify group-hover:visible invisible font-sc-code font-bold transition-all">
                A result of knowledge, skills, and abilities gained through journey and challenges, which helps a character grow stronger and more capable as they progress.
              </p>
              <div className="flex justify-center items-center">
                <a href="#skillsection" className="max-[340px]:mt-[20px] max-[470px]:-mt-[30px] -mt-[100px] invisible group-hover:ease-out group-hover:visible transition-all items-center bg-zinc-950 hover:bg-slate-50 hover:text-zinc-950 text-yellow-500 font-bold py-2 px-6 rounded-lg z-50">
                  VIEW
                </a>
              </div>
            </div>
          </div >

      </section>

      <section id="skillsection" className="backdrop-blur-lg bg-zinc-950 bg-opacity-[70%] mx-20 shadow-2xl mt-20 rounded-[30px] max-[650px]:mx-5">


        <div className='pt-20 px-10'>
          <h1 className='font-silk text-5xl font-bold text-yellow-500 mb-5'>SKILLS</h1>
          <div className='rounded-lg mb-10 bg-yellow-500 h-[10px]'>
          </div>
          <div className='italic w-full font-sc-code text-xl font-bold text-slate-50 mb-5'>
            <p>"Skills are the threads that weave the fabric of mastery, stitched together by dedication and honed through relentless practice."</p>
          </div>
          <div className="flex flex-cols flex-wrap justify-center gap-8">
            <div className="">
              <h1 className="text-left font-silk text-5xl font-bold text-yellow-500 max-[650px]:text-xl mb-5">PROGRAMMING SKILLS</h1>
              <p className="text-slate-50 text-left justify-left font-sc-code mb-10 transition-all text-lg">
                Being a computer science graduate, Adam learned programming technical skills. He started learning
                programming by learning C++ and C language in his first semester of college year. Adam then got more hooked
                and more interested, he got into learning Java and Python. He also has a passion for designs and started
                combining his design skills and programming skills by learning front-end programming through HTML & CSS as well as Javascript while
                using different kinds of frameworks along the way. Additionally, he also gained database skills while learning to manage his project database using SQL. These are the summaries of his 
                programming skills proficiency.
              </p>
            </div>
            <div className="border-8 border-yellow-500 w-[700px] bg-yellow-500 bg-opacity-50 rounded-lg">
              <div className="left-10">
                <h1 className="mt-5 ml-10 text-left font-silk text-3xl font-bold text-slate-50">PROFICIENCY:</h1>
                <h1 className="ml-10 text-left font-silk text-3xl font-bold text-zinc-950">PROGRAMMING LANGUAGE</h1>
                <ul className="mr-10 ml-10 mt-5 list-indside">
                  <li>
                    <div className="grid grid-cols-2 gap-8 h-[100px]">
                      <div className="grid grid-cols-2">
                        <div className="h-[65px] w-[65px]">
                            <Image alt="javaimage" className="ml-6" src ={java}></Image>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="h-[80px] w-[80px]">
                            <Image alt="pythonimage" className="" src ={python}></Image>
                        </div>
    
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grid grid-cols-2 gap-8 h-[100px] mt-5">
                      <div className="h-[65px] w-[65px]">
                          <Image alt="htmlimage" className="ml-6" src ={html}></Image>
                      </div>
                      <div className="h-[65px] w-[65px]">
                          <Image alt="cssimage" className="" src ={css}></Image>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grid grid-cols-2 gap-8 h-[100px] mt-5">
                      <div className="h-[65px] w-[65px]">
                          <Image alt="jsimage" className="ml-6" src ={js}></Image>
                      </div>
                      <div className="h-[70px] w-[70px]">
                          <Image alt="c-image" className="" src ={c}></Image>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grid grid-cols-2 gap-8 h-[100px] mt-5">
                      <div className="h-[70px] w-[70px]">
                          <Image alt="sqlimage" className="ml-6" src ={sql}></Image>
                      </div>
                      <div className="h-[750px] w-[75px]">
                          <Image alt="next-image" className="" src ={next}></Image>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grid grid-cols-2 gap-8 h-[100px] mt-5">
                      <div className="h-[75px] w-[75px]">
                          <Image alt="3jsimage" className="ml-6" src ={three}></Image>
                      </div>
                      <div className="h-[75px] w-[75px]">
                          <Image alt="next-image" className="" src ={next}></Image>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-20 px-10'>
          <div className="mt-10 flex flex-cols flex-wrap justify-center gap-8">
            <div className="">
              <h1 className="mb-5 text-left font-silk text-5xl font-bold text-yellow-500 max-[650px]:text-xl">DESIGN SKILLS</h1>
              <p className="text-slate-50 text-left justify-left font-sc-code mb-10 transition-all">
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
        </div>

        <div className='pt-20 px-10 pb-20'>
          <div className="mt-10 flex flex-cols flex-wrap justify-center gap-8">
            <div className="">
              <h1 className="mb-5 text-left font-silk text-5xl font-bold text-yellow-500 max-[650px]:text-xl">PROGRAMMING SKILLS</h1>
              <p className="text-slate-50 text-left justify-left font-sc-code mb-10 transition-all">
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
        </div>
        
      </section>


       
      </div>
      </div>
    </body>
  )
    
}

export default Home;

