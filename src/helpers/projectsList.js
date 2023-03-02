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
    details: '',
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
