import './profile.css'
import './forms.css'
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from './firebase'

import React from 'react'

function About() {
    return (
        <div classname = "background">

            <div classname='login_navbar'>
                <button class="button-1" >
                    <Link class = 'font-edit' to='/'>Home</Link>
                </button>
                <button class="button-1" >
                    <Link class = 'font-edit' to='/Statistics'>Statistics</Link>
                </button>
                <button class="button-1" >
                    <Link class = 'font-edit' to='/Patients'>Patients List</Link>
                </button>
                <button class="button-1" >
                    <Link class = 'font-edit' to='/About'>About</Link>
                </button>
                <button class="button-1" >
                    <Link class = 'font-edit' to='/register'>Add new user</Link>
                </button>
                <button class="button-1" ><span onClick={() => signOut(auth)}>Sign Out</span></button>
            </div>
            <div className='center'>
                <div className='profile'>
                    <h1> About Malaria</h1>
                    <p>
                        A disease caused by a plasmodium parasite, transmitted by the bite of infected mosquitoes.
                        The severity of malaria varies based on the species of plasmodium.
                        Symptoms are chills, fever and sweating, usually occurring a few weeks after being bitten.
                        People travelling to areas where malaria is common typically take protective drugs before, during and after their trip. Treatment includes antimalarial drugs.
                        Overview



Prevention
If you live in or are traveling to an area where malaria is common, take steps to avoid mosquito bites. Mosquitoes are most active between dusk and dawn. To protect yourself from mosquito bites, you should:

Cover your skin. Wear pants and long-sleeved shirts. Tuck in your shirt, and tuck pant legs into socks.
Apply insect repellent to skin. Use an insect repellent registered with the Environmental Protection Agency on any exposed skin. These include repellents that contain DEET, picaridin, IR3535, oil of lemon eucalyptus (OLE), para-menthane-3,8-diol (PMD) or 2-undecanone. Do not use a spray directly on your face. Do not use products with OLE or PMD on children under age 3.
Apply repellent to clothing. Sprays containing permethrin are safe to apply to clothing.
Sleep under a net. Bed nets, particularly those treated with insecticides, such as permethrin, help prevent mosquito bites while you are sleeping.
Preventive medicine
If you'll be traveling to a location where malaria is common, talk to your doctor a few months ahead of time about whether you should take drugs before, during and after your trip to help protect you from malaria parasites.

In general, the drugs taken to prevent malaria are the same drugs used to treat the disease. What drug you take depends on where and how long you are traveling and your own health.

Vaccine
The World Health Organization has recommended a malaria vaccine for use in children who live in countries with high numbers of malaria cases.

Researchers are continuing to develop and study malaria vaccines to prevent infection.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About