import React from 'react';
import { shallow, mount } from 'enzyme';
import HourCard from '../lib/HourCard';
import data from '../lib/mockData/mock.js';
import { dataCleaner } from '../lib/dataCleaner';

describe( 'HourCard', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<HourCard weather={dataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an h2, img and two p elements', () => {
    expect(wrapper.find('h4').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(1);
  })

  it('should display the correct temperature for each hour', () => {
    expect(wrapper.props().weather.sevenHourArray[0].temp.english).toEqual('47')
  })

  it('should display the correct time for each hour', () => {
    expect(wrapper.props().weather.sevenHourArray[0].FCTTIME.hour).toEqual('12')
  })

  it('should display the correct image for each hour', () => {
    expect(wrapper.props().weather.sevenHourArray[0].icon_url).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif')
  })
})
