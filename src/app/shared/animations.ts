import { animate, group, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';


export const homepageloading =
	trigger('HomePage', [
		transition(':enter', [
			// here we could define a style that set everything in this transiton to some state.
			query('#circle-svg', style({ opacity: 0, transform: 'scale(0)', transformOrigin: 'right top' })),
			query('.image-of-me', style({ opacity: 0 })),

			group([
				query('h1', style({ opacity: 0, transform: 'translateX(-100%)' })),
				query('h3', style({ opacity: 0, transform: 'translateY(100%)' })),
			]),

			query('div.title-of-me', style({ opacity: 0 })),



			group([
				query('.cta-btn-box a', style({ opacity: 0, transform: 'translateY(50%)' })),
				query('.social-box a', style({ opacity: 0, transform: 'translateX(-50%)' })),
			]),


			group([
				query('#circle-svg', [
					animate('500ms cubic-bezier(0,1,.96,.98)', style({ opacity: 1, transform: 'scale(1)' }))
				]),

				query('.image-of-me', [
					animate('500ms .5s', style({ opacity: 1 }))
				])

			]),

			group([
				query('h1', [
					animate('800ms cubic-bezier(0,1,.96,.98)',
						style({ opacity: 1, transform: 'translateX(0%)', animation: '1s bounceInLeft' }))
				]),

				query('h3', [
					animate(1000, style({ opacity: 1, transform: 'translateY(0%)' }))
				]),

			]),

			query('div.title-of-me', [
				animate(350, style({ opacity: 1 }))
			]),

			group([
				query('.cta-btn-box a', [
					stagger(200,
						animate(400, style({ opacity: 1, transform: 'translateY(0%)' })))
				]),

				query('.social-box a', [
					stagger(150,
						animate(150, style({ opacity: 1, transform: 'translateX(0%)' })))
				])
			]),

		]),

		transition(':leave', [

			// here we could define a style that set everything in this transiton to some state.
			query('#circle-svg', style({ opacity: 1, transform: 'scale(1)', transformOrigin: 'right top' })),
			query('.image-of-me', style({ opacity: 1 })),

			query('h1', style({ opacity: 1, transform: 'translateX(-100%)' })),
			query('h3', style({ opacity: 1, transform: 'translateY(100%)' })),
			query('div.title-of-me', style({ opacity: 1 })),

			query('.cta-btn-box a', style({ opacity: 1, transform: 'translateY(50%)' })),
			query('.social-box a', style({ opacity: 1, transform: 'translateX(-50%)' })),



			group([
				query('#circle-svg', [
					animate('500ms cubic-bezier(0,1,.96,.98)', style({ opacity: 0, transform: 'scale(0)' }))
				]),

				query('.image-of-me', [
					animate('500ms .5s', style({ opacity: 0 }))
				])

			]),

			group([
				query('h1', [
					animate('800ms cubic-bezier(0,1,.96,.98)',
						style({ opacity: 1, transform: 'translateX(0%)', animation: '1s bounceInLeft' }))
				]),

				query('h3', [
					animate(1000, style({ opacity: 1, transform: 'translateY(0%)' }))
				]),

			]),

			query('div.title-of-me', [
				animate(350, style({ opacity: 1 }))
			]),

			group([
				query('.cta-btn-box a', [
					stagger(200,
						animate(400, style({ opacity: 1, transform: 'translateY(0%)' })))
				]),

				query('.social-box a', [
					stagger(150,
						animate(150, style({ opacity: 1, transform: 'translateX(0%)' })))
				])
			]),


		]),


	]);

// showSocials
export const showSocials = trigger('showSocials', [
	// app-scroll-box
	transition(':enter', [

		// query(':leave',
		// 	style({ position: 'absolute', top: 0, width: '100%', height: '100%', opacity: 0 })
		// 	, { optional: true }),

		query('.social-box a', [
			style({ opacity: 0 }),
		]),

		query('.social-box a', [
			stagger(250,
				animate('.5s cubic-bezier(0, 0.500, 0.500, 1)', keyframes([
					style({ transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0, offset: 0 }),
					style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
					style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4 }),
					style({ transform: 'scale3d(1.03, 1.03, 1.03)', opacity: 1, offset: 0.6 }),
					style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 }),
					style({ transform: 'scale3d(1, 1, 1)', opacity: 1, offset: 1.0 }),
				]))
			)
		])



	]),

	transition(':leave', [

		style({ transform: 'translateX(0%)', opacity: 1 }),
		animate('0.5s ease-in-out',
			style({ opacity: 0, transform: 'translateX(-100%)' }))


	])

]);
