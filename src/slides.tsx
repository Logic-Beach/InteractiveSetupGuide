import React, { ReactNode } from "react";
import { BackButton } from "./BackButton";
import { NextButton } from "./NextButton";
import { SlideButton } from "./SlideButton";

const imgStyle = {
  size: "50%",
}

export type Slide = {
  id: number;
  title?: string;
  back?: number;
  next?: number;
  buttons?: (slide: Slide, ...params: any) => ReactNode;
  content?: ReactNode;
  leftColumn?: ReactNode;
  rightColumn?: ReactNode;
  transition?: {
    back: string,
    next: string
  }
}

export const slideData: Slide[] = [
//SLIDE 0///////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: 0,

    back: NaN,
    transition: {
      back:"",
      next:""
    },
    title: "Grid+ Lattice1 Setup Guide",
    buttons: (slide: Slide, goToSlide: (x: number) => void) => (
      <SlideButton
        onClick={() => {
          goToSlide(8);//slide.id + 1);
        }}
      >
        Start
      </SlideButton>
    ),
    //leftColumn: <p style={{right: "100px"}}>Press Start</p> ,
    content: (
      <> 
      <img src="/images/0 box-intro/splash.png" style={{}} />
      <div id="fadeInText" style={{position:"absolute", right:"350px", bottom:"20px", fontSize:"50px",
                                    animation: "2s ease 0s normal forwards 1 fadein"}}>
          Press Start
       </div>
      </>
    )  
  },

  //SLIDE 1///////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: 1,
    transition: {
      back:"",
      next:""
    },
    title: "Welcome to your new Grid+ Lattice¹",
    content: (
      <>
        <img
          src="/open-box.gif" 
          alt="opening box" 
          style={{width: "735px"}} 
        />
        <div id="fadeInText" style={{position:"absolute", right:"00px", fontSize:"30px",
                                    animation: "5s ease 0s normal forwards 1 fadein"}}>
          For the Sovereign Individual
       </div>
      </>
    )
    
  },

//SLIDE 2///////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: 2,
    title: "Inside, you will find",
    transition: {
      back:"",
      next:""
    },
    content: (
      <>
      <img
        src="images/2 contents/video.gif"
        style={{width: "735px"}}
      />
      <div id="fadeInText" style={{position:"absolute", right:"-100px"}}>
        <ul>
          <li>The Lattice¹ Device</li>
          <li>A SafeCard</li>
          <li>A power adapter</li>
          <li>A LAN cable</li>
        </ul>
      </div>
      </>
    ),

  },

//SLIDE 3///////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: 3,
    title: "Plug your Lattice¹ in!",
    transition: {
        back:"",
        next:""
    },
    content: (
      <>
      <img
        src="images/3 startup/video.gif"
        style={{width: "735px"}}
      />
<div id="fadeInText" style={{position:"absolute", left:"00px"}} >
      <div id="DIV_1">
          <div id="DIV_2" style={{height: "75px"}}>
              <div id="DIV_3">
                  <svg id="svg_4">
                      <path id="path_5">
                      </path>
                      <path id="path_6">
                      </path>
                      <path id="path_7">
                      </path>
                      <path id="path_8">
                      </path>
                  </svg>
              </div>
              <div id="DIV_9">
                <br></br>
Users outside of the US will have to use a plug adapter                                
              </div>
          </div>
      </div>
      <p>
        You will see a startup screen
        and the Lattice will initialize.
        This can take a couple of minutes.
        <br/><br/>
        When it's done, click on Setup.
      </p>
    </div>
      </>
    ),
  },

