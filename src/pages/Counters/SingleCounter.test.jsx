// Файл с примером тестирования
// для запуска теста используем // it() или test()
import { render } from '@testing-library/react';
import SingleCounter, { sum } from './SingleCounter';

// Тестирование функций
describe('sum', () => {
  it('sum 1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2);
  });

  it('wrong test example', () => {
    expect(sum(5, 5)).toBe(10);
  });

  it('NaN check', () => {
    expect(sum(111)).toBeNaN();
  });

  it('empty params check', () => {
    expect(sum()).toBeNaN();
  });
});

// Тест компонента SingleCounter
describe('SingleCounter', () => {
  // Тест рендера контейнера
  it('snapshot test', () => {
    const { container } = render(<SingleCounter value={555} />);

    expect(container).toMatchSnapshot();
  });

  // Доступ к элементу DOM
  it('value test', () => {
    const { getByTestId } = render(<SingleCounter value={555} />);

    expect(getByTestId('value').textContent).toBe('555');
  });

  // Тест вызова функции на кнопке
  it('test increment button func', () => {
    const onIncrement = jest.fn();

    const { getByTestId } = render(<SingleCounter onIncrement={onIncrement} />);

    getByTestId('increment-button').click();
    getByTestId('increment-button').click();
    getByTestId('increment-button').click();

    expect(onIncrement).toBeCalled();
    expect(onIncrement).toBeCalledTimes(3);
  });
});

// Для более сложных функций можно использовать Mock-функции https://jestjs.io/ru/docs/mock-function-api
