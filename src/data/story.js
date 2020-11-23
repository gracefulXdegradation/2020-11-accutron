import React from 'react';
import { Em } from '../components/UIKit';

const imgPath = 'https://static.highsnobiety.com/interactive-stories/2020-11-accutron/p/accutron-watch-history/static/media/'
const resolveImage = img => `${imgPath}${img}`

const story = {
  video: {
    id: 479786374
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
          id: 0,
          title: 'origins',
          copy: [
            {
              text: 'Long before American watchmaker Bulova introduced its legendary Accutron watch in October 1960,'
            },
            {
              text: 'the company was founded in 1875 by Joseph Bulova in New York City.'
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
          id: 1,
          title: 'technology',
          copy: [
            {
              text: 'Before the quartz movement swept the horological world by storm during the 1970s and early-80s, Bulova began developing its electronic Accutron watch in 1952.'
            },
            {
              text: 'which guaranteed accuracy to within one minute per month, or two seconds per day. This was unheard of at that time.'
            },
            {
              text: 'that level of accuracy was far better than any mechanical watch could reproduce.'
            }
          ],
          images: [
            {
              src: resolveImage('ch1-s2-l1.3ce6a006.png'),
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
          id: 2,
          title: 'technology',
          copy: [
            {
              text: 'The tuning fork'
            },
            {
              text: 'A revolutionary invention for timekeeper precision.'
            },
            {
              text: 'Invented by Swiss engineer Max Hetzel, the secret to Accutron’s precision lies in the watch’s tuning fork'
            },
            {
              text: 'a small fork-shaped piece typically used as an acoustic resonator for musical instruments. Instead of the traditional balance wheel and spring, this new transistor movement divided each second into 360 equal parts and achieved unprecedented precision.'
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
          id: 3,
          title: 'legacy',
          copy: [
            {
              text: 'Bulova’s tuning fork technology was so revolutionary that'
            },
            {
              text: 'NASA opted to use Accutron technology for its manned space missions'
            },
            {
              text: 'outfitting cockpit flight instruments during the Gemini and Apollo programs.'
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
          id: 4,
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
          id: 5,
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
              text: 'the  world’s first timepiece powered by electrostatic energy. '
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
            src: resolveImage('ch1-ending.ceaaacbd.png'),
            alt: '2ES6A001 Soldier'
          }
        ]
      }
    },
  ]
}

export default story;
