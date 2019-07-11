import { createLocalVue, shallowMount, RouterLinkStub } from '@vue/test-utils';
import ContactList from '../ContactList';

describe('ContactList', () => {
  let stubs;

  beforeEach(() => {
    stubs = [
      'md-toolbar',
      'md-list',
      'md-list-item',
      'md-divider',
      'md-button'
    ];
  });

  test('is a Vue instance', () => {
    const testState = {
      contactList: [
        {
          id: 't1',
          name: 'Test 1'
        },
        {
          id: 't2',
          name: 'Test 2'
        }
      ]
    };

    const wrapper = shallowMount(ContactList, {
      mocks: { $store: { state: testState } },
      stubs
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('should create a link for all contact object', () => {
    const testState = {
      contactList: [
        {
          id: 't1',
          name: 'Test 1'
        },
        {
          id: 't2',
          name: 'Test 2'
        }
      ]
    };

    const wrapper = shallowMount(ContactList, {
      mocks: { $store: { state: testState } },
      stubs
    });

    expect(wrapper.contains('md-list-stub')).toBeTruthy();
    expect(wrapper.findAll('md-list-item-stub').length).toEqual(
      testState.contactList.length
    );
  });

  test('should render a list of contact names', () => {
    const testState = {
      contactList: [
        {
          id: 't1',
          name: 'Test 1'
        },
        {
          id: 't2',
          name: 'Test 2'
        }
      ]
    };

    const wrapper = shallowMount(ContactList, {
      mocks: { $store: { state: testState } },
      stubs
    });

    expect(wrapper.contains('md-list-stub')).toBeTruthy();
    expect(
      wrapper
        .findAll('md-list-item-stub')
        .at(0)
        .text()
    ).toEqual(testState.contactList[0].name);
    expect(
      wrapper
        .findAll('md-list-item-stub')
        .at(1)
        .text()
    ).toEqual(testState.contactList[1].name);
  });

  test('should set the active class, to the currently selected contact', () => {
    const testState = {
      selectedContactId: 't2',
      contactList: [
        {
          id: 't1',
          name: 'Test 1'
        },
        {
          id: 't2',
          name: 'Test 2'
        }
      ]
    };

    const wrapper = shallowMount(ContactList, {
      mocks: { $store: { state: testState } },
      stubs
    });

    expect(
      wrapper
        .findAll('md-list-item-stub')
        .at(1)
        .classes()
    ).toContain('active');
  });

  test('should have and add contact button', () => {
    const testState = {
      contactList: [
        {
          id: 't1',
          name: 'Test 1'
        },
        {
          id: 't2',
          name: 'Test 2'
        }
      ]
    };

    const wrapper = shallowMount(ContactList, {
      mocks: { $store: { state: testState } },
      stubs
    });

    let elems = wrapper.findAll('md-button-stub');
    expect(elems.length).toEqual(1);
    expect(elems.at(0).html()).toContain('Add new');
  });
});
