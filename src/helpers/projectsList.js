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
    details: '',
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
    details: '',
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
    details:
      "The purpose of this app was to create a pixel-perfect copy of the trello site. Trello is a task-handling app, like Jira, if you are familiar with that, that was made using Bootstrap. When building this app, I became familiar with the Bootstrap utilities and with the configuration of private routes, using react-router-dom. As my intention was to replicate the UI and not perform the actual functionalities of Trello, I kept the app's state minimal and used React Context for state management, instead of Redux(Redux is ideal for handling complex state)",
    stack: [ReactPill, BootstrapPill, ReactRouterDomPill, ReactContextPill],
    imgSrc: 'assets/sites/trello.png'
  },
  {
    title:
      'A full-stack app with vanilla Javascript, Python with Flask and mySQL',
    link: 'https://github.com/pickles-pickles/recipes/',
    details: '',
    stack: [JSPill, FlaskPill, MySQLPillPill],
    imgSrc: 'assets/sites/uml-diagram.png'
  }
]

export default projectsList
