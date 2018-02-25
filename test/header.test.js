import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../lib/Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})
