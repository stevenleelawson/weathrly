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

  // it('should pass the correct number of props for each hour', () => {
  //   console.log(Object.keys(wrapper.find('HourCard')))
  //   // console.log('sevenhouraray',wrapper.props().weather.sevenHourArray.slice(0,7))
  // expect(wrapper.props().weather.sevenHourArray).toEqual(4)

  // })
})