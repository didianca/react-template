import {Child} from './Child';

const Parent = () => {
    return <Child color="red" onClick={() => console.log('clicked')}>
        text
    </Child>
}

export default Parent;