import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';
import data from '../lib/mock.js';
import { DataCleaner } from '../lib/DataCleaner';

describe( 'SevenHour', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<SevenHour weather={DataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should return seven cards', () => {
  expect(wrapper.find('HourCard').length).toEqual(7)
  })

  it('should display the correct temperature for each hour', () => {
    expect(wrapper.props('HourCard').weather.temperature).toEqual(46)
    // console.log('sevenhouraray',wrapper.props().weather.sevenHourArray.slice(0,7))
    // expect(wrapper.props().weather.Object.keys(sevenHourArray[0])).toEqual(4)

  })
})
