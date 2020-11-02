export interface ProjectSchema {
	caseCode: string;
	title: string;
	companyDesc: string;
	responsiveViewImg: string;
	problem: string;
	restriction: string;
	solution: string;
	technologies: string[];
	features: string[];
	myRole: string[];

	cardImgUrl: string;
	cardShortDesc: string;

	links: {
		githubLink: string;
		liveDemo: string;
		caseLink: string;
	};


}
export const projectsArray: ProjectSchema[] = [
	{
		caseCode: 'dyreterapi',
		title: 'Center for Dyreterapi',
		companyDesc: 'The company based in Denmark and consist of four permanent employees. Their combined skillsets make the business a unique one in the field of animal welfare and treatment. The staff is well trained,accredited and recognized by world leading experts. Together, they are working hard in providing their customers the best quality of their services.',
		responsiveViewImg: '../../../assets/images/products/frame-4.png',
		problem: 'The company had three different websites for displaying their content and our role was to create one that represents them well. We decided to create an SPA, because of its popularity. The final product is a high-fidelity prototype, that was made for a university exam.',
		restriction: 'We were not allowed to use any frameworks, neither libraries. In this way it was much harder to make our prototype responsive to each devices and realize our solution.',
		solution: 'I came up with an idea that even though we were not able to use specific frameworks that doesn\'t mean that we are not able to create our own one. So I used Angular\'s component driven approach to plan and code this JavaScript "engine" that is controling this prototype and responsible for the page changing via fetching and aligning the corresponding URLs in the browser\'s URL field. in this way we are able to link the pages and share them with anyone.',
		technologies: ['HTML', 'CSS', 'Vanilla - JavaScript', 'Github'],
		features: ['Fast loading time', '(no loading between pages heavy first load)', 'Separated components with styling.', 'Possibility of a higher level of cooperation'],
		myRole: [
			'Creating mock-ups.',
			'Creating the javascript engine that handles the page loadings',
			'Making design decisions regarding the realization.',
			'Assigning coding tasks to groupmates.',
			'Managing GitHub repository.',
			'Realization in general.',
			'Finding and fixing bugs.'],

		cardImgUrl: '../../assets/images/products/project-1.jpg',
		cardShortDesc: 'This company try to help dogs and horses to heal and their owners to learn how to treat their animals',

		links: {
			githubLink: 'https://github.com/bassexplorer/dyreterapi-spa',
			liveDemo: '../../../assets/live-demos/dyreterapi-SPA/index.html',
			caseLink: '/projects/dyreterapi',
		},
	},

	{
		caseCode: 'ungdomsringen_musicfestival',
		title: 'Ungdomsringen Music Festival',
		companyDesc: 'Ungdomsringen is an association founded in 1942 for all out-of-school clubs and youth schools in Denmark. They aim to create and carry out activities for young people through clubs and after-school clubs. The association has approx. 150,000 members from approx. 850 member clubs and finances its activities partly through membership fees and partly through tip funds.',
		responsiveViewImg: '../../../assets/images/products/frame-1.png',
		problem: 'Ungdomsringen needed a responsive website for their annual music festival. Since the content for the festival changes every year, the solution\'s content, graphical and visual expression had to be easily editable by the client. Thus we needed to use Wordpress as a headless CMS. The Content Management System would store the content, but the design would be realized entirely by us. ',
		restriction: 'Use Wordpress as a headless CMS, Use Atomic Design',
		solution: 'This Project was a great challenge because this was the first time I met with wordpress and the idea of communication with an another application. I learned how the restful methods work and how to send and handle data between parties. I learned how to use fetching and how to set up headers and authentication.',
		technologies: ['HTML', 'CSS', 'Vanilla - JavaScript', 'Github', 'Wordpress as Headless CMS, Github'],
		features: ['Store data in a database', 'Easy to modify and populate the data'],
		myRole: ['Realizing site design',
			'Prepare visual materials',
			'Structuring data',
			'Creating database behind the site',
			'Realize fetching functions',
			'Finding bugs and resolve bugs'],

		cardImgUrl: '../../assets/images/products/project-2.jpg',
		cardShortDesc: 'Is a festival that help children to find their place and give them possibilities to try themselves',

		links: {
			githubLink: 'https://github.com/bassexplorer/ungdomsringen-musicfestival',
			liveDemo: '',
			caseLink: '/projects/ungdomsringen_musicfestival',
		}
	},

	{
		caseCode: 'danish_diabetes',
		title: 'Danish Diabetes Assocciation',
		companyDesc: 'The Diabetes association is one of Denmark\'s largest patient associations. The organization fights the cause of diabetics and they work to improve the living conditions of people with diabetes and put diabetes on the political agenda. They focus on preventing diabetes, living well with it and lastly to research and cure the disease.',
		responsiveViewImg: '../../../assets/images/products/frame-3.png',
		problem: 'Diabetes Association has prepared a shopping guide for diabetics, describing their recommended amounts of sugar, fat and dietary fibre in a few selected product groups. The shopping guide can be printed out in the form of a shopping card which is easier to carry in people’s pockets. The problem is that this shopping card can be wrinkled and can be lost easily. The thing that is rarely forgotten and can provide even more possibilities is their phone. Therefore we needed to digitize the purchase card in the form of a web app.',
		restriction: '',
		solution: 'This project was the first that introduced me to the idea of one page applications. In this project I also learned that how I can manipulate the DOM in a more advance way and the more  of Javascript.',
		technologies: ['HTML', 'CSS', 'Vanilla - JavaScript', 'Github'],
		features: [''],
		myRole: [
			'Refining mock-ups',
			'Prepare visual material',
			'split the tasks',
			'Realize the SPA javascript part',
			'Managing github repository',
			'Finding bugs',
			'Resolve bugs'
		],


		cardImgUrl: '../../assets/images/products/project-3.jpg',
		cardShortDesc: 'This association is support diabetics all-around Denmark',

		links: {
			githubLink: 'https://github.com/bassexplorer/danish-diabetes-SPA',
			liveDemo: '../../../assets/live-demos/danish-diabetes-SPA/index.html',
			caseLink: '/projects/danish_diabetes',
		}
	},

	{
		caseCode: 'svalegaarden_mest',
		title: 'Svalegaarden Mest',
		companyDesc: 'Svalegaarden mest is a restaurant and event venue, unique and renowned for it\’s beautiful setting: an idyllic grocery farm that has been hosting events over the years. Svalegaarden mest contains everything from private parties, meeting facilities and lectures to delivery services. The restaurant\’s focus is on creating memorable experiences and introducing gastronomy as it meets rural idyll.',
		responsiveViewImg: '../../../assets/images/products/frame-2.png',
		problem: ' Svalegaarden mest needed a new website, that conveys their unique services better to their audience. They wanted a website that expresses their core values and showcase the care and craftsmanship that goes into creating an ideal event. They wished the differences in the seasonal dishes(e.g. summer and winter) to be properly represented, as their current website used the same design for all their menus.',
		restriction: '',
		solution: 'The solution is a basic HTML5 / JavaScript page. I got a pretty solid foundation of CSS and HTML and also sarted learning the use of github.',
		technologies: ['HTML', 'CSS', 'Vanilla - JavaScript', 'Github'],
		features: [''],
		myRole: ['Refining mock-ups', 'Prepare visual material', 'Split the tasks', 'Realize pages', 'Managing github repository', 'Finding bugs', 'Resolve bugs'],

		cardImgUrl: '../../assets/images/products/project-4.jpg',
		cardShortDesc: 'Is a catering service that provide a perfect atmosphere for events or any kind of occasions',

		links: {
			githubLink: 'https://github.com/bassexplorer/svalegaarden-mest-catering',
			liveDemo: '../../../assets/live-demos/svalegaarden-mest-catering/index.html',
			caseLink: '/projects/svalegaarden_mest',
		}
	},
];
