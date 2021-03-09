import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Sales } from './Sales';
import Product from '../../components/Product/Product';

configure({ adapter: new Adapter() });

const stateTest = {
    products: [
        {
            id: 0,
            img: "https://images-na.ssl-images-amazon.com/images/I/716hxkzc4SL._SY445_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$0.05"
        },
        {
            id: 1,
            img: "https://images-na.ssl-images-amazon.com/images/I/71RJjEn8oCL._SX342_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
        {
            id: 2,
            img: "https://images-na.ssl-images-amazon.com/images/I/51P7ctxJSvL._AC_SL1000_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$11"
        },
        {
            id: 3,
            img: "https://images-na.ssl-images-amazon.com/images/I/81WMUxNTRYL._SX342_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$110"
        },
        {
            id: 4,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-JwILO-FL._AC_SL1500_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
        {
            id: 5,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-JwILO-FL._AC_SL1500_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        }
    ]
};


describe('<Sales/>', () => {

    it('should render 6 products', () => {
        const wrapper = shallow(<Sales/>);
        wrapper.setState(stateTest);
        expect(wrapper.find(Product)).toHaveLength(6);
    });

    it('should render no products message', () => {
        const wrapper = shallow(<Sales/>);
        wrapper.setState({products: []});
        expect(wrapper.contains(<h1>No hay productos disponibles</h1>)).toEqual(true);
    });

});