//SLIDE 4///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 4,
  title: "Connecting to the Internet",
  transition: {
    back:"fadeRightFadeLeft",
    next:"fadeLeftFadeRight"
},
  leftColumn: (
    <div id="fadeInText" style={{position:"absolute", left:"00px"}} >
     <div className='fadeInText'>
                        
                        <p>
                        Now the actual setup of your device begins!
                        <br/><br/>
                        The first step is connecting your Lattice1 to the Internet - you will be prompted to choose <b>Wifi</b> as a primary way of connecting, but you can also connect via <b>Ethernet</b>.
                        <br/><br/>
                        There is no difference in security, the only difference is another cable on your desk.
                        </p>
                    </div>
    </div>
      
    ),
  rightColumn: (
    <img
      src="images/4 internet/wifi.png"
      style={{width:"64%", position:"relative", left:"184px"}}
    />
  ),
  buttons: (slide: Slide, goToSlide: (x: number) => void) => (
    <>
      <BackButton
        onClick={() => {
          goToSlide(slide.id - 1);
        }}
      />

          <SlideButton
        onClick={() => {
          goToSlide(6);
        }}
      >
        Ethernet (Skip)
      </SlideButton>

      <SlideButton
        onClick={() => {
          goToSlide(5);
        }}
      >
        Wifi (Yes)
      </SlideButton>
    </>

  )

},

//SLIDE 5///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 5,
  title: "Connecting to WiFi",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
      <p>
      The device will now show you available Wi-Fi networks. 
      Once this list is loaded, select your Wi-Fi and type in your password.
      <br/><br/>
      The device can take some time to connect and when it's done, 
      you're good to move onto the next step. 
      <br/><br/>
      
      <div id="DIV_1">
          <div id="DIV_2"style={{height: "210px"}}>
              <div id="DIV_3">
                  <svg id="svg_4">
                      <path id="path_5">
                      </path>
                      <path id="path_6">
                      </path>
                      <path id="path_7">
                      </path>
                      <path id="path_8">
                      </path>
                  </svg>
              </div>
              <div id="DIV_9">
                <br/>
                  The Lattice1's WiFi module supports 2.4 GHz only, 
                  along with the most commonly used encryption types. 
                  If you are having any problems with Wi-Fi whatsoever 
                  (e.g. you can't see your network or cannot connect to it) 
                  please check <a href='https://docs.gridplus.io/lattice1-wifi-troubleshooting'>Lattice1 Wi-Fi troubleshooting </a>                           
              </div>
          </div>
      </div>
      </p>
      </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
  buttons: (slide: Slide, goToSlide: (x: number) => void) => (
    <>
      <BackButton
        onClick={() => {
          goToSlide(slide.id - 1);
        }}
      />

      <SlideButton
        onClick={() => {
          goToSlide(7);
        }}
      >
        Next
        <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        preserveAspectRatio="xMidYMid meet"
        style={{ verticalAlign: "middle" }}
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
      </SlideButton>
    </>

  )

},

//SLIDE 6///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 6,
  title: "Connecting via Ethernet",
  leftColumn: (
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>                    
      You can find the RJ45 connector next to the power plug
      connector. 
      <br/><br/>
      Connect it to your router, not your computer!
      <br/><br/>
    </p>

      <div id="DIV_1">
          <div id="DIV_2"style={{height: '115px'}}>
              <div id="DIV_3">
                  <svg id="svg_4">
                      <path id="path_5">
                      </path>
                      <path id="path_6">
                      </path>
                      <path id="path_7">
                      </path>
                      <path id="path_8">
                      </path>
                  </svg>
              </div>
              <div id="DIV_9">
                <br/>
                Advanced users can also  
                 <a href="https://docs.gridplus.io/lattice1/lattice1-guides/how-to-manually-disable-wifi-when-connected-via-ethernet"> turn their Lattice's WiFi radio</a> off completely via SSH if they wish to use their Lattices with Ethernet only.                          
              </div>
          </div>
      </div>

      <p>
          <br/>
      Once your Lattice is connected, you can move on to the
          next step, which is creating your device PIN.
      </p>
    </div>
  ),
  rightColumn: (
    <>
      <img
        src="images/4 internet/wifi.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
  buttons: (slide: Slide, goToSlide: (x: number) => void) => (
    <>
      <BackButton
        onClick={() => {
          goToSlide(4);
        }}
      />
      <NextButton
        onClick={() => {
          goToSlide(7);
        }}
        />
    </>

  )
},

