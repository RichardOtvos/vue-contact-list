import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import ContactList from '../ContactList';

describe('ContactList', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ContactList);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('should create a link for all contact object', () => {
    const testProps = {
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
      propsData: testProps,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.contains('ul')).toBeTruthy();
    expect(wrapper.findAll('li').length).toEqual(testProps.contactList.length);
  });

  test('should render a list of contact names', () => {
    const testProps = {
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
      propsData: testProps,
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
    ).toEqual(testProps.contactList[0].name);
    expect(
      wrapper
        .findAll('li')
        .at(1)
        .text()
    ).toEqual(testProps.contactList[1].name);
  });

  test('should set the active class, to the currently selected contact', () => {
    const testProps = {
      selectedId: 't2',
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
      propsData: testProps,
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
    const testProps = {
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
      propsData: testProps,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    let elems = wrapper.findAll(RouterLinkStub);

    expect(elems.at(0).props().to.name).toEqual('details');
    expect(elems.at(0).props().to.params.selectedId).toEqual(
      testProps.contactList[0].id
    );

    expect(elems.at(1).props().to.name).toEqual('details');
    expect(elems.at(1).props().to.params.selectedId).toEqual(
      testProps.contactList[1].id
    );
  });
});
