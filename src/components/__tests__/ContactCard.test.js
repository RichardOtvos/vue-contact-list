import { mount } from "@vue/test-utils";
import ContactCard from "../ContactCard";

describe("ContactCard", () => {
  test("is a Vue instance", () => {
    // expect(true).toBeTruthy();
    const wrapper = mount(ContactCard);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
