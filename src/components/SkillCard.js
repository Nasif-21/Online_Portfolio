import Cpp from "../assest/cpp.png"
import Jav from "../assest/jav.png"
import cs from "../assest/csharp.png"
import py from "../assest/Python-logo-notext.svg.png"
import ht from "../assest/htm.jpg"
import css from "../assest/css3.png"
import js from "../assest/js.png"
import re from "../assest/reac.png"
import boot from "../assest/Bootstrap_logo.svg.png"
import can from "../assest/canvap.jpg"
import fg from  "../assest/fig.png"
import msql from "../assest/mysql-logo-pngrepo-com.png"
import mongo from "../assest/mon.png"
import gitt from "../assest/gitty.jpeg"
import Back from "../assest/bbground.jpg"

const people = [
    {
      name: 'C++',
    //   role: 'Co-Founder / CEO',
      imagesrc:
        Cpp,
      Link:"https://learn.microsoft.com/en-us/cpp/?view=msvc-170",
    },
    {
        name:'Java',
        imagesrc:Jav,
        Link:"https://docs.oracle.com/javase/tutorial/" ,
        

    },
    {
        name:'C#',
        imagesrc:cs , 
        Link:"https://learn.microsoft.com/en-us/dotnet/csharp/" ,
    },
    {
        name:'Python',
        imagesrc:py , 
        Link:"https://docs.python.org/3/" ,
    },
    {
        name:'HTML',
        imagesrc:ht , 
        Link:"https://html.com/document/" ,
    },
    {
        name:'JavaScript',
        imagesrc:js , 
        Link:"https://jsdoc.app/" ,
    },
    {
        name:'CSS',
        imagesrc: css,
        Link:"https://www.w3schools.com/css/" , 
    },
    {
        name:'ReactJS',
        imagesrc:re ,
        Link:"https://react.dev/" , 
    },
    {
        name:'Bootstrap-5',
        imagesrc:boot ,
        Link:"https://getbootstrap.com/docs/5.3/getting-started/introduction/" , 
    },
    {
        name:'MySQL',
        imagesrc:msql ,
        Link:"https://dev.mysql.com/doc/" , 
    },
    {
        name:'MongoDB',
        imagesrc:mongo , 
        Link:"https://www.mongodb.com/docs/" ,
    },
    {
        name:'GitHub',
        imagesrc:gitt ,
        Link:"https://docs.github.com/en" , 
    },
    {
        name:'Figma',
        imagesrc:fg, 
        Link:"https://help.figma.com/hc/en-us/categories/360002042553-Figma-design" ,
    },
    {
        name:'Canva',
        imagesrc:can, 
        Link:"https://www.canva.com/docs/" ,
    },



    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-black py-24 sm:py-32 relative" style={{backgroundColor:'#060303' }}>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">My skills</h2>
            <p className="mt-6 text-lg leading-8 text-white">
            Proficient in a diverse array of fields, I take pride in my expertise and craftsmanship. Are you interested in viewing my projects? Allow me to showcase my <a href="/project"style={{ color: 'blue', textDecoration: 'underline' }}>portfolio</a> Explore a curated collection of my endeavors, each meticulously crafted to exceed expectations. 
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-14 w-14 rounded-full object-cover" src={person.imagesrc} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    <p className="text-sm font-semibold leading-6 text-indigo-600"><a href={person.Link} style={{ color: 'blue', textDecoration: 'underline' }}>See documentation/tutorials</a></p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  