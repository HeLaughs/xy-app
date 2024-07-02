import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const heroClassicSmall = {
		title: 'Our Services',
		subtitle:
			'You need support from the idea to the launch of your new digital product. As a full service product agency we help you with all aspects of product development.',

		image: {
			src: '/images/hero-services.webp',
			alt: 'Hero'
		}
	};

	const featureListImageText = {
		features: [
			{
				title: 'An easier way to work so that you can focus on delivering projects and growing your business',
				text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
				image: {
					src: '/images/featureImage2.webp',
					alt: 'feature 1'
				}
			},
			{
				title: 'Turn your expertise into a passive income stream',
				text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
				image: {
					src: '/images/featureImage3.webp',
					alt: 'feature 1'
				}
			},
			{
				title: 'Take the hassle out of online scheduling with tools to keep your clients happy and your calender booked',
				text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
				image: {
					src: '/images/featureImage2.webp',
					alt: 'feature 1'
				}
			},
			{
				title: 'Everything you need to keep your business running from payment and checkout to shipping',
				text: 'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
				image: {
					src: '/images/featureImage3.webp',
					alt: 'feature 1'
				}
			}
		]
	};
	const singleTestimonialTextWithAvatar = {
		testimonial: {
			name: 'Mary Jason',
			position: 'CEO of Mary Creatives',
			image: {
				src: '/images/people/joel.webp',
				alt: 'Mary Jason'
			},
			content: `I'm baby hexagon tote bag marfa 8-bit. Put a bird on it mustache craft beer meditation.
			Shoreditch before they sold out jawn succulents keytar, freegan wolf irony. Bicycle rights
			portland tbh cupping shabby chic.`
		}
	};
	const ctaBanner = {
		title: "Convinced?<br /> Let's start a project!",
		cta: {
			title: 'Contact Us!',
			link: '/contact'
		}
	};
	return {
		seo: {
			title: 'Services',
			description: 'Metadescription for service page'
		},
		heroClassicSmall,
		featureListImageText,
		singleTestimonialTextWithAvatar,
		ctaBanner
	};
};
