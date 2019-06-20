import { mount } from '@vue/test-utils';
import ContactList from '../ContactList';

describe('ContactList', () => {
  test('is a Vue instance', () => {
    // expect(true).toBeTruthy();
    const wrapper = mount(ContactList);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
