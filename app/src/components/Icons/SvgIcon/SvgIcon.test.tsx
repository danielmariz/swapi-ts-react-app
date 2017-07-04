import { enzyme, expect } from '../../../helpers/test.support';

// import { PeopleIcon, ISvgIcon } from './PeopleIcon';

// let tree: any;

// const PeopleIconProps: ISvgIcon = {
//   title: 'People Icon',
//   color: 'grey',
//   width: 100,
// };

describe('PeopleIcon Component', () => {
  beforeEach(() => {
    // tree = enzyme.shallow(<PeopleIcon {...PeopleIconProps} />);
  });

  it('set size', () => {
    // expect(tree.find('svg').props('width')).to.equal(PeopleIconProps.width);
  });

  it('set color', () => {
    // expect(tree.find('path').props('fill')).to.equal(PeopleIconProps.color);
  });

  it('set title', () => {
    // expect(tree.find('title').text()).to.equal(PeopleIconProps.title);
  });

  it('define aria label', () => {
    // const iconTitle = tree.find('title');
    // expect(tree.find('svg').props('aria-labelledby')).to.equal(iconTitle.props('id'));
  });
});
