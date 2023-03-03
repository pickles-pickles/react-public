import {
  BootstrapPill,
  firebasePill,
  FlaskPill,
  JSPill,
  MySQLPillPill,
  OpenWeatherMapPill,
  ReactContextPill,
  ReactDatepickerPill,
  ReactPill,
  ReactPlotlyPill,
  ReactRouterDomPill,
  ReduxPill,
  SASSPill,
  TSPill
} from './stacksPillsInfo'

const projectsList = [
  {
    title: 'A demo e-shop',
    link: 'https://e-magazi.netlify.app/',
    description:
      'A demo e-shop built to demonstrate CRUD operations in a shopping cart',
    details:
      'Online presence of any commerce store is a must, especially after the lockdowns and the changes they brought in our lives, leading in a digitalized world. This store is a demo with a handful of products and it serves the purpose of demonstrating CRUD(Create, Read, Update, Delete) operations that almost every non-trivial app does. The same principles of this demo eshop, are followed by any successful e-shop, even though in a larger scale.',
    stack: [
      ReactPill,
      TSPill,
      ReduxPill,
      SASSPill,
      BootstrapPill,
      ReactRouterDomPill,
      firebasePill
    ],
    imgSrc: 'assets/sites/eshop.png'
  },
  {
    title: ' A Weather app connected to two API',
    link: 'https://vermillion-weather.netlify.app/',
    description:
      'An dynamic app with multiple functionalities, including chart drawing, calendar, location detection, connected to multiple APIs',
    details:
      'When I built this app was by far the most complex I had built at the time. It includes data from multiple APIs, charts, calendar, location detectin and animations. I am proud of it, as it rerquired dedication and hard effort to finish it on time, as it was part of a screening process. Now, that I am more exerienced I want to refactor the code to reflect the knowledge I gained in the meantime, and, furthermore, to add new functionalities and a fancier design',
    stack: [
      ReactPill,
      ReduxPill,
      ReactRouterDomPill,
      ReactPlotlyPill,
      ReactDatepickerPill,
      OpenWeatherMapPill
    ],
    imgSrc: 'assets/sites/weatherForecast.png'
  },
  {
    title: 'A trello clone still in process',
    link: 'https://trello-clone-1234.netlify.app/',
    description: 'A pixel-perfect replication of a popular site',
    details:
      "The purpose of this app was to create a pixel-perfect copy of the trello site. Trello is a task-handling app, like Jira, if you are familiar with that, that was made using Bootstrap. When building this app, I became familiar with the Bootstrap utilities and with the configuration of private routes, using react-router-dom. As my intention was to replicate the UI and not perform the actual functionalities of Trello, I kept the app's state minimal and used React Context for state management, instead of Redux(Redux is ideal for handling complex state)",
    stack: [ReactPill, BootstrapPill, ReactRouterDomPill, ReactContextPill],
    imgSrc: 'assets/sites/trello.png'
  },
  {
    title:
      'A full-stack app with vanilla Javascript, Python with Flask and mySQL',
    link: 'https://github.com/pickles-pickles/recipes/',
    description: 'An app designed following UML principles',
    details:
      'This app was made as part of my Msc curriculum. I followed UML processes, drawn class diagrams and user cases. This pattern of design is used in the enterprise world to build large-scale applications. The popularity of this methodoly is in decline since the rise of agile methodologies. However, it still has its advocates.',
    stack: [JSPill, FlaskPill, MySQLPillPill],
    imgSrc: 'assets/sites/uml-diagram.png'
  }
]

export default projectsList
