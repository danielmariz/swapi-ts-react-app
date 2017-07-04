import { enzyme, expect } from '../../helpers/test.support';

// import { ListItem } from './ListItem';

// let tree: any;

// const translations: Translation.ILinkTranslations = {
//   text: 'text test',
//   titleAttr: 'title test',
//   altAttr: 'alt test',
// };

describe('ListItem Component', () => {
  beforeEach(() => {
    // tree = enzyme.shallow(<ListItem {...translations} />);
  });

  it('has logo', () => {
    // expect(tree.find('.logo')).to.have.length(1);
    // expect(tree.find('.logo').name()).to.equal('a');
  });

  it('logo has text', () => {
    // expect(tree.find('.logo').text()).to.equal(translation.text);
  });

  it('logo has title attribute', () => {
    // expect(tree.find('.logo').props('title')).to.equal(translation.titleAttr);
  });

  it('logo has alt attribute', () => {
    // expect(tree.find('.logo').props('alt')).to.equal(translation.altAttr);
  });
});
