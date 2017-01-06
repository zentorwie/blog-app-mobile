import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import ArticleListItem from '../src/ArticleListItem';
import { Text } from 'react-native';

describe('Enzyme Shallow', function () {
  it('Title should be A', function () {
    let app = shallow(<ArticleListItem title="A" author="B" date="C" abstract="D"/>);
    expect(app.contains(<Text>A</Text>)).to.equal(true);
  });
});
