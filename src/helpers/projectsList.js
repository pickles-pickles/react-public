import {
  BootstrapPill,
  firebasePill,
  FlaskPill,
  JSPill,
  MUIPill,
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
    title: 'Github API consumer with extensive README',
    link: 'https://konn-test.netlify.app/',
    description:
      'This app consumes the github API to display info about github profiles in a simple, but fancy layout.',
    details:
      'This demo app is the most recent I made. It is an example of how I would organize my code for a real-world project and what desing patterns I would follow. \nDetails can be found in the README.md file, where I explain the thought process in detail.',
    stack: [ReactPill, TSPill, ReduxPill, ReactRouterDomPill, MUIPill],
    imgSrc: 'assets/sites/konn-test.png'
  },
  {
    title: 'A demo e-shop',
    link: 'https://e-magazi.netlify.app/',
    description:
      'A demo e-shop built to demonstrate CRUD operations in a shopping cart',
    details:
      'This store is a demo with a handful of products. \nIt demonstratES CRUD(Create, Read, Update, Delete) operations that almost every non-trivial app does. \nThe same principles of this demo eshop, are followed by any successful e-shop, even though in a larger scale.',
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
    title: ' A Weather app connected to multiple APIs',
    link: 'https://vermillion-weather.netlify.app/',
    description:
      'A dynamic app with multiple functionalities, including chart drawing, calendar, location detection, connected to multiple APIs',
    details:
      'This app includes data from multiple APIs, charts, calendar, location detection and animations. \n I am proud of it, as it required dedication and hard effort to finish it on time, as it was part of a screening process. \nAs I get more experienced, I refactor the code to reflect the knowledge I gained in the meantime. Furthermore, I add new functionalities and a fancier design',
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
      "This app a pixel-perfect copy of the trello site. \nTrello is a task-handling app, that was made using Bootstrap. When building this app, I became familiar with the Bootstrap utilities and with the configuration of private routes, using react-router-dom. \nCreating a pixel-perfect replica of Trello's interface was an exhilarating endeavor that truly put my front-end development skills to the test. Every detail, from the layout structure to the card functionalities, demanded an intense level of precision and understanding of design principles. I immersed myself in the intricacies of HTML, CSS, and JavaScript, meticulously crafting code that mirrored Trello's appearance while ensuring seamless interactivity. \nThis app would be perfect to be refactored as a Nextjs app, as it is very suitable for a hybrid(part SSR, part CSR) setup",
    stack: [ReactPill, BootstrapPill, ReactRouterDomPill, ReactContextPill],
    imgSrc: 'assets/sites/trello.png'
  },
  {
    title:
      'A full-stack app with vanilla Javascript, Python with Flask and mySQL',
    link: 'https://github.com/pickles-pickles/recipes/',
    description: 'An app designed following UML principles',
    details:
      'This app was made as part of my Msc curriculum. \nI followed UML processes, drawn class diagrams and user cases. This pattern of design is used in the enterprise world to build large-scale applications. \nThe popularity of this methodoly is in decline since the rise of agile methodologies. However, it still has its advocates.',
    stack: [JSPill, FlaskPill, MySQLPillPill],
    imgSrc: 'assets/sites/uml-diagram.png'
  }
]

export default projectsList
