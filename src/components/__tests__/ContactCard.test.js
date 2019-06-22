import { shallowMount } from '@vue/test-utils';
import ContactCard from '../ContactCard';

describe('ContactCard', () => {
  test('is a Vue instance', () => {
    // expect(true).toBeTruthy();
    const wrapper = shallowMount(ContactCard);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('should display the name correctly', () => {
    const testProps = {
      name: 'Joe Test',
    };
    const wrapper = shallowMount(ContactCard, {
      propsData: testProps,
    });

    const compEl = wrapper.findAll('.contact-details p').at(0);

    expect(compEl.text()).toContain(testProps.name);
  });

  test('should display the email correctly', () => {
    const testProps = {
      email: 'test@example.com',
    };
    const wrapper = shallowMount(ContactCard, {
      propsData: testProps,
    });

    const compEl = wrapper.findAll('.contact-details a').at(0);

    expect(compEl.text()).toContain(testProps.email);
    expect(compEl.html()).toContain(`mailto:${testProps.email}`);
  });

  test('should display the bio correctly', () => {
    const testProps = {
      bio: 'This is a test',
    };
    const wrapper = shallowMount(ContactCard, {
      propsData: testProps,
    });

    const compEl = wrapper.findAll('.contact-details p').at(2);

    expect(compEl.text()).toContain(testProps.bio);
  });

  test('should display the avatar correctly', () => {
    const testProps = {
      name: 'Joe Test',
      avatarUrl: 'http://mydomain.com/myavatar.png',
    };
    const wrapper = shallowMount(ContactCard, { propsData: testProps });

    const compEl = wrapper.find('.contact-card img');

    expect(compEl.html()).toContain(testProps.avatarUrl);
  });
});
