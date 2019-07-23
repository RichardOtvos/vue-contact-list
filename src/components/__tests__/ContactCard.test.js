import { shallowMount } from '@vue/test-utils';
import ContactCard from '../ContactCard';

describe('ContactCard', () => {
  let stubs;

  beforeEach(() => {
    stubs = ['md-card', 'md-card-media', 'md-card-content'];
  });

  test('is a Vue instance', () => {
    const testState = {
      currentlySelectedContact: {}
    };
    const wrapper = shallowMount(ContactCard, {
      mocks: { $store: { getters: testState } },
      stubs
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('should display the name correctly', () => {
    const testState = {
      currentlySelectedContact: {
        name: 'Joe Test'
      }
    };
    const wrapper = shallowMount(ContactCard, {
      mocks: { $store: { getters: testState } },
      stubs
    });
    const compEl = wrapper.find('.md-title');

    expect(compEl.text()).toContain(testState.currentlySelectedContact.name);
  });

  test('should display the email correctly', () => {
    const testState = {
      currentlySelectedContact: {
        email: 'test@example.com'
      }
    };
    const wrapper = shallowMount(ContactCard, {
      mocks: { $store: { getters: testState } },
      stubs
    });

    const compEl = wrapper.find('.md-subhead');

    expect(compEl.text()).toContain(testState.currentlySelectedContact.email);
    expect(compEl.html()).toContain(
      `mailto:${testState.currentlySelectedContact.email}`
    );
  });

  test('should display the bio correctly', () => {
    const testState = {
      currentlySelectedContact: {
        bio: 'This is a test'
      }
    };
    const wrapper = shallowMount(ContactCard, {
      mocks: { $store: { getters: testState } },
      stubs
    });

    const compEl = wrapper.find('p.md-body-1');

    expect(compEl.text()).toContain(testState.currentlySelectedContact.bio);
  });

  test('should display the avatar correctly', () => {
    const testState = {
      currentlySelectedContact: {
        name: 'Joe Test',
        avatarUrl: 'http://mydomain.com/myavatar.png'
      }
    };
    const wrapper = shallowMount(ContactCard, {
      mocks: { $store: { getters: testState } },
      stubs
    });

    const compEl = wrapper.find('.contact-card img');

    expect(compEl.html()).toContain(
      testState.currentlySelectedContact.avatarUrl
    );
  });

  test('should show correct alt text for the image', () => {
    const testState = {
      currentlySelectedContact: {
        name: 'Joe Test',
        avatarUrl: 'http://mydomain.com/myavatar.png'
      }
    };
    const wrapper = shallowMount(ContactCard, {
      mocks: { $store: { getters: testState } },
      stubs
    });

    const compEl = wrapper.find('.contact-card img');

    const sut = compEl.attributes('alt');
    expect(sut).toContain(
      `The profile picture of ${testState.currentlySelectedContact.name}`
    );
  });
});
