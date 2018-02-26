import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';
import data from '../lib/mockData/mock.js';
import { dataCleaner } from '../lib/dataCleaner';

describe( 'TenDay', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<TenDay weather={dataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should return ten cards', () => {
  expect(wrapper.children().length).toEqual(10)
  })

  it('should display the day of the week', () => {
    expect(wrapper.props().weather.tenDayArray[0].date.weekday).toEqual('Wednesday')
  })

  it('should display the high temp for the day', () => {
    expect(wrapper.props().weather.tenDayArray[0].high.fahrenheit).toEqual('51')
  })

  it('should display the low temp for the day', () => {
    expect(wrapper.props().weather.tenDayArray[0].low.fahrenheit).toEqual('32')
  })
})
