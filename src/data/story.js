import React from 'react';
import { Em } from '../components/UIKit';
import {resolveImage} from './assets';

// chapter 1 slides
import Origins1 from '../components/Chapter1/slides/1.Origins';
import Technology2 from '../components/Chapter1/slides/2.Technology';
import Technology3 from '../components/Chapter1/slides/3.Technology';
import Legacy4 from '../components/Chapter1/slides/4.Legacy';
import Legacy5 from '../components/Chapter1/slides/5.Legacy';
import Legacy6 from '../components/Chapter1/slides/6.Legacy';

// chapter 2 slides
import TheSpaceview1 from '../components/Chapter2/slides/1.TheSpaceview';
import IconicDesign2 from '../components/Chapter2/slides/2.IconicDesign';
import IconicDesign3 from '../components/Chapter2/slides/3.IconicDesign';
import Spaceview20204_1 from '../components/Chapter2/slides/4.1.Spaceview2020.js';
import Spaceview20204_2 from '../components/Chapter2/slides/4.Spaceview2020.js';
import DNA5 from '../components/Chapter2/slides/5.DNA';
import Prices6 from '../components/Chapter2/slides/6.Prices';
import Legacy7 from '../components/Chapter2/slides/7.Legacy';
import Legacy8 from '../components/Chapter2/slides/8.Legacy';
import Legacy9 from '../components/Chapter2/slides/9.Legacy';
import Legacy10 from '../components/Chapter2/slides/10.Legacy';
import Legacy11 from '../components/Chapter2/slides/11.Legacy';

import Ch2OpeningBgImage from '../assets/2ES8A002_Detail_1.png';
import Ch2EndingBgImage from '../assets/2ES8A003_Detail_1.png';
import Ch22ES7A001_Angle from '../assets/2ES7A001_Angle.png';
import Ch22ES7A001_gold_Angle from '../assets/2ES7A001_gold_Angle.png';

import Ch22ES8A004_Angle_black from '../assets/2ES8A004_Angle_black.png';
import Ch22ES8A004_Angle_green from '../assets/2ES8A004_Angle_green.png';
import Ch22ES8A004_Angle from '../assets/2ES8A004_Angle.png';

import Ch2Prices1 from '../assets/Prices_1.jpg';
import Ch2Prices2 from '../assets/Prices_2.jpg';

