import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';
import data from '../lib/mock.js';
import { DataCleaner } from '../lib/DataCleaner';

describe( 'Card', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<Card weather={DataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an h2, img and two p elements', () => {
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(2);
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
