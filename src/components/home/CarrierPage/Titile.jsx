import React from 'react';
import "./Title.css"
import IT from "../../../assets/Home/ALL.jpg";

const Title = () => {
   return (
       <section className="pre">
           <h1>HOW TO PREVENT FROM DENGUE</h1>
           <div className="container">
               <div className="box">
                   <div className="imgBox">
                       <img src={IT}/>
                   </div>
                   <div className="details">
                       <div className="content">
                           <h2>Dengue Vaccine</h2>
                           <p>A vaccine to prevent dengue is licensed and available in some countries for people aged 9
                               to 45 years. </p>
                       </div>

                   </div>
               </div>
               <div className="box">
                   <div className="imgBox">
                       <img src={IT}/>
                   </div>
                   <div className="details">
                       <div className="content">
                           <h2>Use effective repellent</h2>
                           <p>Use household insecticide aerosols or mosquito coils.</p>
                       </div>

                   </div>
               </div>
               <div className="box">
                   <div className="imgBox">
                       <img src={IT}/>
                   </div>
                   <div className="details">
                       <div className="content">
                           <h2>Mosquito traps</h2>
                           <p>
                               The racket offers an effective alternative to other mosquito repelling/killing solutions;
                               it does not use harmful chemicals or require expensive refills, does not produce smoke or
                               fumes, and ensures that the insect is dead.</p>
                       </div>

                   </div>
               </div>
               <div className="box">
                   <div className="imgBox">
                       <img src={IT}/>
                   </div>
                   <div className="details">
                       <div className="content">
                           <h2>Keep mosquitoes outside</h2>
                           <p>Use screens on windows and doors to prevent mosquitoes entering.</p>
                       </div>

                   </div>
               </div>
               <div className="box">
                   <div className="imgBox">
                       <img src={IT}/>
                   </div>
                   <div className="details">
                       <div className="content">
                           <h2>Cover or empty water containers </h2>
                           <p>Mosquitoes breed on still water</p>
                       </div>

                   </div>
               </div>
               <div className="box">
                   <div className="imgBox">
                       <img src={IT}/>
                   </div>
                   <div className="details">
                       <div className="content">
                           <h2>Dengue fogging</h2>
                           <p>Fogging is a popular way to control mosquitoes because it is visible and creates the
                               impression that the authorities are doing something to combat mosquito-borne
                               diseases.</p>
                       </div>

                   </div>
               </div>
               <div className="box">
                   <div className="imgBox">
                       <img src={IT}/>
                   </div>
                   <div className="details">
                       <div className="content">
                           <h2>Use mosquito net</h2>
                           <p>Sleep under an insecticide- treated net, even during the day</p>
                       </div>

                   </div>
               </div>
               <div className="box">
                   <div className="imgBox">
                       <img src={IT}/>
                   </div>
                   <div className="details">
                       <div className="content">
                           <h2>Stagnant water</h2><br/>
                           <p>The Aedes mosquito breeds in clean, stagnant water. Checking for and removing stagnant
                               water can help reduce the risk.</p>
                       </div>

                   </div>
               </div>


           </div>

       </section>
   )
}

export default  Title

