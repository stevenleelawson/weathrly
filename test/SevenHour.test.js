import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';
import data from '../lib/mockData/mock.js';
import { dataCleaner } from '../lib/dataCleaner';

describe( 'SevenHour', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<SevenHour weather={dataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render seven cards', () => {
    expect(wrapper.children().length).toEqual(7)
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
