import React, {useState} from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {scrolReveal} from '../animation';

const FaqSection = () => {
	const [element, controlls] = useScroll();
	const [faqToggle, setFaqToggle] = useState(false);
	return (
		<Faq
			variants={scrolReveal}
			ref={element}
			animate={controlls}
			initial="hidden"
		>
			<h2>
				Any Questions <span>FAQ</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title="How Do I Start?">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit iure magni ab?
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
			<AnimateSharedLayout>
				<Toggle title="What products do you offer">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit iure magni ab?
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
			<AnimateSharedLayout>
				<Toggle title="Daily Schedule">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit iure magni ab?
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
			<AnimateSharedLayout>
				<Toggle title="Different Payment Methods">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit iure magni ab?
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</Faq>
	);
};

const Faq = styled(About)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.questions {
		padding: 1.7rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 1.2em 0rem;
	}
	p {
		padding: 1rem 0rem;
	}
`;

export default FaqSection;