const story = {
  video: {
    id: 483504451
  },

  chapters: [
    {
      opening: {
        copy: [
          {
            text: <><Em>Accu</Em>racy through elec<Em>tron</Em>ics</>
          },
          {
            text: <>
              That’s the simple meaning behind Accutron’s name,<br />
              but the technology that powered the brand’s iconic timepieces<br />
              are anything but.
            </>
          }
        ]
      },
      slides: [
        {
          component: Origins1,
          title: 'origins',
          copy: [
            {
              text: 'Long before American watchmaker Bulova introduced its legendary Accutron watch in October 1960, the company was founded in 1875 by Joseph Bulova in New York City.'
            },
          ],
          images: [
            {
              src: resolveImage('ch1-s1-l.12b9091e.png'),
              alt: 'Accutron Mechanism'
            },
            {
              src: resolveImage('ch1-s1-r1.972cc0c0.png'),
              alt: 'Accutron Mechanism'
            },
            {
              src: resolveImage('ch1-s1-r2.9ab344b3.png'),
              alt: 'Accutron Mechanism'
            }
          ]
        },

        {
          component: Technology2,
          title: 'technology',
          copy: [
            {
              text: 'Before the quartz movement swept the horological world by storm during the 1970s and early-80s, Bulova began developing its electronic Accutron watch in 1952.'
            },
            {
              text: 'Which guaranteed accuracy to within one minute per month, or two seconds per day. This was unheard of at that time.'
            },
            {
              text: 'That level of accuracy was far better than any mechanical watch could reproduce.'
            }
          ],
          images: [
            {
              src: resolveImage('ch1-s2-l1.png'),
              alt: 'Accutron Mechanism'
            },
            {
              src: resolveImage('ch1-s2-l2.46703276.png'),
              alt: 'Accutron Mechanism'
            },
            {
              src: resolveImage('ch1-s2-l3.9ad1fa95.png'),
              alt: 'Accutron Mechanism'
            },
            {
              src: resolveImage('ch1-s2-r1.178d93cd.png'),
              alt: 'Accutron Mechanism'
            },
            {
              src: resolveImage('ch1-s2-r2a.8121f5cf.png'),
              alt: 'Accutron Mechanism'
            },
            {
              src: resolveImage('ch1-s2-r2b.58e44d73.png'),
              alt: 'Accutron Mechanism'
            },
            {
              src: resolveImage('ch1-s2-r3.a55d6c56.png'),
              alt: 'Accutron Mechanism'
            },
          ]
        },

        {
          component: Technology3,
          title: 'technology',
          copy: [
            {
              text: 'The tuning fork'
            },
            {
              text: 'A revolutionary invention for timekeeper precision.'
            },
            {
              text: 'Invented by Swiss engineer Max Hetzel, the secret to Accutron’s precision lies in the watch’s tuning fork.'
            },
            {
              text: 'A small fork-shaped piece typically used as an acoustic resonator for musical instruments. Instead of the traditional balance wheel and spring, this new transistor movement divided each second into 360 equal parts and achieved unprecedented precision.'
            },
          ],
          images: [
            {
              src: resolveImage('ch1-s3-tuner.e8f16586.png'),
              alt: 'Tuning fork'
            }
          ]
        },

        {
          component: Legacy4,
          title: 'legacy',
          copy: [
            {
              text: 'Bulova’s tuning fork technology was so revolutionary that NASA opted to use Accutron technology for its manned space missions outfitting cockpit flight instruments during the Gemini and Apollo programs.'
            },
          ],
          images: [
            {
              src: resolveImage('ch1-legacy-1.04be926e.png'),
              alt: 'Accutron watches'
            }
          ]
        },

        {
          component: Legacy5,
          title: 'legacy',
          copy: [
            {
              text: 'When lives and billions of dollars worth of technology are at stake, that says a lot about who you can trust.'
            },
            {
              text: 'While Accutron’s tech saw its fair share of real-world applications, its legacy wasn’t just limited to governmental uses.'
            },
          ],
          images: [
            {
              src: resolveImage('ch1-legacy-2.e585a98c.png'),
              alt: 'Bulova'
            },
            {
              src: resolveImage('ch1-legacy-3.16d0568c.png'),
              alt: 'NASA'
            },
          ]
        },

        {
          component: Legacy6,
          title: 'legacy',
          copy: [
            {
              text: 'In 2014, Emmy-award winning advertising drama Mad Men opened its final season with an entire episode dedicated to pitching the watch.'
            },
            {
              text: 'Their tagline was surprisingly simple, yet effective:'
            },
            {
              text: <>
                “it’s not a timepiece,<br/>
                it’s a conversation piece.”
              </>
            },
            {
              text: 'And the conversation has only just begun.'
            },
            {
              text: 'As Accutron celebrates its 60th anniversary this year, they’re relaunching the watch with yet another timekeeping innovation.'
            },
            {
              text: 'The world’s first timepiece powered by electrostatic energy.'
            },
          ],
          images: [
            {
              src: resolveImage('1961_Accutron-SpaceviewAlpha.05e7533c.png'),
              alt: '1961 Accutron Spaceview Alpha'
            },
          ]
        },
      ],
      ending: {
        copy: [
          {
            text: 'Learn more about this new industry standard and Accutron’s updated range of watches'
          },
          {
            text: 'In the following chapter'
          },
        ],
        images: [
          {
            src: resolveImage('ch1-ending.5218a31a.png'),
            alt: '2ES6A001 Soldier'
          }
        ]
      }
    },

    {
      opening: {
        copy: [
          {
            text: 'A Legacy Reborn'
          },
        ],
        images: [{
          // src: resolveImage('2ES8A002_Detail_1.png')
          src: Ch2OpeningBgImage
        }]
      },
      slides: [
        {
          component: TheSpaceview1,
          title: 'the spaceview',
          copy: [
            {
            text: <>The original Accutron Spaceview&nbsp;– arguably its most popular and visually peculiar watch&nbsp;– was never meant for mass production.</>
            },
            {
              text: 'The Spaceview of yesteryear featured a deconstructed outer case design that exposed the inner workings of the watch and was only provided to retailers as display units to help explain how the innovative technology worked.'
            },
            {
              text: 'But potential customers had other ideas.'
            },
            {
              text: 'Perhaps it was the Spaceview’s radical design, but eagle-eyed passersby started asking about the funky new watch in jewelry shop windows assuming it was a standard model.'
            },
            {
              text: 'Not wanting to pass up a sale, dealers were happy to offer up their display units.'
            },
          ],
          images: [
            {
              src: resolveImage('1961_Accutron-SpaceviewAlpha_left.png'),
            },
            {
              src: resolveImage('1961_Accutron-SpaceviewAlpha_right.png'),
            },
            {
              src: resolveImage('2ES6A001_Soldier_right.png'),
            },
          ]
        },

        {
          component: IconicDesign2,
          title: 'iconic design',
          copy: [
            {
              text: 'Unwittingly setting the stage for the Spaceview to become an official Accutron model and Bulova’s most sought after watch at the time.'
            },
            {
              text: 'Now, 60 years later, the Spaceview is reborn and powered by a whole new method of timekeeping that again places it at the forefront of innovation.'
            },
          ]
        },
        
        {
          component: IconicDesign3,
          title: 'iconic design',
          copy: [
            {
              text: 'The Spaceview 2020 has been visually and internally redesigned with the world’s first electrostatic energy movement in a timepiece, promising accuracy to within five seconds per month.'
            },
            {
              text: 'That electrostatic energy is created by twin turbines that rotate when you move your wrist.'
            },
            {
              text: 'While more precise timekeeping is always welcome,'
            },
            {
              text: 'it’s Spaceview’s new looks that’ll want both nostalgic collectors and first-time buyers knocking.'
            },
          ],
          images: [
            {
              src: resolveImage('2ES6A001_Soldier_left.png'),
            },
            {
              src: resolveImage('2ES6A001_Soldier_right.png'),
            },
          ]
        },

        {
          component: Spaceview20204_1,
          title: 'the spaceview',
          copy: [
            {
              text: 'The watch’s supple grained black leather bands are a gorgeous complement to the smoke grey open-work dial and signature Accutron green accents.'
            },
            {
              text: 'The best part is that it comes in two designs to suit different tastes.'
            },
          ],
          images: [
            {
              src: Ch22ES7A001_Angle,
              alt: '2ES7A001 Angle'
            },
            {
              src: Ch22ES7A001_gold_Angle,
              alt: '2ES7A001 Gold Angle'
            },
          ]
        },

        {
          component: Spaceview20204_2,
          title: '2020',
          copy: [
            {
              text: 'the Spaceview 2020'
            },
            {
              text: 'Is a modern reinterpretation of the original.'
            },
          ],
          images: [
            {
              src: resolveImage('2ES6A001_Soldier.png'),
              alt: 'Spaceview 2020'
            }
          ]
        },

        {
          component: DNA5,
          title: 'dna',
          copy: [
            {
              text: 'the Accutron DNA'
            },
            {
              text: 'A sportier update of the Spaceview featuring sleeker lines and more modern design accents.'
            },
          ],
          images: [
            {
              src: resolveImage('2ES8A004_Soldier.png'),
              alt: 'DNA 2ES8A004 Soldier blue'
            },
            {
              src: resolveImage('2ES8A004_Soldier_black.png'),
              alt: 'DNA 2ES8A004 Soldier black'
            },
            {
              src: resolveImage('2ES8A004_Soldier_green.png'),
              alt: 'DNA 2ES8A004 Soldier green'
            },
            {
              src: Ch22ES8A004_Angle,
              alt: 'DNA 2ES8A004 Angle blue'
            },
            {
              src: Ch22ES8A004_Angle_black,
              alt: 'DNA 2ES8A004 Angle black'
            },
            {
              src: Ch22ES8A004_Angle_green,
              alt: 'DNA 2ES8A004 Angle green'
            },
          ]
        },

        {
          component: Prices6,
          title: 'the spaceview',
          copy: [
            {
              text: 'The Spaceview 2020'
            },
            {
              text: 'retails at $3,450.'
            },
            {
              text: 'The Accutron DNA'
            },
            {
              text: 'costs $3,300.'
            },
          ],
          images: [
            {
              src: Ch2Prices1,
              alt: 'Spaceview 2020'
            },
            {
              src: Ch2Prices2,
              alt: 'The Accutron DNA'
            },
          ]
        },

        {
          component: Legacy7,
          title: 'legacy',
          copy: [
            {
              text: 'If a more retro vibe is what you’re after'
            },
            {
              text: 'Accutron’s Legacy collection offers twelve of its most memorable styles from the ‘60s and ‘70s that are each timeless in their own right.'
            },
          ],
          images: []
        },

        {
          component: Legacy8,
          title: 'legacy',
          copy: [
            {
              text: 'They’ve been reimagined for modern times complete with Swiss movements, destined to become coveted timepieces due to their limited nature…'
            },
          ],
          images: []
        },

        {
          component: Legacy9,
          title: 'legacy',
          images: [
            {
              src: resolveImage('Collection-Watches-1.png')
            },
            {
              src: resolveImage('Collection-Watches-2.png')
            },
            {
              src: resolveImage('Collection-Watches-3.png')
            },
            {
              src: resolveImage('Collection-Watches-7.png')
            },
          ]
        },

        {
          component: Legacy10,
          title: 'legacy',
          images: [
            {
              src: resolveImage('Collection-Watches-4.png')
            },
            {
              src: resolveImage('Collection-Watches-5.png')
            },
            {
              src: resolveImage('Collection-Watches-6.png')
            },
          ],
        },

        {
          component: Legacy11,
          title: 'legacy',
          copy: [
            {
              text: 'Each style only has 600 individually numbered pieces.'
            },
            {
              text: 'The Legacy collection ranges between $1,290-$1,550.'
            },
          ],
          images: [
            {
              src: resolveImage('Collection-Watches-1.png')
            },
            {
              src: resolveImage('Collection-Watches-2.png')
            },
            {
              src: resolveImage('Collection-Watches-3.png')
            },
            {
              src: resolveImage('Collection-Watches-4.png')
            },
            {
              src: resolveImage('Collection-Watches-5.png')
            },
            {
              src: resolveImage('Collection-Watches-6.png')
            },
            {
              src: resolveImage('Collection-Watches-7.png')
            },
          ]
        },
      ],
      ending: {
        shopLink: {
          url: 'https://www.accutronwatch.com/',
          caption: 'Shop Now'
        },
        copy: [
          {
            text: 'Explore Accutron’s entire assortment at accutronwatch.com and start searching for'
          },
          {
            text: 'A conversation piece that you can call your own'
          }
        ],
        images: [{
          // src: resolveImage('2ES8A003_Detail_1.png')
          src: Ch2EndingBgImage
        }]
      },
    }
  ]
}

export const images = (() => {
  const images =  story.chapters.reduce((acc, ch) => {
    return [...acc,
      ...(ch.opening.images || []),
      ...(ch.ending.images || []),
      ...(ch.slides.reduce((acc, s) => [...acc, ...(s.images || [])], []))
    ]
  }, [])

  return Array.from(new Set(images.map(({ src }) => src)))
})()

export default story;
