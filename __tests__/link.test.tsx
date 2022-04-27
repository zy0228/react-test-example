import * as renderer from 'react-test-renderer';
import Link from '../src/components/Link'

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.baidu.com">Baidu</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('随机事实性的快照', () => {
  const user = {
    date: new Date(),
    age: Math.random() * 20,
    name: 'snoop'
  }

  expect(user).toMatchSnapshot({
    date: expect.any(Date),
    age: expect.any(Number)
  })
})