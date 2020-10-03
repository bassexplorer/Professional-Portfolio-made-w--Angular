import { animate, animateChild, group, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

export const routerTransition =
	trigger('routerTransition', [

		transition('aboutme => skills', [

			query(':enter, :leave',
				style({ position: 'absolute', top: 0, width: '100%', height: '100%' }) // startin point
				, { optional: true }),

			group([  // block executes in parallel
				query(':enter', [

					query('.main-content h1, .main-content .par ', style({ opacity: 0 })),
					query('#tsparticles', style({ opacity: 0 })),


					query('.main-content h1, .main-content .par ', [
						style({ transform: 'translateX(100%)', opacity: 0 }),
						stagger(
							200,
							animate('1s cubic-bezier(0,1,.96,.98)', style({ opacity: 1, transform: 'translateX(0%)' }))
						)
					]),

					query('#tsparticles', [
						animate('1s .5s', style({ opacity: 1 }))
					]),
				]),


				query(':leave', [
					style({ transform: 'translateX(0%)' }),
					animate('0.5s ease-in-out',
						style({ opacity: 0 }))
				], { optional: true }),
			])
		]),

		// --------------------------------------------
		transition('* => aboutme', [

			/* order */
			/* 1 */ query(':leave',
			style({ position: 'absolute', top: 0, width: '100%', height: '100%', opacity: 0 })
			, { optional: true }),

			/* 2 */ group([
				query(':enter', [

					query('.text-box', [
						style({ transform: 'translateX(-100%)', opacity: 0 }),
					]),

					query('.image-box', [
						style({ opacity: 0 }),
					]),

					query('.text-box', [

						animate('1s ease-in-out',
							style({ transform: 'translateX(0%)', opacity: 1 }))
					]),

					query('.image-box', [

						style({ opacity: 0 }),
						animate('.5s cubic-bezier(0, 0.500, 0.500, 1)', keyframes([
							style({ transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0, offset: 0 }),
							style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
							style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4 }),
							style({ transform: 'scale3d(1.03, 1.03, 1.03)', opacity: 1, offset: 0.6 }),
							style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 }),
							style({ transform: 'scale3d(1, 1, 1)', opacity: 1, offset: 1.0 }),

						]))
					])

				]),

				query(':leave', [
					style({ transform: 'translateX(0%)' }),
					animate('0.5s ease-in-out',
						style({ opacity: 0 }))
				], { optional: true }),
			])
		]),

		//-------------------------------------------

		transition('* => contact', [

			// /* order */
			/* 1 */ query(':leave',
			style({ position: 'absolute', top: 0, width: '100%', height: '100%', opacity: 0 })
			, { optional: true }),

			query('mat-form-field, button', [
				style({ opacity: 0 }),
			]),

			query('.form-container h1', [
				style({ transform: 'translateY(-100%)', opacity: 0 }),
			]),

			query(':enter', [

				query('.form-container h1', [
					animate(1000,
						style({ transform: 'translateY(0%)', opacity: 1 })
					)
				]),

				query('.form-group mat-form-field, button', [
					stagger(300,
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

			query(':leave', [
				style({ transform: 'translateX(0%)' }),
				animate('0.5s ease-in-out',
					style({ opacity: 0 }))
			], { optional: true }),

		]),


		transition('* => projects', [

			// /* order */
			/* 1 */ query(':leave',
			style({ position: 'absolute', top: 0, width: '100%', height: '100%', opacity: 0 })
			, { optional: true }),


			query('.projects-page h1, .projects-page .p-3  ', [
				style({ transform: 'translateY(-50%)', opacity: 0 }),
			]),

			query(':enter', [

				query('.projects-page h1', [
					animate(1000,
						style({ transform: 'translateY(0%)', opacity: 1 })
					)
				]),

				query('.projects-page .p-3 ', [
					stagger(150,
						animate('.5s cubic-bezier(0, 0.500, 0.500, 1)', keyframes([
							style({ transform: 'translateY(0%)', opacity: 1 })
						]))

					)
				])



			]),

			query(':leave', [
				style({ transform: 'translateX(0%)' }),
				animate('0.5s ease-in-out',
					style({ opacity: 0 }))
			], { optional: true }),

		]),


		//-------------------------------------------
	]);

