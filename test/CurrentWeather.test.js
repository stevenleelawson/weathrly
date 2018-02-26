import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';
import data from '../lib/mockData/mock.js';
import { dataCleaner } from '../lib/dataCleaner';

describe( 'CurrentWeather', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<CurrentWeather weather={dataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an h3, img and four p elements', () => {
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(4);
  })

  it('should display the correct temperature for each hour', () => {
    expect(wrapper.props('CurrentWeather').weather.temperature).toEqual(46);
  })

  it('should display the correct location as props passed down', () => {
    expect(wrapper.props('CurrentWeather').weather.location).toEqual('Louisville, KY');
  })

  it('should display the correct weather as props passed down', () => {
    expect(wrapper.props('CurrentWeather').weather.weather).toEqual('Mostly Cloudy');
  })

  it('should display the correct day as props passed down', () => {
    expect(wrapper.props('CurrentWeather').weather.day).toEqual('Wednesday');
  })

  it('should display the correct date as props passed down', () => {
    expect(wrapper.props('CurrentWeather').weather.date).toEqual('December 20th 2017');
  })

  it('should display the correct img as props passed down', () => {
    expect(wrapper.props('CurrentWeather').weather.icon).toEqual('http://icons.wxug.com/i/c/k/mostlycloudy.gif');
  })

  it('should display the correct low temp as props passed down', () => {
    expect(wrapper.props('CurrentWeather').weather.low).toEqual('32');
  })

  it('should display the correct high temp as props passed down', () => {
    expect(wrapper.props('CurrentWeather').weather.high).toEqual('51');
  })
})
