import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import ContactList from '../ContactList';

describe('ContactList', () => {
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
      mocks: { $store: {state: testState} },
      stubs: {
        RouterLink: RouterLinkStub
      }
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
      mocks: { $store: {state: testState} },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.contains('ul')).toBeTruthy();
    expect(wrapper.findAll('li').length).toEqual(testState.contactList.length);
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
      mocks: { $store: {state: testState} },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.contains('ul')).toBeTruthy();
    expect(
      wrapper
        .findAll('li')
        .at(0)
        .text()
    ).toEqual(testState.contactList[0].name);
    expect(
      wrapper
        .findAll('li')
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
      mocks: { $store: {state: testState} },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(
      wrapper
        .findAll('li')
        .at(1)
        .classes()
    ).toContain('active');
  });

  test('should point to the correct route', () => {
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
      mocks: { $store: {state: testState} },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    let elems = wrapper.findAll(RouterLinkStub);

    expect(elems.at(0).props().to.name).toEqual('details');
    expect(elems.at(0).props().to.params.selectedId).toEqual(
      testState.contactList[0].id
    );

    expect(elems.at(1).props().to.name).toEqual('details');
    expect(elems.at(1).props().to.params.selectedId).toEqual(
      testState.contactList[1].id
    );
  });
});