//SLIDE 7///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 7,
  title: "Creating a Device PIN",
  leftColumn: (
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
      <p>
        The next step is to create a system PIN which you will use
        to unlock your Lattice¹. 
        <br/><br/>
        Enter a 4-6 digit PIN and confirm it
        in the next step.
        <br/><br/>

        <div id="DIV_1">
            <div id="DIV_2"style={{height: "55px", borderLeft: "4px solid orange"}}>
                <div id="DIV_3">
                    <svg id="svg_4" style={{fill:"orange"}}>
                        <path id="path_5" style={{fill:"orange"}}>
                        </path>
                        <path id="path_6" style={{fill:"orange"}}>
                        </path>
                        <path id="path_7" style={{fill:"orange"}}>
                        </path>
                        <path id="path_8" style={{fill:"orange"}}>
                        </path>
                    </svg>
                </div>
                <div id="DIV_9">
                  <br/>
                  Make sure to remember this PIN!                          
                </div>
            </div>
        </div>
        <br/>
        The Device PIN can be changed later if you wish.
      </p>
    </div>
  ),
  rightColumn: (
    <>
      <img
        src="images/7 pin/pin.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 8///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 8,
  title: "Setup Lattice¹ Main Wallet",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					We now have to make sure your Lattice has a wallet. Just
					tap on <b>Let's go</b> and you will see two options:
					<br/><br/>
					• Generate 
					<br/>
					• Restore from Seed Phrase
					<br/><br/>
					Let's explore both of these choices. Don't select one just
					yet, please read carefully!
				</p>
      </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/8 setupWallet/setupWallet.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 9///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 9,
  title: "Setup Lattice¹ Main Wallet",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					From a security standpoint, there's a very simple general rule that everyone should follow
          <br/><br/>
          <div id="DIV_1">
            <div id="DIV_2"style={{height: "80px", borderLeft: "4px solid orange"}}>
                <div id="DIV_3">
                    <svg id="svg_4" style={{fill:"orange"}}>
                        <path id="path_5" style={{fill:"orange"}}>
                        </path>
                        <path id="path_6" style={{fill:"orange"}}>
                        </path>
                        <path id="path_7" style={{fill:"orange"}}>
                        </path>
                        <path id="path_8" style={{fill:"orange"}}>
                        </path>
                    </svg>
                </div>
                <div id="DIV_9">
                  <br/>
                  Your wallet is as safe as the least safe app it's ever been on.                        
                </div>
            </div>
        </div>
        <br/>
					If you're upgrading to the Lattice1 from <b>another hardware wallet</b>, you can <b>safely import</b>
					your cold wallet via the seed phrase, as long as the wallet was <b>originally created </b>on
					hardware
					<br/><br/>
					If you currently use a hot wallet such as MetaMask or Exodus and the Lattice1 is your
					first hardware wallet, <b>the safest approach is to generate a new wallet on the Lattice1
					and then transfer all of your funds and assets over to it.</b>
					<br/><br/>
					However!
					<br/><br/>
					With all written above, the chance that your former hot wallet will be hacked if you import
					it to the Lattice1 is very slim. Even though creating a new wallet on hardware eliminates
					the possibility of this entirely, if you were not hacked until now, you will most likely not be
					hacked in the future.
					<br/><br/>
					<b>The final decision is yours!</b>
					<br/><br/>
					But we understand that every user is in a unique situation. If you're not sure what to do,
					feel free to reach out to us and we can help you with making the right decision.
					<br/><br/>
					<b>So, which will it be?</b>

				</p>
      </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/8 setupWallet/setupWallet.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 10///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 10,
  title: "Creating a PassPhrase (optional)",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					A passphrase is an optional extra word you can add to your seed phrase (this will make the seed phrase 25 words long instead of the standard 24 words) to add an extra layer of security. Even if someone had your seed phrase, but not your passphrase, they could not access your wallet.
					<br/><br/>
					Some people choose this option for additional security, but if you're not an advanced crypto user, you probably don't need one.
					<br/><br/>
          <div id="DIV_1">
            <div id="DIV_2"style={{height: "170px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                Note that adding a pass-phrase (25th word) will change the addresses that are derived from the seed phrase as it is actually changing the seed phrase by adding a word and not a password to log into the wallet.
              </div>
            </div>
          </div>
				
					<br/><br/>

					<b> Do you want to add a passphrase?</b>
				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 11///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 11,
  title: "Adding a passphrase (Extra seedword)",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					Enter your extra seed word. The passphrase can be
					pretty much anything, just like a password.
					<br/><br/>
          
          <div id="DIV_1">
            <div id="DIV_2"style={{height: "120px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                Make sure to write this passphrase down! If you
					lose it, you can potentially lose access to your
					wallet!
              </div>
            </div>
          </div>
					
				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 12///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 12,
  title: "Mnemonic Phrase",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					You will now see the 24 words of your seed .
					<b>Make sure to write the phrase down!</b> 
					<br/><br/>
          <div id="DIV_1">
            <div id="DIV_2"style={{height: "75px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                This is the only time you will see your seed phrase!
              </div>
            </div>
          </div>
					
					<br/><br/>
					Add your 25th word (the passphrase you created in
					the previous step) at the end of the seed phrase
					You can then tap on Next.				
				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 13///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 13,
  title: "Tamper Mesh Notice",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					The tamper mesh protects the secure part of your
					wallet from outside intruders.
					<br/><br/>
					If the mesh is triggered, everything is wiped -
					including your wallet!
					<br/><br/>

          <div id="DIV_1">
            <div id="DIV_2"style={{height: "95px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                Don't try to open your device under any
					circumstances, if you have an issue, reach our to
					our support!
              </div>
            </div>
          </div>

					<br/><br/>
					Tap on [I Accept] to continue.	
				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 14///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 14,
  title: "Optional SafeCard Backup",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					You can now backup your newly created wallet on a
					SafeCard. When the SafeCard is inserted and
					unlocked, the wallet on it takes the Lattice device
					over as the main active wallet.
					<br/><br/>
					If you only have one wallet, we strongly
					recommend you create a SafeCard backup.
					<br/><br/>
					Do you want to create a SafeCard backup?
				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 15///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 15,
  title: "Creating a SafeCard Backup",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					Ok, now insert your new unused SafeCard. You will
					be prompted to create a six-digit card PIN - make
					sure to remember it! 
					<br/><br/>

          <div id="DIV_1">
            <div id="DIV_2"style={{height: "170px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                If you forget the PIN the card
					cannot be accessed!
					3 wrong PIN input attempts will destroy the card for security.
					<br/><br/>
					However, as long as you know the PIN it can be changed later.
              </div>
            </div>
          </div>

					<br/><b/>
					Once your PIN is created, tap on Yes to proceed
					with the wallet backup.
					<br/><b/>
					And that's it!
				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 16///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 16,
  title: "Main Setup Complete!",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					Thanks for choosing GridPLus Lattice1 
					to keep your crypto safe!
					<br/><br/>
					Tap continue to go to the MetaMask setup guide.
				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 17///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 17,
  title: "{No Passphrase} Mnemonic Phrase",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					You will now see the 24 words of your seed .
					<b>Make sure to write the phrase down!</b> 
					<br/><br/>
          <div id="DIV_1">
            <div id="DIV_2"style={{height: "75px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                This is the only time you will see your seed phrase!
              </div>
            </div>
          </div>

					<br/><br/>
					Once you have noted your Seed Phrase, you may	continue.
				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 18///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 18,
  title: "Restore Wallet from Seed Phrase",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					Choose the length of your seed phrase and then input the words one by one.
					<br/><br/>
          <div id="DIV_1">
            <div id="DIV_2"style={{height: "75px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                You should ideally do this alone so nobody can see your seed phrase.
              </div>
            </div>
          </div>
					
				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 19///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 19,
  title: "Is there a passphrase? (optional)",
  leftColumn: (
    <>
      <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
        <p>
          A passphrase is an optional extra word you can add to your seed phrase (this will make the seed phrase 25 words long instead of the standard 24 words) to add an extra layer of security. Even if someone had your seed phrase, but not your passphrase, they could not access your wallet.
          <br/><br/>
          <div id="DIV_1">
            <div id="DIV_2"style={{height: "150px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                Important! Only input a passphrase if the wallet you are importing <b>was created with one!</b>
          If you have 13/19/25 words written down instead of 12/18/24, the passphrase is the last word.
              </div>
            </div>
          </div>
          
          <br/><br/>

          <b> Do you want to enter a passphrase?</b>
        </p>
      </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 20///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 20,
  title: "{Restored} Mnemonic Phrase",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					You will now see the 24 words of your seed phrase that you entered.
					<br/><br/>
          <div id="DIV_1">
            <div id="DIV_2"style={{height: "135px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                Double check that the seed phrase is correct!<br/>
					An incorrect seed phrase will either fail to import or result
					in unknown addresses.
              </div>
            </div>
          </div>
					
					<br/><br/>
					Are you sure the words are correct? If Yes, you can then tap on Next.
          <br/><br/>

          <div id="DIV_1">
            <div id="DIV_2"style={{height: "135px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                If the words are NOT correct, you will have to reset the wallet and try again from the beginning.
					Finish the setup guide and then go to "Manage Wallets → Reset Lattice Wallet".
              </div>
            </div>
          </div>
				
				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 21///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 21,
  title: " Input your passphrase (Extra seedword)",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					Enter your extra seed word and hit ENT.
					<br/><br/>
          <div id="DIV_1">
            <div id="DIV_2"style={{height: "115px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                Make sure your passphrase is entered exactly as it was when create, 
					This is like a password and is case-sensitive.
              </div>
            </div>
          </div>

				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 22///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 23,
  title: "Mnemonic Phrase {with passphrase}",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    <p>
					You will now see 12/18/24 words of your seed phrase that you entered.
					<b>Make sure to write the phrase down!</b> 
					<br/><br/>
          <div id="DIV_1">
            <div id="DIV_2"style={{height: "135px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                Double check that the seed phrase is correct!<br/>
					An incorrect seed phrase will either fail to import or result
					in unknown addresses.
              </div>
            </div>
          </div>

					<br/><br/>

          <div id="DIV_1">
            <div id="DIV_2"style={{height: "135px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                Please note that the passphrase will not be shown here!
					You can check that you have the right addresses on the device if you go to 
					Lattice1 Addresses → Ethereum
              </div>
            </div>
          </div>

					<br/><br/>
					Are you sure the words are correct? If Yes, you can then tap on Next.
					<br/><br/>
          <div id="DIV_1">
            <div id="DIV_2"style={{height: "135px"}}>
              <div id="DIV_3">
                <svg id="svg_4">
                  <path id="path_5">
                  </path>
                  <path id="path_6">
                  </path>
                  <path id="path_7">
                  </path>
                  <path id="path_8">
                  </path>
                </svg>
              </div>
              <div id="DIV_9">
                <br/>
                If the words are NOT correct, you will have to reset the wallet and try again from the beginning.
					Finish the setup guide and then go to "Manage Wallets → Reset Lattice Wallet"./
              </div>
            </div>
          </div>
	
				</p>
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},

//SLIDE 24///////////////////////////////////////////////////////////////////////////////////////////////
{
  id: 24,
  title: "Plug your Lattice¹ in!",
  leftColumn: (
    <>
    <div id="fadeInText" style={{position:"absolute", left:"00px"}}>
    
    </div>
    </>
  ),
  rightColumn: (
    <>
      <img
        src="images/5 networks/networks.png"
        style={{width:"64%", position:"relative", left:"184px"}}
      />
    </>
  ),
},
];
