/*
* Use this file to import any configs that you want available in all tests
* Any vars that you wish to use in tests
*/

import * as enzyme from 'enzyme';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme((wrapper: any) => wrapper.html()));

const expect: any = chai.expect;
export {
    enzyme,
    expect,
};
