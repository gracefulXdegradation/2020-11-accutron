import { useEffect, useRef, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export const Animations = {
	FadeInUp: {
		from: {
			opacity: 0,
			y: '20px',
		},
		to: {
			opacity: 1,
			y: '0px',
		},
	},
	FadeIn: {
		from: {
			opacity: '0',
		},
		to: {
			opacity: '1',
		},
	}
};

export default function Animate({ animation, children }) {
  const wrapperRef = useRef();
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      gsap.to(wrapperRef.current, {
        ...animation.to,
        duration: 1,
        ease: 'power2',
      });
    } else {
      gsap.set(wrapperRef.current, {
        ...animation.from,
      });
    }
  }, [isVisible, animation]);

  return (
    <VisibilitySensor
      partialVisibility={true}
      minTopValue={100}
      onChange={isVisible => setIsVisible(isVisible)}
    >
      <div ref={wrapperRef}>
        {children}
      </div>
    </VisibilitySensor>
  );
}
