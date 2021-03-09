import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Product from './Product';

configure({ adapter: new Adapter() });

describe('<Product/>', ()=> {
    
    it('Image prop rendering correct', () => {
        const wrapper = shallow(<Product/>);
        wrapper.setProps({img: 'https://someimage.png'});
        expect(wrapper.containsMatchingElement(<img src="https://someimage.png" alt=""/>)).toEqual(true);
    });

    it('Title prop rendering correct', () => {
        const wrapper = shallow(<Product/>);
        wrapper.setProps({title: 'Starwars Product'});
        expect(wrapper.containsMatchingElement(<h4><a href="/">Starwars Product</a></h4>)).toEqual(true);
    });

});