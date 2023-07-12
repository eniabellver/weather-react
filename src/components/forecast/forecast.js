import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from 'react-accessible-accordion';
import './forecast.css';

const WEEKDAYS_ARRAY = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data }) => {
  const currentDayOfTheWeek = new Date().getDay();
  const forecastDays = WEEKDAYS_ARRAY.slice(
    currentDayOfTheWeek,
    WEEKDAYS_ARRAY.length,
  ).concat(WEEKDAYS_ARRAY.slice(0, currentDayOfTheWeek));

  return (
    <div className='forecast-container'>
      <label className='title'>Forecast for the next 7 days:</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                  <img
                    alt='weather-icon'
                    className='icon-small'
                    src={`icons/${item.weather[0].icon}.svg`}
                  />
                  <label className='day'>{forecastDays[index]}</label>
                  <label className='description'>
                    {item.weather[0].description}
                  </label>
                  <label className='min-max-temp'>
                    {Math.round(item.main.temp_min)}°C{' / '}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='daily-details-grid'>
                <div className='daily-details-grid-item'>
                  <label>Feels like:</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPs</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Windspeed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Sea level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
