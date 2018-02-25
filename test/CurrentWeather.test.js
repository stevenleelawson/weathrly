import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';
import data from '../lib/mock.js';
import { DataCleaner } from '../lib/DataCleaner';

describe( 'CurrentWeather', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<CurrentWeather weather={DataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an h3, img and four p elements', () => {
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(4);
  })
})